import Database from "./Database.js";
import Modal from "./modal.js";

export default class ChangeListTitleModal extends Modal {
  constructor(listId) {
    super(true);
    this.listId = listId;
    this.dbEntry = Database.lists[listId];
    this.contentContainer.innerHTML += `<h2>Change List Name</h2>`;
    this.addInput();
  }

  addInput() {
    const input = document.createElement("input");
    input.type = "text";
    input.id = "new-list-name";
    input.value = this.dbEntry.title;
    input.addEventListener("input", () => {
      this.dbEntry.title = input.value;
      document.dispatchEvent(new Event("updateListTitle"));
      Database.save();
    });
    this.contentContainer.appendChild(input);
  }
}
