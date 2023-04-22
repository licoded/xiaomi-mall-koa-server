const {
  shoppingCartController,
  Utils,
  tags,
}= require('./commonConfig');

const examples = {
  success1: {
    summary: 'delete success',
    value: {
      "code": "001",
      "msg": "删除购物车成功"
    },
  },
  success2: {
    summary: 'delete success',
    value: {
      "code": "002",
      "msg": "该商品不在购物车"
    },
  },
  fail: {
    summary: 'delete failed',
    value: {
      code: '401',
      msg: '用户名没有登录，请登录后再操作'
    },
  },
};

module.exports = function () {
  let operations = {
    POST: shoppingCartController.DeleteShoppingCart,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '添加商品到购物车',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'DeleteShoppingCart',
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
                  description: Utils.parseExamples2Desc(examples),
                },
                message: {
                  type: 'string',
                  description: '',
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
    },
  };

  return operations;
}