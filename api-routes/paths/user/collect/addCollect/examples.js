const examples = {
  success: {
    summary: 'add success',
    value: {
      "code": "001",
      "msg": "添加收藏成功"
    },
  },
  fail1: {
    summary: 'add failed',
    value: {
      "code": "003",
      "msg": "该商品已经添加收藏，请到我的收藏查看"
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