# INTRO

This document outlines the project assistant page and functionality. Here, users can establish their projects. The URL for this project assistant page is "https://webautomate.app/project-wizard". Users must be logged in, before they can set up a project.

To create a project, the following are configured in the given order:

* Solution type
* Basic settings
* URLs configuration
* Request und Browser settings
* Solution configuration. 
* Completion

Before a project can be created or updated, the following checks are made:

1. A check, if the project name is valid and not too long (maximum length in V1 is 64 Characters) and if it is unique for the active account.
2. The subscription is checked, if the user can create and execute such a project. If the user cannot, a modal is displayed with the details of which subscription package is required.

## STEPS

### 1. Solution type

A type of project is chosen. The solution can be one of the following:

* URL-Challenge
* Data-Extraction
* Google-Lighthouse-Audits
* Visual-Tests
* Screenshot Documentation
* Video Documentation

### 2. Basic settings

The basic settings has the following options:

Mode - URL scoping to determine if the project should be built directly on the URLs entered by the user or if the target URLs should be extracted from the current URL. This can be any of the following. The user must choose one of two options:

* URL: All entered URLs will be processed.
* Page: All URLs entered will be processed and further analyzed to extract more qualifying URLs for processing. The AI calls up every entered URL on the browser and scans for further qualified URLs, on which the project will be built.

// Note: In the UI, a "Add URL" button is displayed and clicking on the button displays a form that offers the following options:

* Enter a URL, which must begin with "https://..." or "http://..."
* The HTACCESS authentication data, if required
* One or more request headers
* Browser - The browser in which the project will be executed is selected. The user must choose one of these options:
  * Chrome
  * Firefox
  * Safari

  Google Lighthouse Audits can only be run on Chrome browser, which means the browser option is not available for selection in that case.

* Device.
The user can select from multiple predefined device specifications or create own device. A device specification contains:
  * Device name
  * User agent
  * Width
  * Height
  * Device scale factor
  * If device is mobile
  * If device is touch
  * Device Orientation (Portrait or Landscape)

If the solution type is Google Lighthouse Audits, then neither the Browser nor the Device options are available. In that case, the user has to specify, if the audit should be run on mobile and/or desktop.

### 3. URLs configuration

This step is omitted if the mode is set to PAGE. Here, the user has the following options:

#### 3.1 Select URLs - here the user specifies where to find potentially qualified URLs. 

Our AI scans all found URLs by default. However, in this section, you can specify in which areas of your HTML documents the search for URLs should be restricted.
The user is provided with a field to specify a DOM Selector. Additionally, the user can also specify HTML tags and attributes to be considered during the extraction.
Here are the list of tags and attributes considered:
* A-Tag: Attributes "href" and "ping"
* Base-Tag: Attribute "href"
* Blockquote-Tag: Attribute "cite"
* Form-Tag (excluding forms with method="post"): Attribute "action"
* Frame-Tag: Attribute "src"
* Iframe-Tag: Attribute "src"
* Img-Tag: Attributes "src", "srcset", "longdesc"
* Link-Tag: Attribute "href"
* Object-Tag: Attribute "data"
* Script-Tag: Attribute "src"
* Source-Tag: Attributes "src" "srcset"

#### 3.2 Normalize URLs (Handling similar URLs)

Determine how URLs are normalized in this area so that it can be assessed whether two syntactically different URLs are equivalent. The user has one of five options:

* Remove hash: whether # should be removed from URLs before the page is accessed. E.g., from http://user:pass@www.domain.com/?q=value#hash to http://user:pass@www.domain.com/?q=value
* Remove "www" from URL: whether "www" should be removed from URLs before the page is accessed. E.g., from http://user:pass@www.domain.com/?q=value#hash to http://user:pass@domain.com/?q=value#hash
* Whether query parameters should be removed from URLs. E.g., from http://user:pass@www.domain.com/?q=value#hash to http://user:pass@www.domain.com/#hash
* Remove trailing slashes from path names. E.g., from http://user:pass@www.domain.com/ to http://user:pass@www.domain.com
* Remove the authentication part. E.g., from http://user:pass@domain.com/path-1/path-2?q=value#hash to http://domain.com/path-1/path-2?q=value#hash

