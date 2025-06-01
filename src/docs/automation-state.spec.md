# WebAutomate State Documentation

Below is the specification for the WebAutomate state object. This object is used to store metadata about the WebAutomate session, including information about the browserPages visited, events captured, and network requests made.

Example of a WebAutomate state object:

```json
{
  "webAutomateState":
  {
    "browserContextList":
    [
      {
        "id": "zmwc9m9h2x3p2f3z",
        "createdAt": 1748792000035
      }
    ],
    "buildId": 185,
    "currentUrl": "https://brackalltron.ch/",
    "pageBuildSessionList":
    [
      {
        "id": "h757miqnk04ag0m0dial973kyhyoujl4",
        "pageBuild":
        {
          "open":
          {
            "urlConfig":
            {
              "url": "https://brackalltron.ch/",
              "headers":
              {
                "active": false,
                "items":
                [
                  {
                    "id": 1742046814342,
                    "value": "",
                    "name": ""
                  }
                ]
              },
              "auth":
              {
                "active": false,
                "username": "",
                "password": ""
              }
            },
            "actor": "buildHandler.openTab",
            "ts": 1748792000688
          },
          "responseSummary":
          {
            "startTime": 1748792000688,
            "endTime": 1748792001273,
            "success": true,
            "broken": false,
            "contentType": "text/html; charset=UTF-8",
            "isCrawlable": true,
            "resolvedUrl": "https://brackalltron.ch/",
            "status": 200,
            "statusText": "",
            "infoCodes":
            []
          },
          "events":
          {
            "close": null,
            "consoleLogs":
            [
              {
                "documentRequestId": "vuxt51lwbdpjrwso",
                "ts": 1748792002640,
                "type": "log",
                "args":
                [
                  "✅ This is a regular log message."
                ],
                "url": "https://brackalltron.ch/",
                "lineNumber": 2,
                "columnNumber": 8
              },
            ],
            "crashes":
            [],
            "dialogs":
            [],
            "exceptions":
            [],
            "webSockets":
            [],
            "workers":
            []
          },
          "runtime":
          {
            "cookies":
            [
              {
                "name": "_ga",
                "value": "GA1.1.1402401074.1748792001",
                "domain": ".brackalltron.ch",
                "path": "/",
                "expires": 1783352001.152213,
                "httpOnly": false,
                "secure": false,
                "sameSite": "Lax"
              }
            ],
            "sessionStorage":
            {},
            "localStorage":
            {}
          },
          "config":
          {
            "dialogHandling":
            {
              "decision": "accept"
            }
          }
        },
        "browserContextSessionId": "zmwc9m9h2x3p2f3z",
        "index": 0,
        "documentRequestList":
        [
          {
            "id": "vuxt51lwbdpjrwso",
            "index": 0,
            "frameId": "msx0jgdpa4l9g4al",
            "parentDocumentRequestId": null,
            "pageBuildSessionId": "h757miqnk04ag0m0dial973kyhyoujl4",
            "networkActivityDataList": [
              {
                "url": "https://brackalltron.ch/assets/css/main.css",
                "method": "GET",
                "headers":
                {
                  "accept": "text/css,*/*;q=0.1",
                  "accept-language": "de",
                  "cookie": "CRAFT_CSRF_TOKEN=54e4762a22723a84813328f93f93e992ff92a781f08917cb4056430601992106a%3A2%3A%7Bi%3A0%3Bs%3A16%3A%22CRAFT_CSRF_TOKEN%22%3Bi%3A1%3Bs%3A40%3A%220vpX6Tw7VOXGPEPovS6aVXch1X6ll_j03Wadft8R%22%3B%7D",
                  "referer": "https://brackalltron.ch/",
                  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
                  "sec-ch-ua": "\"Not.A/Brand\";v=\"99\", \"Chromium\";v=\"136\"",
                  "sec-ch-ua-mobile": "?0",
                  "sec-ch-ua-platform": "\"macOS\""
                },
                "postData": "",
                "redirectedTo": null,
                "resourceType": "stylesheet",
                "sizes":
                {
                  "requestBodySize": 0,
                  "requestHeadersSize": 358,
                  "responseBodySize": 139921,
                  "responseHeadersSize": 0
                },
                "timing":
                {
                  "startTime": 1748792000851.085,
                  "domainLookupStart": -1,
                  "domainLookupEnd": -1,
                  "connectStart": -1,
                  "secureConnectionStart": -1,
                  "connectEnd": -1,
                  "requestStart": 6.298,
                  "responseStart": 14.234,
                  "responseEnd": 34.447
                },
                "responseData":
                {
                  "url": "https://brackalltron.ch/assets/css/main.css",
                  "status": 200,
                  "statusText": "",
                  "contentType": "text/css",
                  "headers":
                  {
                    "strict-transport-security": "max-age=31536000; includeSubDomains; preload",
                    "content-security-policy": "frame-ancestors 'self' https://staging.brackalltron.ch;",
                    "cache-control": "public, max-age=604800",
                    "content-encoding": "br",
                    "etag": "\"d0923-68399af2-ecf6ec60e8d3aae5;br\"",
                    "referrer-policy": "strict-origin",
                    "x-content-type-options": "nosniff",
                    "expires": "Sun, 08 Jun 2025 15:33:20 GMT",
                    "accept-ranges": "bytes",
                    "content-length": "139706",
                    "date": "Sun, 01 Jun 2025 15:33:20 GMT",
                    "x-xss-protection": "1; mode=block",
                    "content-type": "text/css",
                    "last-modified": "Fri, 30 May 2025 11:48:02 GMT",
                    "vary": "Accept-Encoding"
                  },
                  "body": "/*!\n * Bootstrap Utilities v5.3.6 (https://getbootstrap.com/)\n * Copyright 2011-2025 ...(",
                  "json": null,
                  "ok": true,
                  "securityDetails":
                  {
                    "issuer": "R11",
                    "protocol": "TLS 1.3",
                    "subjectName": "brackalltron.ch",
                    "validFrom": 1747162023,
                    "validTo": 1754938022
                  },
                  "serverAddr":
                  {
                    "ipAddress": "149.126.6.111",
                    "port": 443
                  }
                }
              }
            ],
            "requestData":
            {
              "url": "https://brackalltron.ch/",
              "method": "GET",
              "headers":
              {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "de",
                "upgrade-insecure-requests": "1",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
                "sec-ch-ua": "\"Not.A/Brand\";v=\"99\", \"Chromium\";v=\"136\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\""
              },
              "postData": "",
              "redirectedTo": null,
              "resourceType": "document",
              "sizes":
              {
                "requestBodySize": 0,
                "requestHeadersSize": 451,
                "responseBodySize": 12092,
                "responseHeadersSize": 0
              },
              "timing":
              {
                "startTime": 1748792000707.234,
                "domainLookupStart": 0,
                "domainLookupEnd": 0,
                "connectStart": 0,
                "secureConnectionStart": 0,
                "connectEnd": 5.24,
                "requestStart": 5.346,
                "responseStart": 127.891,
                "responseEnd": 141.964
              },
              "responseData":
              {
                "url": "https://brackalltron.ch/",
                "status": 200,
                "statusText": "",
                "contentType": "text/html; charset=UTF-8",
                "headers":
                {
                  "alt-svc": "h3=\":443\"; ma=2592000, h3-29=\":443\"; ma=2592000, h3-Q050=\":443\"; ma=2592000, h3-Q046=\":443\"; ma=2592000, h3-Q043=\":443\"; ma=2592000, quic=\":443\"; ma=2592000; v=\"43,46\"",
                  "cache-control": "no-cache, no-store, must-revalidate",
                  "content-encoding": "br",
                  "content-security-policy": "frame-ancestors 'self' https://staging.brackalltron.ch;",
                  "content-type": "text/html; charset=UTF-8",
                  "date": "Sun, 01 Jun 2025 15:33:20 GMT",
                  "expires": "0",
                  "link": "<https://brackalltron.ch/>; rel=\"canonical\"",
                  "pragma": "no-cache",
                  "referrer-policy": "strict-origin",
                  "strict-transport-security": "max-age=31536000; includeSubDomains; preload",
                  "vary": "Accept-Encoding",
                  "x-content-type-options": "nosniff",
                  "x-powered-by": "Craft CMS",
                  "x-robots-tag": "all",
                  "x-xss-protection": "1; mode=block"
                },
                "body": "<!DOCTYPE html>....",
                "json": null,
                "ok": true,
                "securityDetails":
                {
                  "issuer": "R11",
                  "protocol": "TLS 1.3",
                  "subjectName": "brackalltron.ch",
                  "validFrom": 1747162023,
                  "validTo": 1754938022
                },
                "serverAddr":
                {
                  "ipAddress": "149.126.6.111",
                  "port": 443
                }
              }
            },
            "serviceWorkers":
            [],
            "urlRequestState":
            {
              "error": null,
              "isPageLoadComplete": true,
              "infoCodes":
              []
            }
          }
        ]
      }
    ],
    "projectId": "0msdm18j4ukvpihmbe7ecroatbdd2y6d",
    "sessionStart": 1748791997277,
    "vendor": "manual"
  }
}

```

