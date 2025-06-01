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

Example of a `target` object for a non lighthouse projects:
```json
{
  "urls": [
    {
      "url": "https://webautomate.app/",
      "headers": {
        "active": true,
        "items": [
          {
            "name": "header-key-1",
            "value": "header-value-1"
          }
        ]
      },
      "auth": {
        "active": true,
        "username": "username",
        "password": "password"
      }
    }
  ],
  "browser": {
    "key": "chromium"
  },
  "deviceList": [],
  "lighthouseDevices": [
    "mobile",
    "desktop"
  ],
  "device": {
    "viewport": {
      "hasTouch": false,
      "isLandscape": false,
      "deviceScaleFactor": 1,
      "width": 1920,
      "isMobile": false,
      "height": 1080
    },
    "name": "Desktop XXL",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36"
  },
  "checkType": "page",
  "executionStrategy": "isolatedBrowserInstances"
}
```

Example of a `target` object for lighthouse projects:
```json
{
  "checkType": "link",
  "urls": [
    {
      "url": "https://yahoo.de",
      "headers": {
        "active": false,
        "items": [
          {
            "id": 1747842709847,
            "value": "",
            "name": ""
          }
        ]
      },
      "auth": {
        "active": false,
        "username": "",
        "password": ""
      }
    }
  ],
  "browser": {
    "key": "chromium"
  },
  "deviceList": [],
  "executionStrategy": "sharedBrowserInstance",
  "lighthouseDevices": [
    "mobile",
    "desktop"
  ],
  "device": {
    "viewport": {
      "hasTouch": false,
      "isLandscape": false,
      "deviceScaleFactor": 1,
      "width": 1920,
      "isMobile": false,
      "height": 1080
    },
    "name": "Desktop XXL",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36"
  }
}
```

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
A specification of the device to be used for the project. This option is not used for lighthouse projects.

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

Example of `linkOptions` configuration:
```json
{
  "selection": {
    "tags": {
      "a": {
        "attributeList": [
          "href",
          "ping"
        ],
        "selector": "a"
      },
      "blockquote": {
        "attributeList": [
          "cite"
        ],
        "selector": "blockquote"
      },
      "img": {
        "attributeList": [
          "src",
          "srcset",
          "longdesc"
        ],
        "selector": "img"
      },
      "form": {
        "additionalSelector": ":not([method=\"post\"])",
        "attributeList": [
          "action"
        ],
        "selector": "form"
      },
      "link": {
        "attributeList": [
          "href"
        ],
        "selector": "link"
      },
      "iframe": {
        "attributeList": [
          "src"
        ],
        "selector": "iframe"
      },
      "source": {
        "attributeList": [
          "src",
          "srcset"
        ],
        "selector": "source"
      },
      "script": {
        "attributeList": [
          "src"
        ],
        "selector": "script"
      },
      "base": {
        "attributeList": [
          "href"
        ],
        "selector": "base"
      },
      "frame": {
        "attributeList": [
          "src"
        ],
        "selector": "frame"
      },
      "object": {
        "attributeList": [
          "data"
        ],
        "selector": "object"
      }
    },
    "selector": ".target-container"
  },
  "filtering": {
    "includeSubdomains": true,
    "includeInternalLinks": true,
    "includeExternalLinks": true,
    "useResolvedURLBase": false,
    "urlFilter": {
      "urlMatch": [
        {
          "id": 1746650947869,
          "value": "/api/mocked-url",
          "matcher": "regex"
        }
      ],
      "urlMatchAny": false
    }
  },
  "normalizations": {
    "stripWWW": true,
    "stripHash": true,
    "stripAuthentication": true,
    "removeQueryParameters": true,
    "removeTrailingSlash": true
  }
}
```

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
If true, then subdomains will be included in the link filtering

#### `linkOptions.filtering.includeInternalLinks`: `boolean`
If true, then internal links will be included in the link filtering

