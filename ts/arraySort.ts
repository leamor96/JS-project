import { Utils } from "./utils.js";

let arr: number[] = [];
const num = document.getElementById("numSelection") as HTMLInputElement;
const addRand = document.getElementById("addRand") as HTMLInputElement;
const add = document.getElementById("add") as HTMLInputElement;
const sort = document.getElementById("sort") as HTMLInputElement;
const arrDisplay = document.getElementById("arrDisplay") as HTMLDivElement;
const arrFilterDisplayS = document.getElementById(
  "arrFilterDisplayS"
) as HTMLDivElement;
const arrFilterDisplayM = document.getElementById(
  "arrFilterDisplayM"
) as HTMLDivElement;
const arrFilterDisplayL = document.getElementById(
  "arrFilterDisplayL"
) as HTMLDivElement;

sort.addEventListener("click", () => {
  Utils.bubbleSort(arr);
  console.log(arr);
  arrDisplay.innerHTML = "";
  arrFilterDisplayS.innerHTML = "";
  arrFilterDisplayM.innerHTML = "";
  arrFilterDisplayL.innerHTML = "";
  arr.forEach((e) => appendLabel(e, arrDisplay));
  const arrS = filterArr3()[0];
  const arrM = filterArr3()[1];
  const arrL = filterArr3()[2];
  arrS.forEach((e) => appendLabel(e, arrFilterDisplayS));
  arrM.forEach((e) => appendLabel(e, arrFilterDisplayM));
  arrL.forEach((e) => appendLabel(e, arrFilterDisplayL));
});

add.addEventListener("click", () => {
  arr.push(+num.value);
  appendLabel(+num.value, arrDisplay);
});
addRand.addEventListener("click", () => {
  let num: number = Utils.random(0, 100);
  arr.push(num);
  appendLabel(num, arrDisplay);
});

function appendLabel(num: number, ar: HTMLDivElement) {
  let lbl: HTMLLabelElement = document.createElement("label");
  lbl.innerHTML = num + "";
  lbl.classList.add("square");
  ar.appendChild(lbl);
}
//מיון מערך על בסיס טווח מספרים
function filterArr3(): number[][] {
  let arrS: number[] = [];
  let arrM: number[] = [];
  let arrL: number[] = [];

  arrS = arr.filter((n) => n <= 30);
  arrM = arr.filter((n) => n <= 60 && n > 30);
  arrL = arr.filter((n) => n < 101 && n >= 61);
  return [arrS, arrM, arrL];
}
