const AUTH_KEY = "attendanceDashboardLoggedIn";
const VALID_USERNAME = "teacher";
const VALID_PASSWORD = "attendance123";

const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const logoutBtn = document.getElementById("logoutBtn");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

if (loginForm) {
  if (isAuthenticated()) {
    window.location.replace("dashboard.html");
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      localStorage.setItem(AUTH_KEY, "true");
      window.location.href = "dashboard.html";
      return;
    }

    loginError.textContent = "Incorrect username or password.";
  });
}

if (currentPage === "dashboard.html" && !isAuthenticated()) {
  window.location.replace("index.html");
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem(AUTH_KEY);
    window.location.replace("index.html");
  });
}

function isAuthenticated() {
  return localStorage.getItem(AUTH_KEY) === "true";
}
