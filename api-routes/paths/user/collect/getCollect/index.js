const {
  CollectController,
  tags,
}= require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: CollectController.GetCollect,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '获取用户的所有收藏商品信息',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'GetCollect',
    requestBody,
    responses,
  };

  return operations;
}