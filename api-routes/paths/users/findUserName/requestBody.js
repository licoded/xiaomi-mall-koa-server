const requestBody = {
  content: {
    "application/json": {
      schema: {
        $ref: '#/components/schemas/UserNameParams',
      },
    },
  },
};

module.exports = requestBody;