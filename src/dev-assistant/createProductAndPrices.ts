import Stripe from 'stripe';
import * as starterPackage from '@w7-3/webeagle-resources/dist/config/catalog/subscriptions/starterPackage';
import * as advancedPackage from '@w7-3/webeagle-resources/dist/config/catalog/subscriptions/advancedPackage';
import * as premiumPackage from '@w7-3/webeagle-resources/dist/config/catalog/subscriptions/premiumPackage';
import collaborators from '@w7-3/webeagle-resources/dist/config/catalog/collaborators';
import credits from '@w7-3/webeagle-resources/dist/config/catalog/credits';

const stripe = new Stripe(process.env.WEBAUTOMATE_STRIPE_KEY, {
    apiVersion: '2023-10-16',
});

// throw new Error('This script is not ready for production use.');

const mapPlanToInterval = (planKey: string): {
    interval: 'month' | 'year';
    interval_count: number;
} => {
    if (planKey === 'monthlyX1') {
        return { interval: 'month', interval_count: 1 };
    }

    if (planKey === 'monthlyX3') {
        return { interval: 'month', interval_count: 3 };
    }

    if (planKey === 'monthlyX6') {
        return { interval: 'month', interval_count: 6 };
    }

    if (planKey === 'monthlyX12') {
        return { interval: 'year', interval_count: 1 };
    }

    throw new Error(`Invalid plan key: ${planKey}`);
};

// Helper function to create a product
const createProduct = async (name: string) => {
    const product = await stripe.products.create({
        name,
        description: `Subscription for ${name}`,
    });
    console.log(`Created product: ${name}, ID: ${product.id}`);
    return product.id;
};

// Helper function to create prices
const createPrices = async (plans: any, productId: string) => {
    for (const planKey in plans) {
        if (plans.hasOwnProperty(planKey)) {
            const plan = plans[planKey];
            const { interval, interval_count } = mapPlanToInterval(planKey); // Map the plan key to the correct interval and interval_count
            const price = await stripe.prices.create({
                unit_amount: plan.price, // price in cents
                currency: 'chf',
                recurring: { interval, interval_count }, // Use the mapped interval and interval_count
                product: productId,
            });
            console.log(`Created price for ${planKey} (${interval}, ${interval_count}): ${price.id}`);
            // Update the priceId in the original structure
            plans[planKey].priceId = price.id;
        }
    }
};

// Main function to create products and prices based on license packages
async function createSubscriptionProductsAndPrices(licensePackages: {
    name: string;
    linkMode: {
        name: string;
        plans: Record<string, any>;
    };
    pageMode: {
        name: string;
        plans: Record<string, any>;
    };
}[]) {
    // Iterate over each package in the licenses
    for (const license of licensePackages) {
        // Create linkMode and pageMode products
        const linkModeProductId = await createProduct(`${license.name} - ${license.linkMode.name}`);
        const pageModeProductId = await createProduct(`${license.name} - ${license.pageMode.name}`);

        // Create prices for linkMode
        await createPrices(license.linkMode.plans, linkModeProductId);

        // Create prices for pageMode
        await createPrices(license.pageMode.plans, pageModeProductId);

        console.log(JSON.stringify(license, null, 2));
    }
}

async function createRetailPricingProductsAndPrices(catalogs: {
    [item: string]: {
        name: string;
        pricing: {
            billing_scheme: Stripe.Price.BillingScheme;
            tiers_mode: Stripe.Price.TiersMode;
            tiers: Stripe.Price.Tier[];
        },
    },
}) {
    for (const item of Object.values(catalogs)) {
        if (typeof item !== 'object') {
            return;
        }

        try {
            const {
                name,
                pricing,
            } = item;

            // Produkt erstellen
            const product = await stripe.products.create({
                name,
            });

            // Preis mit Staffelung erstellen
            const price = await stripe.prices.create({
                ...pricing,
                currency: 'chf',
                product: product.id,
            });

            console.log(JSON.stringify({
                ...item,
                productId: product.id,
                priceId: price.id,
            }, null, 2));

            console.log(`Preis mit gestaffelten Preisen erstellt: ${price.id}`);
        } catch (error) {
            console.error('Fehler beim Erstellen von Produkt oder Preis:', error);
        }
    }
}

const createStandardProductsAndPrices = async (data: {
    name: string;
    items: {
        [key: string]: {
            packagePrice: number;
            appName: string;
            productNameSuffix: string;
        };
    };
}) => {
    const items = {};
    for (const [appName, item] of Object.entries(data.items)) {
        const product = await stripe.products.create({
            name: `${data.name} ${item.productNameSuffix}`,
        });
        const price = await stripe.prices.create({
            unit_amount: item.packagePrice,
            currency: 'chf',
            product: product.id,
        });

        console.log(`Created price for ${data.name}: ${price.id}`);
        items[appName] = {
            ...item,
            productId: product.id,
            priceId: price.id,
        };
    }

    return JSON.stringify({items}, null, 2);
};

const createStandardUnitProductsAndPrices = async (items: {
    name: string;
    unit_amount_decimal: string;
}[]) => {
    for (const {name, unit_amount_decimal} of items) {
        const product = await stripe.products.create({
            name,
        });
        const price = await stripe.prices.create({
            unit_amount_decimal,
            currency: 'chf',
            product: product.id,
        });

        console.log(`Created price for ${name}: ${price.id}`);
    }
};

// Check for an argument to trigger the function
if (process.argv.includes('createSubscriptionProductsAndPrices')) {
    createSubscriptionProductsAndPrices([
        {
            name: starterPackage.name,
            linkMode: starterPackage.buildModeLicenses.linkMode,
            pageMode: starterPackage.buildModeLicenses.pageMode,
        },
        {
            name: advancedPackage.name,
            linkMode: advancedPackage.buildModeLicenses.linkMode,
            pageMode: advancedPackage.buildModeLicenses.pageMode,
        },
        {
            name: premiumPackage.name,
            linkMode: premiumPackage.buildModeLicenses.linkMode,
            pageMode: premiumPackage.buildModeLicenses.pageMode,
        },
    ])
        .then((updatedLicenses) => {
            console.log('Updated licenses with new price IDs:', updatedLicenses);
        })
        .catch((error) => {
            console.error('Error creating products or prices:', error);
        });
} else {
    console.log('createSubscriptionProductsAndPrices function not triggered.');
}

if (process.argv.includes('createCollaboratorProductsAndPrices')) {
    createStandardProductsAndPrices(collaborators)
        .then((updatedLicenses) => {
            console.log('Updated licenses with new price IDs:', updatedLicenses);
        })
        .catch((error) => {
            console.error('Error creating products or prices:', error);
        });
} else {
    console.log('createCollaboratorProductsAndPrices function not triggered.');
}

if (process.argv.includes('createAutomationCreditsProductsAndPrices')) {
    createStandardProductsAndPrices(credits)
        .then((updatedLicenses) => {
            console.log('Updated licenses with new price IDs:', updatedLicenses);
        })
        .catch((error) => {
            console.error('Error creating products or prices:', error);
        });
} else {
    console.log('createAutomationCreditsProductsAndPrices function not triggered.');
}
