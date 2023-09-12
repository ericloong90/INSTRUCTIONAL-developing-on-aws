const { nanoid } = require('nanoid');
const { faker } = require('@faker-js/faker');

const { PutCommand } = require('@aws-sdk/lib-dynamodb');
const { ddbDoc } = require('./connect');

const params = {
  TableName: 'test-table',
  Item: {
    id: nanoid(),
    name: faker.person.fullName(),
  },
};

const command = new PutCommand(params);

ddbDoc
  .send(command)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
