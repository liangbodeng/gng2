# Gng2

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Gradle Command Wrapper

We provided a gradle command wrapper for the `ng` command. So instead of running `ng arg1 arg2 ...`,
you can also run `gradle ng -Pargs='arg1 arg2 ...'`, so you don't have to manually install nodejs.
It may also be a good idea to create an alias for the `gradle ng` command. There are also some pre-defined
gradle tasks listed in the following sections.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

**[Gradle]** Run `gradle ngServe`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

**[Gradle]** Run `gradle ng -Pargs='g c component-name'`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

**[Gradle]** Run `gradle ngBuildProd` (`-prod` is always used)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

**[Gradle]** Run `gradle ngTest`

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
