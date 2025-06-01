# WebAutomate Project-StepList Specification

In the specification for the WebAutomate project configuration file, the `solution.config.stepList.[]` is a list of steps that are executed in the order they are defined. The steps can be of different types, such as actions, conditions, loops, and solutions.

In a WebAutomate Project Specification, the stepList is found at - `solution.config.stepList`: `Array<object>`. All steps have the following properties:

## `solution.config.stepList.[].id`: `string`
An arbitrary id

## `solution.config.stepList.[].stepType`: `string`
The specification of an item depends on the stepType. The following options are available:

- `solution`: `string` - The solution step, which depends on the `solution.appName`
- `action`: `string` - The action step, which depends on the type of browser action that should be carried out
- `condition`: `string` - The condition step, which depends on the type of condition that should be checked
- `loop`: `string` - The loop step, which depends on the type of loop that should be executed

## `solution.config.stepList.[].type`: `string`
The type of the step, which depends on the `solution.config.stepList.[].stepType` (More details below).

##### `solution.config.stepList.[].categoryId`: `string`
The category id of the step, which depends on the stepType.

##### `solution.config.stepList.[].label`: `string`
The label of the step, which is displayed in the WebAutomate UI. This is a human-readable label, which should be used to identify the step.

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

##### `solution.config.stepList.[].*` Specific for `solution.appName` === `lightHouse`
As mentioned above, lightHouse projects do not have a step list, so this list will be empty. The lightHouse project will be executed as a single step and the configuration is done in the `solution.config` object.

##### `solution.config.stepList.[].*` Specific for `solution.appName` === `dataExtractions`
This is only used for the dataExtractions solution and is used to identify the data extractions in the WebAutomate system.

### If `solution.config.stepList.[].stepType` === `solution`, then - `solution.config.stepList.[].solution` can only be one of:
- `urlChallenge`: `string` - The URL challenge solution
- `dataExtractions`: `string` - The data extractions solution
- `e2eVisualTests`: `string` - The visual tests solution
- `screenshots`: `string` - The screenshot documentation solution
- `screenVideos`: `string` - The video documentation solution

### Specific props for `solution.appName` === `urlChallenge`
For the `urlChallenge` solution, the `solution.config.stepList.[].stepType` is always `solution` and the `solution.config.stepList.[].solution` is always `urlChallenge`.
There are three other kinds of steps possible for `solution.config.stepList.[].stepType`:
- `action`: `string` - The action step, which depends on the type of browser action that should be carried out
- `condition`: `string` - The condition step, which depends on the type of condition that should be checked
- `loop`: `string` - The loop step, which depends on the type of loop that should be executed

#### If `solution.config.stepList.[].stepType` === `solution` && `solution.config.stepList.[].solution` === `urlChallenge`, then - `solution.config.stepList.[].categoryId` can only be one of:

- `custom`: `string` - This is a custom url challenge, where code provided by the user is executed to determine if the challenge is successful. If `solution.config.stepList.[].categoryId` === `custom`, then `solution.config.stepList.[].type` can only one of:
    - `js`: `string` - This is a JavaScript challenge, where the user specifies a JavaScript code to be executed and the truthiness of the result determines, if the challenge is successful. The JavaScript code should return a boolean value. The function should return true, if the challenge is successful and false, if the challenge is not successful.
      In this case, the `solution.config.stepList.[].value`: `object` property is used to specify the JavaScript code to be executed.

      Example if `solution.config.stepList.[].value` === `js`:
        ```json
        {
            "jsCode": {
                "value": "return window.document.querySelector('*').length < 2000;",
                "isValid": true,
                "isValidated": true
            }
        }
        ```
        - `jsCode.value`: `string` - The JavaScript code to be executed to determine if the challenge is successful. The function should return a boolean value. The function is executed in the context of the page and can therefore access the DOM and the JavaScript context of the page. The function should return a boolean value, which is used to determine if the challenge is successful.
        - `jsCode.isValid`: `boolean` - An indicator if the JavaScript code is valid
        - `jsCode.isValidated`: `boolean` - An indicator if the JavaScript code is validated

    - `automated`: `string` - This is an automated url challenge, where the challenge is evaluated by the system. If `solution.config.stepList.[].categoryId` === `automated`, then `solution.config.stepList.[].type` can only be one of:
        - `ai`: `string` - This is an AI challenge, where the user describes the challenge in natural language and the system leverages AI to execute the challenge automatically.

      Example of a `solution.config.stepList.[].value` === `automated`:
      ```json
      {
          "code": {
              "value": "This page contains a button with the text 'Click me', in the same color as the background. The button is located in the top right corner of the page.",
              "isValid": true,
              "isValidated": true
          }
      }
      ```
      - `code.value`: `string` - The instructions (ai prompt) on what to extract from the page and in what format.
      - `code.isValid`: `boolean` - An indicator if the ai-prompt is valid
      - `code.isValidated`: `boolean` - An indicator if the ai-prompt is validated

### Specific props for `solution.appName` === `dataExtractions`

For the `dataExtractions` solution, the `solution.config.stepList.[].stepType` is always `solution` and the `solution.config.stepList.[].solution` is always `dataExtractions`.
There are three other kinds of steps possible for `solution.config.stepList.[].stepType`:
- `action`: `string` - The action step, which depends on the type of browser action that should be carried out
- `condition`: `string` - The condition step, which depends on the type of condition that should be checked
- `loop`: `string` - The loop step, which depends on the type of loop that should be executed

#### If `solution.config.stepList.[].stepType` === `solution` && `solution.config.stepList.[].solution` === `dataExtractions`, then - `solution.config.stepList.[].categoryId` can only be one of:

- `custom`: `string` - If `solution.config.stepList.[].categoryId` === `custom`, then `solution.config.stepList.[].type` can only one of:
    - `js`: `string` - This is a Javascript based data extraction, where the user specifies a JavaScript code to be executed and the result is used to extract data from the page. The function should return a JSON. In this case, the `solution.config.stepList.[].value`: `object` property is used to specify the JavaScript code to be executed.

      Example of a `solution.config.stepList.[].value` === `js`:
      ```json
      {
          "jsCode": {
              "value": "return 42;",
              "isValid": true,
              "isValidated": true
          }
      }
      ```
      - `solution.config.stepList.[].value.jsCode.value`: `string` - The JavaScript code to be executed to extract the data. The function should return a number, string or JSON object. The function is executed in the context of the page and can therefore access the DOM and the JavaScript context of the page. The function should return a JSON object, which is used to extract the data from the page. The function should return a JSON object, which contains the data to be extracted.
      - `solution.config.stepList.[].value.jsCode.isValid`: `boolean` - An indicator if the JavaScript code is valid
      - `solution.config.stepList.[].value.jsCode.isValidated`: `boolean` - An indicator if the JavaScript code is validated

- `automated`: `string` - This is an automated data extraction, where the data is extracted by the system. If `solution.config.stepList.[].categoryId` === `automated`, then `solution.config.stepList.[].type` can only be one of:
    - `ai`: `string` - This is an AI based data extraction, where the user describes the data to be extracted in natural language, and the system leverages AI to extract the data automatically.

      Example of a `solution.config.stepList.[].value` === `automated`:
      ```json
        {
          "code": {
            "value": "Extrahiere den Seitentitel.",
            "isValid": true,
            "isValidated": true
          }
        }
      ```
        - `solution.config.stepList.[].value.code.value`: `string` - The instructions (ai prompt) on what to extract from the page and in what format.
        - `solution.config.stepList.[].value.code.isValid`: `boolean` - An indicator if the ai-prompt is valid
        - `solution.config.stepList.[].value.code.isValidated`: `boolean` - An indicator if the ai-prompt is validated

