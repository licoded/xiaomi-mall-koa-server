const apiDoc = {
  openapi: '3.0.3',
  servers: [{url: '/v3'}],
  info: {
    title: 'A getting started API.',
    version: '1.0.0'
  },
  components: {
    schemas: {
      World: {
        type: 'object',
        properties: {
          name: {
            description: 'The name of this world.',
            type: 'string',
            default: 'Earth',
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
        default: {
          userName: 'test001',
          password: 'test001',
        },
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
        default: {
          userName: 'test001',
        },
      },
      UserIdParams: {
        type: 'object',
        properties: {
          user_id: {
            description: 'userId',
            type: 'number',
          },
        },
        required: ['user_id'],
        default: {
          user_id: 1,
        },
      },
      // for responses
      UserResp: {
        type: 'object',
        properties: {
          userName: {
            description: 'userName',
            type: 'string',
          },
          user_id: {
            description: 'user_id',
            type: 'object',
          },
        },
      },
    },
  },
  paths: {}
};

module.exports = apiDoc;