## `browserContextList`: `Array<object>`
List of browser contexts created during the session.

### `browserContextList[].id`: `string`
A unique identifier for the browser context.

### `browserContextList[].createdAt`: `number`
Timestamp of when the browser context was created, in milliseconds since the epoch.

## `buildId`: `number`
The build number of the project.

## `projectId`: `string`
The unique ID of the project.

## `sessionStart`: `number`
Timestamp of when the session was started.

## `vendor`: `"manual"` | `"auto"`
Indicates whether the session was triggered manually or automatically.

## `pageBuildSessionList[]`: `Array<object>`
A list of page build sessions, each representing a browser page opened during the session.

### `pageBuildSessionList[].id`: `string`
Unique identifier for the page.

### `pageBuildSessionList[].index`: `number`
The index of the page in the session.

### `pageBuildSessionList[].init`: `object`
The page initialization object containing metadata about the page.

### `pageBuildSessionList[].open`: `object`
The object contains information about the page opening event.

#### `pageBuildSessionList[].open.actor`: `string`.
The actor that opened the page. For example, when the build handler opens a tab, the value is "buildHandler.openTab"

#### `pageBuildSessionList[].open.urlConfig`: `object`
The configuration object for the URL, with which the page was opened.

##### `pageBuildSessionList[].open.urlConfig.url`: `string`
The URL of the page that was opened.