### Specific props for `solution.appName` === `screenshots`

For the `screenshots` solution, the `solution.config.stepList.[].stepType` is always `solution` and the `solution.config.stepList.[].solution` is always `screenshots`.
There are three other kinds of steps possible for `solution.config.stepList.[].stepType`:
- `action`: `string` - The action step, which depends on the type of browser action that should be carried out
- `condition`: `string` - The condition step, which depends on the type of condition that should be checked
- `loop`: `string` - The loop step, which depends on the type of loop that should be executed

#### If `solution.config.stepList.[].stepType` === `solution` && `solution.config.stepList.[].solution` === `screenshots`, then - `solution.config.stepList.[].categoryId` can only be one of:

- `custom`: `string` - If `solution.config.stepList.[].categoryId` === `custom`, then `solution.config.stepList.[].type` can only one of:
    - `manual`: `string` - The user has to specify elements that should be captured.

      Example if a `solution.config.stepList.[].value` === `manual`:
      ```json
      {
        "target": "viewport",
        "selectorTargets": "all",
        "customSelectorTargets": ""
      }
      ```
        - `solution.config.stepList.[].value.target`: `string` - The target to be used for the screenshot. The options are:
            - `viewport`: `string` - The screenshot is taken of the whole viewport
            - `fullPage`: `string` - The screenshot is taken of the whole page
            - `element`: `string` - The screenshot is taken of a specific element
        - `solution.config.stepList.[].value.selectorTargets`: `string` - The selector targets to be used for the screenshot. The options are:
            - `all`: `string` - The screenshot is taken of all elements that match the selector
            - `first`: `string` - The screenshot is taken of the first element that matches the selector
            - `last`: `string` - The screenshot is taken of the last element that matches the selector
        - `solution.config.stepList.[].value.customSelectorTargets`: `string` - A custom specification which elements among matching elements that should be captured. The elements are specified by their position in the DOM. The value (which are reflection of element positions) are separated by a comma. The elements can be specified as a range, which is specified by the start and end index separated by a dash. The elements can be specified as a list, which is specified by the index separated by a comma. The elements can be specified as a range and list, which is specified by the index separated by a comma and the range separated by a dash.
          Example of a `solution.config.stepList.[].value.customSelectorTargets`:
            - 1: 'Captures the first element'
            - '1,4': 'Captures the first and fourth elements'
            - '2,3_5,7': 'Captures the second, third to fifth, and seventh elements'

- `automated`: `string` - If `solution.config.stepList.[].categoryId` === `automated`, then `solution.config.stepList.[].type` can only be one of:
    - `ai`: `string` - This is the AI-based screenshot, where the user describes the screenshot to be taken in natural language, and the system leverages AI to identify the elements to be captured. 

      Example if a `solution.config.stepList.[].value` === `automated`:
      ```json
        {
          "ai": {
            "instructions": {
              "value": "Mache einen Screenshot des Login-Buttons.",
              "isValid": true,
              "isValidated": true
            },
            "confidenceLevel": 70,
            "reuseSelectors": true
          }
        }
      ```
      Description of the properties:
      - `solution.config.stepList.[].value.ai`: `object` - The AI object, which contains the instructions and the confidence level
      - `solution.config.stepList.[].value.ai.instructions`: `object` - The instructions for the AI, which are used to determine if the screenshot is accepted or rejected. The instructions are in natural language and should be as specific as possible.
        - `solution.config.stepList.[].value.ai.instruction.value`: `string` - The instructions for the AI
        - `solution.config.stepList.[].value.ai.instruction.isValid`: `boolean` - An indicator if the instructions are valid
        - `solution.config.stepList.[].value.ai.instruction.isValidated`: `boolean` - An indicator if the instructions are validated
      - `solution.config.stepList.[].value.ai.confidenceLevel`: `number` - The confidence level for the AI. The value is between 0 and 100. It's a measure of how sure the AI should be when identifying elements to be captured.
        - `solution.config.stepList.[].value.ai.confidenceLevel` < 50 implies low: The AI is very lenient and will accept a wide range of elements, which may lead to false positives (accepting elements that are not relevant).
        - 50 <= `solution.config.stepList.[].value.ai.confidenceLevel` < 90 implies medium: The AI will be more selective and will only accept elements that are very likely to be relevant, reducing the chance of false positives.
        - `solution.config.stepList.[].value.ai.confidenceLevel` > 90 implies high: The AI is very strict and will only accept elements that are very likely to be relevant, reducing the chance of false positives even further.
      - `solution.config.stepList.[].value.ai.reuseSelectors`: `boolean` - If this is set to true, the AI will reuse the selectors from the previous steps, if available. This can be useful to avoid re-identifying elements that have already been identified in previous steps. If this is set to false, the AI will always identify the elements from scratch.
      
### Specific props for `solution.appName` === `e2eVisualTests`

For the `e2eVisualTests` solution, the `solution.config.stepList.[].stepType` is always `solution` and the `solution.config.stepList.[].solution` is always `e2eVisualTests`.
There are three other kinds of steps possible for `solution.config.stepList.[].stepType`:
- `action`: `string` - The action step, which depends on the type of browser action that should be carried out
- `condition`: `string` - The condition step, which depends on the type of condition that should be checked
- `loop`: `string` - The loop step, which depends on the type of loop that should be executed

#### If `solution.config.stepList.[].stepType` === `solution` && `solution.config.stepList.[].solution` === `e2eVisualTests`, then - `solution.config.stepList.[].categoryId` can only be one of:

- `custom`: `string` - If `solution.config.stepList.[].categoryId` === `custom`, then `solution.config.stepList.[].type` can only one of:
    - `manual`: `string` - The user has to specify elements that should be captured and visual-diffed. On every build, the system will take a screenshot of the elements and compare it with the previous screenshot. If no differences are found, the screenshot is accepted automatically. If differences are found, the user has to manually check the differences and accept or reject the screenshot.

      Example of `solution.config.stepList.[].value`, if `solution.config.stepList.[].type` === `manual`:
      ```json
      {
        "target": "viewport",
        "selectorTargets": "first",
        "customSelectorTargets": "",
        "strategy": "moderate"
      }
      ```
      Description of the properties:
      - `solution.config.stepList.[].value.target`: `string` - The target to be used for the screenshot. The options are:
          - `viewport`: `string` - The screenshot is taken of the whole viewport
          - `fullPage`: `string` - The screenshot is taken of the whole page
          - `element`: `string` - The screenshot is taken of a specific element. In this case `solution.config.stepList.[].selector` is used to specify the selector of the elements.
      - `solution.config.stepList.[].value.selectorTargets`: `string` - The value is always `first`
      - `solution.config.stepList.[].value.customSelectorTargets`: `string` - The value is always an empty string.
      - `solution.config.stepList.[].value.strategy`: `string` - The strategy to be used for the screenshot. The options are:
          - `moderate`: `string` - The moderate strategy is used to compare the images. The images are compared with a tolerance of 2.5 and the antialiasing is ignored. The caret is also ignored.
          - `strict`: `string` - The strict strategy is used to compare the images. The images are compared with a tolerance of 0 and the antialiasing is not ignored. The caret is also not ignored.
          - `open`: `string` - The open strategy is used to compare the images. The images are compared with a tolerance of 5 and the antialiasing is ignored. The caret is also ignored.

