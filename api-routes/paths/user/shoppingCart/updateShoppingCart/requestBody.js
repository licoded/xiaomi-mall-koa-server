const requestBody = {
  content: {
    "application/json": {
      schema: {
        $ref: '#/components/schemas/UpdateCartParams',
      },
    },
  },
};

module.exports = requestBody;