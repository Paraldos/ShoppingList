import { db } from "./firebase.js";
import { ref, set, push, update } from "firebase/database";

export const addUser = async (uid, displayName) => {
  await set(ref(db, `users/${uid}`), {
    userId: uid,
    displayName: displayName,
    subscribedLists: [],
  });
};

export const addList = async (createdBy) => {
  const newListRef = push(ref(db, "lists"));
  await set(newListRef, {
    listName: "New List",
    createdBy: createdBy,
    subscribers: {
      [createdBy]: true,
    },
  });
  return newListRef.key;
};

// Function to subscribe a user to a list
export const subscribeToList = async (userId, listId) => {
  const userRef = ref(db, `users/${userId}/subscribedLists`);
  await update(userRef, { [listId]: true });
};

// Function to add an item to a list
export const addItemToList = async (listId, description, amount) => {
  const newItemRef = push(ref(db, `lists/${listId}/items`));
  await set(newItemRef, {
    description,
    amount,
    status: "not done",
  });
  return newItemRef.key;
};