- `automated`: `string` - If `solution.config.stepList.[].categoryId` === `automated`, then `solution.config.stepList.[].type` can only be one of:
    - `ai`: `object` - The user has to specify elements that should be captured and review instruction to the AI, how identified visual differences should be handled. On every build, the system will take a screenshot of the elements and compare it with the previous screenshot. If no differences are found, the screenshot is accepted automatically. If differences are found, the system will leverage AI to check the differences and accept or reject the screenshot. The user can also specify a confidence level, which is used to determine if the AI is confident enough to accept or reject the screenshot.

      Example of `solution.config.stepList.[].value`, if `solution.config.stepList.[].type` === `ai`:
      ```json
      {
        "target": "fullPage",
        "selectorTargets": "first",
        "customSelectorTargets": "",
        "ai": {
          "instructions": {
            "value": "Akzeptiere den Screenshot, wenn nur neue Bilder hinzugefügt wurden, aber keine bestehenden entfernt wurden.",
            "isValid": true,
            "isValidated": true
          },
          "confidenceLevel": 70
        }
      }
      ```
    - `solution.config.stepList.[].value.target`, `solution.config.stepList.[].value.selectorTargets`, ..., `solution.config.stepList.[].value.strategy` are the same as above
    - `solution.config.stepList.[].value.ai`: `object` - The AI object, which contains the instructions and the confidence level
    - `solution.config.stepList.[].value.ai.instructions`: `object` - The instructions for the AI, which are used to determine if the screenshot is accepted or rejected. The instructions are in natural language and should be as specific as possible.
      - `solution.config.stepList.[].value.ai.instruction.value`: `string` - The instructions for the AI
      - `solution.config.stepList.[].value.ai.instruction.isValid`: `boolean` - An indicator if the instructions are valid
      - `solution.config.stepList.[].value.ai.instruction.isValidated`: `boolean` - An indicator if the instructions are validated
    - `solution.config.stepList.[].value.ai.confidenceLevel`: `number` - The confidence level for the AI. The value is between 0 and 100. If the confidence level is below this value, the AI will not accept or reject the screenshot automatically.

### Specific props for `solution.appName` === `screenVideos`

For the `screenVideos` only these three other kinds of steps possible for `solution.config.stepList.[].stepType`:
- `action`: `string` - The action step, which depends on the type of browser action that should be carried out
- `condition`: `string` - The condition step, which depends on the type of condition that should be checked
- `loop`: `string` - The loop step, which depends on the type of loop that should be executed

There is not `solution.config.stepList.[].stepType` === `solution` for the `screenVideos` solution. The reason is because videos start recording the moment a page is opened and stop recording when the page is closed.

### Specific props for `solution.config.stepList.[].stepType` === `action`  

Actions are the most common type of steps. They are used to perform actions on the page, such as clicking a button, filling out a form, manipulating the context (for example, setting cookies or setting handling of window.alert), or navigating to a different page.
For actions `solution.config.stepList.[].categoryId` can only be one of:

- `userInteractionEvents`: `string` - This category contains all actions that are related to user interaction events. This includes mouse events, keyboard events, touch events and element events. The user interaction events are used to interact with the page and perform actions on the page.
- `formElementManipulation`: `string` - This category contains all actions that are related to form and element manipulation. This includes form events, element events and element manipulation.
- `navigationAndBrowsing`: `string` - This category contains all actions that are related to navigation and browsing. This includes navigation events, browsing events and network events.
- `dataProcessingAndRequests`: `string` - This category contains all actions that are related to data processing and requests. This includes data processing events, request events and response events.
- `advancedBrowserApiOperations`: `string` - This category contains all actions that are related to advanced browser API operations. This includes advanced browser API operations, advanced browser API events and advanced browser API requests.
- `settings`: `string` - This category contains all actions that are related to settings. For example, this includes dialog handling, cookie management, and storage management.

#### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `userInteractionEvents`
Actions in the `userInteractionEvents` category are used to interact with the page and perform actions on the page. This includes mouse events, keyboard events, touch events and element events. The user interaction events are used to interact with the page and perform actions on the page.

For `solution.config.stepList.[].categoryId` === `userInteractionEvents`, then `solution.config.stepList.[].type` can only be one of:
  - `mouseInteraction`: `string` - This category contains all actions that are related to mouse interaction. This includes mouse events, keyboard events, touch events and element events. The mouse interaction events are used to interact with the page and perform actions on the page. The mouse interaction events can be used to perform actions on the page, such as clicking a button, filling out a form, manipulating the context (for example, setting cookies or setting handling of window.alert), or navigating to a different page.
  - `elementHover`: `string` - This category contains all actions that are related to element hover. This includes element hover events and element hover actions.
  - `elementClick`: `string` - This category contains all actions that are related to element click. This includes element click events and element click actions.
  - `keyboardPress`: `string` - This category contains all actions that are related to keyboard press. This includes keyboard events, keyboard actions and keyboard shortcuts.
  - `elementFocus`: `string` - This category contains all actions that are related to element focus. This includes element focus events and element focus actions.
  - `tap`: `string` - This category contains all actions that are related to element blur. This includes element blur events and element blur actions.
  - `elemmentTap`: `string` - This category contains all actions that are related to element tap. This includes element tap events and element tap actions.

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `userInteractionEvents` && `solution.config.stepList.[].type` === `mouseInteraction`

For these types of actions `solution.config.stepList.[].value.target` can only be one of:

- `button`: `string` - This is a mouse button event, which can be used to click, press down or release a mouse button.
- `move`: `string` - This is a mouse move event, which can be used to move the mouse pointer to a specific position on the page.
- `wheel`: `string` - This is a mouse wheel event, which can be used to scroll the page horizontally or vertically.

If `solution.config.stepList.[].value.target` === `button` or `move`, then the following properties are available in `solution.config.stepList.[].value`:

- `solution.config.stepList.[].value.x`: `number` - The x coordinate, where the mouse should be moved to, before the mouse button is clicked, pressed down or released.
- `solution.config.stepList.[].value.y`: `number` - The y coordinate, where the mouse should be moved to, before the mouse button is clicked, pressed down or released.
- `solution.config.stepList.[].value.buttonAction`: `'click' | 'down' | 'up'` - The action to be performed with the mouse button. The options are:

If `solution.config.stepList.[].value.buttonAction` === `click` - The mouse button is clicked. In this case, the following properties are available:

- `solution.config.stepList.[].value.buttonType` === `'left' | 'middle' | 'right'` - The mouse button clicked. The options are:
  - `left`: `string` - The left mouse button
  - `middle`: `string` - The middle mouse button
  - `right`: `string` - The right mouse button

If `solution.config.stepList.[].value.buttonType` === `left` - When the left mouse button is clicked, then `solution.config.stepList.[].value.clickCount` is needed.
- `solution.config.stepList.[].value.clickCount`: `number` - The number of times the mouse button is clicked. The options are:
    - `1`: `number` - The mouse button is clicked once
    - `2`: `number` - The mouse button is clicked twice

- `solution.config.stepList.[].value.buttonType` === `down` - The mouse button is pressed down and held
- `solution.config.stepList.[].value.buttonType` === `up` - The mouse button is released (only has effect if the button is already pressed down)

