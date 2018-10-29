// two.js
function two() {
    let element = document.createElement('div');
    element.innerHTML = '我是第二个入口文件';
    return element;
}

document.getElementById('root').appendChild(two());