import { db } from "./firebase.js";
import { ref, set, push, update } from "firebase/database";

class FirebaseAPI {
  constructor() {
    this.currentUser = null;
  }

  setCurrentUser(user) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  async addUser(uid, displayName) {
    await set(ref(db, `users/${uid}`), {
      userId: uid,
      displayName: displayName,
      subscribedLists: [],
    });
  }

  async addList(createdBy) {
    const newListRef = push(ref(db, "lists"));
    await set(newListRef, {
      listName: "New List",
      createdBy: createdBy,
      subscribers: {
        [createdBy]: true,
      },
    });
    this.subscribeToList(createdBy, newListRef.key);
    return newListRef.key;
  }

  async subscribeToList(userId, listId) {
    const userRef = ref(db, `users/${userId}/subscribedLists`);
    await update(userRef, { [listId]: true });
  }

  async addItemToList(listId, description, amount) {
    const newItemRef = push(ref(db, `lists/${listId}/items`));
    await set(newItemRef, {
      description,
      amount,
      status: "not done",
    });
    return newItemRef.key;
  }
}

const firebaseAPI = new FirebaseAPI();
export default firebaseAPI;
