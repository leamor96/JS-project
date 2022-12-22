const countryInput = document.getElementById(
  "country-input"
) as HTMLInputElement;
const addBtn = document.getElementById("add-btn") as HTMLButtonElement;

//יצירת מערך מאינפוט משתמש
let contriesArr: string[] = [];
let contriesArrSet: Set<string> = new Set();

addBtn.addEventListener("click", () => {
  //get the input values:
  contriesArr.push(countryInput.value);
  contriesArr.sort();
  countryInput.value = "";
  console.log(contriesArr);
});

//חיפוש מדינות ברשימה ששמרתי
const searchInput = document.getElementById("search-input") as HTMLInputElement;
const countriesUl = document.querySelector(".country-list") as HTMLUListElement;

//handle letter clicked:
searchInput.addEventListener("input", () => {
  document.querySelectorAll(".country-list")[0].innerHTML = "";
  const inputValue = searchInput.value.toLowerCase();

  //אם הקלט ריק - סיימנו
  if (inputValue.length === 0) {
    return;
  }
  let filteredCountries = contriesArr.filter((country) =>
    country.toLowerCase().startsWith(inputValue)
  );
  contriesArrSet = new Set(filteredCountries);
  contriesArrSet.forEach((c) => {
    const li = document.createElement("li");
    li.addEventListener("click", function (e) {
      let elem: HTMLLIElement = e.target as HTMLLIElement;
     /*  li.classList.add("changeColor");      לא קריטי לי*/
      //country-selected
      let liSelected = document.getElementById("country-selected") as HTMLLabelElement;
      liSelected.innerText = elem.innerHTML;
    });
    li.classList.add("country-item");
    li.innerText = c;
    countriesUl.appendChild(li);
    return li;
  });

});

//display all saved contries
const listBtn = document.getElementById("list-btn") as HTMLButtonElement;

listBtn.addEventListener("click", () => {
  let finalContriesArr = [...new Set(contriesArr)];
  let ul = document.getElementById("all-countries") as HTMLUListElement;
  ul.innerHTML = "";
  finalContriesArr.forEach((e) => {
    let li = document.createElement("li") as HTMLLIElement;
    li.classList.add("liGap")
    li.addEventListener("click", () => {
      li.classList.add("changeColor");
    });
    li.innerHTML = e;
    ul.appendChild(li);
  });
});
/*   ul.innerText = finalContriesArr.join(", "); */