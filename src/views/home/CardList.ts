/*
 * @Author: Aardpro
 * @Date: 2021-03-21 13:55:12
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-04 21:07:40
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
    text: 'Preview your html,css and javascript codes.',
    target: 'html-graffiti',
    icon: 'go',
    img: './images/guevara.jpg'
  },
  {
    cardClass: 'dali',
    title: 'JSRun',
    text: 'Run javascript codes and display the console.log',
    target: 'jsrun',
    icon: 'go',
    img: './images/dali.jpg'
  },
  {
    cardClass: 'jackson',
    title: 'JSON Data',
    text: 'Transformers between JSON string and variable data',
    target: 'json-data',
    icon: 'go',
    img: './images/jackson.jpg'
  },
  {
    cardClass: 'einstein',
    title: 'JWT Decoder',
    text: 'Decode JWT string and show the contained data',
    target: 'jwt-decoder',
    icon: 'go',
    img: './images/einstein.jpg'
  }
]