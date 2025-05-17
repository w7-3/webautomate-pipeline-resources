```
export default {
    linkChecker: {
        key: 'linkChecker',
        appName: 'linkChecker',
        configurable: false,
        position: -1,
        availableRunModes: [
            RUN_MODES.link,
            RUN_MODES.page,
        ],
    },
    urlChallenge: {
        key: 'urlChallenge',
        appName: 'urlChallenge',
        configurable: true,
        position: 1,
        availableRunModes: [
            RUN_MODES.link,
            RUN_MODES.page,
        ],
    },
    dataExtractions: {
        key: 'dataExtractions',
        appName: 'dataExtractions',
        configurable: true,
        position: 2,
        availableRunModes: [
            RUN_MODES.link,
            RUN_MODES.page,
        ],
    },
    screenshots: {
        key: 'screenshots',
        appName: 'screenshots',
        configurable: true,
        position: 3,
        availableRunModes: [
            RUN_MODES.link,
            RUN_MODES.page,
        ],
    },
    screenVideos: {
        key: 'screenVideos',
        appName: 'screenVideos',
        configurable: true,
        position: 4,
        availableRunModes: [
            RUN_MODES.link,
        ],
    },
    e2eVisualTests: {
        key: 'e2eVisualTests',
        appName: 'e2eVisualTests',
        configurable: true,
        position: 5,
        availableRunModes: [
            RUN_MODES.link,
            RUN_MODES.page,
        ],
    },
    lighthouse: {
        key: 'lighthouse',
        appName: 'lighthouse',
        configurable: true,
        position: 6,
        availableRunModes: [
            RUN_MODES.link,
            RUN_MODES.page,
        ],
    },
};

"stepList": [
  {
    "id": "PU7KGmRj",
    "type": "js",
    "categoryId": "custom",
    "stepType": "solution",
    "label": "JavaScript-Ausdruck - 2025-05-17_11-50-40",
    "fallbackLabel": "JavaScript-Ausdruck - 2025-05-17_11-50-40",
    "labelScript": {
        "value": "return Date.now();",
        "isValid": true,
        "isValidated": true
    },
    "labelStrategy": "JS",
    "selector": "",
    "abortOnError": false,
    "ignoreOnError": false,
    "originalStepIndex": 43,
    "solution": "dataExtractions",
    "value": {
        "jsCode": {
            "value": "return 42;",
            "isValid": true,
            "isValidated": true
        }
    }
},
                {
                    "id": "0ZuIkdcy",
                    "type": "ai",
                    "categoryId": "automated",
                    "stepType": "solution",
                    "label": "With AI Assistance - 2025-03-15_15-01-31",
                    "fallbackLabel": "With AI Assistance - 2025-03-15_15-01-31",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 0,
                    "solution": "dataExtractions",
                    "value": {
                        "code": {
                            "value": "Identify interesting technical facts about this page.",
                            "isValid": true,
                            "isValidated": true
                        }
                    },
                    "isInactive": true
                },
                {
                    "id": "rHVgOMZl",
                    "type": "ai",
                    "categoryId": "automated",
                    "stepType": "solution",
                    "label": "With AI Assistance - 2025-03-15_15-05-28",
                    "fallbackLabel": "With AI Assistance - 2025-03-15_15-05-28",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 1,
                    "solution": "dataExtractions",
                    "value": {
                        "code": {
                            "value": "WHich frontend tech was deployed here?",
                            "isValid": true,
                            "isValidated": true
                        }
                    },
                    "isInactive": false
                },
                {
                    "id": "zs2WWWiD",
                    "type": "js",
                    "categoryId": "advancedBrowserApiOperations",
                    "stepType": "action",
                    "label": "JavaScript ausführen - 2025-05-04_17-03-52",
                    "fallbackLabel": "JavaScript ausführen - 2025-05-04_17-03-52",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 8,
                    "value": {
                        "jsCode": {
                            "value": "fetch(window.location.href, {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    x: 42,\n    y: {\n      z: [1, 2, \"tester\"]\n    }\n  })\n})\n.then(response => response.json())\n.then(data => console.log(data))\n.catch(error => console.error('Error:', error));",
                            "isValid": true,
                            "isValidated": true
                        }
                    }
                },
                {
                    "id": "ld2V0H36",
                    "type": "ai",
                    "categoryId": "automated",
                    "stepType": "solution",
                    "label": "With AI Assistance - 2025-03-22_14-05-02",
                    "fallbackLabel": "With AI Assistance - 2025-03-22_14-05-02",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 2,
                    "solution": "dataExtractions",
                    "value": {
                        "code": {
                            "value": "Check if the page load time is less than 2 seconds and return the result.",
                            "isValid": true,
                            "isValidated": true
                        }
                    },
                    "isInactive": false
                },
                {
                    "id": "BO2wrtyM",
                    "type": "ai",
                    "categoryId": "automated",
                    "stepType": "solution",
                    "label": "With AI Assistance - 2025-03-26_18-07-02",
                    "fallbackLabel": "With AI Assistance - 2025-03-26_18-07-02",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 3,
                    "solution": "dataExtractions",
                    "value": {
                        "code": {
                            "value": "Extract the HTML selector for all job containers on the page.",
                            "isValid": true,
                            "isValidated": true
                        }
                    },
                    "isInactive": false
                },
                {
                    "id": "TKcfphGR",
                    "type": "ai",
                    "categoryId": "automated",
                    "stepType": "solution",
                    "label": "AI Data-Extraction - 2025-04-30_01-05-34",
                    "fallbackLabel": "AI Data-Extraction - 2025-04-30_01-05-34",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 4,
                    "solution": "dataExtractions",
                    "value": {
                        "code": {
                            "value": "Get the loading time of the asset: icon-sprite.svg",
                            "isValid": true,
                            "isValidated": true
                        }
                    },
                    "isInactive": true
                },
                {
                    "id": "WGYoE7ZI",
                    "type": "goTo",
                    "categoryId": "navigationAndBrowsing",
                    "stepType": "action",
                    "label": "Auf URL navigieren - 2025-05-03_19-21-21",
                    "fallbackLabel": "Auf URL navigieren - 2025-05-03_19-21-21",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 5,
                    "value": {
                        "url": "https://brackalltron.ch/test-1"
                    },
                    "isInactive": true
                },
                {
                    "id": "vtewI8Km",
                    "type": "goTo",
                    "categoryId": "navigationAndBrowsing",
                    "stepType": "action",
                    "label": "Auf URL navigieren - 2025-05-03_19-21-38",
                    "fallbackLabel": "Auf URL navigieren - 2025-05-03_19-21-38",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 6,
                    "value": {
                        "url": "https://brackalltron.ch/test-2"
                    },
                    "isInactive": true
                },
                {
                    "id": "gHtjv6eT",
                    "type": "ai",
                    "categoryId": "automated",
                    "stepType": "solution",
                    "label": "AI-Datenerfassung - 2025-05-03_19-21-51",
                    "fallbackLabel": "AI-Datenerfassung - 2025-05-03_19-21-51",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 7,
                    "solution": "dataExtractions",
                    "value": {
                        "code": {
                            "value": "Extrahiere alle URLs aus den Netzwerkprotokollen.",
                            "isValid": true,
                            "isValidated": true
                        }
                    },
                    "isInactive": true
                },
                {
                    "id": "vNh65POn",
                    "type": "mouseInteraction",
                    "categoryId": "userInteractionEvents",
                    "stepType": "action",
                    "label": "Mouse Gesten - 2025-05-07_18-13-42",
                    "fallbackLabel": "Mouse Gesten - 2025-05-07_18-13-42",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 9,
                    "value": {
                        "target": "button",
                        "buttonType": "left",
                        "buttonAction": "click",
                        "x": 0,
                        "dx": 0,
                        "y": 0,
                        "dy": 0,
                        "clickCount": 1,
                        "delay": 0
                    }
                },
                {
                    "id": "p1UarAJc",
                    "type": "elementHover",
                    "categoryId": "userInteractionEvents",
                    "stepType": "action",
                    "label": "Mouse über Element bewegen - 2025-05-07_18-14-01",
                    "fallbackLabel": "Mouse über Element bewegen - 2025-05-07_18-14-01",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "target-element",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 10
                },
                {
                    "id": "bXIkFCvm",
                    "type": "elementClick",
                    "categoryId": "userInteractionEvents",
                    "stepType": "action",
                    "label": "Auf Element klicken - 2025-05-07_18-14-12",
                    "fallbackLabel": "Auf Element klicken - 2025-05-07_18-14-12",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "click-target",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 11,
                    "value": {
                        "buttonType": "left",
                        "clickCount": 1,
                        "delay": 0
                    }
                },
                {
                    "id": "PbidYFVh",
                    "type": "keyboardPress",
                    "categoryId": "userInteractionEvents",
                    "stepType": "action",
                    "label": "Tasten drucken - 2025-05-07_18-14-21",
                    "fallbackLabel": "Tasten drucken - 2025-05-07_18-14-21",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": true,
                    "ignoreOnError": false,
                    "originalStepIndex": 12,
                    "value": {
                        "keyConfigList": [
                            {
                                "key": "4",
                                "action": "press"
                            },
                            {
                                "key": "t",
                                "action": "press"
                            },
                            {
                                "key": "{capslock}",
                                "action": "press"
                            },
                            {
                                "key": "{shiftleft}",
                                "action": "down"
                            },
                            {
                                "key": "X",
                                "action": "press"
                            },
                            {
                                "key": "S",
                                "action": "press"
                            }
                        ]
                    }
                },
                {
                    "id": "d8ukmDnI",
                    "type": "elementFocus",
                    "categoryId": "userInteractionEvents",
                    "stepType": "action",
                    "label": "Auf Element fokussieren - 2025-05-07_18-14-50",
                    "fallbackLabel": "Auf Element fokussieren - 2025-05-07_18-14-50",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "focus-element",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 13
                },
                {
                    "id": "i8SSH61J",
                    "type": "elementDragAndDrop",
                    "categoryId": "formElementManipulation",
                    "stepType": "action",
                    "label": "Element Drag & Drop - 2025-05-07_18-14-58",
                    "fallbackLabel": "Element Drag & Drop - 2025-05-07_18-14-58",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 14,
                    "value": {
                        "sourceSelector": "source",
                        "targetSelector": "target"
                    }
                },
                {
                    "id": "D953v0Sv",
                    "type": "uploadFile",
                    "categoryId": "formElementManipulation",
                    "stepType": "action",
                    "label": "Datei hochladen - 2025-05-07_18-15-15",
                    "fallbackLabel": "Datei hochladen - 2025-05-07_18-15-15",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "target",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 15,
                    "value": {
                        "fileIdList": [
                            "l3hojrgh3spdt3igjl5og8q1f6vza4li"
                        ]
                    }
                },
                {
                    "id": "8hqoC71R",
                    "type": "waitForSelector",
                    "categoryId": "formElementManipulation",
                    "stepType": "action",
                    "label": "Auf Element warten. - 2025-05-07_18-15-34",
                    "fallbackLabel": "Auf Element warten. - 2025-05-07_18-15-34",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "waiting-for-u",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 16,
                    "value": {
                        "timeout": 1000
                    }
                },
                {
                    "id": "gCZ7OatF",
                    "type": "scrollIntoView",
                    "categoryId": "navigationAndBrowsing",
                    "stepType": "action",
                    "label": "Auf Element scrollen - 2025-05-07_18-15-43",
                    "fallbackLabel": "Auf Element scrollen - 2025-05-07_18-15-43",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "scroll-target",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 17
                },
                {
                    "id": "zXhGGDJo",
                    "type": "reloadPage",
                    "categoryId": "navigationAndBrowsing",
                    "stepType": "action",
                    "label": "Seite reloaden. - 2025-05-07_18-15-51",
                    "fallbackLabel": "Seite reloaden. - 2025-05-07_18-15-51",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 18
                },
                {
                    "id": "bqWWQsC3",
                    "type": "goBack",
                    "categoryId": "navigationAndBrowsing",
                    "stepType": "action",
                    "label": "Zurückgehen - 2025-05-07_18-15-54",
                    "fallbackLabel": "Zurückgehen - 2025-05-07_18-15-54",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 19
                },
                {
                    "id": "OAGOeYbt",
                    "type": "goForward",
                    "categoryId": "navigationAndBrowsing",
                    "stepType": "action",
                    "label": "Vorwärtsgehen - 2025-05-07_18-15-57",
                    "fallbackLabel": "Vorwärtsgehen - 2025-05-07_18-15-57",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 20
                },
                {
                    "id": "64fEqLi7",
                    "type": "goTo",
                    "categoryId": "navigationAndBrowsing",
                    "stepType": "action",
                    "label": "Auf URL navigieren - 2025-05-07_18-15-59",
                    "fallbackLabel": "Auf URL navigieren - 2025-05-07_18-15-59",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 21,
                    "value": {
                        "url": "/target-url"
                    }
                },
                {
                    "id": "jFBn7fA9",
                    "type": "scroll",
                    "categoryId": "navigationAndBrowsing",
                    "stepType": "action",
                    "label": "Scrollen - 2025-05-07_18-16-10",
                    "fallbackLabel": "Scrollen - 2025-05-07_18-16-10",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 22,
                    "value": {
                        "x": 42,
                        "y": 42
                    }
                },
                {
                    "id": "wUGuZUSW",
                    "type": "booleanFunction",
                    "categoryId": "dataProcessingAndRequests",
                    "stepType": "action",
                    "label": "Auf Bedingung warten. - 2025-05-07_18-16-24",
                    "fallbackLabel": "Auf Bedingung warten. - 2025-05-07_18-16-24",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 23,
                    "value": {
                        "timeout": 1000,
                        "jsCode": {
                            "value": "return myFunction();",
                            "isValid": true,
                            "isValidated": true
                        }
                    }
                },
                {
                    "id": "VjphGwN5",
                    "type": "request",
                    "categoryId": "dataProcessingAndRequests",
                    "stepType": "action",
                    "label": "Warten auf Netwerkanfrage. - 2025-05-07_18-16-51",
                    "fallbackLabel": "Warten auf Netwerkanfrage. - 2025-05-07_18-16-51",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 24,
                    "value": {
                        "timeout": 1000,
                        "method": "GET",
                        "urls": [
                            {
                                "matcher": "regex",
                                "value": "/api/test"
                            }
                        ]
                    }
                },
                {
                    "id": "B6ZNXphX",
                    "type": "response",
                    "categoryId": "dataProcessingAndRequests",
                    "stepType": "action",
                    "label": "Warten auf Netwerkantwort. - 2025-05-07_18-17-02",
                    "fallbackLabel": "Warten auf Netwerkantwort. - 2025-05-07_18-17-02",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 25,
                    "value": {
                        "timeout": 1000,
                        "method": "GET",
                        "urls": [
                            {
                                "matcher": "regex",
                                "value": "/api/test"
                            }
                        ]
                    }
                },
                {
                    "id": "HEZsYweH",
                    "type": "timeout",
                    "categoryId": "dataProcessingAndRequests",
                    "stepType": "action",
                    "label": "Ruhezeit. - 2025-05-07_18-17-08",
                    "fallbackLabel": "Ruhezeit. - 2025-05-07_18-17-08",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 26,
                    "value": {
                        "timeout": 2000
                    }
                },
                {
                    "id": "VYmwEwyR",
                    "type": "js",
                    "categoryId": "advancedBrowserApiOperations",
                    "stepType": "action",
                    "label": "JavaScript ausführen - 2025-05-07_18-17-14",
                    "fallbackLabel": "JavaScript ausführen - 2025-05-07_18-17-14",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 27,
                    "value": {
                        "jsCode": {
                            "value": "executeMyFunction();",
                            "isValid": true,
                            "isValidated": true
                        }
                    }
                },
                {
                    "id": "WHtQaRqP",
                    "type": "clearAllCookies",
                    "categoryId": "advancedBrowserApiOperations",
                    "stepType": "action",
                    "label": "Alle Cookies löschen - 2025-05-07_18-17-37",
                    "fallbackLabel": "Alle Cookies löschen - 2025-05-07_18-17-37",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 28
                },
                {
                    "id": "7BV9tlvZ",
                    "type": "clearSessionStorage",
                    "categoryId": "advancedBrowserApiOperations",
                    "stepType": "action",
                    "label": "SessionStorage leeren - 2025-05-07_18-17-42",
                    "fallbackLabel": "SessionStorage leeren - 2025-05-07_18-17-42",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 29
                },
                {
                    "id": "GhTrFZKq",
                    "type": "clearLocalStorage",
                    "categoryId": "advancedBrowserApiOperations",
                    "stepType": "action",
                    "label": "LocalStorage leeren - 2025-05-07_18-17-44",
                    "fallbackLabel": "LocalStorage leeren - 2025-05-07_18-17-44",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 30
                },
                {
                    "id": "9UNpbLLj",
                    "type": "dialogHandling",
                    "categoryId": "settings",
                    "stepType": "action",
                    "label": "Dialog Entscheidung - 2025-05-07_18-17-47",
                    "fallbackLabel": "Dialog Entscheidung - 2025-05-07_18-17-47",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 31,
                    "value": {
                        "decision": "accept",
                        "promptText": "Tada"
                    }
                },
                {
                    "id": "ZwyYuyLS",
                    "type": "ai",
                    "stepType": "condition",
                    "label": "AI-gestützte Bedingung - 2025-05-07_22-01-19",
                    "fallbackLabel": "AI-gestützte Bedingung - 2025-05-07_22-01-19",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": true,
                    "ignoreOnError": false,
                    "originalStepIndex": 32,
                    "stepList": [
                        {
                            "id": "VVFwLWjq",
                            "type": "reloadPage",
                            "categoryId": "navigationAndBrowsing",
                            "stepType": "action",
                            "label": "Seite reloaden. - 2025-05-07_22-02-39",
                            "fallbackLabel": "Seite reloaden. - 2025-05-07_22-02-39",
                            "labelScript": {
                                "value": ""
                            },
                            "labelStrategy": "LABEL",
                            "selector": "",
                            "abortOnError": false,
                            "ignoreOnError": false,
                            "originalStepIndex": 0
                        },
                        {
                            "id": "98lwPxeC",
                            "type": "goBack",
                            "categoryId": "navigationAndBrowsing",
                            "stepType": "action",
                            "label": "Zurückgehen - 2025-05-07_22-02-48",
                            "fallbackLabel": "Zurückgehen - 2025-05-07_22-02-48",
                            "labelScript": {
                                "value": ""
                            },
                            "labelStrategy": "LABEL",
                            "selector": "",
                            "abortOnError": false,
                            "ignoreOnError": false,
                            "originalStepIndex": 1
                        },
                        {
                            "id": "tDXouuWQ",
                            "type": "dialogHandling",
                            "categoryId": "settings",
                            "stepType": "action",
                            "label": "Dialog Entscheidung - 2025-05-07_22-02-52",
                            "fallbackLabel": "Dialog Entscheidung - 2025-05-07_22-02-52",
                            "labelScript": {
                                "value": ""
                            },
                            "labelStrategy": "LABEL",
                            "selector": "",
                            "abortOnError": false,
                            "ignoreOnError": false,
                            "originalStepIndex": 2,
                            "value": {
                                "decision": "dismiss",
                                "promptText": "dfgdfg"
                            }
                        }
                    ],
                    "value": {
                        "code": {
                            "value": "Check if the page loaded in less than 3 seconds.",
                            "isValid": true,
                            "isValidated": true
                        },
                        "confidenceLevel": 70
                    }
                },
                {
                    "id": "ge2DWefW",
                    "type": "cookie",
                    "stepType": "condition",
                    "label": "Cookie - 2025-05-07_22-03-05",
                    "fallbackLabel": "Cookie - 2025-05-07_22-03-05",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 33,
                    "stepList": [
                        {
                            "id": "q0MUs3e6",
                            "type": "js",
                            "categoryId": "custom",
                            "stepType": "solution",
                            "label": "JavaScript-Ausdruck - 2025-05-07_22-03-36",
                            "fallbackLabel": "JavaScript-Ausdruck - 2025-05-07_22-03-36",
                            "labelScript": {
                                "value": ""
                            },
                            "labelStrategy": "LABEL",
                            "selector": "",
                            "abortOnError": false,
                            "ignoreOnError": false,
                            "originalStepIndex": 0,
                            "solution": "dataExtractions",
                            "value": {
                                "jsCode": {
                                    "value": "return true;",
                                    "isValid": true,
                                    "isValidated": true
                                }
                            }
                        }
                    ],
                    "value": {
                        "maxAgeType": ">",
                        "code": "",
                        "confidenceLevel": 70,
                        "data": {
                            "name": "cookie-name",
                            "value": "cookie-value",
                            "domain": "",
                            "path": "/",
                            "maxAge": 300,
                            "httpOnly": false,
                            "secure": true,
                            "sameSite": "Lax"
                        }
                    }
                },
                {
                    "id": "RMiGyk1w",
                    "type": "elementPresent",
                    "stepType": "condition",
                    "label": "HTML Element - 2025-05-07_22-03-55",
                    "fallbackLabel": "HTML Element - 2025-05-07_22-03-55",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "[data-e-ref=\"lsr\"]",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 34,
                    "stepList": [
                        {
                            "id": "LA7dkLyF",
                            "type": "js",
                            "categoryId": "custom",
                            "stepType": "solution",
                            "label": "JavaScript-Ausdruck - 2025-05-07_22-04-07",
                            "fallbackLabel": "JavaScript-Ausdruck - 2025-05-07_22-04-07",
                            "labelScript": {
                                "value": ""
                            },
                            "labelStrategy": "LABEL",
                            "selector": "",
                            "abortOnError": false,
                            "ignoreOnError": false,
                            "originalStepIndex": 0,
                            "solution": "dataExtractions",
                            "value": {
                                "jsCode": {
                                    "value": "return true;",
                                    "isValid": true,
                                    "isValidated": true
                                }
                            }
                        }
                    ]
                },
                {
                    "id": "BHS3hCwm",
                    "type": "js",
                    "stepType": "condition",
                    "label": "JavaScript - 2025-05-07_22-04-28",
                    "fallbackLabel": "JavaScript - 2025-05-07_22-04-28",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 35,
                    "stepList": [
                        {
                            "id": "o7pEfteH",
                            "type": "js",
                            "categoryId": "custom",
                            "stepType": "solution",
                            "label": "JavaScript-Ausdruck - 2025-05-07_22-04-53",
                            "fallbackLabel": "JavaScript-Ausdruck - 2025-05-07_22-04-53",
                            "labelScript": {
                                "value": ""
                            },
                            "labelStrategy": "LABEL",
                            "selector": "",
                            "abortOnError": false,
                            "ignoreOnError": false,
                            "originalStepIndex": 0,
                            "solution": "dataExtractions",
                            "value": {
                                "jsCode": {
                                    "value": "return test;",
                                    "isValid": true,
                                    "isValidated": true
                                }
                            }
                        },
                        {
                            "id": "7WJnDRBx",
                            "type": "js",
                            "categoryId": "custom",
                            "stepType": "solution",
                            "label": "JavaScript-Ausdruck - 2025-05-07_22-06-50",
                            "fallbackLabel": "JavaScript-Ausdruck - 2025-05-07_22-06-50",
                            "labelScript": {
                                "value": ""
                            },
                            "labelStrategy": "LABEL",
                            "selector": "",
                            "abortOnError": false,
                            "ignoreOnError": false,
                            "originalStepIndex": 1,
                            "solution": "dataExtractions",
                            "value": {
                                "jsCode": {
                                    "value": "return 1;",
                                    "isValid": true,
                                    "isValidated": true
                                }
                            }
                        }
                    ],
                    "value": {
                        "jsCode": {
                            "value": "return 'If u think i am true';",
                            "isValid": true,
                            "isValidated": true
                        }
                    }
                },
                {
                    "id": "7bSS8kda",
                    "type": "js",
                    "stepType": "condition",
                    "label": "JavaScript - 2025-05-07_22-07-02",
                    "fallbackLabel": "JavaScript - 2025-05-07_22-07-02",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": true,
                    "ignoreOnError": false,
                    "originalStepIndex": 36,
                    "stepList": [
                        {
                            "id": "CytPr03a",
                            "type": "js",
                            "categoryId": "custom",
                            "stepType": "solution",
                            "label": "JavaScript-Ausdruck - 2025-05-07_22-07-35",
                            "fallbackLabel": "JavaScript-Ausdruck - 2025-05-07_22-07-35",
                            "labelScript": {
                                "value": ""
                            },
                            "labelStrategy": "LABEL",
                            "selector": "",
                            "abortOnError": false,
                            "ignoreOnError": false,
                            "originalStepIndex": 0,
                            "solution": "dataExtractions",
                            "value": {
                                "jsCode": {
                                    "value": "return true;",
                                    "isValid": true,
                                    "isValidated": true
                                }
                            }
                        }
                    ],
                    "value": {
                        "jsCode": {
                            "value": "return window.someModuleIsLoaded === true;",
                            "isValid": true,
                            "isValidated": true
                        }
                    }
                },
                {
                    "id": "AahCsKBX",
                    "type": "responseHeader",
                    "stepType": "condition",
                    "label": "Response-Header - 2025-05-07_22-07-48",
                    "fallbackLabel": "Response-Header - 2025-05-07_22-07-48",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": true,
                    "ignoreOnError": false,
                    "originalStepIndex": 37,
                    "stepList": [
                        {
                            "id": "vZRsEdGR",
                            "type": "js",
                            "categoryId": "custom",
                            "stepType": "solution",
                            "label": "JavaScript-Ausdruck - 2025-05-07_22-08-06",
                            "fallbackLabel": "JavaScript-Ausdruck - 2025-05-07_22-08-06",
                            "labelScript": {
                                "value": ""
                            },
                            "labelStrategy": "LABEL",
                            "selector": "",
                            "abortOnError": false,
                            "ignoreOnError": false,
                            "originalStepIndex": 0,
                            "solution": "dataExtractions",
                            "value": {
                                "jsCode": {
                                    "value": "return 2;",
                                    "isValid": true,
                                    "isValidated": true
                                }
                            }
                        }
                    ],
                    "value": {
                        "name": "Francis",
                        "value": "Test-Value"
                    }
                },
                {
                    "id": "S51rtSjr",
                    "type": "selector",
                    "stepType": "loop",
                    "label": "Element Loop - 2025-05-07_22-09-41",
                    "fallbackLabel": "Element Loop - 2025-05-07_22-09-41",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "[data-e-ref=\"lsr\"]",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 38,
                    "stepList": [
                        {
                            "id": "oJEjJt2L",
                            "type": "js",
                            "categoryId": "custom",
                            "stepType": "solution",
                            "label": "JavaScript-Ausdruck - 2025-05-07_22-10-16",
                            "fallbackLabel": "JavaScript-Ausdruck - 2025-05-07_22-10-16",
                            "labelScript": {
                                "value": ""
                            },
                            "labelStrategy": "LABEL",
                            "selector": "",
                            "abortOnError": false,
                            "ignoreOnError": false,
                            "originalStepIndex": 0,
                            "solution": "dataExtractions",
                            "value": {
                                "jsCode": {
                                    "value": "return 3;",
                                    "isValid": true,
                                    "isValidated": true
                                }
                            }
                        }
                    ],
                    "breakConditionJSCode": {
                        "value": "return iteration === 3;",
                        "isValid": true,
                        "isValidated": true
                    },
                    "indexReference": "WEBEAGLE_PARAM_EBSQHXSM"
                },
                {
                    "id": "THdA1rzt",
                    "type": "range",
                    "stepType": "loop",
                    "label": "Zahlenbereich Loop - 2025-05-07_22-10-29",
                    "fallbackLabel": "Zahlenbereich Loop - 2025-05-07_22-10-29",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 39,
                    "stepList": [
                        {
                            "id": "28Uagpgh",
                            "type": "js",
                            "categoryId": "custom",
                            "stepType": "solution",
                            "label": "JavaScript-Ausdruck - 2025-05-07_22-10-42",
                            "fallbackLabel": "JavaScript-Ausdruck - 2025-05-07_22-10-42",
                            "labelScript": {
                                "value": ""
                            },
                            "labelStrategy": "LABEL",
                            "selector": "",
                            "abortOnError": false,
                            "ignoreOnError": false,
                            "originalStepIndex": 0,
                            "solution": "dataExtractions",
                            "value": {
                                "jsCode": {
                                    "value": "return 4;",
                                    "isValid": true,
                                    "isValidated": true
                                }
                            }
                        }
                    ],
                    "breakConditionJSCode": {
                        "value": "",
                        "isValid": true,
                        "isValidated": true
                    },
                    "indexReference": "WEBEAGLE_PARAM_RAWRDHND",
                    "value": {
                        "start": 1,
                        "step": 1,
                        "end": 20
                    }
                },
                {
                    "id": "IcZVPzlA",
                    "type": "js",
                    "stepType": "loop",
                    "label": "JavaScript Loop Funktion - 2025-05-07_22-11-04",
                    "fallbackLabel": "JavaScript Loop Funktion - 2025-05-07_22-11-04",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 40,
                    "stepList": [
                        {
                            "id": "SDBzqhev",
                            "type": "js",
                            "categoryId": "custom",
                            "stepType": "solution",
                            "label": "JavaScript-Ausdruck - 2025-05-07_22-17-18",
                            "fallbackLabel": "JavaScript-Ausdruck - 2025-05-07_22-17-18",
                            "labelScript": {
                                "value": ""
                            },
                            "labelStrategy": "LABEL",
                            "selector": "",
                            "abortOnError": false,
                            "ignoreOnError": false,
                            "originalStepIndex": 0,
                            "solution": "dataExtractions",
                            "value": {
                                "jsCode": {
                                    "value": "return 4;",
                                    "isValid": true,
                                    "isValidated": true
                                }
                            }
                        }
                    ],
                    "breakConditionJSCode": {
                        "value": "return window.someConditionHasBeenMet;",
                        "isValid": true,
                        "isValidated": true
                    },
                    "indexReference": "WEBEAGLE_PARAM_WUHDZMJB",
                    "value": {
                        "jsCode": {
                            "value": "return 5;",
                            "isValid": true,
                            "isValidated": true
                        }
                    }
                },
                {
                    "id": "5CWa8F3d",
                    "type": "jsList",
                    "stepType": "loop",
                    "label": "JavaScript-Liste - 2025-05-07_22-17-35",
                    "fallbackLabel": "JavaScript-Liste - 2025-05-07_22-17-35",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 41,
                    "stepList": [
                        {
                            "id": "moEpsafn",
                            "type": "js",
                            "categoryId": "custom",
                            "stepType": "solution",
                            "label": "JavaScript-Ausdruck - 2025-05-07_22-18-33",
                            "fallbackLabel": "JavaScript-Ausdruck - 2025-05-07_22-18-33",
                            "labelScript": {
                                "value": ""
                            },
                            "labelStrategy": "LABEL",
                            "selector": "",
                            "abortOnError": false,
                            "ignoreOnError": false,
                            "originalStepIndex": 0,
                            "solution": "dataExtractions",
                            "value": {
                                "jsCode": {
                                    "value": "return 6;",
                                    "isValid": true,
                                    "isValidated": true
                                }
                            }
                        }
                    ],
                    "breakConditionJSCode": {
                        "value": "return window.someConditionMet;",
                        "isValid": true,
                        "isValidated": true
                    },
                    "indexReference": "WEBEAGLE_PARAM_NEWRRDKU",
                    "value": {
                        "jsCode": {
                            "value": "return window.myList;",
                            "isValid": true,
                            "isValidated": true
                        }
                    }
                },
                {
                    "id": "8yAp3olA",
                    "type": "customList",
                    "stepType": "loop",
                    "label": "Custom List Loop - 2025-05-07_22-19-01",
                    "fallbackLabel": "Custom List Loop - 2025-05-07_22-19-01",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 42,
                    "stepList": [
                        {
                            "id": "kYK8lSk9",
                            "type": "js",
                            "categoryId": "custom",
                            "stepType": "solution",
                            "label": "JavaScript-Ausdruck - 2025-05-07_22-20-27",
                            "fallbackLabel": "JavaScript-Ausdruck - 2025-05-07_22-20-27",
                            "labelScript": {
                                "value": ""
                            },
                            "labelStrategy": "LABEL",
                            "selector": "",
                            "abortOnError": false,
                            "ignoreOnError": false,
                            "originalStepIndex": 0,
                            "solution": "dataExtractions",
                            "value": {
                                "jsCode": {
                                    "value": "return 7;",
                                    "isValid": true,
                                    "isValidated": true
                                }
                            }
                        }
                    ],
                    "breakConditionJSCode": {
                        "value": "return window.someConditionHasBeenMet();",
                        "isValid": true,
                        "isValidated": true
                    },
                    "indexReference": "WEBEAGLE_PARAM_ORULWVIP",
                    "value": {
                        "list": [
                            "francis",
                            "dfgfdg",
                            "sir"
                        ]
                    }
                }
            ]
```
# WebAutomate Project Specification

