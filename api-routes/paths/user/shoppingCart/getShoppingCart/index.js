const {
  shoppingCartController,
  tags,
}= require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: shoppingCartController.GetShoppingCart,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '获取某用户的购物车信息',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'GetShoppingCart',
    requestBody,
    responses,
  };

  return operations;
}