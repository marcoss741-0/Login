var themeIcon = document.getElementById("theme-icon");
var loginForm = document.getElementById("login-form");

const chooseTheme = () => {
  if (themeIcon.classList.contains("fa-moon")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

    loginForm.classList.add("dark");
    document.body.classList.add("dark-body");
    return;
  }

  themeIcon.classList.add("fa-moon");
  themeIcon.classList.remove("fa-sun");
  loginForm.classList.remove("dark");
  document.body.classList.remove("dark-body");
};

themeIcon.addEventListener("click", chooseTheme);
