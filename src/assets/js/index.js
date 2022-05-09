import createPage from './createPage.js';

createPage();

const obj = [];

function func(event) {
  obj.push({
    eventCode: event.code,
    eventKey: event.key,
  });
  // console.log(obj[obj.length - 1]);
}

window.addEventListener('keydown', func);