##### `pageBuildSessionList[].open.urlConfig.headers`: `object`
The headers to be sent with the request.

###### `pageBuildSessionList[].open.urlConfig.headers.active`: `boolean`
Indicates whether headers are active for the request.

###### `pageBuildSessionList[].open.urlConfig.headers.items[]`: `Array<object>`
List of headers to be sent with the request.

- `pageBuildSessionList[].open.urlConfig.headers.items[].id`: `number`
Identifier for the header.
- `pageBuildSessionList[].open.urlConfig.headers.items[].name`: `string`
The name of the header.
- `pageBuildSessionList[].open.urlConfig.headers.items[].value`: `string`
The value of the header.

###### `pageBuildSessionList[].open.urlConfig.auth`: `object`
List of authentication methods used for the request.

- `pageBuildSessionList[].open.urlConfig.auth.active`: `boolean`
Indicates if basic auth is used.
- `pageBuildSessionList[].open.urlConfig.auth.username`: `string`
The username for basic auth.
- `pageBuildSessionList[].open.urlConfig.auth.password`: `string`
The password for basic auth.

##### `pageBuildSessionList[].open.ts`: `number`
The timestamp of when the page was opened, in milliseconds since the epoch.

### `pageBuildSessionList[].responseSummary`: `object`
A summary of the response received after the page was opened.

