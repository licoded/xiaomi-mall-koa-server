const apiDoc = {
  swagger: '2.0',
  basePath: '/v3',
  info: {
    title: 'A getting started API.',
    version: '1.0.0'
  },
  definitions: {
    User: {
      type: 'object',
      properties: {
        'user_id': {
          description: 'user_id',
          type: 'integer',
        },
        userName: {
          description: 'userName',
          type: 'string',
        },
        password: {
          description: 'password',
          type: 'string',
        },
        userPhoneNumber: {
          description: 'userPhoneNumber',
          type: 'string',
        },
      },
    },
    World: {
      type: 'object',
      properties: {
        name: {
          description: 'The name of this world.',
          type: 'string'
        }
      },
      required: ['name']
    },
    // paramemters
    UserLoginParams: {
      type: 'object',
      properties: {
        userName: {
          description: 'userName',
          type: 'string',
        },
        password: {
          description: 'password',
          type: 'string',
        },
      },
      required: ['userName', 'password'],
    },
    UserNameParams: {
      type: 'object',
      properties: {
        userName: {
          description: 'userName',
          type: 'string',
        },
      },
      required: ['userName'],
    },
  },
  paths: {}
};

module.exports = apiDoc;