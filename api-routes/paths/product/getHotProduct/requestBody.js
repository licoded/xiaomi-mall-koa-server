const requestBody = {
  content: {
    "application/json": {
      schema: {
        $ref: '#/components/schemas/categoryNameArrayParams',
      },
    },
  },
};

module.exports = requestBody;