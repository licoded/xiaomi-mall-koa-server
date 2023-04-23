const {
  OrderController,
  tags,
}= require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: OrderController.AddOrder,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '添加用户订单信息',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'AddOrder',
    requestBody,
    responses,
  };

  return operations;
}