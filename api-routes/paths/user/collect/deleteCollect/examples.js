const examples = {
  success: {
    summary: 'add success',
    value: {
      "code": "001",
      "msg": "删除收藏成功"
    },
  },
  fail1: {
    summary: 'add failed',
    value: {
      "code": "002",
      "msg": "该商品不在收藏列表"
    },
  },
  fail2: {
    summary: 'add failed',
    value: {
      "code": "401",
      "msg": "用户名没有登录，请登录后再操作"
    },
  },
};

module.exports = examples;