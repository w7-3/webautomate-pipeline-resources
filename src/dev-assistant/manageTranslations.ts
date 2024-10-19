import * as fs from 'fs';
import * as path from 'path';
import rPath from 'ramda/src/path';
import rDissocPath from 'ramda/src/dissocPath';
import rAssocPath from 'ramda/src/assocPath';

const rootFolder = '/Users/francis/work/webeagle-resources/src/i18n/locales/';
const actions = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
};

(async (configs) => {
    await Promise.all(configs.map(async (i18n) => {
        await Promise.all(Object.keys(i18n.value).map(async (lang) => {
            if ([
                actions.CREATE,
                actions.UPDATE,
            ].includes(i18n.action) && !i18n.value[lang]) {
                throw new Error(`Value for locale ${lang} not found.`);
            }
        }));
        const propPath = i18n.path.split('.');
        await Promise.all(Object.keys(i18n.value).map(async (lang) => {
            const modulePath = path.resolve(__dirname, `${rootFolder}${lang}/index`);
            const module = await import(modulePath);
            const value = rPath(propPath, module.default);

            if (i18n.action === actions.UPDATE && typeof value === 'undefined') {
                throw new Error(`Key in path "${i18n.path}" for locale ${lang} does not exist, use ${actions.CREATE} instead.`);
            }

            if (i18n.action === actions.UPDATE && typeof value !== typeof i18n.value[lang]) {
                throw new Error(`Value type of "${i18n.path}" for locale ${lang} do not match`);
            }

            if (i18n.action === actions.CREATE && Boolean(value)) {
                throw new Error(`Value already exists in "${i18n.path}", use ${actions.UPDATE} instead.`);
            }

            if (i18n.action === actions.DELETE && !value) {
                throw new Error(`Key in path "${i18n.path}" for locale ${lang} does not exist`);
            }

            module.default = i18n.action === actions.DELETE
                ? rDissocPath(propPath, module.default)
                : rAssocPath(propPath, i18n.value[lang], module.default);
            const updatedContent = `export default ${JSON.stringify(module.default, null, 4).replace(
                /"([^"]+)":/g,
                (_: unknown, key: string) => {
                    // Keep the quotes if the key contains non-alphanumeric characters or starts with a digit
                    if (!/^[a-zA-Z_]\w*$/.test(key)) {
                        return `"${key}":`;
                    }
                    // Unwrap keys that are valid JS identifiers
                    return `${key}:`;
                },
            )};`;

            fs.writeFileSync(`${modulePath}.ts`, updatedContent, 'utf-8');
            // fs.writeFileSync(`${modulePath}.json`, JSON.stringify(module.default, null, 4), 'utf-8');
        }));
    }));
})([{
    path: 'project.build.states',
    value: {
        de: {
            none: {
                label: 'Ausstehend',
                description: 'Der Projekt-Lauf steht aus',
            },
            timeout: {
                label: 'Zeitüberschreitung',
                description: 'Der Projekt-Lauf hat eine Zeitüberschreitung',
            },
            running: {
                label: 'Läuft',
                description: 'Der Projekt-Lauf läuft',
            },
            queue: {
                label: 'In Warteschlange',
                description: 'Der Projekt-Lauf steht in der Warteschlange',
            },
            cancel: {
                label: 'Abgebrochen',
                description: 'Der Projekt-Lauf wurde abgebrochen',
            },
            success: {
                label: 'Erfolgreich',
                description: 'Der Projekt-Lauf war erfolgreich',
            },
            failure: {
                label: 'Fehlgeschlagen',
                description: 'Der Projekt-Lauf ist fehlgeschlagen',
            },
            mixed: {
                label: 'Gemischt',
                description: 'Der Projekt-Lauf hat gemischte Ergebnisse',
            },
            undefined: {
                label: 'Unbekannt',
                description: 'Der Projekt-Lauf hat einen unbekannten Status',
            },
        },
        en: {
            none: {
                label: 'Pending',
                description: 'The Project-Run is pending',
            },
            timeout: {
                label: 'Timed out',
                description: 'The Project-Run timed out',
            },
            running: {
                label: 'Running',
                description: 'The Project-Run is running',
            },
            queue: {
                label: 'Queued',
                description: 'The Project-Run is queued',
            },
            cancel: {
                label: 'Cancelled',
                description: 'The Project-Run was cancelled',
            },
            success: {
                label: 'Successful',
                description: 'The Project-Run was successful',
            },
            failure: {
                label: 'Failed',
                description: 'The Project-Run failed',
            },
            mixed: {
                label: 'Mixed',
                description: 'The Project-Run has mixed results',
            },
            undefined: {
                label: 'Unknown',
                description: 'The Project-Run has an unknown state',
            },
        },
        fr: {
            none: {
                label: 'En attente',
                description: 'Le projet est en attente',
            },
            timeout: {
                label: 'Temps écoulé',
                description: 'Le projet a dépassé le temps imparti',
            },
            running: {
                label: 'En cours',
                description: 'Le projet est en cours',
            },
            queue: {
                label: 'En file d\'attente',
                description: 'Le projet est en file d\'attente',
            },
            cancel: {
                label: 'Annulé',
                description: 'Le projet a été annulé',
            },
            success: {
                label: 'Réussi',
                description: 'Le projet a réussi',
            },
            failure: {
                label: 'Échec',
                description: 'Le projet a échoué',
            },
            mixed: {
                label: 'Mixte',
                description: 'Le projet a des résultats mixtes',
            },
            undefined: {
                label: 'Inconnu',
                description: 'Le projet a un état inconnu',
            }
        },
    },
    action: actions.CREATE,
}]);