#### `linkOptions.filtering.includeExternalLinks`: `boolean`
If true, then external links will be included in the link filtering

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
The matcher to be used to identify the request to be overridden. There are the following options:
- `regex`: A regex matcher
- `exact`: An exact matcher
- `substring`: A substring matcher

###### `linkOptions.filtering.urlFilter.urlMatch[].value`: `string`
The value to be matched, which can be interpreted by the matcher as a string or regex
- Examples
- `/api/modified-response-api`
- `/*/api/*-some-url-part*`

##### `linkOptions.filtering.urlFilter.urlMatchAny`: `boolean`
If true, a URL will be selected if it matches any of the URL matchers. If false, a URL will be selected if it matches all the URL matchers.

### `linkOptions.normalizations` – `object`
This object contains the configuration options for the link normalizations

#### `linkOptions.normalizations.stripWWW`: `boolean`
If true, then the "www" will be stripped from the URL

For example
- `https://www.example.com` will be normalized to `https://example.com`

#### `linkOptions.normalizations.stripHash`: `boolean`
If true, then the hash will be stripped from the URL

For example
- `https://www.example.com#hash` will be normalized to `https://www.example.com`

#### `linkOptions.normalizations.stripAuthentication`: `boolean`
If true, then the authentication will be stripped from the URL

For example
- https://username:password@example.ch will be normalized to https://example.ch

#### `linkOptions.normalizations.removeQueryParameters`: `boolean`
If true, then the query parameters will be removed from the URL

For example
- `https://www.example.com?param1=value1&param2=value2` will be normalized to `https://www.example.com`

#### `linkOptions.normalizations.removeTrailingSlash`: `boolean`
If true, then the trailing slash will be removed from the URL

For example
- `https://www.example.com/` will be normalized to `https://www.example.com`

## `requestOptions`
The configuration options for the request-options and browser-settings

Example of a `requestOptions` object:
```json
{
  "activeMenuItem": {
    "key": "browser"
  },
  "storage": {
    "localStorage": [
      {
        "isValid": true,
        "values": {
          "name": "local-storage-key-1",
          "value": "local-storage-value-1"
        },
        "id": "7ToS6V1O"
      },
      {
        "isValid": true,
        "values": {
          "name": "local-storage-key-2",
          "value": "local-storage-value-2"
        },
        "id": "FaMYsN1C"
      }
    ],
    "sessionStorage": [
      {
        "isValid": true,
        "values": {
          "name": "session-storage-key",
          "value": "session-storage-value"
        },
        "id": "b19o3qAb"
      },
      {
        "isValid": true,
        "values": {
          "name": "session-storage-key-2",
          "value": "session-storage-value-2"
        },
        "id": "y5O5Fq59"
      }
    ],
    "requestCookies": [
      {
        "isValid": true,
        "values": {
          "maxAgeType": ">",
          "data": {
            "name": "test-cookie-name",
            "value": "test-cookie-value",
            "domain": "",
            "path": "/",
            "maxAge": 300,
            "httpOnly": true,
            "secure": true,
            "sameSite": "Lax"
          }
        },
        "id": "zQzKAdXX"
      }
    ]
  },
  "browser": {
    "linkRequestTimeout": 20000,
    "deactivateJS": false,
    "language": "de",
    "waitUntil": {
      "jsCode": {
        "isValidated": true,
        "isValid": true,
        "value": "return document.querySelector('.target-element') !== null;"
      },
      "option": "js"
    }
  },
  "resources": {
    "requestHeaders": [
      {
        "isValid": true,
        "values": {
          "name": "Injected-Request-Header",
          "value": "Injected-Request-Header-Value"
        },
        "id": "TNMXzZ4z"
      }
    ],
    "responseOverrides": [
      {
        "id": "ziPnSyZc",
        "urlData": {
          "context": "xhr",
          "method": "GET",
          "urlMatch": [
            {
              "matcher": "regex",
              "value": "/api/modified-response-api"
            }
          ],
          "testFieldName": ""
        },
        "jsCode": {
          "value": "return {};",
          "isValid": true,
          "isValidated": true
        }
      }
    ],
    "requestParameters": [
      {
        "isValid": true,
        "values": {
          "name": "param-1",
          "value": "param-1-value"
        },
        "id": "HJBuwXlR"
      },
      {
        "isValid": true,
        "values": {
          "name": "param-2",
          "value": "param-value-2"
        },
        "id": "1Fqd8Blj"
      }
    ],
    "requestBlockers": [
      {
        "errorCode": "failed",
        "urlData": {
          "context": "xhr",
          "method": "GET",
          "urlMatch": [
            {
              "matcher": "regex",
              "value": "some-unwanted-domains"
            }
          ],
          "testFieldName": ""
        },
        "id": "BDkdxUEK"
      }
    ],
    "requestOverrides": [
      {
        "id": "06daEp38",
        "urlData": {
          "context": "xhr",
          "method": "GET",
          "urlMatch": [
            {
              "matcher": "regex",
              "value": "/api/modified-url"
            }
          ],
          "testFieldName": ""
        },
        "jsCode": {
          "value": "return {};",
          "isValid": true,
          "isValidated": true
        }
      }
    ],
    "resourcesInjection": [
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
    ],
    "requestMocks": [
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
  }
}
```

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

