import ListItem from "./scripts/ListItem.js";
import List from "./scripts/List.js";

let lists = [
  new List("1", "Groceries", [
    new ListItem(1, "Milk", false),
    new ListItem(1, "Eggs", false),
  ]),
  new List("2", "To Do", [
    new ListItem(1, "Laundry", false),
    new ListItem(1, "Dishes", false),
  ]),
];

console.log(lists);
