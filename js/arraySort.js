import { Utils } from "./utils.js";
let arr = [];
const num = document.getElementById("numSelection");
const addRand = document.getElementById("addRand");
const add = document.getElementById("add");
const sort = document.getElementById("sort");
const arrDisplay = document.getElementById("arrDisplay");
const arrFilterDisplayS = document.getElementById("arrFilterDisplayS");
const arrFilterDisplayM = document.getElementById("arrFilterDisplayM");
const arrFilterDisplayL = document.getElementById("arrFilterDisplayL");
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
    let num = Utils.random(0, 100);
    arr.push(num);
    appendLabel(num, arrDisplay);
});
function appendLabel(num, ar) {
    let lbl = document.createElement("label");
    lbl.innerHTML = num + "";
    lbl.classList.add("square");
    ar.appendChild(lbl);
}
//מיון מערך על בסיס טווח מספרים
function filterArr3() {
    let arrS = [];
    let arrM = [];
    let arrL = [];
    arrS = arr.filter((n) => n <= 30);
    arrM = arr.filter((n) => n <= 60 && n > 30);
    arrL = arr.filter((n) => n < 101 && n >= 61);
    return [arrS, arrM, arrL];
}
