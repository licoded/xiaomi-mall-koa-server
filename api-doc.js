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
      ProductItem: {
        type: 'object',
        properties: {
          id: {
            description: '',
            type: 'number',
          },
          productID: {
            description: '',
            type: 'number',
          },
          productName: {
            description: '',
            type: 'string',
          },
          productImg: {
            description: '',
            type: 'string', // path
          },
          price: {
            description: '',
            type: 'number',
          },
          num: {
            description: '',
            type: 'number',
          },
          maxNum: {
            description: '',
            type: 'number',
          },
          check: {
            description: '',
            type: 'boolean',
          },
        },
        required: [
          'id',
          'productID',
          'productName',
          'productImg',
          'price',
          'num',
        ],
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
      UserProductParams: {
        type: 'object',
        properties: {
          user_id: {
            description: 'userId',
            type: 'number',
          },
          product_id: {
            description: 'productId',
            type: 'number',
          },
        },
        required: ['user_id', 'product_id'],
        default: {
          product_id: 1,
        },
      },
      UpdateCartParams: {
        type: 'object',
        properties: {
          user_id: {
            description: 'userId',
            type: 'number',
          },
          product_id: {
            description: 'productId',
            type: 'number',
          },
          num: {
            description: 'number',
            type: 'number',
          },
        },
        required: ['user_id', 'product_id', 'num'],
      },
      OrderParams: {
        type: 'object',
        properties: {
          products: {
            type: 'array',
            description: '',
            items: {
              $ref: "#/components/schemas/ProductItem",
            },
          },
          user_id: {
            type: 'string',
            description: 'userId',
          },
        },
        required: ['products', 'user_id'],
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