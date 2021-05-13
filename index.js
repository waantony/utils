// 获取数据类型
export const getType = value => Object.prototype.toString.call(value).slice(8, -1)

// 深冻结
export const deepFreeze = obj => {
  const keys = Object.keys(obj)
  // 先冻结深层属性，再冻结自身
  keys.forEach(key => {
    const prop = obj[key]
    // 如果 prop 是个对象，冻结
    if (['Object', 'Array'].includes(getType(prop))) {
      deepFreeze(prop)
    }
  })
  // 冻结自身(no-op if already frozen)
  return Object.freeze(obj)
}