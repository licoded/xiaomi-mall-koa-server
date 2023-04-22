const examples = {
  success1: {
    summary: 'add success',
    value: {
      "code": "001",
      "msg": "添加购物车成功",
      "shoppingCartData": [
        {
          "id": 3,
          "productID": 3,
          "productName": "小米CC9 Pro",
          "productImg": "public/imgs/phone/Mi-CC9.png",
          "price": 2599,
          "num": 1,
          "maxNum": 10,
          "check": false
        }
      ]
    },
  },
  success2: {
    summary: 'add success',
    value: {
      "code": "002",
      "msg": "该商品已在购物车，数量 +1"
    },
  },
  fail: {
    summary: 'add failed',
    value: {
      code: '401',
      msg: '用户名没有登录，请登录后再操作'
    },
  },
};

module.exports = examples;