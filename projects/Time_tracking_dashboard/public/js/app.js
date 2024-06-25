import { data, getCard } from "./data.js";

// console.log(data[0][0].timeframes.daily.previous)
let daily = document.getElementById("Daily");
let weekly = document.getElementById("Weekly");
let monthly = document.getElementById("Monthly");

main(1);

daily.addEventListener("click", () => {
  main(0);
});
weekly.addEventListener("click", () => {
  main(1);
});
monthly.addEventListener("click", () => {
  main(2);
});

function main(id) {
  let container_cards = document.getElementById("container_cards");
  container_cards.innerHTML = ``;
  for (let i = 0; i < 6; i++) {
    let data = getData(id, i);
    container_cards.innerHTML += getCard(data.current, data.previous, id, i);
  }
}

function getData(id, i) {
  daily.classList.remove("whitetext");
  weekly.classList.remove("whitetext");
  monthly.classList.remove("whitetext");

  if (id == 0) {
    daily.classList.add("whitetext");
    return data[0][i].timeframes.daily;
  }
  if (id == 1) {
    weekly.classList.add("whitetext");
    return data[0][i].timeframes.weekly;
  }

  if (id == 2) {
    monthly.classList.add("whitetext");
    return data[0][i].timeframes.monthly;
  }
}
