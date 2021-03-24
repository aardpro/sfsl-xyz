/*
 * @Author: Aardpro
 * @Date: 2021-03-21 13:55:12
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-22 22:32:10
 * @Description: 功能卡片数据
 */
interface IFunctionCard {
  cardClass?: string
  title: string
  text: string
  target: string
  anchorText: string
  img: string
}
export const CardList: IFunctionCard[] = [
  {
    cardClass: 'sparrow',
    title: 'vue3-image-slim',
    text: 'Vue3 component to crop and optimize your images before you upload them',
    target: 'vue3-image-slim',
    anchorText: 'go',
    img: 'http://qiniu-avs.sfsl.xyz/sparrow.jpg'
  },
  {
    cardClass: 'guevara',
    title: 'JSON Data',
    text: 'A JSON string and variable data transformer',
    target: 'json-data',
    anchorText: 'go',
    img: 'http://qiniu-avs.sfsl.xyz/guevara.jpg'
  },
  {
    cardClass: 'dali',
    title: 'JSRun',
    text: 'Run javascript codes and display the console.logs',
    target: 'jsrun',
    anchorText: 'go',
    img: 'http://qiniu-avs.sfsl.xyz/dali.jpg'
  },
  {
    cardClass: 'jackson',
    title: 'HTML Graffiti',
    text: 'Run your html,css and javascript codes',
    target: 'html-graffiti',
    anchorText: 'go',
    img: 'http://qiniu-avs.sfsl.xyz/jackson.jpg'
  }
]