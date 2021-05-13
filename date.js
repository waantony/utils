import { getType } from './index.js'

// 将字符串、数字转为 Date 类型，Date 类型直接返回
export const parseToDate = val => {
  const whichType = getType(val)
  if (whichType === 'Number') {
    if (!/\d{13,}/u.test(val)) {
      val *= 1000
    }
    return new Date(val)
  }
  if (whichType === 'String') {
    return new Date(val.replace(/-/gu, '/').replace(/T/gu, ' ').replace(/\..*/gu, ''))
  }
  if (whichType === 'Date') {
    return val
  }
  return null
}