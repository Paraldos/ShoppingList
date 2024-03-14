import { db, auth } from "./firebase.js";

class FirebaseAPI {
  hello() {
    console.log("hi");
  }
}

const firebaseAPI = new FirebaseAPI();
export default firebaseAPI;
