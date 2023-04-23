const requestBody = {
  content: {
    "application/json": {
      schema: {
        $ref: '#/components/schemas/productFuzzySearchPageParams',
      },
    },
  },
};

module.exports = requestBody;