import firebaseAPI from "./firebaseAPI.js";

export default class Lists {
  constructor() {
    this.userData = firebaseAPI.getUserData();
  }
}
