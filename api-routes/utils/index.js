function parseExampleItem2Desc({value: respItem}) {
  return []
    .concat(respItem.code)
    .concat(respItem.msg || '获取/操作成功!')
    .join(' --> ');
}
function parseExamples2Desc(examplesObject) {
  return Object
    .values(examplesObject)
    .map(parseExampleItem2Desc)
    .join('<br/>');
}

module.exports = {
  parseExamples2Desc,
};