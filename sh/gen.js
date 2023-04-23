const apiDoc = require('../api-doc')

const schemas = apiDoc.components.schemas;

const data = {
  "code": "001",
  "msg": "添加购物车成功",
  "shoppingCartData": [
    {
      "id": 8,
      "productID": 2,
      "productName": "Redmi K30 5G",
      "productImg": "public/imgs/phone/Redmi-k30-5G.png",
      "price": 2599,
      "num": 1,
      "maxNum": 5,
      "check": false
    }
  ]
}

function addSchemaItem(schemaKey, schemaItemProperties) {
  schemas[schemaKey] = {
    type: 'object',
    properties: schemaItemProperties,
    required: Object.keys(schemaItemProperties),
  };
  console.log(JSON.stringify({
    [schemaKey]: schemas[schemaKey],
  }, undefined, 2).replace(/"([^"]+)":/g, '$1:'));
  // console.log(schemaKey, schemaItemProperties, schemas[schemaKey]);
}

function getSchemaItemKey(listKey) {
  return listKey.replace(/List$/, '') + 'Item';
}

function getPropertyObject(key, value) {
  if(Array.isArray(value)) {
    const schemaItemKey = getSchemaItemKey(key);
    // console.log(value[0]);
    addSchemaItem(schemaItemKey, parseData(value[0] || {}));
    return {
      type: 'array',
      description: `${key}_desc`,
      items: {
        $ref: `#/components/schemas/${schemaItemKey}`,
      },
    };
  }
  return {
    description: `${key}_desc`,
    type: typeof(value),
  }
}

function parseData(data) {
  // simple object -- only one deep
  const propertiesObject = {};
  for(key in data) {
    const value = data[key];
    propertiesObject[key] = getPropertyObject(key, value);
  }
  console.log(propertiesObject);
  return propertiesObject;
}

// parseData(data.collectList[0])
parseData(data)
// console.log(getPropertyObject('collectList', data.collectList));