Below is the specification for the WebAutomate project configuration file.

## `projectName` - `string`
The project name

## `projectId` - `string`
The project id, which is used to identify the project in the WebAutomate system

## `subscriptionId` - `string`
The subscription associated with this project

## `target` – `object`
The URL target configuration for the project

### `target.urls[]` – `Array<object>`
List of URLs on which the project will run

#### `target.urls.[].url` - `string`
URLs on which the project will run. The URL must be a valid URL format.
  - (e.g., `https://webautomate.app/`)
  - (e.g., `https://www.my-domain.com`)
  - (e.g., `https://www.my-other-domain.com`)

#### `target.urls.[].headers` – `object`
A dictionary of headers to be sent when requesting the URL

##### `target.urls.[].headers.active` - `boolean`
If `true`, the headers will be sent when requesting the URL

##### `target.urls.[].headers.items` - `array<object>`
List of headers to be sent with the request

##### `target.urls.[].headers.items[]` - `array<object>`

###### `target.urls.[].headers.items.[].name` - `string`
The name of the header

###### `target.urls.[].headers.items.[].value`: `string`
The value of the header

#### `target.urls.[].auth` – `object`
A dictionary of basic authentication information to be sent with the request

##### `target.urls.[].auth.active`: `boolean`
If `true`, the basic authentication information will be sent with the request