If `solution.config.stepList.[].value.target` === `move` then the following properties are available in `solution.config.stepList.[].value`:
- `solution.config.stepList.[].value.x`: `number` - The x coordinate of the mouse pointer, relative to the viewport, where the mouse should be moved to.
- `solution.config.stepList.[].value.y`: `number` - The y coordinate of the mouse pointer, relative to the viewport, where the mouse should be moved to.

If `solution.config.stepList.[].value.target` === `wheel` then the following properties are available in `solution.config.stepList.[].value`:
- `solution.config.stepList.[].value.dx`: `number` - The horizontal scroll amount. This is the number of pixels to scroll horizontally. A positive value scrolls to the right, a negative value scrolls to the left.
- `solution.config.stepList.[].value.dy`: `number` - The vertical scroll amount. This is the number of pixels to scroll vertically. A positive value scrolls down, a negative value scrolls up.
  
Example of a `solution.config.stepList.[].value` for `mouseInteraction` && `solution.config.stepList.[].value.target` === `wheel`:
```json
{
  "id": "A0sniuPe",
      "type": "mouseInteraction",
      "categoryId": "userInteractionEvents",
      "stepType": "action",
      "label": "Mouse wheel",
      "fallbackLabel": "Mouse Gesten - 2025-05-29_18-11-38",
      "labelScript": {
          "value": ""
      },
      "labelStrategy": "LABEL",
      "selector": "",
      "abortOnError": false,
      "ignoreOnError": false,
      "originalStepIndex": 45,
      "value": {
          "target": "wheel",
          "dx": 100,
          "dy": 600
      }
}
```

