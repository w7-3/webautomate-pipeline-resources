import * as fs from 'fs';
import * as path from 'path';
import rPath from 'ramda/src/path';
import rDissocPath from 'ramda/src/dissocPath';
import rAssocPath from 'ramda/src/assocPath';

const rootFolder = '/Users/francis/work/webeagle-resources/src/i18n/locales/';
const actions = {
    INSERT: 'INSERT',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
};
const i18n: any = {
    path: 'hero.title',
    value: {
        de: ' - Ihr Partner für mühelose Automatisierung von Prozessen auf Websites mit KI-Unterstützung.',
        en: ' - Your partner for effortless automation of processes on websites with AI support.',
        fr: ' - Votre partenaire pour l\'automatisation sans effort des processus sur les sites Web avec le support de l\'IA.',
    },
    action: actions.UPDATE,
};


(async () => {
    await Promise.all(Object.keys(i18n.value).map(async (lang) => {
        if ([
            actions.INSERT,
            actions.UPDATE,
        ].includes(i18n.action) && !i18n.value[lang]) {
            throw new Error(`Value for locale ${lang} not found.`);
        }
    }));
    await Promise.all(Object.keys(i18n.value).map(async (lang) => {
        if ([
            actions.INSERT,
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

        if (i18n.action === actions.UPDATE && typeof value !== typeof i18n.value[lang]) {
            throw new Error(`Value type of "${i18n.path}" for locale ${lang} do not match`);
        }

        if (i18n.action === actions.INSERT && Boolean(value)) {
            throw new Error(`Value already exists in "${i18n.path}", use update.`);
        }

        if (i18n.action === actions.DELETE && !value) {
            throw new Error(`Key in path "${i18n.path}" for locale ${lang} does not exist`);
            return;
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
            }
        )};`;

        fs.writeFileSync(`${modulePath}.ts`, updatedContent, 'utf-8');
    }));
})();