##### `target.urls.[].auth.username`: `string`
The http basic authentication username

##### `target.urls.[].auth.password`: `string`
The http basic authentication password

### `target.browser` – `object`
A specification of the browser to be used for the project

#### `target.browser.key`: `string`
The key of the browser to be used for the project. Options are:
- `chromium` - Google Chrome
- `firefox` - Mozilla Firefox
- `safari` - Safari

In case of lighthouse solutions, the key can only be `chromium`.

### `target.lighthouseDevices`: `array<string>`
A list of devices to be used for the project. The devices are used for Lighthouse audits. The devices are:
- `desktop` - Desktop
- `mobile` - Mobile

### `target.device` – `object`
A specification of the device to be used for the project

#### `target.device.viewport` – `object`

##### `target.device.viewport.hasTouch`: `boolean`
If `true`, a device with touch support will be activated

##### `target.device.viewport.isLandscape`: `boolean`
If `true`, a landscape orientation will be assumed

##### `target.device.viewport.deviceScaleFactor`: `number`
The device scale factor. This is used to determine the pixel density of the device

##### `target.device.viewport.width`: `number`
The width of the viewport in pixels
  - (e.g., `1920`)

##### `target.device.viewport.height`: `number`
The height of the viewport in pixels
  - (e.g., `1080`)

