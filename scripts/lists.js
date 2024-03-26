import firebaseAPI from "./firebaseAPI.js";

export default class Lists {
  constructor() {
    document.addEventListener("listsLoaded", () => {
      this.init();
    });
  }

  init() {
    console.log(firebaseAPI.lists);
  }
}
