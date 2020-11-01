# Cypress POSTGRES

Test sql query to your postgres database in cypress tests

Use this plugin to query postgres database and use response in cypress tests

# Installation
* Run below command in terminal to install the cypress postgres
```bash
npm i -D cypress-postgres

```
* Open your `cypress/plugins/index.js` file and register a new task
```
module.exports = on => {
    on("task", {
        dbQuery:(query)=> require("cypress-postgres")(query.query,query.connection)
    });
};
```

# How to use it

To query postgres database follow below steps-
* Add postgres database connection details in cypress.json file. Details like-
```
"db":
{"user": "postgres",
"host": "localhost",
"database": "postgres",
"password": "*****",
"port":5432
}
```

* Use dbQuery task in your tests to query postgres database like below-
```
cy.task("dbQuery", {"query":"your sql query"}).then(queryResponse => {
  expect(queryResponse).to.equal("[{Your expected query result}]")
});
```
* If you need to query multiple database you can also pass the connection from scripts like below-
* Create connection in your scripts-
```
let connection={"user": "postgres",
"host": "localhost",
"database": "postgres",
"password": "*****",
"port":5432
}
```
* And use this in your test scripts like below-
```
  cy.task("dbQuery", {"query":"your sql query","connection":connection}).then(queryResponse => {
            expect(queryResponse).to.equal("[{Your expected query result}]")
        });
```WWWWWWW
