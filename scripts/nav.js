import firebaseAPI from "./firebaseAPI.js";

export default class Nav {
  constructor() {
    this.loginBtn = document.getElementById("login-btn");
    this.addListBtn = document.getElementById("add-list-btn");

    this.loginBtn.addEventListener("click", () => firebaseAPI.login());
    this.addListBtn.addEventListener("click", () => firebaseAPI.newList());
  }
}
