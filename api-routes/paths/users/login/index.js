const {
  UserController,
  tags,
}= require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: UserController.Login,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: 'PC端登录',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'Login',
    requestBody,
    responses,
  };

  return operations;
}