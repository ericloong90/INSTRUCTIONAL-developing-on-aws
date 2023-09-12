const { ddb } = require('./connect');

const params = {};

ddb
  .listTables(params)
  .then((data) => {
    console.log(data.TableNames);
  })
  .catch((error) => {
    console.error(error);
  });
