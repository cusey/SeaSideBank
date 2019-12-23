
![CuseyHub](https://github.com/cusey/ImageForWiki/blob/master/Logos/CuseyHub_Banner_Small.jpg)

# Tspweb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

# Populate Database

```
INSERT INTO [SeaSideBank].[dbo].[account] (id, name, description, amount, status)
VALUES ('1', 'Grocery', 'Weekend shopping trip', '261.29', 'C');

INSERT INTO [SeaSideBank].[dbo].[account] (id, name, description, amount, status)
VALUES ('2', 'Grocery', 'Got Steak', '20.39', 'C');

INSERT INTO [SeaSideBank].[dbo].[account] (id, name, description, amount, status)
VALUES ('3', 'Pharmacy', 'Shopping for the kids', '304.50', 'C');

INSERT INTO [SeaSideBank].[dbo].[account] (id, name, description, amount, status)
VALUES ('4', 'Pharmacy', 'Flu medicine', '15.60', 'C');

INSERT INTO [SeaSideBank].[dbo].[account] (id, name, description, amount, status)
VALUES ('5', 'Pharmacy', 'Cough medicine', '5.32', 'C');

INSERT INTO [SeaSideBank].[dbo].[account] (id, name, description, amount, status)
VALUES ('6', 'Grocery', 'Weekend shopping trip', '45.09', 'C');
```

## Development server

### Web Server

Run `npm run start` for a web server. Navigate to `http://localhost:4200/sign_in`. The app will automatically reload if you change any of the source files.

### Database Server

Run 'node server.js' to start the database server. Navigate to 'http://localhost:4000/api/get_accounts' to get a JSON list of account information.     

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