##### `target.device.viewport.isMobile`: `boolean`
If `true`, the device will be considered a mobile device

##### `target.device.name`: `string`
The name of the device to be used for the project (see list below).

##### `target.device.userAgent`: `string`
The user agent string to be used for the project. This is used to identify the browser and operating system to the server.
  - (e.g., `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36`)

##### `target.checkType`: `string`
The type of check to be performed. The options are:
  - `link` - On the URLs listed in the `target.urls` array, the links will be used to execute the project
  - `page` - Based on the URLs listed in the `target.urls` array, further URLs will be crawled and also used to execute the project

##### `target.executionStrategy`: `string`
The execution strategy to be used for the project. The options are:

- `sharedBrowserInstance` - A single browser instance is used for all URLs, which means cookies, session storage, and local storage are shared between URLs
- `isolatedBrowserInstances` - A separate browser instance is used for each URL, which means cookies, session storage, and local storage are not shared between URLs

## `linkOptions` – `object`
The link options for the project, which is only activated if `target.checkType` is `page`.
The link options are used to configure the link crawling and filtering.

### `linkOptions.selection` – `object`
If `target.checkType` is `link`, this option is not used. If `target.checkType` is `page`, this option is used to select the links to be worked on.

#### `linkOptions.selection.selector`: `string`
In case `target.checkType` is `page`, this selector is used to select the links to be worked on.
  - (e.g., `.target-container` or `[data-e-ref="target-container"]`)

