import { db, auth } from "./firebase.js";

class FirebaseAPI {
  constructor() {
    this.user = this.getCurrentUser();
    this.lists = this.getListsData();
  }

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

  getCurrentUser() {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe();
        resolve(user);
      }, reject);
    });
  }

  async read(path) {
    const snapshot = await db.ref(path).once("value");
    return snapshot.val();
  }

  async getUserData() {
    const user = await this.getCurrentUser();
    const snapshot = await db.ref(`users/${user.uid}`).once("value");
    return snapshot.val();
  }

  async getListsData() {
    const lists = await this.read("lists/");
    return lists;
  }

  async getUserLists() {}

  async updateUserData() {
    // TODO: Get all user data and save localy.
  }
}

const firebaseAPI = new FirebaseAPI();
export default firebaseAPI;
