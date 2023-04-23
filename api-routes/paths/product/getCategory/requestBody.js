const requestBody = {
  content: {
    "application/json": {
      schema: {
        $ref: '#/components/schemas/EmptyObject',
      },
    },
  },
};

module.exports = requestBody;