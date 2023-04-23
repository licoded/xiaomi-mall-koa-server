const examples = {
  success1: {
    summary: 'get success',
    value: {
      "code": "001",
      "collectList": [
        {
          "product_id": 3,
          "product_name": "小米CC9 Pro",
          "category_id": 1,
          "product_title": "1亿像素,五摄四闪",
          "product_intro": "1亿像素主摄 / 全场景五摄像头 / 四闪光灯 / 3200万自拍 / 10 倍混合光学变焦，50倍数字变焦 / 5260mAh ⼤电量 / 标配 30W疾速快充 / ⼩米⾸款超薄屏下指纹 / 德国莱茵低蓝光认证 / 多功能NFC / 红外万能遥控 / 1216超线性扬声器",
          "product_picture": "public/imgs/phone/Mi-CC9.png",
          "product_price": 2799,
          "product_selling_price": 2599,
          "product_num": 20,
          "product_sales": 0
        }
      ]
    },
  },
  success2: {
    summary: 'get success',
    value: {
      code: '002',
      msg: '该用户没有收藏的商品',
      collectList: [],
    },
  },
  fail: {
    summary: 'get failed',
    value: {
      code: '401',
      msg: '用户名没有登录，请登录后再操作'
    },
  },
};

module.exports = examples;