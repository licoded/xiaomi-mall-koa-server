const {
  ResourcesController,
  tags,
} = require('../commonConfig');
const responses = require('./responses');
const requestBody = require('./requestBody');

module.exports = function () {
  let operations = {
    POST: ResourcesController.Carousel,
  };

  operations.POST.apiDoc = {
    tags,

    // summary is what really display
    summary: '获取轮播图数据',

    // operationId is not display when summary is set
    // But it must be set, as it's used in the url of Knife4j
    operationId: 'Carousel',
    requestBody,
    responses,
  };

  return operations;
}