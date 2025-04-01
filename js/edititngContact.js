import { activationNotification } from "./activationNotification.js";
import { render } from "./render.js";
import { contacts } from "./scripts.js";
import { modal, modalCategories, modalInputName, modalInputTel } from "./view.js";

export function edititngContact(contactIndex, isFavoriteRegime) {
  const isIncorrectnesTelephone = isNaN(modalInputTel.value) || modalInputTel.value.trim() === "";

  if (isIncorrectnesTelephone) {
    modalInputTel.classList.add("error");

    return;
  } else {
    modalInputTel.classList.remove("error");

    contacts[contactIndex].name =
      modalInputName.value.trim() === "" ? modalInputTel.value.substring(0, 26) : modalInputName.value.trim();
    contacts[contactIndex].telephone = modalInputTel.value.substring(0, 26).trim();
    contacts[contactIndex].category = modalCategories.value;

    render(isFavoriteRegime);
    activationNotification("Контакт успешно изменён.");
    modal.close();

    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
}
