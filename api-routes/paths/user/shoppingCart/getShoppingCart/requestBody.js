const requestBody = {
  content: {
    "application/json": {
      schema: {
        $ref: '#/components/schemas/UserIdParams',
      },
    },
  },
};

module.exports = requestBody;