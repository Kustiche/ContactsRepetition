import { activationNotification } from "./activationNotification.js";
import { render } from "./render.js";
import { contacts } from "./scripts.js";
import { modal, modalCategories, modalInputName, modalInputTel } from "./view.js";

export function edititngContact(contactIndex, isFavoriteRegime) {
  const isIncorrectnesTelephone = isNaN(modalInputTel.value.replace(/\s+/g, "")) || modalInputTel.value.trim() === "";

  if (isIncorrectnesTelephone) {
    modalInputTel.classList.add("error");

    activationNotification("Ошибка ввода номера телефона.");

    return;
  } else {
    modalInputTel.classList.remove("error");

    contacts[contactIndex].name =
      modalInputName.value.trim() === "" ? modalInputTel.value.replace(/\s+/g, "") : modalInputName.value;
    contacts[contactIndex].telephone = modalInputTel.value.replace(/\s+/g, "");
    contacts[contactIndex].category = modalCategories.value;

    render(isFavoriteRegime);
    activationNotification("Контакт успешно изменён.");
    modal.close();

    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
}