#### `pageBuildSessionList[].responseSummary.startTime`: `number`
The timestamp when the URL was requested, in milliseconds since the epoch.

#### `pageBuildSessionList[].responseSummary.endTime`: `number`
The timestamp when the response was received from the server, in milliseconds since the epoch.

#### `pageBuildSessionList[].responseSummary.success`: `boolean`
Indicates if the request was successful.

#### `pageBuildSessionList[].responseSummary.broken`: `boolean`
Indicates if the page is broken.

#### `pageBuildSessionList[].responseSummary.contentType`: `string`
The content type of the response, such as "text/html; charset=UTF-8".

#### `pageBuildSessionList[].responseSummary.isCrawlable`: `boolean`
Indicates the contentType of the response is "text/html".

#### `pageBuildSessionList[].responseSummary.resolvedUrl`: `string`
The resolved URL, which could be the final redirect destination.

#### `pageBuildSessionList[].responseSummary.status`: `number`
The response status code, such as 200 for success.

#### `pageBuildSessionList[].responseSummary.statusText`: `string`
The status text of the response, such as "OK".

#### `pageBuildSessionList[].responseSummary.infoCodes`: `Array<object>`
A list of info codes returned by the server, which can include error codes, warnings, or other metadata.

### `pageBuildSessionList[].events`: `object`
Event logs captured during the page execution.

#### `pageBuildSessionList[].events.close`: `object`
Timestamps of when URLs were closed in the session.

##### `pageBuildSessionList[].events.close.documentRequestId`: `string`
The page view ID associated with the close event.

##### `pageBuildSessionList[].events.close.url`: `string`
The URL that was closed.

##### `pageBuildSessionList[].events.close.ts`: `number`
The timestamp when the URL was closed, in milliseconds since the epoch.

##### `pageBuildSessionList[].events.close.actor`: `string`
The actor that closed the page, such as "buildHandler.openTab".

##### `pageBuildSessionList[].events.close.consoleLogs[]`: `Array<object>`
All console logs captured from the page.

###### `pageBuildSessionList[].events.close.consoleLogs[].ts`: `number`
The timestamp of the log event, in milliseconds since the epoch.

###### `pageBuildSessionList[].events.close.consoleLogs[].type`: `string`
One of many console types (e.g., `log`, `info`, `error`, `warn`, `debug`, `table`, `group`, `groupEnd`, `time`, `timeEnd`, `assert`, `trace`, `clear`, `count`, `countReset`, `dir`, `dirxml`, `groupCollapsed`, `profile`, `profileEnd`, `timeLog`).

###### `pageBuildSessionList[].events.close.consoleLogs[].message`: `string`
The console log message.

###### `pageBuildSessionList[].events.close.consoleLogs[].args`: `Array<object>`
The console log arguments, which can be any data type.

###### `pageBuildSessionList[].events.close.consoleLogs[].url`: `string`
The page URL where the log was recorded.

###### `pageBuildSessionList[].events.close.consoleLogs[].lineNumber`: `number`
The line number in the source code where the log was generated.

###### `pageBuildSessionList[].events.close.consoleLogs[].columnNumber`: `number`
The column number in the source code where the log was generated.

##### `pageBuildSessionList[].events.close.crashes[]`: `Array<object>`
All crashes captured from the page.

###### `pageBuildSessionList[].events.close.crashes[].documentRequestId`: `string`
The page view ID associated with the crash event.

###### `pageBuildSessionList[].events.close.crashes[].url`: `string`
The URL of the page that crashed.

###### `pageBuildSessionList[].events.close.crashes[].ts`: `number`
The timestamp when the crash occurred, in milliseconds since the epoch.

