import Modal from "./modal.js";

export default class DeleteListModal extends Modal {
  constructor(listId) {
    super(true);
    this.contentContainer.innerHTML += `<h2>Delete List</h2>`;
  }
}
