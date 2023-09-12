const { QueryCommand } = require('@aws-sdk/lib-dynamodb');
const { ddbDoc } = require('./connect');

// Sorts by name
const params = {
  TableName: 'test-classlist-table',
  KeyConditionExpression: 'id = :id and studentName > :studentName',
  ExpressionAttributeValues: {
    ':id': 'sdhAgwV1KIyHccqnduCQf',
    ':studentName': 'F',
  },
};

const command = new QueryCommand(params);

ddbDoc
  .send(command)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
