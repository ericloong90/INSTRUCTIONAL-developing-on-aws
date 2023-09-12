// Batch write items to DynamoDB table
const { nanoid } = require('nanoid');
const { faker } = require('@faker-js/faker');

const { BatchWriteCommand } = require('@aws-sdk/lib-dynamodb');
const { ddbDoc } = require('./connect');

const params = {
  RequestItems: {
    'test-table': [
      {
        PutRequest: {
          Item: {
            id: nanoid(),
            name: faker.person.fullName(),
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: nanoid(),
            name: faker.person.fullName(),
          },
        },
      },
    ],
  },
};

const command = new BatchWriteCommand(params);

ddbDoc
  .send(command)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
