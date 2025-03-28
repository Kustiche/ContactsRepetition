import { render } from "./render.js";
import { contacts } from "./scripts.js";
import { modal, modalCategories, modalInputName, modalInputTel } from "./view.js";

export function edititngContact(contactIndex, isFavorite) {
  contacts[contactIndex].name = modalInputName.value;
  contacts[contactIndex].category = modalCategories.value;

  const isNumberTelephone = isNaN(modalInputTel.value);

  if (isNumberTelephone) {
    modalInputTel.classList.add("error");

    return;
  } else {
    modalInputTel.classList.remove("error");

    contacts[contactIndex].telephone = modalInputTel.value;

    render(isFavorite);
    modal.close();

    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
}
