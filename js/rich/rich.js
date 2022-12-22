import { vipArr } from "./vip.js";
const VipBox = document.getElementById("vip-box");
initCards(vipArr);
function initCards(vips) {
    VipBox.innerHTML = "";
    vips.map((vip) => {
        //vip-box
        let divWrapper = document.createElement("div");
        divWrapper.classList.add("card");
        divWrapper.classList.add(vip.birth_year);
        divWrapper.addEventListener("click", function (e) {
            let elem = e.target;
            for (let i = 0; i < elem.classList.length; i++) {
                if (!isNaN(Number(elem.classList[i]))) {
                    let year = Number(elem.classList[i]);
                    let arr = vips.filter((x) => Number(x.birth_year) !== year);
                    initCards(arr);
                }
            }
        });
        divWrapper.style.width = "18rem";
        //image
        let image = document.createElement("img");
        image.src = vip.image;
        image.classList.add("card-img-top");
        image.classList.add(vip.birth_year);
        divWrapper.appendChild(image);
        //card body
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardBody.classList.add(vip.birth_year);
        divWrapper.appendChild(cardBody);
        //h5
        let p1 = document.createElement("p");
        p1.classList.add("card-text");
        p1.classList.add(vip.birth_year);
        p1.innerText = vip.name;
        cardBody.appendChild(p1);
        //p
        let p = document.createElement("p");
        p.classList.add("card-text");
        p.classList.add(vip.birth_year);
        p.innerHTML = vip.worth;
        cardBody.appendChild(p);
        //p3
        let p3 = document.createElement("p");
        p3.classList.add("card-text");
        p3.innerHTML = vip.source;
        p3.classList.add(vip.birth_year);
        cardBody.appendChild(p3);
        VipBox.appendChild(divWrapper);
    });
}
