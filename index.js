import Database from "./scripts/Database.js";
import List from "./scripts/List.js";

class App {
  constructor() {
    this.main = document.querySelector("main");
    this.addListButton = document.querySelector("#add-list-btn");
    this.addListButton.addEventListener("click", () => {
      Database.newList();
      this.renderLists();
    });
    this.renderLists();
  }

  renderLists() {
    this.main.innerHTML = "";
    Object.keys(Database.lists).forEach((listId) => {
      new List(listId);
    });
  }
}
new App();
