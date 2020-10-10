# Cypress Example

An example project using the automation tool, [Cypress](https://www.cypress.io/)

## Requires
1. [node](https://nodejs.org/en/)
2. [git](https://git-scm.com/)

## Setup
1. clone: `https://github.com/JohnBennington94/JB-Cypress-Automation.git`
2. install npm dependencies from project directory: `npm i`

## Run Tests Options (see package.json)
1. all tests(electron browser): `npm test`
2. headed on chrome: `npm run chromeTest`
3. headless: `npm run cy:headless`
4. open cypress and manually kick off specs: `npm run cy:open`
5. In Docker (example here is headless chrome) `docker-compose up --exit-code-from cypress`

Note: You can add `--spec 'specs/*.spec.js'` argument to run certain specs using global patterns

To see Cypress debugging capabilities in action run #4 (see https://docs.cypress.io/guides/overview/why-cypress.html)
* This opens cypress GUI and allows a spec run to be kicked off 
* The window will not auto close on completion
* You can then highlight each test step in the left pane and see how the test ran each statement

## Output of tests (in project folder)
* Videos - cypress/videos
* Screenshots - screenshots