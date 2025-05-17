# WebAutomate State Documentation

Below is the specification for the WebAutomate state object. This object is used to store metadata about the WebAutomate session, including information about the pages visited, events captured, and network requests made.

Properties

- **`projectId`**: `string` - The unique ID of the project.
- **`buildId`**: `number` - The build number of the project.
- **`sessionStart`**: `number` - Timestamp of when the session was started.
- **`vendor`**: `"manual"` | `"auto"` - Indicates whether the session was triggered manually or automatically.
- **`pageBuildDataList[]`**: `Array` - Collection of pages visited during the session

---

## `pageBuildDataList[]`

Properties of each page:

- **`id`**: `string` - Unique identifier for the page.
- **`init`**: `object` - Initial data known before the URL is requested.
- **`postInit`**: `object` - Metadata retrieved after the URL has been requested.
- **`eventBased`**: `object` - Event logs captured during page execution.
- **`runtime`**: `object` - Browser runtime storage data.
- **`config`**: `object` - Runtime settings for handling browser dialogs.
- **`lightHouseData`**: `object` - Lighthouse audits for mobile and desktop.
- **`final`**: `object` - Final list of top-level document requests and XHR/Fetch network requests.

List of data for each tab opened by the build handler.

### `pageBuildDataList[].id`: `string`
A unique identifier for the page.

### `pageBuildDataList[].init`: `object`
Initial data known before the URL is requested.

#### `pageBuildDataList[].init.open`: `object`
Metadata about the page open event.

##### `pageBuildDataList[].init.open.url`: `string`
The URL requested

##### `pageBuildDataList[].init.open.actor`: `string`
The source that triggered this page open

##### `pageBuildDataList[].init.open.ts`: `number`
The timestamp when the page was opened

### `pageBuildDataList[].url`: `string`
The URL value again (likely redundant, but sometimes different)

### `pageBuildDataList[].urlConfig`: `object`
Metadata about the URL request.

#### `pageBuildDataList[].urlConfig.url`: `string`
The URL requested from config

#### `pageBuildDataList[].urlConfig.headers`: `object`

##### `pageBuildDataList[].urlConfig.headers.active`: `boolean`
Whether to include headers in the request

##### `pageBuildDataList[].urlConfig.headers.items[]`: `object`
List of headers to be sent with the request

###### `pageBuildDataList[].urlConfig.headers.items[].id`: `number`
Identifier for the header

###### `pageBuildDataList[].urlConfig.headers.items[].name`: `string`
Header name

###### `pageBuildDataList[].urlConfig.headers.items[].value`: `string`
Header value

#### `pageBuildDataList[].urlConfig.auth`: `object`
Metadata about the authentication used for the URL request.

##### `pageBuildDataList[].urlConfig.auth.active`: `boolean`
Indicates if basic auth is used

##### `pageBuildDataList[].urlConfig.auth.username`: `string`
Basic auth username

##### `pageBuildDataList[].urlConfig.auth.password`: `string`
Basic auth password

---

### `pageBuildDataList[].postInit`: `object`
Metadata retrieved after the URL has been requested.

#### `pageBuildDataList[].postInit.linkCheckData`: `object`
Metadata retrieved after the URL has been requested

Properties:

##### `pageBuildDataList[].postInit.linkCheckData.startTime`: `number`
The timestamp, when the URL was requested
##### `pageBuildDataList[].postInit.linkCheckData.endTime`: `number`
The timestamp, when the response was received from the server
##### `pageBuildDataList[].postInit.linkCheckData.success`: `boolean`
If the request was successful
##### `pageBuildDataList[].postInit.linkCheckData.broken`: `boolean`
if the page is broken
##### `pageBuildDataList[].postInit.linkCheckData.contentType`: `string`
The content type of the response
##### `pageBuildDataList[].postInit.linkCheckData.isCrawlable`: `string`
If this page is crawlable
##### `pageBuildDataList[].postInit.linkCheckData.resolvedUrl`: `string`
The resolved URL (which could also be the final redirect destination)
##### `pageBuildDataList[].postInit.linkCheckData.status`: `number`
The response status code
##### `pageBuildDataList[].postInit.linkCheckData.statusText`: `string`
The status text of the response
##### `pageBuildDataList[].postInit.linkCheckData.infoCodes`: `array`
Any info code returned by the server

---

### `pageBuildDataList[].eventBased`: `object`
Event logs captured during page execution

#### `pageBuildDataList[].eventBased.close`
Timestamps of when URLs were closed in the session

##### `pageBuildDataList[].eventBased.close.url`: `string`
The URL that was closed

##### `pageBuildDataList[].eventBased.close.ts`: `number`
Timestamp when URL was closed

##### `pageBuildDataList[].eventBased.close.consoleLogs[]`: `Array`
All console logs captured from the page

