const {
  ProductController,
  tags,
} = require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: ProductController.GetProductBySearch,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '根据搜索条件, 分页获取商品信息',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'GetProductBySearch',
    requestBody,
    responses,
  };

  return operations;
}