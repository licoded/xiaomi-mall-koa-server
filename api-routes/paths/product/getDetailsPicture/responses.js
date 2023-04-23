const { Utils }= require('../commonConfig');
const examples = require('./examples');

const responses = {
  200: {
    description: '返回值为200, 并不意味着操作成功! 发生错误被成功拦截, 返回值也是200',
    content: {
      "application/json": {
        schema: {
          type: 'object',
          properties: {
            code: {
              type: 'string',
              description: Utils.parseExamples2Desc(examples),
            },
            ProductPicture: {
              type: 'array',
              description: '{ id, product_id, product_picture, intro }',
              items: {
                $ref: '#/components/schemas/ProductPictureItem',
              },
            },
          },
        },
        examples,
      },
    },
  },
  default: {
    description: 'An error occurred',
  },
};

module.exports = responses;