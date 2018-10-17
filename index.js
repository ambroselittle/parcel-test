import "babel-polyfill";

const main = document.getElementsByTagName("main")[0];
main.innerHTML = `<h3>${main.innerHTML}</h3>`;