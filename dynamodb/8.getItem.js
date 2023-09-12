const { GetCommand } = require('@aws-sdk/lib-dynamodb');
const { ddbDoc } = require('./connect');

const params = {
  TableName: 'test-table',
  Key: {
    id: 'nUoxyrleMOKoKfk2FS7zI',
  },
};

const command = new GetCommand(params);

ddbDoc
  .send(command)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