Example of a `solution.config.stepList.[].value` for `mouseInteraction` && `solution.config.stepList.[].value.target` === `move`:
```json
{
  "id": "A0sniuPe",
      "type": "mouseInteraction",
      "categoryId": "userInteractionEvents",
      "stepType": "action",
      "label": "Mouse move",
      "fallbackLabel": "Mouse Gesten - 2025-05-29_18-11-38",
      "labelScript": {
          "value": ""
      },
      "labelStrategy": "LABEL",
      "selector": "",
      "abortOnError": false,
      "ignoreOnError": false,
      "originalStepIndex": 45,
      "value": {
          "target": "move",
          "x": 0,
          "y": 0
      }
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `userInteractionEvents` && `solution.config.stepList.[].type` === `elementHover`
This action is used to hover over an element on the page. It is useful for triggering hover effects or tooltips.
In this case `solution.config.stepList.[].value` is not needed, as a hover action is performed on an element identified by a CSS selector.

Example of a `solution.config.stepList.[].*` for `elementHover`:
```json
{
    "id": "A0sniuPe",
    "type": "elementHover",
    "categoryId": "userInteractionEvents",
    "stepType": "action",
    "label": "Element Hover",
    "fallbackLabel": "Element Hover - 2025-05-29_18-11-38",
    "labelScript": {
        "value": ""
    },
    "labelStrategy": "LABEL",
    "selector": ".my-element",
    "abortOnError": false,
    "ignoreOnError": false,
    "originalStepIndex": 45
}
```

- `solution.config.stepList.[].selector` - The CSS selector of the element that should be hovered. The element is identified by the CSS selector, and the mouse pointer is moved to the center of the element. If the element is not found, the step fails.

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `userInteractionEvents` && `solution.config.stepList.[].type` === `elementClick`

This action is used to click on an element on the page. It is useful for triggering click events or submitting forms. The `solution.config.stepList.[].value.buttonType` can be one of:

- `left`: `string` - The left mouse button is clicked. This is the default value.
- `middle`: `string` - The middle mouse button is clicked.
- `right`: `string` - The right mouse button is clicked.

If `solution.config.stepList.[].value.buttonType` === `left`, then the following properties are available in `solution.config.stepList.[].value`:

- `solution.config.stepList.[].value.clickCount`: `number` - The number of times the left mouse button is clicked. 

If `solution.config.stepList.[].value.buttonType` === `left`, then `solution.config.stepList.[].value.clickCount` is needed, which can be one of:
- `1`: `number` - The left mouse button is clicked once.
- `2`: `number` - The left mouse button is clicked twice.

If `solution.config.stepList.[].value.buttonType` === `left` and `solution.config.stepList.[].value.clickCount` === `1`, then the following properties are available:
  - `solution.config.stepList.[].value.delay`: `number` - The delay in milliseconds before the button is released after the click. This is useful for simulating a long press or a double click. The default value is `0`, which means that the button is released immediately after the click.

Example of a `solution.config.stepList.[].*` for `elementClick`, when the left button is clicked once:
```json
{
    "id": "A0sniuPe",
    "type": "elementClick",
    "categoryId": "userInteractionEvents",
    "stepType": "action",
    "label": "Element Click",
    "fallbackLabel": "Element Click - 2025-05-29_18-11-38",
    "labelScript": {
        "value": ""
    },
    "labelStrategy": "LABEL",
    "selector": ".my-element",
    "abortOnError": false,
    "ignoreOnError": false,
    "originalStepIndex": 45,
    "value": {
        "buttonType": "left",
        "clickCount": 1,
        "delay": 0
    }
}
```

Example of a `solution.config.stepList.[].*` for `elementClick`, when the left button is clicked twice:
```json
{
    "id": "A0sniuPe",
    "type": "elementClick",
    "categoryId": "userInteractionEvents",
    "stepType": "action",
    "label": "Element Click",
    "fallbackLabel": "Element Click - 2025-05-29_18-11-38",
    "labelScript": {
        "value": ""
    },
    "labelStrategy": "LABEL",
    "selector": ".my-element",
    "abortOnError": false,
    "ignoreOnError": false,
    "originalStepIndex": 45,
    "value": {
        "buttonType": "left",
        "clickCount": 2
    }
}
```
Example of a `solution.config.stepList.[].*` for `elementClick`, when the middle button is clicked:
```json
{
    "id": "A0sniuPe",
    "type": "elementClick",
    "categoryId": "userInteractionEvents",
    "stepType": "action",
    "label": "Element Click",
    "fallbackLabel": "Element Click - 2025-05-29_18-11-38",
    "labelScript": {
        "value": ""
    },
    "labelStrategy": "LABEL",
    "selector": ".my-element",
    "abortOnError": false,
    "ignoreOnError": false,
    "originalStepIndex": 45,
    "value": {
        "buttonType": "middle"
    }
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `userInteractionEvents` && `solution.config.stepList.[].type` === `keyboardPress`

This action is used to simulate a keyboard press on the page. It is useful for triggering keyboard events or submitting forms. The `solution.config.stepList.[].value.keyConfigList.[]` is an array of objects, where each object represents a keyboard event. Each object has the following properties:

- `solution.config.stepList.[].value.keyConfigList.[].key`: `char` or `string` - The key to be pressed. This can be a single character, a special key (like `{Escape}`, `'{f1}'`, etc.).
- `solution.config.stepList.[].value.keyConfigList.[].action`: `string` - The action to be performed with the key. The options are:
  - `press`: `string` - The key is pressed down and released immediately (default action)
  - `down`: `string` - The key is pressed down and held down
  - `release`: `string` - The key is released (only has effect if the key is already pressed down)
  - `type`: `string` - This is used to simulate typing a string of characters.

If `solution.config.stepList.[].value.[].action` === `type`, then `solution.config.stepList.[].value.keyConfigList.[].config` is an object with the following properties:

- `solution.config.stepList.[].value.keyConfigList.[].config.delay`: `number` - The delay in milliseconds between each key press. This is useful for simulating typing speed. The default value is `0`, which means that the keys are pressed immediately one after the other.
- `solution.config.stepList.[].value.keyConfigList.[].config.key`: `string` - A string of characters to be typed, example `"Hello World!"`. This is only used if `solution.config.stepList.[].value.keyConfigList.[].action` === `type`.

Example of a `solution.config.stepList.[].*` for `keyboardPress`, when the key is pressed down and released immediately:
```json
{
    "id": "A0sniuPe",
    "type": "keyboardPress",
    "categoryId": "userInteractionEvents",
    "stepType": "action",
    "label": "Keyboard Press",
    "fallbackLabel": "Keyboard Press - 2025-05-29_18-11-38",
    "labelScript": {
        "value": ""
    },
    "labelStrategy": "LABEL",
    "selector": "",
    "abortOnError": false,
    "ignoreOnError": false,
    "originalStepIndex": 45,
    "value": {
        "keyConfigList": [
            {
                "key": "{Escape}",
                "action": "press"
            }
        ]
    }
}
```

Example of a `solution.config.stepList.[].*` for `keyboardPress`, when the key is pressed down and held down:
```json
{
    "id": "A0sniuPe",
    "type": "keyboardPress",
    "categoryId": "userInteractionEvents",
    "stepType": "action",
    "label": "Keyboard Press",
    "fallbackLabel": "Keyboard Press - 2025-05-29_18-11-38",
    "labelScript": {
        "value": ""
    },
    "labelStrategy": "LABEL",
    "selector": "",
    "abortOnError": false,
    "ignoreOnError": false,
    "originalStepIndex": 45,
    "value": {
        "keyConfigList": [
            {
                "key": "{Escape}",
                "action": "down"
            }
        ]
    }
}
```

Example of a `solution.config.stepList.[].*` for `keyboardPress`, when the key is released (only has effect if the key is already pressed down):
```json
{
    "id": "A0sniuPe",
    "type": "keyboardPress",
    "categoryId": "userInteractionEvents",
    "stepType": "action",
    "label": "Keyboard Press",
    "fallbackLabel": "Keyboard Press - 2025-05-29_18-11-38",
    "labelScript": {
        "value": ""
    },
    "labelStrategy": "LABEL",
    "selector": "",
    "abortOnError": false,
    "ignoreOnError": false,
    "originalStepIndex": 45,
    "value": {
        "keyConfigList": [
            {
                "key": "{Escape}",
                "action": "release"
            }
        ]
    }
}
```

Example of a `solution.config.stepList.[].*` for `keyboardPress`, when the string "hello world!" is typed with a 1-second delay between each key press:
```json
{
    "id": "A0sniuPe",
    "type": "keyboardPress",
    "categoryId": "userInteractionEvents",
    "stepType": "action",
    "label": "Keyboard Press",
    "fallbackLabel": "Keyboard Press - 2025-05-29_18-11-38",
    "labelScript": {
        "value": ""
    },
    "labelStrategy": "LABEL",
    "selector": "",
    "abortOnError": false,
    "ignoreOnError": false,
    "originalStepIndex": 45,
    "value": {
        "keyConfigList": [
            {
                "key": "Hello World!",
                "action": "type",
                "config": {
                    "delay": 1000
                }
            }
        ]
    }
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `userInteractionEvents` && `solution.config.stepList.[].type` === `elementFocus`

This action is used to focus an element on the page. It is useful for triggering focus events or input fields. In this case `solution.config.stepList.[].value` is not needed, as a focus action is performed on an element identified by a CSS selector.

Example of a `solution.config.stepList.[].*` for `elementFocus`:
```json
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
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `userInteractionEvents` && `solution.config.stepList.[].type` === `tap`

This option is only available for mobile devices. It is used to simulate a tap on the screen (which is comparable to click on desktop).
The `solution.config.stepList.[].value` is an object with the following properties:

- `solution.config.stepList.[].value.x`: `number` - The x coordinate of the tap, relative to the viewport, where the tap should be performed.
- `solution.config.stepList.[].value.y`: `number` - The y coordinate of the tap, relative to the viewport, where the tap should be performed.

Example of a `solution.config.stepList.[].*` for `tap`:
```json
{
  "id": "6ivvH7Cx",
  "type": "tap",
  "categoryId": "userInteractionEvents",
  "stepType": "action",
  "label": "Tap on X",
  "fallbackLabel": "Antippen - 2025-05-30_13-18-45",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": "",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 0,
  "value": {
    "x": 0,
    "y": 0
  }
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `userInteractionEvents` && `solution.config.stepList.[].type` === `elementTap`

This option is only available for mobile devices. This action is used to tap an element on the page (which is comparable to click on an element).
In this case `solution.config.stepList.[].value` is not needed, as a tap action is performed on an element identified by a CSS selector.

#### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `formElementManipulation`
Actions in the `formElementManipulation` category are used to manipulate form elements on the page. This includes form events, element events and element manipulation. The form element manipulation events are used to interact with the page and perform actions on the page.

For `solution.config.stepList.[].categoryId` === `formElementManipulation`, then `solution.config.stepList.[].type` can only be one of:
- `elementDragAndDrop`: `string` - This action is used to drag and drop an element on the page. It is useful for moving elements around on the page.
- `selectOption`: `string` - This action is used to select an option from a dropdown or a list. It is useful for selecting options from a list of options.
- `fillInputOrTextarea`: `string` - This action is used to fill an input field or a textarea with a value. It is useful for filling out forms or entering text into input fields.
- `uploadFile`: `string` - This action is used to upload a file to the page. It is useful for uploading files to a server or to a form.
- `waitForSelector`: `string` - This action is used to wait for an element to appear on the page. It is useful for waiting for elements to load or for elements to be added to the page.

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `formElementManipulation` && `solution.config.stepList.[].type` === `elementDragAndDrop`
This action is used to drag and drop an element on the page. It is useful for moving elements around on the page. The `solution.config.stepList.[].value` is an object with the following properties:

- `solution.config.stepList.[].value.sourceSelector`: `string` - The CSS selector of the element that should be dragged. The element is identified by the CSS selector, and the mouse pointer is moved to the center of the element.
- `solution.config.stepList.[].value.targetSelector`: `string` - The CSS selector of the element that should be dropped. The element is identified by the CSS selector, and the mouse pointer is moved to the center of the element.

Example of a `solution.config.stepList.[].*` for `elementDragAndDrop`:
```json
{
  "id": "A0sniuPe",
  "type": "elementDragAndDrop",
  "categoryId": "formElementManipulation",
  "stepType": "action",
  "label": "Element Drag and Drop",
  "fallbackLabel": "Element Drag and Drop - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": "",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45,
  "value": {
    "sourceSelector": ".source-element",
    "targetSelector": ".target-element"
  }
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `formElementManipulation` && `solution.config.stepList.[].type` === `selectOption`
This action is used to select an option from a dropdown or a list. It is useful for selecting options from a list of options. The step property `solution.config.stepList.[].selector` is the CSS selector of the dropdown or list element that should be selected. The `solution.config.stepList.[].value` is an object with the following properties:

- `solution.config.stepList.[].value.type`: `'label' | 'value'` - The type of the option that should be selected.
- `solution.config.stepList.[].value.list`: `string[]` - The list of options that should be selected. This can be an array of strings, where each string is the label or value of the option that should be selected.

If `solution.config.stepList.[].value.type` === `label`, then the `solution.config.stepList.[].value.list` is an array of strings, where each string is the label of the option that should be selected.
If `solution.config.stepList.[].value.type` === `value`, then the `solution.config.stepList.[].value.list` is an array of strings, where each string is the value of the option that should be selected.

Example of a `solution.config.stepList.[].*` for `selectOption`, when label selects the options:
```json
{
  "id": "A0sniuPe",
  "type": "selectOption",
  "categoryId": "formElementManipulation",
  "stepType": "action",
  "label": "Select Option by Label",
  "fallbackLabel": "Select Option by Label - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": ".my-select",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45,
  "value": {
    "type": "label",
    "list": ["Option 1", "Option 2", "Option 3"]
  }
}
```

Example of a `solution.config.stepList.[].*` for `selectOption`, when value selects the options:
```json
{
  "id": "A0sniuPe",
  "type": "selectOption",
  "categoryId": "formElementManipulation",
  "stepType": "action",
  "label": "Select Option by Value",
  "fallbackLabel": "Select Option by Value - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": ".my-select",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45,
  "value": {
    "type": "value",
    "list": ["option1", "option2", "option3"]
  }
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `formElementManipulation` && `solution.config.stepList.[].type` === `fillInputOrTextarea`
This action is used to fill an input field or a textarea with a value. It is useful for filling out forms or entering text into input fields. The step property `solution.config.stepList.[].selector` is the CSS selector of the input field or textarea that should be filled. The `solution.config.stepList.[].value` is an object with the following properties:

- `solution.config.stepList.[].value.text`: `string` - The text that should be entered into the input field or textarea.
- `solution.config.stepList.[].value.inputType`: `'single' | 'multi'` - The type of input that should be entered. The options are:
  - `single`: `string` - The input is considered as a single input. This is useful for entering text into an input field, where the text is entered as a single line.
  - `multi`: `string` - The input is considered a multi line text input, where "\n" is used to separate the lines. This is useful for entering text into a textarea.

Example of a `solution.config.stepList.[].*` for `fillInputOrTextarea`, when the input is a single line:
```json
{
  "id": "A0sniuPe",
  "type": "fillInputOrTextarea",
  "categoryId": "formElementManipulation",
  "stepType": "action",
  "label": "Fill Input Field",
  "fallbackLabel": "Fill Input Field - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": ".my-input",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45,
  "value": {
    "text": "Hello World!",
    "inputType": "single"
  }
}
```

Example of a `solution.config.stepList.[].*` for `fillInputOrTextarea`, when the input is a multi line text:
```json
{
  "id": "A0sniuPe",
  "type": "fillInputOrTextarea",
  "categoryId": "formElementManipulation",
  "stepType": "action",
  "label": "Fill Textarea",
  "fallbackLabel": "Fill Textarea - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": ".my-textarea",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45,
  "value": {
    "text": "Hello World!\nThis is a multi line text.",
    "inputType": "multi"
  }
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `formElementManipulation` && `solution.config.stepList.[].type` === `uploadFile`
This action is used to upload a single file or multiple files into an input field of type `file`. It is useful for uploading files to a server or to a form. The step property `solution.config.stepList.[].selector` is the CSS selector of the input field that should be used for the file upload. The `solution.config.stepList.[].value` is an object with the following properties:

- `solution.config.stepList.[].value.fileIdList`: `string[]` - The list of file IDs that should be uploaded. The file IDs are the IDs of the files that are stored in the `solution.config.fileList` array. The files are identified by their IDs, and the files are uploaded to the input field.

Note: In the UI the user will be offered the option to select files that will be uploaded and their respective IDs will be added to the `solution.config.stepList.[].value.fileIdList` array. Additionally, in the account management area of the UI, the user can upload multiple files which will be available for selection in this action.

Example of a `solution.config.stepList.[].*` for `uploadFile`:
```json
{
  "id": "A0sniuPe",
  "type": "uploadFile",
  "categoryId": "formElementManipulation",
  "stepType": "action",
  "label": "Upload File",
  "fallbackLabel": "Upload File - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": ".my-file-input",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45,
  "value": {
    "fileIdList": ["file-id-1", "file-id-2"]
  }
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `formElementManipulation` && `solution.config.stepList.[].type` === `waitForSelector`
This action is used to wait for an element to appear on the page. It is useful for waiting for elements to load or for elements to be added to the page. The step property `solution.config.stepList.[].selector` is the CSS selector of the element that should be waited for. The `solution.config.stepList.[].value` is an object with the following properties:

- `solution.config.stepList.[].value.timeout`: `number` - The timeout in milliseconds to wait for the element to appear. If the element does not appear within the timeout, the step fails. The default value is `5000` milliseconds (5 seconds).

Example of a `solution.config.stepList.[].*` for `waitForSelector`:
```json
{
  "id": "A0sniuPe",
  "type": "waitForSelector",
  "categoryId": "formElementManipulation",
  "stepType": "action",
  "label": "Wait for Selector",
  "fallbackLabel": "Wait for Selector - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": ".my-element",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45,
  "value": {
    "timeout": 5000
  }
}
```

#### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `navigationAndBrowsing`

Actions in the `navigationAndBrowsing` category are used to navigate and browse the page. This includes navigation events, browsing events and network events. The user interaction events are used to interact with the page and perform actions on the page.

For `solution.config.stepList.[].categoryId` === `navigationAndBrowsing`, then `solution.config.stepList.[].type` can only be one of:

- `scrollIntoView`: `string` - This action is used to scroll an element into view. It is useful for scrolling to a specific element on the page.
- `reloadPage`: `string` - This action is used to reload the current page. It is useful for refreshing the page or reloading the page with new data.
- `goBack`: `string` - This action is used to go back to the previous page in the browser history. It is useful for navigating back to a previous page.
- `goForward`: `string` - This action is used to go forward to the next page in the browser history. It is useful for navigating forward to a next page.
- `goTo`: `string` - This action is used to navigate to a specific URL. It is useful for navigating to a different page or a different website.
- `scroll`: `string` - This action is used to scroll the page horizontally or vertically. It is useful for scrolling the page to a specific position or scrolling the page to the top or bottom.

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `navigationAndBrowsing` and `solution.config.stepList.[].type` === `scrollIntoView`
This action is used to scroll an element into view. It is useful for scrolling to a specific element on the page. In this case `solution.config.stepList.[].value` is not needed, as a scroll action is performed on an element identified by a CSS selector.

Example of a `solution.config.stepList.[].*` for `scrollIntoView`:
```json
{
  "id": "A0sniuPe",
  "type": "scrollIntoView",
  "categoryId": "navigationAndBrowsing",
  "stepType": "action",
  "label": "Scroll into view",
  "fallbackLabel": "Scroll into view - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": ".my-element",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `navigationAndBrowsing` and `solution.config.stepList.[].type` === `reloadPage`
This action is used to reload the current page. It is useful for refreshing the page or reloading the page with new data. The `solution.config.stepList.[].value` is not needed, as the page is reloaded without any additional parameters.

Example of a `solution.config.stepList.[].*` for `reloadPage`:
```json
{
  "id": "A0sniuPe",
  "type": "reloadPage",
  "categoryId": "navigationAndBrowsing",
  "stepType": "action",
  "label": "Reload Page",
  "fallbackLabel": "Reload Page - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": "",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `navigationAndBrowsing` and `solution.config.stepList.[].type` === `goBack`
This action is used to go back to the previous page in the browser history. It is useful for navigating back to a previous page. The `solution.config.stepList.[].value` is not needed, as the page is navigated back without any additional parameters.

Example of a `solution.config.stepList.[].*` for `goBack`:
```json
{
  "id": "A0sniuPe",
  "type": "goBack",
  "categoryId": "navigationAndBrowsing",
  "stepType": "action",
  "label": "Go Back",
  "fallbackLabel": "Go Back - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": "",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `navigationAndBrowsing` and `solution.config.stepList.[].type` === `goForward`
This action is used to go forward to the next page in the browser history. It is useful for navigating forward to the next page. The `solution.config.stepList.[].value` is not needed, as the page is navigated forward without any additional parameters.

Example of a `solution.config.stepList.[].*` for `goForward`:
```json
{
  "id": "A0sniuPe",
  "type": "goForward",
  "categoryId": "navigationAndBrowsing",
  "stepType": "action",
  "label": "Go Forward",
  "fallbackLabel": "Go Forward - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": "",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `navigationAndBrowsing` and `solution.config.stepList.[].type` === `goTo`
This action is used to navigate to a specific URL. It is useful for navigating to a different page or a different website. The `solution.config.stepList.[].value` is an object with the following properties:

- `solution.config.stepList.[].value.url`: `string` - The URL to navigate to. This can be a relative or absolute URL.

Example of a `solution.config.stepList.[].*` for `goTo`:
```json
{
  "id": "A0sniuPe",
  "type": "goTo",
  "categoryId": "navigationAndBrowsing",
  "stepType": "action",
  "label": "Go To URL",
  "fallbackLabel": "Go To URL - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": "",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45,
  "value": {
    "url": "https://example.com"
  }
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `navigationAndBrowsing` and `solution.config.stepList.[].type` === `scroll`
This action is used to scroll the page horizontally or vertically. It is useful for scrolling the page to a specific position or scrolling the page to the top or bottom. The `solution.config.stepList.[].value` is an object with the following properties:

- `solution.config.stepList.[].value.x`: `number` - The horizontal scroll amount. This is the number of pixels to scroll horizontally. A positive value scrolls to the right, a negative value scrolls to the left.
- `solution.config.stepList.[].value.y`: `number` - The vertical scroll amount. This is the number of pixels to scroll vertically. A positive value scrolls down, a negative value scrolls up.
- `solution.config.stepList.[].value.behavior`: `string` - The scroll behavior. The options are:
  - `auto`: `string` - The scroll is performed immediately (default behavior)
  - `smooth`: `string` - The scroll is performed smoothly, with a transition effect.
  - `instant`: `string` - The scroll is performed instantly, without any transition effect.

Example of a `solution.config.stepList.[].*` for `scroll`:
```json
{
  "id": "A0sniuPe",
  "type": "scroll",
  "categoryId": "navigationAndBrowsing",
  "stepType": "action",
  "label": "Scroll Page",
  "fallbackLabel": "Scroll Page - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": "",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45,
  "value": {
    "x": 0,
    "y": -1000,
    "behavior": "smooth"
  }
}
```

#### Specific props for `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `dataProcessingAndRequests`

Actions in the `dataProcessingAndRequests` category are used to process data and handle requests. This includes data processing events, request events and response events. The user interaction events are used to interact with the page and perform actions on the page.

For `solution.config.stepList.[].categoryId` === `dataProcessingAndRequests`, then `solution.config.stepList.[].type` can only be one of:

- `booleanFunction`: `string` - This action is used to execute a boolean function. The function gets polled until it returns true or the timeout is reached. It is useful for executing a function that returns a boolean value.
- `request`: `string` - This action is used to wait till a certain request is made. It is useful for waiting for a specific request to be made, such as an API request or a network request.
- `response`: `string` - This action is used to wait till a certain response is received. It is useful for waiting for a specific response to be received, such as an API response or a network response.
- `timeout`: `string` - This action is used to sit out a timeout. It is useful for waiting for a specific amount of time before proceeding to the next step.

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `dataProcessingAndRequests` and `solution.config.stepList.[].type` === `booleanFunction`
This action is used to execute a boolean function. The function gets polled until it returns true or the timeout is reached. It is useful for executing a function that returns a boolean value. The `solution.config.stepList.[].value` is an object with the following properties:

- `solution.config.stepList.[].value.timeout`: `number` - The timeout in milliseconds for the function to return true. If the function does not return true within the timeout, the step fails. The default value is `1000` milliseconds (1 second).
- `solution.config.stepList.[].value.jsCode`: `object` - The JavaScript code to be executed (within a function context in the AI browser). It is an object with the following properties:
  - `solution.config.stepList.[].value.jsCode.value`: `string` - The JavaScript code to be executed. This code should return a boolean value.
  - `solution.config.stepList.[].value.jsCode.isValid`: `boolean` - Indicates whether the JavaScript code is valid. This is used for validation.
  - `solution.config.stepList.[].value.jsCode.isValidated`: `boolean` - Indicates whether the JavaScript code has been validated. This is used for validation.

Example of a `solution.config.stepList.[].*` for `booleanFunction`:
```json
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
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `dataProcessingAndRequests` and `solution.config.stepList.[].type` === `request`
This action is used to wait till a certain request is made. It is useful for waiting for a specific request to be made, such as an API request or a network request. The `solution.config.stepList.[].value` is an object with the following properties:

- `solution.config.stepList.[].value.timeout`: `number` - The timeout in milliseconds for the request to be made. If the request is not made within the timeout, the step fails. The default value is `1000` milliseconds (1 second).
- `solution.config.stepList.[].value.method`: `GET | POST | PUT | DELETE | PATCH` - The HTTP method of the request. This is used to filter the requests that are being waited for. The options are:
  - `GET`: `string` - The request is a GET request.
  - `POST`: `string` - The request is a POST request.
  - `PUT`: `string` - The request is a PUT request.
  - `DELETE`: `string` - The request is a DELETE request.
  - `PATCH`: `string` - The request is a PATCH request.
- `solution.config.stepList.[].value.urls`: `array` - An array of objects, where each object represents a URL to be matched. Each object has the following properties:
  - `matcher`: `string` - The type of matcher to be used. The options are:
    - `regex`: `string` - The URL is matched using a regular expression.
    - `exact`: `string` - The URL is matched exactly.
    - `substring`: `string` - The URL is matched as a substring.
  - `value`: `string` - The value of the URL to be matched. This can be a regular expression or an exact URL. This could be a relative or absolute URL.

Example of a `solution.config.stepList.[].*` for `request`:
```json
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
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `dataProcessingAndRequests` and `solution.config.stepList.[].type` === `response`
This action is used to wait till a certain response is received. It is useful for waiting for a specific response to be received, such as an API response or a network response. The `solution.config.stepList.[].value` is an object with the following properties:

- `solution.config.stepList.[].value.timeout`: `number` - The timeout in milliseconds for the response to be received. If the response is not received within the timeout, the step fails. The default value is `1000` milliseconds (1 second).
- `solution.config.stepList.[].value.method`: `GET | POST | PUT | DELETE | PATCH` - The HTTP method of the response. This is used to filter the responses that are being waited for. The options are:
  - `GET`: `string` - The response is a GET response.
  - `POST`: `string` - The response is a POST response.
  - `PUT`: `string` - The response is a PUT response.
  - `DELETE`: `string` - The response is a DELETE response.
  - `PATCH`: `string` - The response is a PATCH response.
- `solution.config.stepList.[].value.urls`: `array` - An array of objects, where each object represents a URL to be matched. Each object has the following properties:
- `matcher`: `string` - The type of matcher to be used. The options are:
    - `regex`: `string` - The URL is matched using a regular expression.
    - `exact`: `string` - The URL is matched exactly.
    - `substring`: `string` - The URL is matched as a substring.
  - `value`: `string` - The value of the URL to be matched. This can be a regular expression or an exact URL. This could be a relative or absolute URL.

Example of a `solution.config.stepList.[].*` for `response`:

```json
{
  "id": "VjphGwN5",
  "type": "response",
  "categoryId": "dataProcessingAndRequests",
  "stepType": "action",
  "label": "Warten auf Netzwerkanwort. - 2025-05-07_18-16-51",
  "fallbackLabel": "Warten auf Netzwerkanwort. - 2025-05-07_18-16-51",
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
}
```

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `dataProcessingAndRequests` and `solution.config.stepList.[].type` === `timeout`
This action is used to sit out a timeout. It is useful for waiting for a specific amount of time before proceeding to the next step. The `solution.config.stepList.[].value` is an object with the following properties:

- `solution.config.stepList.[].value.timeout`: `number` - The timeout in milliseconds to wait. If the timeout is not reached, the step fails. The default value is `1000` milliseconds (1 second).

Example of a `solution.config.stepList.[].*` for `timeout`:
```json
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
}
```

#### Specific props for `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `advancedBrowserApiOperations`
Actions in the `advancedBrowserApiOperations` category are used to perform advanced operations on the browser. This includes browser API operations, such as taking screenshots, executing JavaScript code, and more.

For `solution.config.stepList.[].categoryId` === `advancedBrowserApiOperations`, then `solution.config.stepList.[].type` can only be one of:

- `js`: `string` - This action is used to execute JavaScript code in the browser context. It is useful for executing custom JavaScript code on the page.
- `clearAllCookies`: `string` - This action is used to clear all cookies in the browser. It is useful for resetting the browser state and removing any stored cookies.
- `clearLocalStorage`: `string` - This action is used to clear all local storage in the browser. It is useful for resetting the browser state and removing any stored data in local storage.
- `clearSessionStorage`: `string` - This action is used to clear all session storage in the browser. It is useful for resetting the browser state and removing any stored data in session storage.

##### If Specific props for `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `advancedBrowserApiOperations` and `solution.config.stepList.[].type` === `js`
This action is used to execute JavaScript code in the browser context. It is useful for executing custom JavaScript code on the page. The `solution.config.stepList.[].value` is an object with the following properties:

- `solution.config.stepList.[].value.jsCode`: `object` - The JavaScript code to be executed (within a function context in the AI browser). It is an object with the following properties:
  - `solution.config.stepList.[].value.jsCode.value`: `string` - The JavaScript code to be executed.
  - `solution.config.stepList.[].value.jsCode.isValid`: `boolean` - Indicates whether the JavaScript code is valid. This is used for validation.
  - `solution.config.stepList.[].value.jsCode.isValidated`: `boolean` - Indicates whether the JavaScript code has been validated. This is used for validation.

Example of a `solution.config.stepList.[].*` for `js`:
```json
{
  "id": "A0sniuPe",
  "type": "js",
  "categoryId": "advancedBrowserApiOperations",
  "stepType": "action",
  "label": "Execute JavaScript Code",
  "fallbackLabel": "Execute JavaScript Code - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": "",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45,
  "value": {
    "jsCode": {
      "value": "console.log('Hello World!');",
      "isValid": true,
      "isValidated": true
    }
  }
}
```
##### If Specific props for `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `advancedBrowserApiOperations` and `solution.config.stepList.[].type` === `clearAllCookies`
This action is used to clear all cookies in the browser. It is useful for resetting the browser state and removing any stored cookies. The `solution.config.stepList.[].value` is not needed, as the cookies are cleared without any additional parameters.

Example of a `solution.config.stepList.[].*` for `clearAllCookies`:
```json
{
  "id": "A0sniuPe",
  "type": "clearAllCookies",
  "categoryId": "advancedBrowserApiOperations",
  "stepType": "action",
  "label": "Clear All Cookies",
  "fallbackLabel": "Clear All Cookies - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": "",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45
}
```

##### If Specific props for `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `advancedBrowserApiOperations` and `solution.config.stepList.[].type` === `clearLocalStorage`
This action is used to clear all local storage in the browser. It is useful for resetting the browser state and removing any stored data in local storage. The `solution.config.stepList.[].value` is not needed, as the local storage is cleared without any additional parameters.

Example of a `solution.config.stepList.[].*` for `clearLocalStorage`:
```json
{
  "id": "A0sniuPe",
  "type": "clearLocalStorage",
  "categoryId": "advancedBrowserApiOperations",
  "stepType": "action",
  "label": "Clear Local Storage",
  "fallbackLabel": "Clear Local Storage - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": "",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45
}
```

##### If Specific props for `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `advancedBrowserApiOperations` and `solution.config.stepList.[].type` === `clearSessionStorage`
This action is used to clear all session storage in the browser. It is useful for resetting the browser state and removing any stored data in session storage. The `solution.config.stepList.[].value` is not needed, as the session storage is cleared without any additional parameters.

Example of a `solution.config.stepList.[].*` for `clearSessionStorage`:
```json
{
  "id": "A0sniuPe",
  "type": "clearSessionStorage",
  "categoryId": "advancedBrowserApiOperations",
  "stepType": "action",
  "label": "Clear Session Storage",
  "fallbackLabel": "Clear Session Storage - 2025-05-29_18-11-38",
  "labelScript": {
    "value": ""
  },
  "labelStrategy": "LABEL",
  "selector": "",
  "abortOnError": false,
  "ignoreOnError": false,
  "originalStepIndex": 45
}
```

#### Specific props for `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `settings`
Actions in the `settings` category are used to configure the settings of the AI browser. This includes settings for the browser, such as enabling or disabling features, configuring the browser, and more.

For `solution.config.stepList.[].categoryId` === `settings`, then `solution.config.stepList.[].type` can only be one of:

- `dialogHandling`: `string` - This action is used to configure the dialog handling settings of the AI browser. It is useful for configuring how the AI browser handles dialogs, such as alerts, prompts, and confirmations.

##### If `solution.config.stepList.[].stepType` === `action` && `solution.config.stepList.[].categoryId` === `settings` and `solution.config.stepList.[].type` === `dialogHandling`
This action is used to configure the dialog handling settings of the AI browser. It is useful for configuring how the AI browser handles dialogs, such as alerts, prompts, and confirmations. The `solution.config.stepList.[].value` is an object with the following properties:

- `solution.config.stepList.[].value.decision`: `accept | reject` - The decision to be made when a dialog is encountered. The options are:
  - `accept`: `string` - The dialog is accepted.
  - `reject`: `string` - The dialog is rejected.
- `solution.config.stepList.[].value.promptText`: `string` - The text to be displayed in the dialog prompt. This is used when the dialog is a prompt dialog and the AI browser needs to provide a response.

Example of a `solution.config.stepList.[].*` for `dialogHandling` that should be accepted:
```json
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
}
```

