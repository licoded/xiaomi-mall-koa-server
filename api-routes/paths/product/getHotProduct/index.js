const {
  ProductController,
  tags,
} = require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: ProductController.GetHotProduct,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '根据商品分类名称获取热门商品信息',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'GetHotProduct',
    requestBody,
    responses,
  };

  return operations;
}