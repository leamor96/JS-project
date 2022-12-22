import { Color } from "./color.js";

const redInput = document.getElementById("red-input") as HTMLInputElement;
const greenInput = document.getElementById("green-input") as HTMLInputElement;
const blueInput = document.getElementById("blue-input") as HTMLInputElement;
const displayButton = document.getElementById(
  "btn-display"
) as HTMLButtonElement;
const colorbox = document.getElementById("color-box") as HTMLDivElement;
const faves = document.getElementById("faves") as HTMLDivElement;

const colors: Color[] = [];

displayButton.addEventListener("click", () => {
  //rgb from the inputs
  const red = Number(redInput.value);
  const green = Number(greenInput.value);
  const blue = Number(blueInput.value);
  const c = new Color(red, green, blue);
  //create the box div:
  const colorDiv = document.createElement("div");
  const faveBtn = document.createElement("span");
  faveBtn.classList.add('faveBtn');
  const fave = "💟";
  const hexColor = c.hex();
  const rgbColor = c.rgb();
  colorDiv.innerHTML = rgbColor + "<br>" + hexColor;
  faveBtn.innerHTML = fave;
  colorDiv.style.background = rgbColor;
  //add the box div:
  colorbox.appendChild(colorDiv);
  colorbox.appendChild(faveBtn);
  colors.push(c);
  faveBtn.addEventListener("click", () => {
    let arrFaves:[] = []
    //create the favorits div:
    const faveDiv = document.createElement("div");
    const hexColor = c.hex();
    const rgbColor = c.rgb();
    faveDiv.innerHTML = rgbColor + "<br>" + hexColor;
    faveDiv.style.background = rgbColor;
    faves.appendChild(faveDiv);
    arrFaves.push();
  });
});
