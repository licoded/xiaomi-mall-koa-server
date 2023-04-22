const {
  OrderController,
  tags,
}= require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: OrderController.GetOrder,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '获取用户的所有订单信息',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'GetOrder',
    requestBody,
    responses,
  };

  return operations;
}