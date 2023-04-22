const examples = {
  success: {
    summary: 'Register success',
    value: {
      code: '001',
      msg: '注册成功'
    },
  },
  fail1: {
    summary: 'Register failed',
    value: {
      code: '004',
      msg: '用户名已经存在，不能注册'
    },
  },
  fail2: {
    summary: 'Register failed',
    value: {
      code: '500',
      msg: '未知错误，注册失败'
    },
  },
};

module.exports = examples;