const {
  ProductController,
  tags,
} = require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: ProductController.GetDetailsPicture,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '根据商品id, 获取商品图片',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'GetDetailsPicture',
    requestBody,
    responses,
  };

  return operations;
}