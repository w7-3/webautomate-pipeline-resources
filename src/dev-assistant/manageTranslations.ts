import * as fs from 'fs';
import * as path from 'path';
import rPath from 'ramda/src/path';
import rDissocPath from 'ramda/src/dissocPath';
import rAssocPath from 'ramda/src/assocPath';

const rootFolder = '/Users/francis/work/webeagle-resources/src/i18n/locales/';
const actions = {
    CREATE: 'CREATE',
    DELETE: 'DELETE',
    UPDATE: 'UPDATE',
};

(async (configs) => {
    await Promise.all(configs.map(async (i18n: any) => {
        const languages = i18n.action === actions.DELETE ?
            ['de', 'en', 'fr'] :
            Object.keys(i18n.value);
        await Promise.all(languages.map(async (lang) => {
            if ([
                actions.CREATE,
                actions.UPDATE,
            ].includes(i18n.action) && !i18n.value[lang]) {
                throw new Error(`Value must be specified for language: ${lang}`);
            }
        }));
        const propPath = i18n.path.split('.');
        await Promise.all(languages.map(async (lang) => {
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
        }));
    }));
    // sendProjectBuildSkippedDueToOverageEmail.ts
})([
    {
        path: 'events.AI_SERVICE_FAILED',
        value: {
            en: 'AI service is not available',
            de: 'Der AI-Dienst ist nicht verfügbar',
            fr: 'Le service d\'IA a échoué',
        },
        action: actions.CREATE,
    }
]);
