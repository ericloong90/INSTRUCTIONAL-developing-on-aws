const { QueryCommand } = require('@aws-sdk/lib-dynamodb');
const { ddbDoc } = require('./connect');

// Sorts by name
const params = {
  TableName: 'test-classlist-table',
  KeyConditionExpression: 'id = :id',
  ExpressionAttributeValues: {
    ':id': 'sdhAgwV1KIyHccqnduCQf',
  },
  ScanIndexForward: false,
};

const command = new QueryCommand(params);

ddbDoc
  .send(command)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
