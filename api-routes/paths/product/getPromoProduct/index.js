const {
  ProductController,
  tags,
} = require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: ProductController.GetPromoProduct,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '根据商品分类名称获取首页展示的商品信息',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'GetPromoProduct',
    requestBody,
    responses,
  };

  return operations;
}