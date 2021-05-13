// 获取数据类型
export const getType = value => Object.prototype.toString.call(value).slice(8, -1)
