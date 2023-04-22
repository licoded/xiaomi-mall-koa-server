const UserController = require('../../../app/controllers/userController');

module.exports = function () {
  let operations = {
    POST: UserController.FindUserName,
  };

  operations.POST.apiDoc = {
    tags: ['UserController'],

    // summary is what really display
    summary: 'FindUserName',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'FindUserName',
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/UserNameParams',
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
                  description: '001 -> "用户名不存在，可以注册"<br\>004 -> "用户名已经存在，不能注册"',
                },
                msg: {
                  type: 'string',
                },
              },
            },
            examples: {
              success: {
                summary: 'not found',
                value: {
                  "code": "001",
                  "msg": "用户名不存在，可以注册"
                },
              },
              fail: {
                summary: 'find success',
                value: {
                  "code": "004",
                  "msg": "用户名已经存在，不能注册"
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