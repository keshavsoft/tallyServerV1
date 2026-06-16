const hideLoginError = () => {
    document
        .getElementById("loginError")
        .classList.add("hidden");

    document
        .getElementById("loginModalContent")
        .classList.remove("border-2", "border-red-500");
};

export default hideLoginError;
