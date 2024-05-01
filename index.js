import Database from "./scripts/Database.js";
import List from "./scripts/List.js";

Object.keys(Database.lists).forEach((listId) => {
  new List(listId);
});