Example of a `requestOptions.resources.resourcesInjection[]` object:

```json
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

Example of `requestOptions.resources.requestHeaders[]` object:
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

Example of a `requestOptions.resources.requestMocks[]` object:

```json
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

Example of `requestOptions.resources.responseOverrides` object:

```json
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
            ]
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

## `solution` – `object`
The solution object contains the configuration options for the solution.

**`solution` – `object` specific for `solution.appName` === `lighthouse`**

This is the configuration object for the `lighthouse` solution.

Example of a solution object for a `lighthouse` project:
```json
{
    "appName": "lighthouse",
    "availableRunModes": [
        "link",
        "page"
    ],
    "config": {
        "lighthouseOutputFormats": [
            "html"
        ],
        "categoryList": [
            "performance",
            "accessibility",
            "best-practices",
            "seo"
        ]
    },
    "configurable": true,
    "key": "lighthouse"
}
```

- `solution.appName`: `string` - is always `lighthouse`
- `solution.availableRunModes`: `Array<string>` - is always `["link", "page"]` which means that the solution can be run in either for individual links or for the whole page.
- `solution.config`: `object` - is the configuration object for the `lighthouse` solution
- `solution.config.lighthouseOutputFormats`: `Array<string>` - is the list of output formats to be used for the `lighthouse` solution. The following options are available:
  - `html`: `string` - The output format is HTML
  - `json`: `string` - The output format is JSON
- `solution.config.categoryList`: `Array<string>` - is the list of categories to be used for the `lighthouse` solution. The following options are available:
  - `performance`: `string` - The performance category
  - `accessibility`: `string` - The accessibility category
  - `best-practices`: `string` - The best practices category
  - `seo`: `string` - The SEO category
- `solution.config.configurable`: `boolean` - is always `true` for `lighthouse`
- `solution.key`: `string` - is always `lighthouse`


**`solution` – `object` specific for `solution.appName` === `urlChallenge`**

Example of a solution object for a `urlChallenge` project:
```json
{
  "appName": "urlChallenge",
  "availableRunModes": [
    "link",
    "page"
  ],
  "config": {
    "mode": "eliminationMode",
    "stepList": [
      {
        "id": "FNCEuf6t",
        "type": "ai",
        "categoryId": "automated",
        "stepType": "solution",
        "label": "URL-Challenge - 2025-05-22_21-26-03",
        "fallbackLabel": "URL-Challenge - 2025-05-22_21-26-03",
        "labelScript": {
          "value": ""
        },
        "labelStrategy": "LABEL",
        "selector": "",
        "abortOnError": false,
        "ignoreOnError": false,
        "originalStepIndex": 0,
        "solution": "urlChallenge",
        "indecisiveCase": "isVoided",
        "value": {
          "code": {
            "value": "Prüfe, ob ein Formular auf der Seite sichtbar ist.",
            "isValid": true,
            "isValidated": true,
            "isSuggested": true,
            "suggestionIndex": 0
          }
        }
      },
      {
        "id": "lhLchJwd",
        "type": "js",
        "categoryId": "custom",
        "stepType": "solution",
        "label": "URL-Challenge - 2025-05-22_21-27-34",
        "fallbackLabel": "URL-Challenge - 2025-05-22_21-27-34",
        "labelScript": {
          "value": ""
        },
        "labelStrategy": "LABEL",
        "selector": "",
        "abortOnError": false,
        "ignoreOnError": false,
        "originalStepIndex": 1,
        "solution": "urlChallenge",
        "indecisiveCase": "isVoided",
        "value": {
          "jsCode": {
            "value": "return 42;",
            "isValid": true,
            "isValidated": true
          }
        }
      }
    ]
  },
  "configurable": true,
  "key": "urlChallenge"
}
```

- `solution.appName`: `string` - is always `urlChallenge`
- `solution.availableRunModes`: `Array<string>` - is always `["link", "page"]` which means that the solution can be run in either for individual links or for the whole page.
- `solution.config`: `object` - is the configuration object for the `urlChallenge` solution
- `solution.config.mode`: `string` - is one of
  - `eliminationMode`: `string` - In the elimination mode, each URL is subjected to the tests. If a URL fails a test, it is eliminated and not tested further. The test cycle ends when all URLs have either passed all tests or been eliminated.
  - `comprehensiveMode`: `string` - In the comprehensive mode, each URL undergoes all defined tests regardless of whether it passes a test or not.
- `solution.config.stepList`: `Array<object>` - is the list of steps to be used for the `urlChallenge` solution

**`solution` – `object` specific for `solution.appName` === `dataExtractions`**
Example of a solution object for a `dataExtractions` project:

```json
{
  "appName": "dataExtractions",
  "position": 2,
  "availableRunModes": [
    "link",
    "page"
  ],
  "configurable": true,
  "key": "dataExtractions",
  "config": {
    "stepList": [
      {
        "id": "Rgj1qDFQ",
        "type": "js",
        "categoryId": "custom",
        "stepType": "solution",
        "label": "JavaScript Expression - 2025-03-02_13-46-51",
        "fallbackLabel": "JavaScript Expression - 2025-03-02_13-46-51",
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
            "value": "return 42;",
            "isValid": true,
            "isValidated": true
          }
        }
      },
      {
        "id": "xcPFp9Ic",
        "type": "ai",
        "categoryId": "automated",
        "stepType": "solution",
        "label": "AI-Datenerfassung - 2025-05-22_18-07-13",
        "fallbackLabel": "AI-Datenerfassung - 2025-05-22_18-07-13",
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
            "value": "Extrahiere den Seitentitel.",
            "isValid": true,
            "isValidated": true,
            "isSuggested": true,
            "suggestionIndex": 0
          }
        }
      }
    ]
  }
}
```

- `solution.appName`: `string` - is always `dataExtractions`
- `solution.availableRunModes`: `Array<string>` - is always `["link", "page"]` which means that the solution can be run in either for individual links or for the whole page.
- `solution.config`: `object` - is the configuration object for the `dataExtractions` solution
- `solution.config.stepList`: `Array<object>` - is the list of steps to be used for the `dataExtractions` solution

**`solution` – `object` specific for `solution.appName` === `e2eVisualTests`**

Example of a solution object for a `e2eVisualTests` project:

```json
{
  "appName": "e2eVisualTests",
  "position": 5,
  "availableRunModes": [
    "link",
    "page"
  ],
  "configurable": true,
  "key": "e2eVisualTests",
  "config": {
    "highlightColor": "#ff00ff",
    "clustersSize": 10,
    "acceptFirstShot": true,
    "stepList": [
      {
        "id": "TMMeLU36",
        "type": "manual",
        "categoryId": "custom",
        "stepType": "solution",
        "label": "Manuelle Überprüfung - 2025-05-21_18-25-04",
        "fallbackLabel": "Manuelle Überprüfung - 2025-05-21_18-25-04",
        "labelScript": {
          "value": ""
        },
        "labelStrategy": "LABEL",
        "selector": "",
        "abortOnError": false,
        "ignoreOnError": false,
        "originalStepIndex": 0,
        "solution": "e2eVisualTests",
        "value": {
          "target": "fullPage",
          "selectorTargets": "first",
          "customSelectorTargets": "",
          "strategy": "moderate"
        }
      },
      {
        "id": "VnNrDzY3",
        "type": "ai",
        "categoryId": "automated",
        "stepType": "solution",
        "label": "AI-Reviewer - 2025-05-22_18-29-06",
        "fallbackLabel": "AI-Reviewer - 2025-05-22_18-29-06",
        "labelScript": {
          "value": ""
        },
        "labelStrategy": "LABEL",
        "selector": "",
        "abortOnError": false,
        "ignoreOnError": false,
        "originalStepIndex": 1,
        "solution": "e2eVisualTests",
        "value": {
          "target": "fullPage",
          "selectorTargets": "first",
          "customSelectorTargets": "",
          "ai": {
            "instructions": {
              "value": "Akzeptiere den Screenshot, wenn nur neue Bilder hinzugefügt wurden, aber keine bestehenden entfernt wurden.",
              "isValid": true,
              "isValidated": true,
              "isSuggested": true,
              "suggestionIndex": 2
            },
            "confidenceLevel": 70
          }
        }
      }
    ]
  }
}
```

- `solution.appName`: `string` - is always `e2eVisualTests`
- `solution.availableRunModes`: `Array<string>` - is always `["link", "page"]` which means that the solution can be run in either for individual links or for the whole page.
- `solution.config`: `object` - is the configuration object for the `e2eVisualTests` solution
- `solution.config.stepList`: `Array<object>` - is the list of steps to be used for the `e2eVisualTests` solution
- `solution.config.highlightColor`: `string` - is the color with which the diff clusters between images are highlighted. The color is in hex format (e.g., `#ff00ff`)
- `solution.config.clustersSize`: `number` - is the size of the clusters in px to be used for the highlight color
- `solution.config.acceptFirstShot`: `boolean` - if true, the first shot is accepted as a valid image. This is useful for the first run of a test, where no previous image is available
- `solution.config.stepList`: `Array<object>` - is the list of steps to be used for the `e2eVisualTests` solution


