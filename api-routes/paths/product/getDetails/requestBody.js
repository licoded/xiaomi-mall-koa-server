const requestBody = {
  content: {
    "application/json": {
      schema: {
        $ref: '#/components/schemas/ProductIDParams',
      },
    },
  },
};

module.exports = requestBody;