const examples = {
  success: {
    summary: 'add success',
    value: {
      "code": "001",
      "msg": "修改购物车数量成功"
    },
  },
  fail1: {
    summary: 'add failed',
    value: {
      code: '002',
      msg: '该商品不在购物车'
    },
  },
  fail2: {
    summary: 'add failed',
    value: {
      code: '003',
      msg: '数量没有发生变化'
    },
  },
  fail3: {
    summary: 'add failed',
    value: {
      code: '004',
      msg: '数量达到限购数量'
    },
  },
  fail4: {
    summary: 'delete failed',
    value: {
      code: '401',
      msg: '用户名没有登录，请登录后再操作'
    },
  },
};

module.exports = examples;