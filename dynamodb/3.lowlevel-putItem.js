const { nanoid } = require('nanoid');
const { faker } = require('@faker-js/faker');

const { PutItemCommand } = require('@aws-sdk/client-dynamodb');
const { ddb } = require('./connect');

const params = {
  TableName: 'test-table',
  Item: {
    id: { S: nanoid() },
    name: { S: faker.person.fullName() },
  },
};

const command = new PutItemCommand(params);

ddb
  .send(command)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
