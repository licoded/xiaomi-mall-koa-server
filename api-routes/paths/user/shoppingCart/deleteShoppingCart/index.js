const {
  shoppingCartController,
  tags,
}= require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: shoppingCartController.DeleteShoppingCart,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '删除购物车中的某件商品',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'DeleteShoppingCart',
    requestBody,
    responses,
  };

  return operations;
}