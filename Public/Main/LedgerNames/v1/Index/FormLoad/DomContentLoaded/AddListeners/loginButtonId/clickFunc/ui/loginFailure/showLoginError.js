const showLoginError = () => {
    document
        .getElementById("loginError")
        .classList.remove("hidden");

    document
        .getElementById("loginError")
        .textContent = "Invalid username or password";

    document
        .getElementById("loginModalContent")
        .classList.add("border-2", "border-red-500");
};

export default showLoginError;
