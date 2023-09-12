const { ddb } = require('./connect');

ddb
  .scan({ TableName: 'test-table' })
  .then((data) => {
    console.log(data.Items);
  })
  .catch((error) => {
    console.error(error);
  });
