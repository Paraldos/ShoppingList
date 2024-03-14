import firebaseAPI from "./firebaseAPI.js";

export default class Nav {
  constructor() {
    this.loginBtn = document.getElementById("login-btn");
    this.loginBtn.addEventListener("click", () => firebaseAPI.login());
  }
}
