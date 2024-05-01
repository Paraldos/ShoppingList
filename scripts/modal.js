export default class Modal {
  constructor() {
    this.overlay = this.addOverlay();
    this.modalBody = this.addModalBody();
  }

  addOverlay() {
    const overlay = document.createElement("div");
    overlay.classList.add("modal__overlay");
    document.body.appendChild(overlay);
    return overlay;
  }

  addModalBody() {
    const modalBody = document.createElement("div");
    modalBody.classList.add("modal__body");
    this.overlay.appendChild(modalBody);
    return modalBody;
  }

  removeModal() {
    this.overlay.remove();
  }
}
