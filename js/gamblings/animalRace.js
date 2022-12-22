import { Utils } from "../utils.js";
import { animalArray } from "./runners.js";
const animalShowCase = document.getElementById("animal-show-case");
const btnStart = document.getElementById("btn-start");
btnStart.addEventListener("click", () => {
    //remove chosen from all animals
    animalArray.forEach((a) => {
        a.isChosen = false;
        a.translateX = 0;
    });
    //remove the border from all img tags
    //select all img tags in the document
    document.querySelectorAll("#animal-show-case img").forEach((img) => img.classList.remove("chosen-animal"));
    const random = Utils.random(0, 4);
    const chosenAnimal = animalArray[random];
    chosenAnimal.isChosen = true;
    const img = document.getElementById(chosenAnimal.id);
    img.classList.add("chosen-animal");
    setTimeout(() => {
        const audio = new Audio(`./media/${chosenAnimal.voice}.wav`);
        audio.play();
        setInterval(() => {
            chosenAnimal.translateX += 10 * chosenAnimal.step;
            img.style.transform = `translateX(${chosenAnimal.translateX}px)`;
            if (img.getBoundingClientRect().x >
                document.body.getBoundingClientRect().width) {
            }
        }, 1000);
    }, 1000);
});
animalArray
    .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
    .map((animal) => {
    const image = document.createElement("img");
    image.src = `images/${animal.img}`;
    image.classList.add("col", "image-fluid", "w-25");
    image.id = animal.id;
    //image.addEventListener('click', ()=>{})
    return image;
})
    .forEach((img) => {
    animalShowCase.appendChild(img);
});
