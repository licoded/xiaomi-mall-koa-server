const examples = {
  success: {
    summary: 'Login success',
    value: {
      "code": "001",
      "user": {
        "user_id": 1,
        "userName": "test001"
      },
      "msg": "登录成功"
    },
  },
  fail: {
    summary: 'Login failed',
    value: {
      "code": "004",
      "msg": "用户名或密码错误"
    },
  },
};

module.exports = examples;