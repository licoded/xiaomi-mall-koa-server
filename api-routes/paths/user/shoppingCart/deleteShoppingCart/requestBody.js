const requestBody = {
  content: {
    "application/json": {
      schema: {
        $ref: '#/components/schemas/UserProductParams',
      },
    },
  },
};

module.exports = requestBody;