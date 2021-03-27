/*
 * @Author: Aardpro
 * @Date: 2021-03-21 13:55:12
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-28 01:58:00
 * @Description: 功能卡片数据
 */
interface IFunctionCard {
  cardClass?: string
  title: string
  text: string
  target: string
  icon?: string
  img?: string
}
export const CardList: IFunctionCard[] = [
  {
    cardClass: 'sparrow',
    title: 'vue-image-slim',
    text: 'Vue component to crop and optimize your images before you upload them',
    target: 'vue-image-slim',
    icon: 'go',
    img: './images/sparrow.jpg'
  },
  {
    cardClass: 'guevara',
    title: 'HTML Graffiti',
    text: 'Run your html,css and javascript codes, display the result',
    target: 'html-graffiti',
    icon: 'go',
    img: './images/guevara.jpg'
  },
  {
    cardClass: 'dali',
    title: 'JSRun',
    text: 'Run javascript codes and display the console.logs',
    target: 'jsrun',
    icon: 'go',
    img: './images/dali.jpg'
  },
  {
    cardClass: 'jackson',
    title: 'JSON Data',
    text: 'A JSON string and variable data transformer',
    target: 'json-data',
    icon: 'go',
    img: './images/jackson.jpg'
  },
  {
    cardClass: 'einstein',
    title: 'JWT Decoder',
    text: 'Decode JWT string and show you the contained info',
    target: 'jwt-decoder',
    icon: 'go',
    img: './images/einstein.jpg'
  }
]