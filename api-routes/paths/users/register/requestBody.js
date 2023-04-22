const requestBody = {
  content: {
    "application/json": {
      schema: {
        $ref: '#/components/schemas/UserLoginParams',
      },
    },
  },
};

module.exports = requestBody;