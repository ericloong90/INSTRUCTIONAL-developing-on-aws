const { nanoid } = require('nanoid');

// Simple Lambda handler
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: nanoid() }),
  };
};
