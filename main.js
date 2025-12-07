// ================================
// MOBILE HAMBURGER MENU
// ================================
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("close-menu");

if(menuToggle && mobileNav){
  menuToggle.addEventListener("click", () => {
    mobileNav.classList.add("active"); // open menu
  });
}

if(closeBtn && mobileNav){
  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active"); // close menu
  });
}

// Optional: click outside to close
document.addEventListener("click", (e) => {
  if(!mobileNav.contains(e.target) && !menuToggle.contains(e.target)){
    mobileNav.classList.remove("active");
  }
});

// CHECK FOR EMPTY INPUT FIELDS


// ================================
// SIGN UP BUTTON FUNCTIONALITY
// ================================
const signupBtn = document.getElementById("signup-btn");
const signupBtn1 = document.getElementById("signup-btn1");
const signupBtn2 = document.getElementById("signup-btn2");

if (signupBtn1) {
    signupBtn1.addEventListener("click", function (event) {
        event.preventDefault();

        // simple redirect
        window.location.href = "signup.html";
    });
}
if (signupBtn2) {
    signupBtn2.addEventListener("click", function (event) {
        event.preventDefault();

        // simple redirect
        window.location.href = "signup.html";
    });
}
if (signupBtn) {
    signupBtn.addEventListener("click", function (event) {
        event.preventDefault();

        // simple redirect
        window.location.href = "success.html";
    });
}

// ================================
// LOGIN BUTTON FUNCTIONALITY
// ================================
const loginBtn = document.getElementById("login-btn");

if (loginBtn) {
    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();

        window.location.href = "home.html";
    });
}
