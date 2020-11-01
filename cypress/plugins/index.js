// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const pgp = require('pg-promise')();
let dev_path = "cypress/plugins/db/dev.json";
let stage_path = "cypress/plugins/db/stage.json";
let production_path = "cypress/plugins/db/production.json"

module.exports =  function(query,userDefineConnection,environment)  {
  if (environment === 'dev') {
    const postgressConfig = require(require('path').resolve(dev_path));
    let connection = postgressConfig.db
    if (userDefineConnection != undefined) {
      connection = userDefineConnection
    }
    const db = pgp(connection);
    return db.any(query)
  } else if (environment === 'stage') {
    const postgressConfig = require(require('path').resolve(stage_path));

    let connection = postgressConfig.db
    if (userDefineConnection != undefined) {
      connection = userDefineConnection
    }
    const db = pgp(connection);
    return db.any(query)
  } else if (environment === 'production') {
    const postgressConfig = require(require('path').resolve(production_path));

    let connection = postgressConfig.db
    if (userDefineConnection != undefined) {
      connection = userDefineConnection
    }
    const db = pgp(connection);
    return db.any(query)
  }
}