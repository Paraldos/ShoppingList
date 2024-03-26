import { db, auth } from "./firebase.js";

class FirebaseAPI {
  constructor() {}

  async read(path) {
    const snapshot = await db.ref(path).once("value");
    return snapshot.val();
  }

  async login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await auth.signInWithPopup(provider);
      const user = result.user;
      console.log("User logged in:", user);
      this.initLocalData();
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }

  async initLocalData() {
    await this.getUser();
    await this.getLists();
    return true;
  }

  getCurrentUserId() {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe();
        resolve(user ? user.uid : null);
      }, reject);
    });
  }

  async getUser() {
    const uid = await this.getCurrentUserId();
    this.user = await this.read(`users/${uid}`);
    document.dispatchEvent(new CustomEvent("userLoaded"));
  }

  async getLists() {
    this.lists = [];
    for (const listId in this.user.subscribedLists) {
      this.lists.push(await this.read(`lists/${listId}`));
    }
    document.dispatchEvent(new CustomEvent("listsLoaded"));
  }
}

const firebaseAPI = new FirebaseAPI();
export default firebaseAPI;
