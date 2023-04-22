const UserController = require('../../../app/controllers/userController');

module.exports = function () {
  let operations = {
    POST: UserController.FindUserName,
  };

  operations.POST.apiDoc = {
    // summary is what really display
    summary: 'FindUserName',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'FindUserName',
    parameters: [
      {
        name: 'user',
        in: 'body',
        required: true,
        schema: {
          $ref: '#/definitions/UserNameParams'
        }
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