import { db, auth } from "./firebase.js";

class FirebaseAPI {
  async login() {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const result = await auth.signInWithPopup(provider);
      const user = result.user;
      console.log("User logged in:", user);
      return user;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }
}

const firebaseAPI = new FirebaseAPI();
export default firebaseAPI;