#### 3.3 Filter URLs - the AI performs services on all URLs by default. Here, the user has the following options:

* Filter Base: If the entered URL resolves differently (e.g., redirection from https://www.my-website.com to https://m.my-website.com on mobile devices), you can determine whether the original URL should remain as the base or the redirected URL should be taken as the base.
* Subdomains: Disable this option to exclude subdomains.
* External URLs: Enable this option to include URLs of foreign domains on your website.
* Internal URLs: Disable this option to exclude internal URLs.
* URLs: In this area, you set rules for the URL strings that the AI will consider using the URL-Pattern-Form. It is determined whether the URL must meet at least one REGEX rule or all rules.

### 4. Request and Browser Settings

This option is not available for the following solutions:
Google Lighthouse Audits

#### 4.1 Browser Settings.
Here, the user has the following options:

* Browser Language: Here, you can determine the language of the browser, which is set in the browser settings when the browser starts.
* Disable JavaScript: If enabled, JavaScript will be disabled when the browser is opened.
* When a URL request is complete: here the user can specify when the page is considered fully loaded. Possible options are:
  * When the 'DOMContentLoaded' event is triggered.
  * When the 'load' event is triggered.
  * When there are no network requests for 500ms from the page.
  * When the network has responded and the document has started loading.
  * When this JavaScript condition is met. In this case, the user will be prompted to enter a JS code.
* URL Call Timeout: If our AI does not receive a response after a set number of seconds when calling a URL, the URL is reported as faulty.

#### 4.2 Browser Storage.
Here, the user has the following options:

In this sandbox, you can adjust parameters, request headers, cookies, and storage mechanisms for your project. Here, the user has the following options:

* Cookies: Add cookies to the browser.
* Session Storage Entries: Add session storage entries to the browser.
* Local Storage Entries: Add local storage entries to the browser.

// Note: In the UI, these options are displayed in tabs.

##### 4.2.1 Network Activity.

Here, the user has the following options, configurable in their own sub-tabs:

* Insert Request Header: the user can specify which headers will be sent with the URL call. When inserting a Request Header, keys (Header Keys) and values (Header Values) are entered. The user can enter more than one pair.
* Insert Request Parameters: the user can determine which parameters will be attached to the URL during the call. Existing parameters will be overwritten.

  When inserting Request Parameters, keys (Parameter Keys) and values (Parameter Values) are entered. The user can enter multiple pairs. 

  // Note: In the UI, the preview is displayed in a table with a button below the table "+ Request Parameters", which the user clicks to open the form. 

* Insert Resources: the user can insert resources (CSS or JS) into any page. If you insert a JS snippet, it will be executed first before the remaining JavaScript code that was loaded over the network. There are 5 sub-options:
  * Content Type: the user selects whether a JavaScript, CSS, or HTML snippet will be inserted.
  * Type - Here, the user selects whether a URL should be inserted or if their own self defined content.
  * URL / Code Snippet - If a URL is to be inserted above, there is a field where you should enter the URL. Otherwise, there is a field where the code snippet (CSS or JS) should be inserted.
  * Insert Into - Here, you determine whether the resource will be inserted into HEAD-Tag or BODY-Tag.
  * Position - Here, you determine whether the resource will be inserted at the beginning or the end of HEAD-Tag or BODY-Tag.

  // Note: In the UI, A preview of the resources are displayed in a table with a button below the table "+ Insert Resources", which the user clicks to display the form in a drawer.

* Block HTTP Request - The user can block HTTP requests originating from a loaded page. The user has the following options when setting up a http request blockage:
  * URL specification based on the URL-Pattern
  * Method: The Request Type that should be blocked can be GET, POST, PUT, DELETE, or PATCH.
  * Error Code: What kind of error message will reject the request. Options are:
    * 'The operation was aborted (due to a user action).'
    * 'Permission to access a resource other than the network was denied.'
    * 'The IP address is unreachable. This usually means that there is no route to the specified host or network.'
    * 'The client has chosen to block the request.'
    * 'The request failed because the response was delivered with requirements that are not met.'
    * 'The connection was interrupted because no ACK was received for the sent data.'
    * 'The connection was closed.'
    * 'The attempt to connect failed.'
    * 'The attempt to connect was refused.'
    * 'The connection was reset.'
    * 'The internet connection has been interrupted.'
    * 'The hostname could not be resolved.'
    * 'The operation was aborted.'
    * 'A general error has occurred.'

  // Note: In the UI, A preview of the blocked requests are displayed in a table with a button below the table "+ Request Block", which the user clicks to display the form in a drawer.

* Mock HTTP Requests - The user can simulate HTTP requests (intercept and return a self-defined response) without calling the actual endpoint. The user has the following options when setting up a http mock:
  * URL specification based on the Regex-Pattern
  * Method: The Request Type that should be blocked can be GET, POST, PUT, DELETE, or PATCH.
  * Status Code: The status code of the simulated response can be specified.
  * Headers: The headers of the simulated response can be specified.
  * Content-Type: Set the content type of the simulated response.
  * Response Data: The response body can be specified as text or JSON.

  // Note: In the UI, A preview of the mocked requests is displayed in a table with a button below the table "+ HTTP Mock" which the user clicks to display the setup form.

* Modify HTTP Requests. You can change the headers and body (also parameters) of HTTP requests before they are sent. The user has the following options, when capturing a request modification:
  * URL specification based on the URL-Pattern-Form
  * Method: The Request Type that should be blocked can be GET, POST, PUT, DELETE, or PATCH.
  * Reduction function: This is a low-code option. Here, the user is offered a JS text field where a function must be specified to modify the request.

  Placeholder code:
  ```
  return {
    "headers": ...the headers as object
    "method": ...the method as string, if any
    "postData": ...the post data as object, if any
    "parameters": ...the parameters as object, if any
  };
  ```

  // Note: In the UI: A preview of the modified http requests are displayed in a table with a button below the table "+ request modification", which the user clicks to display the form in a drawer.

* Modify HTTP Responses - You can modify the headers and body of HTTP responses before they reach the browser. The user has the following options:
  * URL specification based on the URL-Pattern-Form
  * Method: The Request Type that should be blocked can be GET, POST, PUT, DELETE, or PATCH.
  * Reduction function: This is a low-code option. Here, the user is offered a JS text field where a function must be specified to modify the response.

  Placeholder code:
  ```
  return {
    "headers ": ...the headers as object
    "contentType ": ...the content type as string
    "body": ...the response body as text
    "json": ...the response body as JSON object
  };
  ```

  // Note: In the UI: A preview of the modified http responses are displayed in a table with a button below the table "+ response modification", which the user clicks to display the form in a drawer.

### 5. Solution Configuration

Each solution type has its own distinct configuration. The user has to specify a distinct name for every step. The name will be used to recognize the individual steps in reports and other views.
The name can be specified in 2 different ways:

* Directly as a string
* With JS code, which will be evaluated at runtime. The code must return a string.

We will look into all solution types below. In any case, apart from the lighthouse solution, which is not made up of steps, every other solution allows the user to specify a sequence of steps that make up the solution build. Every step can one of 4 types:

The solution type specific step
Actions or settings modifications: this is where browser and user actions are configured
Conditional sequence of steps: a block of steps that only gets executed, if the given condition is met.
Looped sequence of steps: a block of steps executed in a loop. The loops can be either fixed based on a predefined interaction count or dynamic based on a runtime evaluation.

#### 5.1 URL-Challenge Configuration

A URL-Challenge can either be executed in 2 modes:

Elimination mode: Each URL is subjected to the tests. If a URL fails a test, it is eliminated and not tested further. The test cycle ends when all URLs have either passed all tests or been eliminated.
Comprehensive Mode: Each URL undergoes all defined tests regardless of whether it passes a test or not.

##### 5.1.1 URL-Challenge Step

A URL-Challenge can either be AI-Powered or specified with javascript.

* AI-Powered URL-Challenge: Users can describe challenges in any natural language, which will be evaluated by AI after analyzing the active page, their screenshots and the webAutomateState (more on webAutomateState later).

* Custom URL-Challenge: Users can Specify with JavaScript what exactly should be tested. Current context data of the active page is available (Request data, Response data, Cookies, Certificate data, etc.).

#### 5.2 Google Lighthouse Audits Configuration

For Google Lighthouse Audits, the user can make 2 Solution Configurations. Explicit steps like in other solution types are not available.

* Audit Categories. The user can activate one of the following options to determine whether they should be examined during the test:
* Performance: 'In this category, your website is analyzed to determine how quickly it loads and when users can interact with your content.'
* Accessibility: 'In this category, your website is analyzed to see how well it can be used by people with disabilities.'
* Best Practices: 'In this category, your website is analyzed to determine whether best practices in terms of security and modern web development are maintained on your website.'
* SEO: 'In this category, your website is analyzed to determine how well it can be crawled by search engines and represented in their search results.'
* PWA: 'This category examines the Progressive Web App (PWA) features of your website.'

  Display and Download Reports. Here, the user can set which reports from Lighthouse in the formats HTML, JSON, or EXCEL should be downloaded. Optionally, the user can also set that only the Lighthouse scores are determined.

#### 5.3 E2E Visual Tests Configuration

For Visual-Tests the following Solution Configurations are required. 

* Highlight color: the color used to highlight the visual differences is specified here. Note: in the UI, this is specified as a HEX value.
* Minimum cluster size: the clusters are defined here. Clusters are groups of pixels that are considered as a unit during comparison. Note: in the UI, this is specified as a pixel value.

##### 5.3.1 E2E Visual Test Step

A Visual-Test  Step can either be “AI-Reviewer” or “Manual Reviewer”.

* AI-Reviewer: New Screenshots are automatically evaluated for visual differences using AI. The AI applies the review instructions and comes to the conclusion if the new screenshot should be accepted and should become the new baseline.
* Manual Reviewer: Screenshots are only automatically accepted, when no visual changes are detected. Else the user will have to review and accept them themselves.

Irrespective of review type, the coverage area has to be specified: to determine what should be captured in a screenshot. The user has the following options:

* Viewport: This is to capture only the viewport. So it is totally dependent on the device type selected in basic settings above
* DOM-Element: this is to capture a specific DOM element. The user has the following options. The user will have to enter a selector to identify the element in the browser. If multiple elements match the selector, only the first match is assumed.
* Full page: to do a full page capturing.

**Additionally the following configurations are needed for the “AI-Reviewer” option**

* The review instruction: A clear instruction to the AI, how to approach the visual diff.
* A confidence threshold: The confidence threshold in percentage determines how confident AI needs to be to accept or reject visual differences.

**Additionally the following configurations are needed for the “Manual-Reviewer” option**

* Tolerance: to determine the tolerance of what gets flagged as a visual difference. The user has the following options:
  * Strict: Every pixel difference, no matter how small, is taken into account.
  * Moderate: This works like the strict variant, except that differences due to blinking cursors are ignored and that differences due to anti-aliasing are ignored.
  * Open: This is a more laid back variant, that behaves like the moderate variant, but additionally ignores minimal differences in brightness between pixels.

#### 5.4 Screenshot Documentation

A Screenshot documentation Step can either be “AI-Powered” or “Custom”.

* AI-Powered: The user describes in natural language, which elements should be captured on the page. Additionally, the user can specify, if the screenshots captured after the first execution should be maintained or if the instruction should be reevaluated on every build.
* Custom: This requires a little JavaScript knowledge, as the user is expected to specify which elements they wish to capture.

##### 5.4.1 AI-Powered Documentation

* Documentation instruction: A clear instruction to the AI, how to identify the elements to be captured.
* A confidence threshold: The confidence threshold in percentage determines how confident AI needs to be about an element, before it is captured.
* Maintain instruction: The user can specify, if the screenshots captured after the first execution should be maintained or if the instruction should be reevaluated on every build.

##### 5.4.2 JavaScript-Based Custom Documentation.

The user has the following options:

* Coverage: to determine what should be captured in a screenshot. The user has the following options:
  * Ansichtsbereich des Browsers: This is to capture only the viewport. So it is totally dependent on the device type selected in basic settings above
  * DOM-Element: this is to capture a specific DOM element. The user has the following options:
    * A selector to identify the target elements.
  
      An option on which matching elements should be effectively captured. The user has the following options: 
  
      * Alle Treffer: to make capture of all matching elements
      * Erster Treffer: to capture only the first matching element.
      * Letzter Treffer: to capture only the last matching element.
      * Benutzerdefiniert. To specify which pages should be captured. Here are some examples:
        * 1: Erfasst das erste Element
        * 1,4: Erfasst die ersten und vierten Elemente
        * 2,3_5,7: Erfasst die zweite, dritte bis fünfte und siebte Elemente
  * Vollständige Seite: the full page

#### 5.5 Data Extraction Configuration

For Data-Extraction Request apart from the steps, no other solutions configuration are required. The user has to specify a sequence of steps, that all get sequentially executed at run-time. The available steps are:

##### 5.5.1 Data Extraction Step

A Data Extraction can either be AI-Powered or Custom.

* AI-Powered: Users can describe challenges in any natural language, which will be evaluated by AI using the webAutomateState (more on webAutomateState later).
* Custom with javascript: Specify with JavaScript what exactly is tested. Current context data of the active page is available (Request data, Response data, Cookies, Certificate data, etc.).

#### 5.6 Screen Video Recording Configuration

The Screen Videos start recording immediately the page starts loading. For Screen Videos the following Solution Configurations are available. 

* Delay between steps - if multiple steps are configured below, the AI pauses for the specified duration here, after executing a step.
The user can optionally specify a sequence of steps, that all get sequentially executed during run time. 

### 6. Completion

This is where the finishing settings of the project are made. The completion configuration has the following options:

* Subscription: The user can select the subscription package they want to use for this project. The user can also opt to use their available automation credits.
* Event Log: The user can specify which events should be logged. The user has the following options:
  * Errors (auto selected and deactivated)
  * Info
  * Success
  * Warning
* Automated Builds
    * The user can specify if the project should be executed automatically. If activated, the user has the following options:
      * Validity - the duration for which the project would be executed automatically. The user has the following options:
        * Start date: when the project should start executing automatically.
        * End date - if left empty, then the project is built for ever, as long as there is an active subscription associated with it.
      * Scheduler-Type.
        * Random Scheduler: to randomly schedule the project execution. The user has to specify the following:
          * A time range, when their website gets the most traffic. The AI needs this information to suggest a random time, outside this range.
          * Frequency - the number of times this project should be executed per Day, per Week or per Month. The maximum number of times a project can be executed, is dependent on the subscription package.
        * Fixed Scheduler: to schedule the project execution at a fixed time. The user has to specify the following:
          Via cron expression - the user gets to either configure a cron expression using a form or directly enter a cron expression. Once the scheduler-type has been set, the AI immediately calculates the next execution time (on the assumption, this project will be completed, saved and activated momentarily).

* Notifications - based on the active subscription package, the user gets notifications with the build results. The user gets the following choices (multiple can be selected):

  * EMail-Notification - for which an email address must be entered
  * Webhook-Notification - which is configured as follows:
  
    * POST URL - must be specified
    * Basic Authentication - data can optionally be entered
    * Header - can also be optionally entered, which will be sent along while triggering the webhook.


