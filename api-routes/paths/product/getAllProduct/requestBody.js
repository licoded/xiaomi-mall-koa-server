const requestBody = {
  content: {
    "application/json": {
      schema: {
        $ref: '#/components/schemas/productPageParams',
      },
    },
  },
};

module.exports = requestBody;