import firebaseAPI from "./firebaseAPI.js";
import List from "./list.js";

export default class Lists {
  constructor() {
    this.lists = document.querySelector(".lists");
    document.addEventListener("listsLoaded", () => this.update());
    document.addEventListener("newListAdded", () => this.update());
  }

  update() {
    this.lists.innerHTML = "";
    firebaseAPI.lists.forEach((list) => new List(list, this.lists));
  }
}
