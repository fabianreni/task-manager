# TaskManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Setup

Clone the repository: git clone git@github.com:fabianreni/task-manager.git

## Install dependencies:

cd task-manager
npm install

## Start the development server

ng serve

## Open the application in your browser

## Architecture
The application follows a component-based architecture. The main components include:
TaskOverviewComponent: Displays the list of tasks
TaskDashboardComponent: Displays the tasks summary

## Key Design Decisions
Angular Material: Angular Material is chosen for UI components
Tailwind CSS: Tailwind CSS is used for styling to provide a customizable and responsive design without writing custom CSS.
Component-based architecture: The application is structured into small, reusable components to promote code reusability and maintainability.
RxJS for state management: RxJS is used for handling asynchronous operations and managing state changes in a reactive and efficient manner.
