/*
 * @Author: Aardpro
 * @Date: 2021-04-13 21:48:57
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-17 09:20:13
 * @Description: 快捷键函数
 */

function h1(content, id) {
  makeDom("h1", content, id)
}

function h2(content, id) {
  makeDom("h2", content, id)
}

function h3(content, id) {
  makeDom("h3", content, id)
}

function h4(content, id) {
  makeDom("h4", content, id)
}

function h5(content, id) {
  makeDom("h5", content, id)
}

function h6(content, id) {
  makeDom("h6", content, id)
}

function p(content, id) {
  makeDom("p", content, id)
}

function pre(content, id) {
  makeDom("pre", content, id)
}

function makeDom(tag, content, id) {
  let dom
  if (id) {
    dom = document.getElementById(id)
    if (dom) {
      dom.innerText = content
      return true
    }
  }
  dom = document.createElement(tag)
  if (dom) {
    if (id) {
      dom.setAttribute('id', id)
    }
    dom.innerText = content
    append(dom)
    return true
  }
  return false
}

function append(dom) {
  document.body.appendChild(dom)
}

function jsonstr(data) {
  try {
    return JSON.stringify(data, null, 2)
  } catch (err) {
    return err.message
  }
}