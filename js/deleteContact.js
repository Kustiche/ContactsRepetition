import { render } from "./render.js";
import { contacts } from "./scripts.js";
import { modal } from "./view.js";

export function deleteContact(contactIndex, isFavorite) {
  contacts.splice(contactIndex, 1);

  render(isFavorite);
  modal.close();

  localStorage.setItem("contacts", JSON.stringify(contacts));
}
