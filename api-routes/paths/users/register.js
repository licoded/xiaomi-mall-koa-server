const UserController = require('../../../app/controllers/userController');

module.exports = function () {
  let operations = {
    POST: UserController.Register,
  };

  operations.POST.apiDoc = {
    tags: ['UserController'],

    // summary is what really display
    summary: 'PC端注册',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'Register',
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
                  description: '001 -> "注册成功"<br\>004 -> "用户名已经存在，不能注册"<br\>500 -> "未知错误，注册失败"',
                },
                msg: {
                  type: 'string',
                },
              },
            },
            examples: {
              success: {
                summary: 'Register success',
                value: {
                  code: '001',
                  msg: '注册成功'
                },
              },
              fail1: {
                summary: 'Register failed',
                value: {
                  code: '004',
                  msg: '用户名已经存在，不能注册'
                },
              },
              fail2: {
                summary: 'Register failed',
                value: {
                  code: '500',
                  msg: '未知错误，注册失败'
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