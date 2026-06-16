const clickFuncToRun = ({ inCurrentTarget }) => {
    const loginModal =
        document.getElementById("loginModal");

    loginModal.classList.remove("hidden");
};

const applyActive = ({ inCurrentTarget }) => {
    const localCurrentTarget = inCurrentTarget;

    const menu = localCurrentTarget.closest("#menu");

    menu.querySelectorAll("li a.active")
        .forEach(a => a.classList.remove("active"));

    localCurrentTarget.classList.add("active");

    localCurrentTarget.classList.add("active");
};

export { clickFuncToRun };