require('dotenv').config();

const { DynamoDB, DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocument } = require('@aws-sdk/lib-dynamodb');

const ddb = new DynamoDB({
  region: process.env.AWS_REGION,
  endpoint: process.env.AWS_DDB_ENDPOINT,
});

const ddbDoc = DynamoDBDocument.from(ddb);

module.exports = {
  ddb,
  ddbDoc,
};
