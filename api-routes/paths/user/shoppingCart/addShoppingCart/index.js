const {
  shoppingCartController,
  tags,
}= require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: shoppingCartController.AddShoppingCart,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '添加商品到购物车',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'AddShoppingCart',
    requestBody,
    responses,
  };

  return operations;
}