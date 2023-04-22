const UserController = require('../../../app/controllers/userController');

module.exports = function () {
  let operations = {
    POST: UserController.Login,
  };

  // NOTE: We could also use a YAML string here.
  operations.POST.apiDoc = {
    // summary is what really display
    summary: 'Login',

    // operationId is not display when summary is set
    // it may be used behind as componentkey OR css id
    // Yes, It is used in the url `http://localhost:18002/doc.html#/cloud1/default/getWorlds`  
    //                               the last word -- `getWorlds` is just the operationId
    // So, without `operationId` field, the neo4j will crash!
    operationId: 'Login',
    parameters: [
      {
        name: 'user',
        in: 'body',
        schema: {
          $ref: '#/definitions/UserLoginParams',
        },
        required: true,
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