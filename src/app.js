import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max));
}


function getRandom(anyArray) {
  let max = anyArray.length;
  let random = getRandomNumber(max)
  return anyArray[random]
}
window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
  let randomwho = getRandom(who)
  let randomaction = getRandom(action)
  let randomwhat = getRandom(what)
  let randomwhen = getRandom(when)
  document.getElementById("excuse").innerText = randomwho + ' ' + randomaction + ' ' + randomwhat + ' ' + randomwhen
};
