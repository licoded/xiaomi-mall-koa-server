const examples = {
  success: {
    summary: 'not found',
    value: {
      "code": "001",
      "msg": "用户名不存在，可以注册"
    },
  },
  fail: {
    summary: 'find success',
    value: {
      "code": "004",
      "msg": "用户名已经存在，不能注册"
    },
  },
};

module.exports = examples;