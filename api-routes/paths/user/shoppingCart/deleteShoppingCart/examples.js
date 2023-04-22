const examples = {
  success1: {
    summary: 'delete success',
    value: {
      "code": "001",
      "msg": "删除购物车成功"
    },
  },
  success2: {
    summary: 'delete success',
    value: {
      "code": "002",
      "msg": "该商品不在购物车"
    },
  },
  fail: {
    summary: 'delete failed',
    value: {
      code: '401',
      msg: '用户名没有登录，请登录后再操作'
    },
  },
};

module.exports = examples;