**`solution` – `object` specific for `solution.appName` === `screenshots`**

Example solution object for `screenshots`

```json
{
  "appName": "screenshots",
  "position": 3,
  "availableRunModes": [
    "link",
    "page"
  ],
  "configurable": true,
  "key": "screenshots",
  "config": {
    "stepList": [
      {
        "id": "7FMwXBLd",
        "type": "manual",
        "categoryId": "custom",
        "stepType": "solution",
        "label": "Screenshot - Manuell konfigurierte Screenshots - 2025-05-21_18-22-40",
        "fallbackLabel": "Screenshot - Manuell konfigurierte Screenshots - 2025-05-21_18-22-40",
        "labelScript": {
          "value": ""
        },
        "labelStrategy": "LABEL",
        "selector": "",
        "abortOnError": false,
        "ignoreOnError": false,
        "originalStepIndex": 0,
        "solution": "screenshots",
        "value": {
          "target": "viewport",
          "selectorTargets": "all",
          "customSelectorTargets": ""
        }
      },
      {
        "id": "Ka7NbqUY",
        "type": "ai",
        "categoryId": "automated",
        "stepType": "solution",
        "label": "Screenshot - AI-erstellte Screenshots - 2025-05-22_21-57-03",
        "fallbackLabel": "Screenshot - AI-erstellte Screenshots - 2025-05-22_21-57-03",
        "labelScript": {
          "value": ""
        },
        "labelStrategy": "LABEL",
        "selector": "",
        "abortOnError": false,
        "ignoreOnError": false,
        "originalStepIndex": 1,
        "solution": "screenshots",
        "value": {
          "ai": {
            "instructions": {
              "value": "Mache einen Screenshot des Login-Buttons.",
              "isValid": true,
              "isValidated": true,
              "isSuggested": true,
              "suggestionIndex": 0
            },
            "confidenceLevel": 70,
            "reuseSelectors": true
          }
        }
      }
    ]
  }
}
```

