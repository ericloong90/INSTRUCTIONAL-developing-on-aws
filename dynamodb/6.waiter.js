const { nanoid } = require('nanoid');
const { faker } = require('@faker-js/faker');

const { PutItemCommand, waitUntilTableExists } = require('@aws-sdk/client-dynamodb');
const { ddb, ddbDoc } = require('./connect');

// Create table
const params = {
  TableName: 'demo-waiting-table',
  KeySchema: [
    {
      AttributeName: 'id',
      KeyType: 'HASH',
    },
  ],
  AttributeDefinitions: [
    {
      AttributeName: 'id',
      AttributeType: 'S',
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
};

// Wait for table to be created
const waitParams = {
  TableName: 'demo-waiting-table',
};

// Put item
const putParams = {
  TableName: 'demo-waiting-table',
  Item: {
    id: nanoid(),
    name: faker.person.fullName(),
  },
};

ddb
  .createTable(params)
  .then((data) => {
    console.log('Table creation', data);

    return waitUntilTableExists(
      {
        config: ddb,
      },
      waitParams,
    );
  })
  .then((data) => {
    console.log(data);
    const command = new PutItemCommand(putParams);

    return ddbDoc.send(command);
  })
  .then((data) => {
    console.log('Put item', data);
  })
  .catch((error) => console.error(error));
