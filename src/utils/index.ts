/*
 * @Author: Aardpro
 * @Date: 2021-03-27 15:40:05
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-04 19:26:09
 * @Description: 
 */

export function removeAllChildNodes(parent: HTMLElement): void {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/**
 * 安全使用JSON.parse，避免参数不规范而报错
 * @param {String} str JSON.stringify后的字符串
 * @param {mixed} def 缺省返回值
 * 返回：变量
 */
export function sjson(str = "", def = false) {
  if (typeof str !== "string" || !str) {
    return def;
  }
  try {
    let data = JSON.parse(str);
    if (isEmpty(data)) {
      return def;
    }
    return data;
  } catch (e) {
    return def;
  }
}
/**
 * 判断是否空值
 * @param {mixed} myVar
 */
export function isEmpty(myVar: any) {
  if (myVar === null || myVar === undefined) {
    return true;
  } else if (myVar instanceof Array) {
    return myVar.length === 0;
  } else if (myVar instanceof Object) {
    return JSON.stringify(myVar) === "{}";
  } else {
    return !myVar;
  }
}