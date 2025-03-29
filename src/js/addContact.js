import { render } from "./render.js";
import { contacts } from "./scripts.js";
import { inputName, inputTelephone } from "./view.js";
import { sortedContacts } from "./sortedContacts.js";

export function addContact(isFavorite) {
  const isNumberTelephone = isNaN(inputTelephone.value);

  if (isNumberTelephone) {
    inputTelephone.classList.add("error");

    return;
  } else {
    inputTelephone.classList.remove("error");

    contacts.push({
      name: inputName.value.trim() === "" ? inputTelephone.value.substring(0, 26) : inputName.value.trim(),
      telephone: inputTelephone.value.substring(0, 26),
      category: "Не выбрана",
      isFavorite: false,
    });

    inputName.value = "";
    inputTelephone.value = "";

    sortedContacts();
    render(isFavorite);

    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
}
