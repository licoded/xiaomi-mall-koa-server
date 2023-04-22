const examples = {
  success1: {
    summary: 'get success',
    value: {
      "code": "001",
      "orders": [
        [
          {
            "id": 1,
            "order_id": 11682165349059,
            "user_id": 1,
            "product_id": 1,
            "product_num": 1,
            "product_price": 1599,
            "order_time": 1682165349059,
            "product_name": "Redmi K30",
            "product_picture": "public/imgs/phone/Redmi-k30.png"
          }
        ]
      ]
    },
  },
  success2: {
    summary: 'get success',
    value: {
      "code": "002",
      "msg": "该用户没有订单信息"
    },
  },
  fail: {
    summary: 'get failed',
    value: {
      code: '401',
      msg: '用户名没有登录，请登录后再操作'
    },
  },
};

module.exports = examples;