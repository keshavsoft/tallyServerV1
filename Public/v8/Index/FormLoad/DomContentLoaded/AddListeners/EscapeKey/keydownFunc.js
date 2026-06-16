import hideLoginModal from "../../Common/LoginModal/hide.js";

const keydownFunc = event => {
    if (event.key !== "Escape") return;

    const loginModal = document.getElementById("loginModal");

    if (loginModal.classList.contains("hidden")) return;

    event.preventDefault();
    event.stopPropagation();
    hideLoginModal();
};

export default keydownFunc;
