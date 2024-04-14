import Database from "./scripts/Database.js";
import ListItem from "./scripts/ListItem.js";
const main = document.querySelector("main");

Database.forEach((list) => {
  const listHtmlElement = document.createElement("div");
  listHtmlElement.classList.add("list");
  main.appendChild(listHtmlElement);

  const listTitle = document.createElement("h2");
  listTitle.textContent = list.title;
  listHtmlElement.appendChild(listTitle);

  list.items.forEach((item) => {
    const element = new ListItem(item);
    listHtmlElement.appendChild(element.element);
  });
});
