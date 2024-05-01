import Database from "./scripts/Database.js";
import List from "./scripts/List.js";
const main = document.querySelector("main");

Database.lists.forEach((list) => {
  main.appendChild(List.initList(list));
});
