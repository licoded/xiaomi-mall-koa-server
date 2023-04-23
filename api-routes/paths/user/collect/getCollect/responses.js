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
            code: { description: Utils.parseExamples2Desc(examples), type: 'string' },
            collectList: {
              type: 'array',
              description: '',
              items: { '$ref': '#/components/schemas/productItem' }
            }
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