- `solution.appName`: `string` - is always `screenshots`
- `solution.availableRunModes`: `Array<string>` - is always `["link", "page"]` which means that the solution can be run in either for individual links or for the whole page.
- `solution.config`: `object` - is the configuration object for the `screenshots` solution
- `solution.config.stepList`: `Array<object>` - is the list of steps to be used for the `screenshots` solution

**`solution` – `object` specific for `solution.appName` === `screenVideos`**

Example solution object for `screenVideos`

```json
{
        "appName": "screenVideos",
        "position": 4,
        "availableRunModes": [
            "link"
        ],
        "config": {
            "stepList": [
                {
                    "id": "POQkpEzv",
                    "type": "elementDragAndDrop",
                    "categoryId": "formElementManipulation",
                    "stepType": "action",
                    "label": "Element Drag & Drop - 2025-05-21_18-23-33",
                    "fallbackLabel": "Element Drag & Drop - 2025-05-21_18-23-33",
                    "labelScript": {
                        "value": ""
                    },
                    "labelStrategy": "LABEL",
                    "selector": "",
                    "abortOnError": false,
                    "ignoreOnError": false,
                    "originalStepIndex": 0,
                    "value": {
                        "sourceSelector": ".quelle",
                        "targetSelector": ".ziel"
                    }
                }
            ],
            "stepDelay": 1000
        },
        "configurable": true,
        "key": "screenVideos"
    }
```

