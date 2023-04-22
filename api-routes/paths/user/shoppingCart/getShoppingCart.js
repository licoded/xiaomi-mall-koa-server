const shoppingCartController = require('../../../../app/controllers/shoppingCartController');

module.exports = function () {
  let operations = {
    POST: shoppingCartController.GetShoppingCart,
  };

  operations.POST.apiDoc = {
    tags: ['shoppingCartController'],

    // summary is what really display
    summary: '获取某用户的购物车信息',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'GetShoppingCart',
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/UserIdParams',
          },
        },
      },
    },
    responses: {
      200: {
        description: '返回值为200, 并不意味着操作成功! 发生错误被成功拦截, 返回值也是200',
        content: {
          "application/json": {
            schema: {
              type: 'object',
              properties: {
                code: {
                  type: 'string',
                  description: [
                    '001 -> "获取成功"',
                    '401 -> "用户名没有登录，请登录后再操作"',
                  ].join('<br/>'),
                },
                shoppingCartData: {
                  type: 'array',
                  description: '',
                },
              },
            },
            examples: {
              success: {
                summary: 'get success',
                value: {
                  "code": "001",
                  "shoppingCartData": [
                    {
                      "id": 1,
                      "productID": 2,
                      "productName": "Redmi K30 5G",
                      "productImg": "public/imgs/phone/Redmi-k30-5G.png",
                      "price": 2599,
                      "num": 1,
                      "maxNum": 5,
                      "check": false
                    }
                  ]
                },
              },
              fail: {
                summary: 'get failed',
                value: {
                  code: '401',
                  msg: '用户名没有登录，请登录后再操作'
                },
              },
            },
          },
        },
      },
      default: {
        description: 'An error occurred',
      },
    },
  };

  return operations;
}