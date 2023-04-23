const requestBody = {
  content: {
    "application/json": {
      schema: {
        $ref: '#/components/schemas/OrderParams',
      },
    },
  },
};

module.exports = requestBody;