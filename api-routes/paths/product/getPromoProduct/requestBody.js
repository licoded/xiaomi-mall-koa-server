const requestBody = {
  content: {
    "application/json": {
      schema: {
        $ref: '#/components/schemas/categoryNameParams',
      },
    },
  },
};

module.exports = requestBody;