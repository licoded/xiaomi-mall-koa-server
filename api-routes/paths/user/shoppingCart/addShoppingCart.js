const shoppingCartController = require('../../../../app/controllers/shoppingCartController');

module.exports = function () {
  let operations = {
    POST: shoppingCartController.AddShoppingCart,
  };

  operations.POST.apiDoc = {
    tags: ['shoppingCartController'],

    // summary is what really display
    summary: '添加商品到购物车',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'AddShoppingCart',
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/UserProductParams',
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
                    '001 -> "添加购物车成功"',
                    '002 -> "该商品已在购物车，数量 +1"',
                    '401 -> "用户名没有登录，请登录后再操作"',
                  ].join('<br/>'),
                },
                message: {
                  type: 'string',
                  description: '',
                },
              },
            },
            examples: {
              success1: {
                summary: 'add success',
                value: {
                  "code": "001",
                  "msg": "添加购物车成功",
                  "shoppingCartData": [
                    {
                      "id": 3,
                      "productID": 3,
                      "productName": "小米CC9 Pro",
                      "productImg": "public/imgs/phone/Mi-CC9.png",
                      "price": 2599,
                      "num": 1,
                      "maxNum": 10,
                      "check": false
                    }
                  ]
                },
              },
              success2: {
                summary: 'add success',
                value: {
                  "code": "002",
                  "msg": "该商品已在购物车，数量 +1"
                },
              },
              fail: {
                summary: 'add failed',
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