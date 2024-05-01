import Modal from "./modal.js";

export default class DeleteListModal extends Modal {
  constructor(listId) {
    super();
    this.modalBody.innerHTML += `
      <h2>Delete List</h2>`;
  }
}
