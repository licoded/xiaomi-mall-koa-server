const {
  ProductController,
  tags,
} = require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: ProductController.GetCategory,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '获取商品分类',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'GetCategory',
    requestBody,
    responses,
  };

  return operations;
}