#### `linkOptions.selection.tags` – `object`
Specification of the tags, in which the links are searched for. The tags are used to filter the links to be worked on. The tags will be specified below.

#### `linkOptions.selection.tags.a` – `object`
If `target.checkType` is `page`, this tag is used to determine, if the following html tags should be crawled.

##### `linkOptions.selection.tags.*.attributeList`: `Array<string>`
A list of attributes to be used for the tag. The attributes are used to filter the links to be worked on.

  - (e.g., `href`, `src`, `srcset`, `data-*`)

##### `linkOptions.selection.tags.*.selector`: `string`
A selector to be used for the tag. The selector is used to filter the links to be worked on.

  - (e.g., `a`, `img`, `link`, `script`, `iframe`, `video`, `audio`, `object`, `embed`)

##### `linkOptions.selection.tags.a.additionalSelector`: `string`
Additional selector to be used for the tag. The selector is used to filter the links to be worked on.

  - (e.g., `:not([method="post"])`)

### `linkOptions.filtering` – `object`
This object contains the configuration options for the link filtering

#### `linkOptions.filtering.includeSubdomains`: `boolean`
If true then subdomains will be included in the link filtering

#### `linkOptions.filtering.includeInternalLinks`: `boolean`
If true then internal links will be included in the link filtering

#### `linkOptions.filtering.includeExternalLinks`: `boolean`
If true then external links will be included in the link filtering

#### `linkOptions.filtering.useResolvedURLBase`: `boolean`
In case the page resolves to a different URL, this option will be used to determine if the resolved URL should be used as the base URL for the link filtering or if the original URL should be used.

#### `linkOptions.filtering.urlFilter` – `object`
This object contains the configuration options for the URL filtering

#### `linkOptions.filtering.urlFilter.urlMatch[]` – `Array<object>`
A list of URL matchers to be used for the URL filtering. The URL matchers are used to filter the links to be worked on.

##### `linkOptions.filtering.urlFilter.urlMatch.[].id`: `number`
An arbitrary id

##### `linkOptions.filtering.urlFilter.urlMatch[]` – `Array<object>`
A list of URL matchers to be used

###### `linkOptions.filtering.urlFilter.urlMatch[].matcher`: `string`
The matcher to be used to identify the request to be overridden. There are following options:
- `regex`: A regex matcher
- `exact`: An exact matcher
- `substring`: A substring matcher

###### `linkOptions.filtering.urlFilter.urlMatch[].value`: `string`
The value to be matched, which can be interpreted by the matcher as a string or regex
- Examples
- `/api/modified-response-api`
- `/*/api/*-some-url-part*`

##### `linkOptions.filtering.urlFilter.urlMatchAny`: `boolean`
If true a URL will be selected, if it matches any of the URL matchers. If false, a URL will be selected, if it matches all of the URL matchers.

### `linkOptions.normalizations` – `object`
This object contains the configuration options for the link normalizations

#### `linkOptions.normalizations.stripWWW`: `boolean`
If true then the "www" will be stripped from the URL

For example
- `https://www.example.com` will be normalized to `https://example.com`

#### `linkOptions.normalizations.stripHash`: `boolean`
If true then the hash will be stripped from the URL

For example
- `https://www.example.com#hash` will be normalized to `https://www.example.com`

#### `linkOptions.normalizations.stripAuthentication`: `boolean`
If true then the authentication will be stripped from the URL

For example
- https://username:password@example.ch will be normalized to https://example.ch

#### `linkOptions.normalizations.removeQueryParameters`: `boolean`
If true then the query parameters will be removed from the URL

For example
- `https://www.example.com?param1=value1&param2=value2` will be normalized to `https://www.example.com`

#### `linkOptions.normalizations.removeTrailingSlash`: `boolean`
If true then the trailing slash will be removed from the URL

For example
- `https://www.example.com/` will be normalized to `https://www.example.com`

## `requestOptions`
The configuration options for the request-options and browser-settings

### `requestOptions.browser`: `object`
This object contains the configuration options for the browser settings

#### `requestOptions.browser.linkRequestTimeout`: `number`
How long to wait for a link request to complete before it will get reported as timeout
    - (e.g., `20000` = 20 seconds)

#### `requestOptions.browser.deactivateJS`: `boolean`
If the JavaScript should be deactivated before the URL is requested
    - (e.g., `false` for JavaScript enabled)

#### `requestOptions.browser.language`: `string`
The browsers language
    - (e.g., `de`)