##### `pageBuildSessionList[].events.close.dialogs[]`: `Array<object>`
All dialogs captured from the page.

###### `pageBuildSessionList[].events.close.dialogs[].documentRequestId`: `string`
The page view ID associated with the dialog event.

###### `pageBuildSessionList[].events.close.dialogs[].url`: `string`
The URL of the page where the dialog was triggered.

###### `pageBuildSessionList[].events.close.dialogs[].ts`: `number`
The timestamp when the dialog was triggered, in milliseconds since the epoch.

###### `pageBuildSessionList[].events.close.dialogs[].message`: `string`
The message displayed in the dialog.

###### `pageBuildSessionList[].events.close.dialogs[].decision`: `"accept"` | `"dismiss"`
The decision made by the user in the dialog, such as "accept" or "dismiss".

###### `pageBuildSessionList[].events.close.dialogs[].promptText`: `string`
The text displayed in the prompt dialog, if applicable.

###### `pageBuildSessionList[].events.close.dialogs[].defaultValue`: `string`
The default value in the prompt dialog, if applicable.

#### `pageBuildSessionList[].events.exceptions`: `Array<object>`
All exceptions captured from the page.

##### `pageBuildSessionList[].events.exceptions[].documentRequestId`: `string`
The page view ID associated with the exception event.

##### `pageBuildSessionList[].events.exceptions[].url`: `string`
The URL of the page where the exception occurred.

##### `pageBuildSessionList[].events.exceptions[].ts`: `number`
The timestamp when the exception occurred, in milliseconds since the epoch.

##### `pageBuildSessionList[].events.exceptions[].message`: `string`
The exception message, which describes the error that occurred.

#### `pageBuildSessionList[].events.webSockets`: `Array<object>`
All WebSocket events captured from the page.

##### `pageBuildSessionList[].events.webSockets[].documentRequestId`: `string`
The page view ID associated with the WebSocket event.

##### `pageBuildSessionList[].events.webSockets[].url`: `string`
The URL of the WebSocket connection.

##### `pageBuildSessionList[].events.webSockets[].ts`: `number`
The timestamp when the WebSocket event occurred, in milliseconds since the epoch.

##### `pageBuildSessionList[].events.webSockets[].events`: `object`
The WebSocket events captured during the session.

##### `pageBuildSessionList[].events.webSockets[].events.close[]`: `Array<object>`
All WebSocket close events captured from the page.

###### `pageBuildSessionList[].events.webSockets[].events.close[].ts`: `number`
The timestamp when the WebSocket connection was closed, in milliseconds since the epoch.

##### `pageBuildSessionList[].events.webSockets[].events.framereceived[]`: `Array<object>`
All WebSocket frame received events captured from the page.

###### `pageBuildSessionList[].events.webSockets[].events.framereceived[].ts`: `number`
The timestamp when a frame was received, in milliseconds since the epoch.

##### `pageBuildSessionList[].events.webSockets[].events.framesent[]`: `Array<object>`
All WebSocket frame sent events captured from the page.

###### `pageBuildSessionList[].events.webSockets[].events.framesent[].ts`: `number`
The timestamp when a frame was sent, in milliseconds since the epoch.

##### `pageBuildSessionList[].events.webSockets[].events.socketerror[]`: `Array<object>`
All WebSocket socket error events captured from the page.

###### `pageBuildSessionList[].events.webSockets[].events.socketerror[].ts`: `number`
The timestamp when a WebSocket error occurred, in milliseconds since the epoch.

###### `pageBuildSessionList[].events.workers`: `Array<object>`
All worker events captured from the page.

###### `pageBuildSessionList[].events.workers[].documentRequestId`: `string`
The page view ID associated with the worker event.

###### `pageBuildSessionList[].events.workers[].url`: `string`
The URL of the worker.

###### `pageBuildSessionList[].events.workers[].ts`: `number`
The timestamp when the worker event occurred, in milliseconds since the epoch.