###### `pageBuildDataList[].eventBased.close.consoleLogs[].ts`: `number`
the timestamp of the log event
###### `pageBuildDataList[].eventBased.close.consoleLogs[].type`: `string`
One of many console types (e.g., `log` | `info` | `error` | `warn` | `debug` | `table` | `group` | `groupEnd` | `time` | `timeEnd` | `assert` | `trace` | `clear` | `count` | `countReset` | `dir` | `dirxml` | `groupCollapsed` | `profile` | `profileEnd` | `timeLog`)
###### `pageBuildDataList[].eventBased.close.consoleLogs[].message`: `string`
The console.log message
###### `pageBuildDataList[].eventBased.close.consoleLogs[].args`: `object[]`
The console.log arguments
###### `pageBuildDataList[].eventBased.close.consoleLogs[].url`: `string`
The page URL where the log was recorded
###### `pageBuildDataList[].eventBased.close.consoleLogs[].lineNumber`: `number`
The line number of the log
###### `pageBuildDataList[].eventBased.close.consoleLogs[].columnNumber`: `number`
The column number of the log

##### `pageBuildDataList[].eventBased.close.crashes[]`: `Array`
Crashes encountered by the page

###### `pageBuildDataList[].eventBased.close.crashes[].url`: `string`
the URL that crashed
###### `pageBuildDataList[].eventBased.close.crashes[].ts`: `number`
the timestamp of the crash

##### `pageBuildDataList[].eventBased.close.dialogs[]`: `Array`
Dialogs shown to the user during the session

###### `pageBuildDataList[].eventBased.close.dialogs[].url`: `string`
the page URL that triggered the dialog
###### `pageBuildDataList[].eventBased.close.dialogs[].ts`: `string`
the timestamp of the dialog
###### `pageBuildDataList[].eventBased.close.dialogs[].message`: `string`
the dialog message
###### `pageBuildDataList[].eventBased.close.dialogs[].decision`: `"accept"` | `"dismiss"`
How the automated browser should handle a dialog
###### `pageBuildDataList[].eventBased.close.dialogs[].promptText`: `string`
the entered text (if any)
###### `pageBuildDataList[].eventBased.close.dialogs[].defaultValue`: `string`
the default text value

##### `pageBuildDataList[].eventBased.close.exceptions[]`: `Array`
JavaScript exceptions encountered

###### `pageBuildDataList[].eventBased.close.exceptions[].url`: `string`
The page URL where the exception occurred
###### `pageBuildDataList[].eventBased.close.exceptions[].ts`: `string`
The timestamp of the exception
###### `pageBuildDataList[].eventBased.close.exceptions[].message`: `string`
The exception message

##### `pageBuildDataList[].eventBased.close.webSockets[]`: `Array`
WebSocket activity on the page

###### `pageBuildDataList[].eventBased.close.webSockets[].url`: `string`
the WebSocket URL
###### `pageBuildDataList[].eventBased.close.webSockets[].ts`: `string`
the timestamp when the WebSocket was created
###### `pageBuildDataList[].eventBased.close.webSockets[].events`: `object`:
The events captured for the WebSocket, containing:
- `pageBuildDataList[].eventBased.close.webSockets[].events.close`: `{ ts: string }` – event when the socket closed
- `pageBuildDataList[].eventBased.close.webSockets[].events.framereceived`: `{ ts: string }` – event when a frame was received
- `pageBuildDataList[].eventBased.close.webSockets[].events.framesent`: `{ ts: string }` – event when a frame was sent
- `pageBuildDataList[].eventBased.close.webSockets[].events.socketerror`: `{ ts: string }` – event when a socket error occurred

##### `pageBuildDataList[].eventBased.close.workers[]`: `Array`
WebWorker activity on the page

##### `pageBuildDataList[].eventBased.close.workers[].url`: `string`
the worker script URL
##### `pageBuildDataList[].eventBased.close.workers[].ts`: `string`
the timestamp when the worker was created
##### `pageBuildDataList[].eventBased.close.workers[].events`: `object`:
The events captured for the worker, containing:
- `pageBuildDataList[].eventBased.close.workers[].events.instantiated`: `{ ts: string }` – the timestamp when the worker was instantiated
- `pageBuildDataList[].eventBased.close.workers[].events.terminated`: `{ ts: string }` – the timestamp when the worker was terminated

---

### `pageBuildDataList[].runtime`: `object`
Browser runtime storage data

#### `pageBuildDataList[].runtime.cookies[]`
List of browser cookies at runtime

Each cookie includes:

##### `pageBuildDataList[].runtime.cookies[].id`: `number`
cookie ID
##### `pageBuildDataList[].runtime.cookies[].value`: `string`
cookie value
##### `pageBuildDataList[].runtime.cookies[].name`: `string`
cookie name
##### `pageBuildDataList[].runtime.cookies[].domain`: `string`
the domain that set the cookie
##### `pageBuildDataList[].runtime.cookies[].path`: `string`
the path for which the cookie is valid
##### `pageBuildDataList[].runtime.cookies[].maxAge` (optional): `number`
cookie max age in seconds
##### `pageBuildDataList[].runtime.cookies[].expires`: `number`
expiry timestamp in seconds
##### `pageBuildDataList[].runtime.cookies[].httpOnly`: `boolean`
true if cookie is HttpOnly
##### `pageBuildDataList[].runtime.cookies[].secure`: `boolean`
true if cookie is secure
##### `pageBuildDataList[].runtime.cookies[].sameSite`: `"Strict"` | `"Lax"` | `"None"`
sameSite policy for the cookie