#### `requestOptions.browser.waitUntil`: `object`

##### `requestOptions.browser.waitUntil.option`: `string`
When to consider the page loaded, there are following options:
  - `domcontentloaded`: `string` - When the "DOMContentLoaded" event is triggered.
  - `networkidle0`: `string` - When there are no network requests for 500ms from the page.
  - `load`: `string` - When the "load" event is triggered.
  - `commit`: `string` - When the network has responded and the document has started loading.
  - `js`: `string` - When a JavaScript condition is met (i.e the `.jsCode.value` on the same level evaluates to true).

###### `requestOptions.browser.waitUntil.jsCode`: `object`
this only exists, if the option is set to "js"
- `requestOptions.browser.waitUntil.jsCode.isValidated`: `boolean` 
If the JavaScript code is valid, then the value is `true`
- `requestOptions.browser.waitUntil.jsCode.isValid`: `boolean` - `true`
If the JavaScript code is valid, then the value is `true`
- `requestOptions.browser.waitUntil.jsCode.value`: `string`
The JavaScript code to be executed
  - (e.g., `return document.querySelector('.target-element') !== null;`)

### `requestOptions.resources`: `object`
This object contains the configuration options for the network related settings

#### `requestOptions.resources.resourcesInjection[]`: `Array<object>`
List of resources to be injected into the page

Example of an injected HTML:
```
[
  {
      "id": "WB68g11z",
      "contentType": "js",
      "injectionType": "url",
      "injectionLocation": "body",
      "injectionPosition": "end",
      "source": "/url.js",
      "content": {
          "id": "fNxx31Kr",
          "value": ""
      }
  },
  {
      "id": "rGTUbU4H",
      "contentType": "html",
      "injectionType": "customContent",
      "injectionLocation": "body",
      "injectionPosition": "end",
      "source": "",
      "content": {
          "id": "fNxx31Kr",
          "value": "<div>I get injected into the body</div>",
          "isValid": true,
          "isValidated": true
      }
  },
  {
      "id": "ne7N4Wa4",
      "contentType": "html",
      "injectionType": "customContent",
      "injectionLocation": "head",
      "injectionPosition": "end",
      "source": "",
      "content": {
          "id": "fNxx31Kr",
          "value": "<script src=\"/source.js\" type=\"text/javascript\" />",
          "isValid": true,
          "isValidated": true
      }
  }
  ]
```

##### `requestOptions.resources.resourcesInjection.[].id`: `string`
  An arbitrary id
  - (e.g., `6s5GiaRn`)

##### `requestOptions.resources.resourcesInjection.[].contentType`: `string`
The type of content to be injected, there are following options:
    - `html`: `string` - HTML content type, which can be set, when injecting HTML into the page (including script-, style-, link- or meta-tags)
    - `js`: `string` - JavaScript content type, which can be set, when injecting JavaScript into the page
    - `css`: `string` - CSS content type, which can be set, when injecting CSS into the page

Every kind of content can be injected into the body or head of the page.

##### `requestOptions.resources.resourcesInjection.[].injectionLocation`: `string`
Specifies where the content should be injected, there are following options:
- `head`: `string` - Inject the content into the head of the page
- `body`: `string` - Inject the content into the body of the page

##### `requestOptions.resources.resourcesInjection.[].injectionType`: `string`
Specifies the type of injection, there are following options:
- `url`: `string` - Inject the content from a URL, this is only available for `js` and `css` content types
- `customContent`: `string` - Inject the content from a custom string. This is available for all content types.

##### `requestOptions.resources.resourcesInjection.[].injectionPosition`: `string`
Species the position of the content, there are following options:
- `start`: `string` - Inject the content at the start of the head/body
- `end`: `string` - Inject the content at the end of the head/body

##### `requestOptions.resources.resourcesInjection.[].source`: `string`
If the content type is `js` or `css`, this is the URL of the file to be injected

##### `requestOptions.resources.resourcesInjection.[].content` – `object`
If the content type is `html`, this is the specification of the HTML to be injected

###### `requestOptions.resources.resourcesInjection.[].content.id`: `string`
An arbitrary id
    
###### `requestOptions.resources.resourcesInjection.[].content.value`: `string`
The HTML to be injected
    - (e.g., `<div>I am injected as first element in the body</div>`)

#### `requestOptions.resources.requestHeaders[]` – `Array<object>`
List of request headers to be injected into the request

Example of an injected request header:
```
[
    {
      "id": "TNMXzZ4z",
        "isValid": true,
        "values": {
            "name": "Injected-Request-Header",
            "value": "Injected-Request-Header-Value"
        },
    }
]
```

##### `requestOptions.resources.requestHeaders.[].id`: `string`
An arbitrary id
- (e.g., `6s5GiaRn`)

##### `requestOptions.resources.requestHeaders.[].isValid`: `boolean`
An indicator if the request header is valid

##### `requestOptions.resources.requestHeaders.[].values` – `object`
The values of the request header to be injected

###### `requestOptions.resources.requestHeaders.[].values.name`: `string`
The name of the request header to be injected

###### `requestOptions.resources.requestHeaders.[].values.value`: `string`
The value of the request header to be injected

#### `requestOptions.resources.requestMocks[]` – `Array<object>`
List of requests to be mocked

Example of a mocked request:
```
[
    {
        "status": 200,
        "contentType": "application/json; charset=utf-8",
        "headers": [
            {
                "isValid": true,
                "values": {
                    "name": "Francis",
                    "value": "Test-Value"
                },
                "id": "K6tWf144"
            }
        ],
        "json": {
            "value": "{\n  \"x\": 42\n}",
            "isValid": true,
            "isValidated": true
        },
        "body": {
            "value": "",
            "isValid": false,
            "isValidated": false
        },
        "urlData": {
            "context": "xhr",
            "method": "GET",
            "urlMatch": [
                {
                    "matcher": "regex",
                    "value": "/api/mocked-url"
                }
            ],
            "testFieldName": ""
        },
        "id": "YeFzCz89"
    },
    {
        "status": 200,
        "contentType": "text/html; charset=utf-8",
        "headers": [
            {
                "isValid": true,
                "values": {
                    "name": "Header-Name",
                    "value": "Header-Value"
                },
                "id": "hFIVi2LT"
            }
        ],
        "json": {
            "value": "",
            "isValid": false,
            "isValidated": false
        },
        "body": {
            "value": "<div data-type=\"snippet\">I am some HTML content, that will be used to mock a request leaving the page</div>",
            "isValid": true,
            "isValidated": true
        },
        "urlData": {
            "context": "xhr",
            "method": "GET",
            "urlMatch": [
                {
                    "matcher": "regex",
                    "value": "/api/mocked-url"
                }
            ],
            "testFieldName": ""
        },
        "id": "I8XjJZfZ"
    }
]
```

##### `requestOptions.resources.requestMocks.[].status`: `number`
The http status code to be returned

##### `requestOptions.resources.requestMocks.[].contentType`: `string`
The content type of the response
    - (e.g., `application/json; charset=utf-8`)

##### `requestOptions.resources.requestMocks.[].headers`: `Array<object>`
A list of response headers to be returned 

###### `requestOptions.resources.requestMocks.[].headers.[].id`: `string`
An arbitrary id
    
###### `requestOptions.resources.requestMocks.[].headers.[].isValid`: `boolean`
An indicator if the request header is valid

###### `requestOptions.resources.requestMocks.[].headers.[].values` – `object`
The values of the request header to be injected

###### `requestOptions.resources.requestMocks.[].headers.[].values.name`: `string`
The name of the request header to be injected

###### `requestOptions.resources.requestMocks.[].headers.[].values.value`: `string`
The value of the request header to be injected

##### `requestOptions.resources.requestMocks.[].json` – `object`
If the content type is `json` (contentType.includes('application/json')), this is the specification of the JSON to be returned

###### `requestOptions.resources.requestMocks.[].json.value`: `string`
The JSON to be returned

###### `requestOptions.resources.requestMocks.[].json.isValid`: `boolean`
An indicator if the JSON is valid

###### `requestOptions.resources.requestMocks.[].json.isValidated`: `boolean`
An indicator if the JSON is validated

##### `requestOptions.resources.requestMocks.[].body` – `object`
If the content type is NOT json, this is the specification of the body to be returned

###### `requestOptions.resources.requestMocks.[].body.value`: `string`
The body to be returned

###### `requestOptions.resources.requestMocks.[].body.isValid`: `boolean`
An indicator if the body is valid