###### `pageBuildSessionList[].events.workers[].instantiated`: `object`
The object contains metadata about the worker instantiation.

- `pageBuildSessionList[].events.workers[].instantiated.ts`: `number`
  The timestamp when the worker was instantiated, in milliseconds since the epoch.

###### `pageBuildSessionList[].events.workers[].terminated`: `object`
The object contains metadata about the worker termination.

- `pageBuildSessionList[].events.workers[].terminated.ts`: `number`
  The timestamp when the worker was terminated, in milliseconds since the epoch.

### `pageBuildSessionList[].runtime`: `object`
The browser runtime storage data for the page.

#### `pageBuildSessionList[].runtime.cookies[]`: `Array<object>`
List of cookies set during the page session.

##### `pageBuildSessionList[].runtime.cookies[].name`: `string`
The name of the cookie.

##### `pageBuildSessionList[].runtime.cookies[].value`: `string`
The value of the cookie.

##### `pageBuildSessionList[].runtime.cookies[].domain`: `string`
The domain for which the cookie is valid.

##### `pageBuildSessionList[].runtime.cookies[].path`: `string`
The path for which the cookie is valid.

##### `pageBuildSessionList[].runtime.cookies[].expires`: `number`
The expiration timestamp of the cookie, in milliseconds since the epoch. A value of -1 indicates that the cookie is a session cookie and does not expire.

##### `pageBuildSessionList[].runtime.cookies[].httpOnly`: `boolean`
Indicates whether the cookie is HTTP-only, meaning it cannot be accessed via JavaScript.

##### `pageBuildSessionList[].runtime.cookies[].secure`: `boolean`
Indicates whether the cookie is secure, meaning it is only sent over HTTPS connections.

##### `pageBuildSessionList[].runtime.cookies[].sameSite`: `"Lax"` | `"Strict"` | `"None"`
Indicates the SameSite attribute of the cookie, which controls how cookies are sent with cross-site requests.

#### `pageBuildSessionList[].runtime.localStorage`: `object`
The local storage data for the page. Each key-value pair represents an item in the local storage.

#### `pageBuildSessionList[].runtime.sessionStorage`: `object`
The session storage data for the page. Each key-value pair represents an item in the session storage.

#### `pageBuildSessionList[].runtime.config`: `object`
The runtime settings for how to react to browser events such as dialogs, popups, and other browser interactions.

##### `pageBuildSessionList[].runtime.config.dialogHandling`: `object`
The configuration for handling browser dialogs.

###### `pageBuildSessionList[].runtime.config.dialogHandling.decision`: `"accept"` | `"dismiss"`
Indicates the decision to be made when a dialog is encountered. "Accept" means the dialog will be accepted, while "dismiss" means it will be dismissed.

### `pageBuildSessionList[].documentRequestDataList`: `Array<object>`
A list of top-level document requests made during the page session.

#### `pageBuildSessionList[].documentRequestList[].id`: `string`
A unique identifier for the document request.

#### `pageBuildSessionList[].documentRequestList[].index`: `number`
The index of the document request in the page session. For example, if a page is reloaded, the first request will have an index of 0, the second request will have an index of 1, and so on.

#### `pageBuildSessionList[].documentRequestList[].frameId`: `string`
The ID of the frame in which the document request was made. This is useful for identifying requests made within iframes or nested frames.

#### `pageBuildSessionList[].documentRequestList[].parentDocumentRequestId`: `string`
The ID of the parent document request, if this request is part of a nested frame or a sub-request. If there is no parent request, this will be null.

#### `pageBuildSessionList[].documentRequestList[].pageBuildSessionId`: `string`
The ID of the page build session to which this document request belongs. This links the request to the specific page session in which it was made. If the location is changed multiple times or the page is reloaded multiple times, the `pageBuildSessionList[].documentRequestList[].pageBuildSessionId` will be the same, but there will be multiple entries in the `pageBuildSessionList[].documentRequestDataList` array, each with a different `id` and `index`.