- `solution.appName`: `string` - is always `screenVideos`
- `solution.availableRunModes`: `Array<string>` - is always `["link", "page"]` which means that the solution can be run in either for individual links or for the whole page.
- `solution.config`: `object` - is the configuration object for the `screenVideos` solution
- `solution.config.stepList`: `Array<object>` - is the list of steps to be used for the `screenVideos` solution
- `solution.config.stepDelay`: `number` - is the delay in ms between the steps. This is useful to avoid too many requests in a short time. The default value is `1000` ms (1 second). The value can be set to `0` to disable the delay.


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
List of steps to be executed in the solution. The steps are executed in the order they are defined in the list. Lighthouse projects do not have a step list, so in that case, the value is an empty array `[]`.

## `summary` – `object`
This object contains the round up settings for the project.

### `summary.activateScheduler`: `boolean`
If true, then the scheduler is activated and the project will be executed on a regular basis. If false, then the scheduler is deactivated and the project will not be executed on a regular basis.

### `summary.schedulerEndDate`: `number`
The end date of the scheduler. This is only used, if the scheduler is activated. The project will be executed until this date.

### `summary.schedulerStartDate`: `number`
The start date of the scheduler. This is only used, if the scheduler is activated. The project will be executed from this date.

### `summary.schedulerData` – `object`
This object contains the configuration options for the scheduler.

Example of a schedulerData object with type cron:
```json
{
    "type": "cron",
    "config": {
        "cron": "0 0 * * *",
        "cronPrompt": "Every day at midnight"
    }
}
```

Example of a schedulerData object with type random:
```json
{
    "type": "random",
    "config": {
        "frequencyQualifier": "daily",
        "interval": [8, 18],
        "frequency": 50
    }
}
```

#### `summary.schedulerData.type`: `string`
The type of the scheduler. The options are:
  - `cron`: `string` - The scheduler is a cron job
  - `random`: `string` - The scheduler is a random job
    
#### `summary.schedulerData.config` – `object`
This object contains the configuration options for the scheduler

##### `summary.schedulerData.config.frequencyQualifier`: `string`
This value is only required, if the  `summary.schedulerData.type` is `random`. The options are:
- `daily`: `string` - The project will be executed every day
- `weekly`: `string` - The project will be executed every week
- `monthly`: `string` - The project will be executed every month

