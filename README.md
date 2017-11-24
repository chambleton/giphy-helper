# GiphyHelper

Giphy Helper is an Angular 4 web-app for managing your giphies. The inspiration for this app was from the absurd number of giphies I send through Slack and needing a way to store, filter, and quickly retrieve them without having to cycling through Slack's randomizer. 

The app utilizes the giphy-api for searching giphies by keyword and the browser's local storage for persistence. Clicking a searched giphy addes it to your list, while clicking a saved giphy copies the image url to the Clipboard. Links to images, videos, and docs from the Web can also be drag-n-dropped onto the app to be added to your list.

The other purpose of this app was to learn the basics of Angular 4 and Angular Material 2, as well as the new Angular CLI. Also, the project has been configured to be debugged with Visual Studio Code (both unit tests and e2e/protractor tests), as well as deployed to a Github Page. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Getting Started

To get started, clone the repo and run `npm install`. Then run `npm start` to start a local dev-server and launch the app in a browser window.

## Development server

Run `ng serve` for a dev-server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). You can also debug unit tests from Visual Studio Code by launching the `ng test` process from the Debug window.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
To debug the e2e's, serve up the app via `ng serve` then run the `ng e2e` task from Visual Studio Code's debugger.

## Deploying the App

To deploy the app to your Github page, modify the "deploy" line of the package.json file (in the "scripts" section) to point to your branch and Github account: See [this blog] (https://shermandigital.com/blog/deploy-an-angular-cli-application-to-github-pages/) for further information.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