#### `pageBuildSessionList[].documentRequestList[].urlRequestState`: `object`
A summary of the URL request state for the document request, which avails the following properties:

- `pageBuildSessionList[].documentRequestList[].urlRequestState.isPageLoadComplete`: `boolean`
  Indicates whether the page load is complete for the document request. This is true if the browser receives a response and no errors occur during the page load process.
- `pageBuildSessionList[].documentRequestList[].urlRequestState.error`: `Error`
  An error object that contains information about any errors that occurred during the page load process. If no errors occurred, this will be null.
- `pageBuildSessionList[].documentRequestList[].urlRequestState.infoCodes`: `object`
  A list of info codes returned by the server during the page load process. This can include warnings, informational messages, or other metadata related to the request.

#### `pageBuildSessionList[].documentRequestList[].requestData`: `object`
The request data for the document request, which includes the following properties:

##### `pageBuildSessionList[].documentRequestList[].requestData.url`: `string`
The URL of the document request.

##### `pageBuildSessionList[].documentRequestList[].requestData.method`: `"GET"` | `"POST"` | `"PUT"` | `"DELETE"` | `"PATCH"` | `"HEAD"` | `"OPTIONS"`
The HTTP method used for the document request, such as "GET", "POST", etc.

##### `pageBuildSessionList[].documentRequestList[].requestData.headers`: `object`
A dictionary of HTTP headers sent with the document request. Each key is the header name, and the value is the header value.

##### `pageBuildSessionList[].documentRequestList[].requestData.postData`: `string`
The body of the request, if applicable. This is typically used for POST requests and can be a JSON string or other data format.

##### `pageBuildSessionList[].documentRequestList[].requestData.redirectedTo`: `string`
The URL to which the request was redirected, if applicable. If there was no redirection, this will be null.

##### `pageBuildSessionList[].documentRequestList[].requestData.resourceType`: `"document"` | `"stylesheet"` | `"script"` | `"image"` | `"font"` | `"media"` | `"xhr"` | `"fetch"` | `"websocket"` | `"other"`
The type of resource being requested, such as "document", "stylesheet", "script", etc.

##### `pageBuildSessionList[].documentRequestList[].requestData.sizes`: `object`
A summary of the sizes related to the request, which includes:

- `pageBuildSessionList[].documentRequestList[].requestData.sizes.requestBodySize`: `number`
  The size of the request body in bytes.
- `pageBuildSessionList[].documentRequestList[].requestData.sizes.requestHeadersSize`: `number`
  The size of the request headers in bytes.
- `pageBuildSessionList[].documentRequestList[].requestData.sizes.responseBodySize`: `number`
  The size of the response body in bytes.
- `pageBuildSessionList[].documentRequestList[].requestData.sizes.responseHeadersSize`: `number`
  The size of the response headers in bytes.

##### `pageBuildSessionList[].documentRequestList[].requestData.timing`: `object`
A summary of the timing information for the document request, which includes:

- `pageBuildSessionList[].documentRequestList[].requestData.timing.startTime`: `number`
  The UNIX timestamp (in ms) when the request started. It’s the base for all other relative values.
- `pageBuildSessionList[].documentRequestList[].requestData.timing.domainLookupStart`: `number`
  Time (relative to startTime) when DNS lookup started. 0 means DNS was likely cached.
- `pageBuildSessionList[].documentRequestList[].requestData.timing.domainLookupEnd`: `number`
  Time (relative) when DNS lookup ended. 0 also implies cache hit.
- `pageBuildSessionList[].documentRequestList[].requestData.timing.connectStart`: `number`
  Time when TCP connection started. 0 implies already open or reused connection.
- `pageBuildSessionList[].documentRequestList[].requestData.timing.secureConnectionStart`: `number`
  Time when TLS handshake started. A value of -1 indicates that the connection was not secure (i.e., not HTTPS) or an already established connection was reused.
