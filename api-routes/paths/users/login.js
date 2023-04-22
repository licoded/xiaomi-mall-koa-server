const UserController = require('../../../app/controllers/userController');

module.exports = function () {
  let operations = {
    POST: UserController.Login,
  };

  operations.POST.apiDoc = {
    // summary is what really display
    summary: 'Login',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'Login',
    parameters: [
      {
        name: 'user',
        in: 'body',
        schema: {
          $ref: '#/definitions/UserLoginParams',
        },
      },
    ],
    responses: {
      200: {
        description: 'Common Response Object',
        schema: {
          type: 'object',
          properties: {
            code: {
              type: 'string',
            },
            msg: {
              type: 'string',
            },
            user: {
              type: 'object',
            },
          },
        },
      },
      default: {
        description: 'An error occurred',
        schema: {
          additionalProperties: true
        }
      }
    }
  };

  return operations;
}