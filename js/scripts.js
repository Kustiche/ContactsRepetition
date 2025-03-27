import { addContact } from "./addContact.js";
import { addFavorite } from "./addFavorite.js";
import { edititngContact } from "./edititngContact.js";
import { openModal } from "./openModal.js";
import { content, form, modalForm } from "./view.js";

export const contacts = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addContact(e);
});

content.addEventListener("click", (e) => {
  const isButtonStar = e.target.closest(".contacts__button-star") !== null;
  const isContact = e.target.closest(".contacts__contact") !== null;

  if (isButtonStar) {
    addFavorite(e);

    return;
  } else if (isContact) {
    openModal();
  }
});

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  edititngContact();
});