###### `requestOptions.resources.requestMocks.[].body.isValidated`: `boolean`
An indicator if the body is validated

### `requestOptions.resources.responseOverrides`: `Array<object>`
A list of response overrides to be used

Example of response override:
```
[
    {
        "id": "ziPnSyZc",
        "urlData": {
            "method": "GET",
            "urlMatch": [
                {
                    "matcher": "regex",
                    "value": "/api/modified-response-api"
                }
            ],
        },
        "jsCode": {
            "value": "return {}",
            "isValid": true,
            "isValidated": true
        }
    }
]
```

##### `requestOptions.resources.responseOverrides.[].id`: `string`
An arbitrary id

##### `requestOptions.resources.responseOverrides.[].urlData` – `object`
A specification of the URL to be overridden

##### `requestOptions.resources.responseOverrides.[].urlData.method`: `string`
The http request method to be watched

##### `requestOptions.resources.responseOverrides.[].urlData.urlMatch[]` – `Array<object>`
A list of URL matchers to be used

###### `requestOptions.resources.responseOverrides.[].urlData.urlMatch.[].matcher`: `string`
The matcher to be used to identify the request to be overridden. There are following options:
    - `regex`: A regex matcher
    - `exact`: An exact matcher
    - `substring`: A substring matcher

###### `requestOptions.resources.responseOverrides.[].urlData.urlMatch.[].value`: `string`
The value to be matched, which can be interpreted by the matcher as a string or regex
    - Examples
      - `/api/modified-response-api`
      - `/*/api/*-some-url-part*`

#### `requestOptions.resources.responseOverrides.[].jsCode` – `object`
The reducer function to be used to modify the response. The function takes the following parameters:
- `responseHeaders`: `object` - The response headers
- `responseContentType`: `string` - The content type of the response
- `responseBody`: `string` - The body of the response
- `responseJSON`: `JSON` - The response as JSON object, if the content type is `application/json`
- `url`: `string` - The response URL

The reducer function should consume the above parameters to return a object with one or more of the following properties:
- `contentType`: The content type of the response
- `json`: The response as JSON object, if the content type is `application/json`
- `headers`: The response headers
- `body`: The body of the response

##### `requestOptions.resources.responseOverrides.[].jsCode.value`: `string`
The JavaScript code to be executed
    - (e.g., `return { contentType: 'application/json', json: { x: 42 } }`)

##### `requestOptions.resources.responseOverrides.[].jsCode.isValid`: `boolean`
An indicator if the JavaScript code is valid

##### `requestOptions.resources.responseOverrides.[].jsCode.isValidated`: `boolean`
An indicator if the JavaScript code is validated

#### `requestOptions.resources.requestParameters[]` – `Array<object>`
List of parameters to be injected into the request

#####  `requestOptions.resources.requestParameters.[].isValid`: `boolean`
An indicator if the request parameter is valid and should be injected

##### `requestOptions.resources.requestParameters.[].values` – `object`
A specification of the request parameter to be injected

###### `requestOptions.resources.requestParameters.[].values.name`: `string`
The name of the request parameter to be injected

###### `requestOptions.resources.requestParameters.[].values.value`: `string`
The value of the request parameter to be injected

###### `requestOptions.resources.requestParameters.[].id`: `string`
An arbitrary id

#### `requestOptions.resources.requestBlockers[]` – `Array<object>`
List of requests that should be blocked. This is useful to block requests that are not needed for the test.

##### `requestOptions.resources.requestBlockers.[].errorCode`: `string`
A specification of the http code to be returned, when the request is blocked
    - (e.g., `404`)

##### `requestOptions.resources.requestBlockers.[].urlData` – `object`
A specification of the URL to be blocked

##### `requestOptions.resources.requestBlockers.[].urlData.method`: `string`
The http request method to be watched
    - (e.g., `GET`)

##### `requestOptions.resources.requestBlockers.[].urlData.urlMatch[]` – `Array<object>`
List of URL matchers to be used to identify URLs, for which outgoing requests should be blocked

###### `requestOptions.resources.requestBlockers.[].urlData.urlMatch.[].matcher`: `string`
The matcher to be used to identify the request to be blocked. There are following options:
- `regex`: A regex matcher
- `exact`: An exact matcher
- `substring`: A substring matcher

###### `requestOptions.resources.requestBlockers.[].urlData.urlMatch.[].value`: `string`
The value to be matched, which can be interpreted by the matcher as a string or regex
- Examples
- `/api/modified-response-api`
- `/*/api/*-some-url-part*`

###### `requestOptions.resources.requestBlockers.[].id`: `string`
An arbitrary id

#### `requestOptions.resources.requestOverrides[]` – `Array<object>`
List of requests that should be overridden. This is useful to override requests that are not needed for the test.

##### `requestOptions.resources.requestOverrides.[].id`: `string`
An arbitrary id

#### `requestOptions.resources.requestOverrides.[].urlData` – `object`
A specification of the URL for which outgoing requests should be overridden

##### `requestOptions.resources.requestOverrides.[].urlData.method`: `string`
The http request method to be watched
    - (e.g., `PATCH`)

##### `requestOptions.resources.requestOverrides.[].urlData.urlMatch[]` – `Array<object>`
List of URL matchers to be used to identify URLs, for which outgoing requests should be overridden

###### `requestOptions.resources.requestOverrides.[].urlData.urlMatch.[].matcher`: `string`
The matcher to be used to identify the request to be overridden. There are following options:
- `regex`: A regex matcher
- `exact`: An exact matcher
- `substring`: A substring matcher

###### `requestOptions.resources.requestOverrides.[].urlData.urlMatch.[].value`: `string`
The value to be matched, which can be interpreted by the matcher as a string or regex
- Examples
  - `/api/a-url-that-will-be-overridden`
  - `/*/api/*-some-url-part*`

#### `requestOptions.resources.requestOverrides.[].jsCode` – `object`
The reducer function to be used to modify the request. The function takes the following parameters:
- `requestHeaders`: `object` - The request headers
- `requestMethod`: `string` - The http request method
- `requestPostData`: `string` - The request body (`stringified`)
- `requestParameters`: `object` - The request parameters
- `url`: The requested URL

The reducer function should consume the above parameters to return a object with one or more of the following properties:
- `headers`: `object` - The response headers to replace the original request headers
- `method`: `string` - The http request method to replace the original request method
- `postData`: `string` - The post data to replace the original request body
- `url`: The URL to replace the original request URL

##### `requestOptions.resources.requestOverrides.[].jsCode.value`: `string`
The JavaScript code to be executed
- (e.g., `return {headers: {header1: 'The value of the header'}, method: 'POST', postData: 'The body of the request', url: '/the-new-url'};`)

##### `requestOptions.resources.requestOverrides.[].jsCode.isValid`: `boolean`
An indicator if the JavaScript code is valid

##### `requestOptions.resources.requestOverrides.[].jsCode.isValidated`: `boolean`
An indicator if the JavaScript code is validated

### `requestOptions.storage` – `object`
This object contains the configuration options for the storage related settings

#### `requestOptions.storage.localStorage[]` – `Array<object>`
List of local storage items to be injected into the request

##### `requestOptions.storage.localStorage.[].isValid`: `boolean`
An indicator if the local storage item is valid and should be injected

##### `requestOptions.storage.localStorage.[].values` – `object`
The specification of the local storage item to be injected

###### `requestOptions.storage.localStorage.[].values.name`: `string`
The name of the local storage item to be injected

###### `requestOptions.storage.localStorage.[].values.value`: `string`
The value of the local storage item to be injected

###### `requestOptions.storage.localStorage.[].id`: `string`
An arbitrary id

#### `requestOptions.storage.sessionStorage[]` – `Array<object>`
List of session storage items to be injected into the request

##### `requestOptions.storage.sessionStorage.[].isValid`: `boolean`
An indicator if the session storage item is valid and should be injected
    
##### `requestOptions.storage.sessionStorage.[].values` – `object`
The specification of the session storage item to be injected

###### `requestOptions.storage.sessionStorage.[].values.name`: `string`
The name of the session storage item to be injected

###### `requestOptions.storage.sessionStorage.[].values.value`: `string`
The value of the session storage item to be injected

###### `requestOptions.storage.sessionStorage.[].id`: `string`
An arbitrary id

#### `requestOptions.storage.requestCookies[]` – `Array<object>`
List of request cookies to be set on the current browser context

