const {
  UserController,
  tags,
}= require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: UserController.Register,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: 'PC端注册',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'Register',
    requestBody,
    responses,
  };

  return operations;
}