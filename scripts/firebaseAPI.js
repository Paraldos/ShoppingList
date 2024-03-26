import { db, auth } from "./firebase.js";

class FirebaseAPI {
  // ============================================= basics
  async read(path) {
    const snapshot = await db.ref(path).once("value");
    return snapshot.val();
  }

  async write(path, data) {
    await db.ref(path).set(data);
  }

  // ============================================= lists
  async newList() {
    const ref = db.ref("lists").push();
    const list = {
      title: "New List",
      id: ref.key,
      items: [],
    };
    await ref.set(list);
    this.lists.push(list);
    this.addListToUser(ref.key);
    document.dispatchEvent(new CustomEvent("newListAdded"));
  }

  addListToUser(listId) {
    this.user.subscribedLists = this.user.subscribedLists || [];
    this.user.subscribedLists[listId] = true;
    this.write(`users/${this.user.userId}`, this.user);
  }

  // ============================================= login
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

  // ============================================= init data
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
