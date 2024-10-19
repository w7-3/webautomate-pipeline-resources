Starting from the dashboard, there is a link on the sidebar menu that takes you to the projects page. The projects page is where you can view and manage your projects. 
The projects page is made up of the following elements:

- A CTA button (top right) to create a new project
- A search field to filter for projects
- A table that displays the following columns:
    - Project Name
    - Project Type
    - Project Status
    - Last Build
    - Actions
    - And so on...
- A filter button to select columns to display in the table
- A switch, to either show or hide archived projects

Every project row in the table has besides the configured columns, the following actions:

- A button to build the project (run the project)
- A dropdown menu with the following options:
    - Run Project Now: to run the project
    - Edit Project: to display the project configuration in a sidebar and edit it
    - Download reports: to download the reports of the project
    - View configuration: to display the project configuration in a sidebar

Clicking on the product row will take you to the project detail page.
The project detail page is made up of the following elements:

- A CTA button (top right) to run the project
- A CTA button (top right) to create a new project
- A dropdown menu with the following options:
    - Run Project Now: to run the project
    - Edit Project: to display the project configuration in a sidebar and edit it
    - Download reports: to download the reports of the project
    - View configuration: to display the project configuration in a sidebar

The project detail page also contains the following tabs:

- DashboardOverviewPage: displays an overview of the project:
  - A table of all the builds of the project
  - Auto Scheduler (if enabled)
  - Project solution type
  - Project status (and CTA button to change it)
  - Device information
- Settings: displays the project settings:
  - Project name
  - Solution type
  - Basic settings
  - URL configuration
  - Request and browser settings
  - Solution steps (if any)
  - Completion settings
  - Danger zone (delete project)
- Logs: displays the logs of the project, like:
  - When it was created
  - When it was updated
  - When it was last run and so on

Back to the project overview tab. Clicking on a build row will open a summary of the build. The build summary contains the following elements:

- Build type (manual or scheduled)
- CTA button to show the consumed resources
- Page-Load overview
  - Number of qualified URLs
  - Number of URLs successfully processed
  - Number of URLs with errors
  
- Project solution specific information, which can vary depending on the solution type.
  - For URL Challenge
    - Number of Challenges processed
    - Number of Challenges successfully processed
    - Number of Challenges with errors
    - Number of Participants
    - Total number of challenges passed by all participants
    - Total number of challenges failed or voided challenges
    
  - For Data Extraction
    - Number of Data Points attempted to extract
    - Number of Data Points successfully extracted
    - Number of failed extraction attempts
    
  - For Google Lighthouse
    - Number of attempts to run the Lighthouse test
    - Number of successful Lighthouse tests
    - Number of failed Lighthouse tests
    
  - For Visual Testing
    - Number of attempts to run the visual test
    - Number of successful visual tests
    - Number of failed visual tests
    
  - For Video Documentation
    - Number of attempts to record a screen video
    - Number of successful screen video recordings
    - Number of failed screen video recordings
    
  - For Screenshot Documentation
    - Number of attempts to take a screenshot
    - Number of successful screenshots
    - Number of failed screenshots

At the bottom of the build summary, there is a button labelled "To Build Report". Clicking on it will take you to the build report page.
The build report page is made up of the following elements:

- A CTA button (top right) to build the project
- A CTA button (top right) to create a new project
- A dropdown menu with the following options:
    - Run Project Now: to run the project
    - Edit Project: to display the project configuration in a sidebar and edit it
    - Download reports: to download the reports of the project
    - View configuration: to display the project configuration in a sidebar
- The following items:
    - The build type (manual or scheduled)
    - The build status
    - The build start time
    - The build duration
    - Consumed resources
    - Logs
    - Link to open the project Reviewer
    - A dropdown menu of all qualified URLs in the build
    - An error notification if the build failed
    - For every active URL in the dropdown menu, 3 tabs are displayed (which reloads when the URL is changed):
        - Solution specific report
        - Page Load Report: displays the page load overview. The page load report contains the following elements: 
            - The URL in the browsers address bar
            - Result of the page load
            - Processing start time
            - Processing end time
            - Status of the page load
            - The returned content type
        - A screenshot of the viewport immediately after the page was loaded
