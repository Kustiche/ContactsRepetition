import { activationNotification } from "./activationNotification.js";
import { addContact } from "./addContact.js";
import { addFavorite } from "./addFavorite.js";
import { closeModal } from "./closeModal.js";
import { deleteContact } from "./deleteContact.js";
import { edititngContact } from "./edititngContact.js";
import { openModal } from "./openModal.js";
import { render } from "./render.js";
import { buttonFavorites, content, form, modal, modalDeleteButton, modalForm } from "./view.js";

export const contacts = JSON.parse(localStorage.getItem("contacts")) ?? [];
let contactIndex = "";
let isFavoriteRegime = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addContact(isFavoriteRegime);
});

content.addEventListener("click", (e) => {
  const isButtonStar = e.target.closest(".contacts__button-star") !== null;
  const isContact = e.target.closest(".contacts__contact") !== null;

  if (isButtonStar) {
    addFavorite(e, isFavoriteRegime);

    return;
  } else if (isContact) {
    contactIndex = e.target.closest(".contacts__contact").dataset.index;

    openModal(e);
  }
});

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  edititngContact(contactIndex, isFavoriteRegime);
});

modalDeleteButton.addEventListener("click", () => {
  deleteContact(contactIndex, isFavoriteRegime);
});

buttonFavorites.addEventListener("click", () => {
  isFavoriteRegime = isFavoriteRegime ? false : true;

  if (isFavoriteRegime) {
    activationNotification("Показ избранных контактов");
  } else {
    activationNotification("Показ всех контактов");
  }

  render(isFavoriteRegime);
});

modal.addEventListener("click", (e) => {
  const isClickBackgroundModal = e.target.closest(".modal__wrap");

  if (!isClickBackgroundModal) {
    closeModal();
  }
});

render();
