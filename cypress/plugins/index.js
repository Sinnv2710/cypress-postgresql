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
if ( file === "dev") {
  const postgressConfig = require(require('path').resolve('cypress/plugins/db/dev.json'));
} else if (file === "stage")
{
  const postgressConfig = require(require('path').resolve('cypress/plugins/db/stage.json'));
}
else if (file === "production") 
{
  const postgressConfig = require(require('path').resolve('cypress/plugins/db/production.json'));
}

module.exports =  function(query,userDefineConnection)  {
  let connection = postgressConfig.db
  if (userDefineConnection!=undefined){
    connection=userDefineConnection
  }
  const db = pgp(connection);
  return db.any(query)
}


