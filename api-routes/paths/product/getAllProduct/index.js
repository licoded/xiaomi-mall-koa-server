const {
  ProductController,
  tags,
} = require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: ProductController.GetAllProduct,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '分页获取所有的商品信息',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'GetAllProduct',
    requestBody,
    responses,
  };

  return operations;
}