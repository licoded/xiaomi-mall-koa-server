const {
  CollectController,
  tags,
}= require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: CollectController.DeleteCollect,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '删除收藏',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'DeleteCollect',
    requestBody,
    responses,
  };

  return operations;
}