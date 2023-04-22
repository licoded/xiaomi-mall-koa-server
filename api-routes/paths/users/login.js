const UserController = require('../../../app/controllers/userController');

module.exports = function () {
  let operations = {
    POST: UserController.Login,
  };

  operations.POST.apiDoc = {
    tags: ['UserController'],

    // summary is what really display
    summary: 'PC端登录',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'Login',
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/UserLoginParams',
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
                  description: '001 -> "登录成功"<br\>004 -> "用户名或密码错误"',
                },
                msg: {
                  type: 'string',
                },
                user: {
                  type: 'object',
                  properties: {
                    userName: {
                      description: 'userName',
                      type: 'string',
                    },
                    user_id: {
                      description: 'user_id',
                      type: 'number',
                    },
                  },
                },
              },
            },
            examples: {
              success: {
                summary: 'Login success',
                value: {
                  "code": "001",
                  "user": {
                    "user_id": 1,
                    "userName": "test001"
                  },
                  "msg": "登录成功"
                },
              },
              fail: {
                summary: 'Login failed',
                value: {
                  "code": "004",
                  "msg": "用户名或密码错误"
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