##### `summary.schedulerData.config.interval`: `array` - list of `number` values
This value is only required, if the  `summary.schedulerData.type` is `random`. It is a window, during which most traffic is expected on the page. The randomization logic will select times outside of this window. The values are the start and end time of the window in hours. The values are between 0 and 23.

##### `summary.schedulerData.config.frequency`: `number`
This value is only required, if the  `summary.schedulerData.type` is `random`. It represents the frequency of the project execution. The value is between 1 and 100. The higher the value, the more often the project will be executed in the specified `summary.schedulerData.config.interval`.

##### `summary.schedulerData.config.cron`: `string`
This value is only required, if the  `summary.schedulerData.type` is `cron`. The cron expression to be used to execute the project. The cron expression is a string, which defines the schedule for the project execution.

##### `summary.schedulerData.config.cronPrompt`: `string`
This value is only required, if the  `summary.schedulerData.type` is `cron`. The cronPrompt is a human readable description of the cron expression. This is used to display the cron expression in the WebAutomate UI.

### `summary.logLevels` – `object`
This object contains the configuration options for the log levels

#### `summary.logLevels.SUCCESS`: `boolean`
Is true, if the success log level is activated. This is used to display the success log level in the WebAutomate UI.

#### `summary.logLevels.ERROR`: `boolean`
Is true, if the error log level is activated. This is used to display the error log level in the WebAutomate UI.

#### `summary.logLevels.INFO`: `boolean`
Is true, if the info log level is activated. This is used to display the info log level in the WebAutomate UI.

#### `summary.logLevels.WARNING`: `boolean`
Is true, if the warning log level is activated. This is used to display the warning log level in the WebAutomate UI.

### `summary.notifications` – `object`
This object contains the configuration options for the notifications

#### `summary.notifications.email`: `boolean`
If true, an email notification will be sent, whenever the project is executed. This is used to display the email notification in the WebAutomate UI.

#### `summary.notifications.webhooks`: `boolean`
If true, a webhook notification will be sent, whenever the project is executed. This is used to display the webhook notification in the WebAutomate UI.

### `summary.notificationsData` – `object`
This object contains the configuration options for the notifications

Example of a notificationsData

```
{
    "email": {
        "main": "francis0006@yahoo.de"
    },
    "webhooks": {
        "headers": {
            "active": true,
            "items": [
                {
                    "name": "sdfdsf",
                    "value": "sdfsdfdsf"
                }
            ]
        },
        "auth": {
            "password": "dsfsdfdsf",
            "active": true,
            "username": "staging"
        },
        "url": "https://yahoo.de"
    }
}
```

#### `summary.notificationsData.email` – `object`
The configuration for the notifications by email

##### `summary.notificationsData.email.main`: `string`
The main email address to be used for the notifications.

#### `summary.notificationsData.webhooks` – `object`
The configuration for the notifications by webhooks

##### `summary.notificationsData.webhooks.url`: `string`
The URL to be used for the webhook request

##### `summary.notificationsData.webhooks.headers` – `object`
The headers to be send along with the webhook request

###### `summary.notificationsData.webhooks.headers.active`: `boolean`
If true, the headers are activated and will be send along with the webhook request

###### `summary.notificationsData.webhooks.headers.items[]` – `Array<object>`
A list of headers to be send along with the webhook request

- `summary.notificationsData.webhooks.headers.items.[].name`: `string`
The name of the header to be send along with the webhook request

- `summary.notificationsData.webhooks.headers.items.[].value`: `string`
The value of the header to be send along with the webhook request

#### `summary.notificationsData.webhooks.auth` – `object`
The basic authentication to be used for the webhook request

##### `summary.notificationsData.webhooks.auth.active`: `boolean`
If true, the basic authentication is activated and will be used for the webhook request

##### `summary.notificationsData.webhooks.auth.password`: `string`
The basic authentication password to be used for the webhook request

###### `summary.notificationsData.webhooks.auth.username`: `string`
The basic authentication username to be used for the webhook request

