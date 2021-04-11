/*
 * @Author: Aardpro
 * @Date: 2021-04-11 14:02:14
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-11 15:27:05
 * @Description: 
 */
declare global {
  interface Window { Toastify: Function; }
}
export function toast(text = 'toast', duration = 2000) {
  window.Toastify({
    text,
    duration,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    backgroundColor: '#4a588c',
    stopOnFocus: true, // Prevents dismissing of toast on hover
    onClick: function () { } // Callback after click
  }).showToast();
}