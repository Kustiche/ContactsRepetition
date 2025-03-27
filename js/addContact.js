import { render } from "./render.js";
import { contacts } from "./scripts.js";
import { inputTelephone } from "./view.js";
import { sortedContacts } from "./sortedContacts.js";

export function addContact(e) {
  const name = e.target[0].value;
  const telephone = e.target[1].value;

  const isNumberTelephone = isNaN(telephone);

  if (isNumberTelephone) {
    inputTelephone.classList.add("error");

    return;
  } else {
    inputTelephone.classList.remove("error");

    contacts.push({
      name,
      telephone,
      category: "Не выбрано",
      isFavorite: false,
    });

    sortedContacts();
    render();
  }
}
