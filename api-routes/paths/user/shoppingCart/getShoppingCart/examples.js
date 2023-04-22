const examples = {
  success: {
    summary: 'get success',
    value: {
      "code": "001",
      "shoppingCartData": [
        {
          "id": 1,
          "productID": 2,
          "productName": "Redmi K30 5G",
          "productImg": "public/imgs/phone/Redmi-k30-5G.png",
          "price": 2599,
          "num": 1,
          "maxNum": 5,
          "check": false
        }
      ]
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