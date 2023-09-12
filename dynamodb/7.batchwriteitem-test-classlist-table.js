// Batch write items to DynamoDB table
const { nanoid } = require('nanoid');
const { faker } = require('@faker-js/faker');

const { BatchWriteCommand } = require('@aws-sdk/lib-dynamodb');
const { ddbDoc } = require('./connect');

const classId = nanoid();

const params = {
  RequestItems: {
    'test-classlist-table': [
      {
        PutRequest: {
          Item: {
            id: classId,
            studentName: faker.person.fullName(),
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: classId,
            studentName: faker.person.fullName(),
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
