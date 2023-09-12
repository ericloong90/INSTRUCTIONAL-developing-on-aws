const { UpdateCommand } = require('@aws-sdk/lib-dynamodb');
const { faker } = require('@faker-js/faker');

const { ddbDoc } = require('./connect');

const params = {
  TableName: 'test-table',
  Key: {
    id: 'nUoxyrleMOKoKfk2FS7zI',
  },
  UpdateExpression: 'set #name = :name',
  ExpressionAttributeNames: {
    '#name': 'name',
  },
  ExpressionAttributeValues: {
    ':name': faker.person.fullName(),
  },
  ReturnValues: 'UPDATED_NEW',
};

const command = new UpdateCommand(params);

ddbDoc
  .send(command)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