##### `requestOptions.storage.requestCookies.[].id`: `string`
An arbitrary id

##### `requestOptions.storage.requestCookies.[].isValid`: `boolean`
An indicator if this cookie item is valid and should be set

##### `requestOptions.storage.requestCookies.[].values` – `object`
A specification of the cookie to be set

###### `requestOptions.storage.requestCookies.[].values.data.name`: `string`
The name of the cookie to be set

###### `requestOptions.storage.requestCookies.[].values.data.value`: `string`
The value of the cookie to be set

###### `requestOptions.storage.requestCookies.[].values.data.domain`: `string`
The domain of the cookie to be set

###### `requestOptions.storage.requestCookies.[].values.data.path`: `string`
The path of the cookie to be set

###### `requestOptions.storage.requestCookies.[].values.data.maxAge`: `number`
The max age of the cookie to be set
    - (e.g., `300`, which means 5 minutes)
###### `requestOptions.storage.requestCookies.[].values.data.httpOnly`: `boolean`
If true, the cookie is set as a httpOnly cookie
    
###### `requestOptions.storage.requestCookies.[].values.data.secure`: `boolean`
If true, the cookie is set as a secure cookie

###### `requestOptions.storage.requestCookies.[].values.data.sameSite`: `string`
The same site attribute of the cookie to be set. There are following options:

- `Strict`: `string` - The cookie is set as a strict same site cookie
- `Lax`: `string` - The cookie is set as a lax same site cookie
- `None`: `string` - The cookie is set as a none same site cookie

## `solution` – object

### `solution.appName`: `string`
The technical name for the solution. The options are:

- `urlChallenge`: `string` - The URL challenge solution
- `dataExtractions`: `string` - The data extractions solution
- `lighthouse`: `string` - The Google Lighthouse audits solution
- `e2eVisualTests`: `string` - The visual tests solution
- `screenshots`: `string` - The screenshot documentation solution
- `screenVideos`: `string` - The video documentation solution

### `solution.position`: `number`

### `solution.availableRunModes`: `Array<object>`
List of available run modes for the solution. The options are:
- `link`: `string` - The solution is available for link run modes
- `page`: `string` - The solution is available for page run modes

### `solution.configurable`: `boolean`
This indicates if the solution is configurable. If true, the solution can be configured in the WebAutomate UI.

###  `solution.key`: `string`
Same as the `solution.appName`

### `solution.config` – `object`
This object contains the configuration options for the solution

#### `solution.config.stepList[]` – `Array<object>`
List of steps to be executed in the solution. The steps are executed in the order they are defined in the list.

##### `solution.config.stepList.[].id`: `string`
An arbitrary id

##### `solution.config.stepList.[].type`: `string`
The type of the step, which depends on the stepType.

##### `solution.config.stepList.[].categoryId`: `string`
The category id of the step, which depends on the stepType.

##### `solution.config.stepList.[].stepType`: `string`
The specification of an item depends on the stepType. The following options are available:

- `solution`: `string` - The solution step, which depends on the `solution.appName`
- `action`: `string` - The action step, which depends on the type of browser action that should be carried out
- `condition`: `string` - The condition step, which depends on the type of condition that should be checked
- `loop`: `string` - The loop step, which depends on the type of loop that should be executed

##### `solution.config.stepList.[].label`: `string`
The label of the step, which is displayed in the WebAutomate UI. This is a human readable label, which should be used to identify the step.

##### `solution.config.stepList.[].labelStrategy`: `string`
The strategy to be used to generate the label. The options are:
- `LABEL`: `string` - The label is generated from the label property
- `JS`: `string` - The label is generated from the labelScript property

##### `solution.config.stepList.[].fallbackLabel`: `string`
if the label is generated from the labelScript property, this is the fallback label to be used, if the labelScript is not valid or no valid value is returned

#### `solution.config.stepList.[].labelScript` – `object`
This object contains the JavaScript code to be executed to generate the label. The function is executed in the context of the page and can therefore access the DOM and the JavaScript context of the page. The function should return a string, which is used as the label.

##### `solution.config.stepList.[].labelScript.value`: `string`
The JavaScript code to be executed to generate the label
    - (e.g., `return document.querySelector('.target-element').innerText;`)

##### `solution.config.stepList.[].selector`: `string`
If the step is targeted to a specific element, this is the selector to be used to identify the element. The selector is used to identify the element in the DOM and can therefore be used to target specific elements on the page.

##### `solution.config.stepList.[].abortOnError`: `boolean`
When this is set to true, the step will be aborted, if an error occurs. This is useful to stop the execution of the solution, if an error occurs.

##### `solution.config.stepList.[].ignoreOnError`: `boolean`
If this step is executed within a loop, this indicates if the step should be ignored, if an error occurs. This is useful to continue the execution of the loop, even if an error occurs.

##### `solution.config.stepList.[].originalStepIndex`: `number`
This is the original index of the step in the solution. This is used to identify the step in the WebAutomate UI and is used to identify the step in the WebAutomate system, so the evaluation of the step can be tracked irrespective of the order of the steps in the solution.

##### `solution.config.stepList.[].solution`: `string`
This is only used for the solution step (`solution.config.stepList.[].stepType` = `solution`) and is used to identify the solution in the WebAutomate system.

##### `solution.config.stepList.[].*` – `any`
Besides the above properties, the step can have additional properties, which depend on the stepType.

## `summary` – `object`
This object contains the round up settings for the project.

### `summary.activateScheduler`: `boolean`
If true, then the scheduler is activated and the project will be executed on a regular basis. If false, then the scheduler is deactivated and the project will not be executed on a regular basis.

### `summary.schedulerEndDate`: `number`
The end date of the scheduler. This is only used, if the scheduler is activated. The project will be executed until this date.

### `summary.schedulerStartDate`: `number`
The start date of the scheduler. This is only used, if the scheduler is activated. The project will be executed from this date.

### `summary.schedulerData` – `object`
This object contains the configuration options for the scheduler

#### `summary.schedulerData.type`: `string`
The type of the scheduler. The options are:
  - `cron`: `string` - The scheduler is a cron job
  - `random`: `string` - The scheduler is a random job
    
#### `summary.schedulerData.config` – object

- `summary.schedulerData.config.frequencyQualifier`: `string` - No description available
    - (e.g., `weekly`)
- `summary.schedulerData.config.interval`: `array` - list of `number` values
    - (e.g., `8`)
- `summary.schedulerData.config.frequency`: `number` - No description available
    - (e.g., `1`)
### `summary.logLevels` – object

- `summary.logLevels.SUCCESS`: `boolean` - No description available
    - (e.g., `False`)
- `summary.logLevels.ERROR`: `boolean` - No description available
    - (e.g., `True`)
- `summary.logLevels.INFO`: `boolean` - No description available
    - (e.g., `False`)
- `summary.logLevels.WARNING`: `boolean` - No description available
    - (e.g., `False`)

    - (e.g., `True`)
### `summary.notificationsData` – object

#### `summary.notificationsData.email` – object

- `summary.notificationsData.email.main`: `string` - No description available
    - (e.g., `francis0006@yahoo.de`)
#### `summary.notificationsData.webhooks` – object

#### `summary.notificationsData.webhooks.headers` – object

- `summary.notificationsData.webhooks.headers.active`: `boolean` - No description available
    - (e.g., `True`)
      ##### `summary.notificationsData.webhooks.headers.items[]` – array of objects

- `summary.notificationsData.webhooks.headers.items.[].name`: `string` - No description available
    - (e.g., `Francis`)
- `summary.notificationsData.webhooks.headers.items.[].value`: `string` - No description available
    - (e.g., `Test-Value`)
#### `summary.notificationsData.webhooks.auth` – object

- `summary.notificationsData.webhooks.auth.password`: `string` - No description available
    - (e.g., `jklkjk`)
- `summary.notificationsData.webhooks.auth.active`: `boolean` - No description available
    - (e.g., `True`)
- `summary.notificationsData.webhooks.auth.username`: `string` - No description available
    - (e.g., `staging`)
- `summary.notificationsData.webhooks.url`: `string` - No description available
    - (e.g., `https://jobs.mcdonalds.ch/de`)

    - (e.g., `1746649595105`)
### `summary.notifications` – object

- `summary.notifications.email`: `boolean` - No description available
    - (e.g., `True`)
- `summary.notifications.webhooks`: `boolean` - No description available
    - (e.g., `True`)
