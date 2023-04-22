const {
  shoppingCartController,
  tags,
}= require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: shoppingCartController.UpdateShoppingCart,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '更新购物车中某商品的数量',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'UpdateShoppingCart',
    requestBody,
    responses,
  };

  return operations;
}