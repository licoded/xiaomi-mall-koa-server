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
      EmptyObject: {
        type: 'object',
        properties: {
        },
      },
      OrderItem: {
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
      productItem: {
        type: "object",
        properties: {
          product_id: {
            description: "product_id_desc",
            type: "number"
          },
          product_name: {
            description: "product_name_desc",
            type: "string"
          },
          category_id: {
            description: "category_id_desc",
            type: "number"
          },
          product_title: {
            description: "product_title_desc",
            type: "string"
          },
          product_intro: {
            description: "product_intro_desc",
            type: "string"
          },
          product_picture: {
            description: "product_picture_desc",
            type: "string"
          },
          product_price: {
            description: "product_price_desc",
            type: "number"
          },
          product_selling_price: {
            description: "product_selling_price_desc",
            type: "number"
          },
          product_num: {
            description: "product_num_desc",
            type: "number"
          },
          product_sales: {
            description: "product_sales_desc",
            type: "number"
          }
        },
        required: [
          "product_id",
          "product_name",
          "category_id",
          "product_title",
          "product_intro",
          "product_picture",
          "product_price",
          "product_selling_price",
          "product_num",
          "product_sales"
        ]
      },
      ProductPictureItem: {
        type: "object",
        properties: {
          id: {
            description: "id_desc",
            type: "number"
          },
          product_id: {
            description: "product_id_desc",
            type: "number"
          },
          product_picture: {
            description: "product_picture_desc",
            type: "string"
          },
          intro: {
            description: "intro_desc",
            type: "string"
          }
        },
        required: [
          "id",
          "product_id",
          "product_picture",
          "intro"
        ]
      },
      CategoryItem: {
        type: 'object',
        properties: {
          category_id: {
            description: 'category_id',
            type: 'number',
          },
        },
      },
      // CategoryArray: {
      //   type: 'array',
      //   items: {
      //     $ref: '/#/components/schemas/CategoryItem',
      //   },
      // },
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
      ProductIDParams: {
        type: 'object',
        properties: {
          productID: {
            description: 'productID',
            type: 'number',
          },
        },
        required: ['productID'],
        default: {
          productID: 1,
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
              $ref: "#/components/schemas/OrderItem",
            },
          },
          user_id: {
            type: 'string',
            description: 'userId',
          },
        },
        required: ['products', 'user_id'],
      },
      productPageParams: {
        type: 'object',
        properties: {
          pageSize: {
            description: 'pageSize',
            type: 'number',
            default: 15,
          },
          currentPage: {
            description: 'currentPage',
            type: 'number',
            default: 1,
          },
          categoryID: {
            description: 'categoryID',
            type: 'array',
            items: {
              type: 'number',
            }
          },
        },
      },
      productFuzzySearchPageParams: {
        type: 'object',
        properties: {
          pageSize: {
            description: 'pageSize',
            type: 'number',
            default: 15,
          },
          currentPage: {
            description: 'currentPage',
            type: 'number',
            default: 1,
          },
          search: {
            description: 'searchKey',
            type: 'string',
          },
        },
      },
      categoryNameParams: {
        type: 'object',
        properties: {
          categoryName: {
            description: 'categoryName',
            type: 'string',
            default: '电视机',
          },
        },
      },
      categoryNameArrayParams: {
        type: 'object',
        properties: {
          categoryName: {
            description: 'categoryName',
            type: 'array',
            default: [ "空调", "洗衣机" ],
            items: {
              type: 'string'
            },
          },
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