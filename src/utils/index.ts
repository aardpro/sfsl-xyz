/*
 * @Author: Aardpro
 * @Date: 2021-03-27 15:40:05
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-27 15:45:07
 * @Description: 
 */

export function removeAllChildNodes(parent: HTMLElement): void {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}