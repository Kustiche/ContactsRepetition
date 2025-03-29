import { contacts } from "./scripts.js";
import { modal, modalCategories, modalInputName, modalInputTel } from "./view.js";

export function openModal(e) {
  const contactIndex = e.target.closest(".contacts__contact").dataset.index;

  modalInputName.value = contacts[contactIndex].name;
  modalInputTel.value = contacts[contactIndex].telephone;
  modalCategories.value = contacts[contactIndex].category;

  modalInputTel.classList.remove("error");

  modal.showModal();
}