- `pageBuildSessionList[].documentRequestList[].requestData.timing.connectEnd`: `number`
  Time when TCP connection finished (i.e., socket is ready).
- `pageBuildSessionList[].documentRequestList[].requestData.timing.requestStart`: `number`
  Time when the request was sent.
- `pageBuildSessionList[].documentRequestList[].requestData.timing.responseStart`: `number`
  Time when the first byte of the response was received (TTFB — time to first byte).
- `pageBuildSessionList[].documentRequestList[].requestData.timing.responseEnd`: `number`
  Time when the entire response was received.

##### `pageBuildSessionList[].documentRequestList[].requestData.responseData`: `object`
The response data for the document request, which includes the following properties:

- `pageBuildSessionList[].documentRequestList[].requestData.responseData.url`: `string`
  The URL of the response, which may differ from the request URL if there were redirects.
- `pageBuildSessionList[].documentRequestList[].requestData.responseData.status`: `number`
  The HTTP status code of the response, such as 200 for success, 404 for not found, etc.
- `pageBuildSessionList[].documentRequestList[].requestData.responseData.statusText`: `string`
  The status text of the response, such as "OK" for a successful request.
- `pageBuildSessionList[].documentRequestList[].requestData.responseData.contentType`: `string`
  The content type of the response, such as "text/html; charset=UTF-8".
- `pageBuildSessionList[].documentRequestList[].requestData.responseData.headers`: `object`
  A dictionary of HTTP headers received in the response. Each key is the header name, and the value is the header value.
- `pageBuildSessionList[].documentRequestList[].requestData.responseData.body`: `string`
  The body of the response, which can be a string representation of the content.
- `pageBuildSessionList[].documentRequestList[].requestData.responseData.json`: `object`
  The parsed JSON body of the response, if applicable. If the response is not JSON, this will be null.
- `pageBuildSessionList[].documentRequestList[].requestData.responseData.ok`: `boolean`
  Indicates whether the response was successful (status code in the range 200-299).
- `pageBuildSessionList[].documentRequestList[].requestData.responseData.securityDetails`: `object`
  Security details of the response, which includes:

  - `pageBuildSessionList[].documentRequestList[].requestData.responseData.securityDetails.issuer`: `string`
    The issuer of the SSL certificate.
  - `pageBuildSessionList[].documentRequestList[].requestData.responseData.securityDetails.protocol`: `string`
    The protocol used for the connection, such as "TLS 1.3".
  - `pageBuildSessionList[].documentRequestList[].requestData.responseData.securityDetails.subjectName`: `string`
    The subject name of the SSL certificate.
  - `pageBuildSessionList[].documentRequestList[].requestData.responseData.securityDetails.validFrom`: `number`
    The timestamp when the SSL certificate was valid from, in milliseconds since the epoch.
  - `pageBuildSessionList[].documentRequestList[].requestData.responseData.securityDetails.validTo`: `number`
    The timestamp when the SSL certificate is valid until, in milliseconds since the epoch.
  
- `pageBuildSessionList[].documentRequestList[].requestData.responseData.serverAddr`: `object`
  The server address details, which includes:
  - `pageBuildSessionList[].documentRequestList[].requestData.responseData.serverAddr.ipAddress`: `string`
    The IP address of the server.
  - `pageBuildSessionList[].documentRequestList[].requestData.responseData.serverAddr.port`: `number`
    The port number used for the connection.

#### `pageBuildSessionList[].documentRequestList[].networkActivityDataList`: `Array<object>`
A list of network activity data associated with the document request, which includes all sub-requests made during the page load process. This can include requests for stylesheets, scripts, images, fonts, and other resources, made either in the main document or in iframes.

Each entry in the `networkActivityDataList` has the same elements as the `pageBuildSessionList[].documentRequestList[].requestData` object, but it represents a sub-request rather than the main document request. This allows you to track all network activity related to the page load, including resources loaded from different domains or subdomains.