#### `pageBuildDataList[].runtime.sessionStorage`: `object`
- `[key: string]`: `string` – key-value pairs from sessionStorage
#### `pageBuildDataList[].runtime.localStorage`: `object`
- `[key: string]`: `string` – key-value pairs from localStorage

---

### `pageBuildDataList[].config`: `object`
Runtime setting for handling browser dialogs

#### `pageBuildDataList[].config.dialogHandling`: `object` 
##### `pageBuildDataList[].config.dialogHandling.decision`: `"accept"` | `"dismiss"` – the last runtime setting on how to handle dialogs

---

### `pageBuildDataList[].lightHouseData`: `object`
Lighthouse audits for mobile and desktop

#### `pageBuildDataList[].lightHouseData.mobile`: `object`
The Lighthouse audit result for mobile

#### `pageBuildDataList[].lightHouseData.desktop`: `object`
Lighthouse audit result for desktop

---

### `pageBuildDataList[].networkActivity`: `object`
Network activity data within a page

#### `pageBuildDataList[].networkActivity.url`: `string` – the document URL requested
#### `pageBuildDataList[].networkActivity.method`: `"GET"` – HTTP method used
#### `pageBuildDataList[].networkActivity.headers`: `object` – request headers
#### `pageBuildDataList[].networkActivity.postData`: `string` – post payload, if any
#### `pageBuildDataList[].networkActivity.redirectedTo`: `string` – URL redirected to
#### `pageBuildDataList[].networkActivity.resourceType`: `"document"` | `"other"` | `"fetch"` | `"xhr"` | `"ping"` | `"media"` | `"font"` | `"script"` | `"image"` | `"stylesheet"` – the resource type requested

#### Sizes
##### `pageBuildDataList[].networkActivity.sizes.requestBodySize`: `number` – size of the request body (POST data payload) in bytes
##### `pageBuildDataList[].networkActivity.sizes.requestHeadersSize`: `number` – size of the request headers in bytes
##### `pageBuildDataList[].networkActivity.sizes.responseBodySize`: `number` – size of the received response body in bytes
##### `pageBuildDataList[].networkActivity.sizes.responseHeadersSize`: `number` – size of the response headers in bytes

#### Timing
##### `pageBuildDataList[].networkActivity.timing.startTime`: `number` – time when the request started
##### `pageBuildDataList[].networkActivity.timing.domainLookupStart`: `number` – before DNS resolution began
##### `pageBuildDataList[].networkActivity.timing.domainLookupEnd`: `number` – after DNS resolution completed
##### `pageBuildDataList[].networkActivity.timing.connectStart`: `number` – before connection to server started
##### `pageBuildDataList[].networkActivity.timing.secureConnectionStart`: `number` – before TLS handshake began
##### `pageBuildDataList[].networkActivity.timing.connectEnd`: `number` – after connection was established
##### `pageBuildDataList[].networkActivity.timing.requestStart`: `number` – before the request was made
##### `pageBuildDataList[].networkActivity.timing.responseStart`: `number` – after first byte of response received
##### `pageBuildDataList[].networkActivity.timing.responseEnd`: `number` – after last byte of response received

#### Response Data
##### `pageBuildDataList[].networkActivity.responseData.url`: `string` – final URL of the response
##### `pageBuildDataList[].networkActivity.responseData.status`: `number` – response status code
##### `pageBuildDataList[].networkActivity.responseData.statusText`: `string` – response status text
##### `pageBuildDataList[].networkActivity.responseData.contentType`: `string` – content type of the response
##### `pageBuildDataList[].networkActivity.responseData.headers`: `object` – response headers
##### `pageBuildDataList[].networkActivity.responseData.body`: `string` – response body content
##### `pageBuildDataList[].networkActivity.responseData.json`: `object | null` – parsed JSON (if valid), else null
##### `pageBuildDataList[].networkActivity.responseData.ok`: `boolean` – whether the response status was OK

#### Security Details
##### `pageBuildDataList[].networkActivity.responseData.securityDetails.issuer`: `string` – TLS certificate issuer (optional)
##### `pageBuildDataList[].networkActivity.responseData.securityDetails.protocol`: `string` – TLS protocol used (optional)
##### `pageBuildDataList[].networkActivity.responseData.securityDetails.subjectName`: `string` – certificate subject (optional)
##### `pageBuildDataList[].networkActivity.responseData.securityDetails.validFrom`: `number` – cert start time (seconds since epoch)
##### `pageBuildDataList[].networkActivity.responseData.securityDetails.validTo`: `number` – cert end time (seconds since epoch)

#### Server Address
##### `pageBuildDataList[].networkActivity.responseData.serverAddr.ipAddress`: `string` – IP address of server
##### `pageBuildDataList[].networkActivity.responseData.serverAddr.port`: `number` – port number of server

---

## `final.networkRequestDataList[]` – Final list of XHR/Fetch network requests

### XHR/Fetch Requests – All non-document (XHR/Fetch) network requests

See `Document Requests` for the same structure.
