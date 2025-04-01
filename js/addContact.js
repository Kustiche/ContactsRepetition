import { render } from "./render.js";
import { contacts } from "./scripts.js";
import { inputName, inputTelephone } from "./view.js";
import { sortedContacts } from "./sortedContacts.js";
import { activationNotification } from "./activationNotification.js";

export function addContact(isFavoriteRegime) {
  const isIncorrectnesTelephone = isNaN(inputTelephone.value) || inputTelephone.value.trim() === "";

  if (isIncorrectnesTelephone) {
    inputTelephone.classList.add("error");

    activationNotification("Ошибка ввода номера телефона.");

    return;
  } else {
    inputTelephone.classList.remove("error");

    contacts.push({
      name: inputName.value.trim() === "" ? inputTelephone.value.substring(0, 26) : inputName.value.trim(),
      telephone: inputTelephone.value.substring(0, 26).trim(),
      category: "Не выбрана",
      isFavorite: false,
    });

    inputName.value = "";
    inputTelephone.value = "";

    sortedContacts();
    render(isFavoriteRegime);
    activationNotification("Контакт успешно добавлен.");

    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
}
