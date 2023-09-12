// Batch write items to DynamoDB table
const { nanoid } = require('nanoid');
const { faker } = require('@faker-js/faker');

const { BatchWriteCommand } = require('@aws-sdk/lib-dynamodb');
const { ddbDoc } = require('./connect');

const params = {
  RequestItems: {
    'test-table': [
      {
        DeleteRequest: {
          Key: {
            id: 'ig8xImCq5OAm79ovn5bu3',
          },
        },
      },
      {
        DeleteRequest: {
          Key: {
            id: 'LLxSb58JZrk3qsN3ao-OA',
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
