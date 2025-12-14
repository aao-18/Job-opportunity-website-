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
  // Guard checks to avoid calling .contains on null
  if (mobileNav && menuToggle) {
    if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
      mobileNav.classList.remove("active");
    }
  } else if (mobileNav) {
    // If only the mobile nav exists, close it when clicking outside
    if (!mobileNav.contains(e.target)) {
      mobileNav.classList.remove("active");
    }
  }
});

// CHECK FOR EMPTY INPUT FIELDS


// SIGN UP BUTTON FUNCTIONALITY
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
        // Only redirect if signup form is valid
        if (validateSignupForm()) {
            const email = document.getElementById('signup-email');
            const pw = document.getElementById('signup-password');
            const confirm = document.getElementById('confirm-password');
            const err = document.getElementById('error-msg');
            if (!validateEmail(email.value.trim())) {
                setFieldError(email, true);
                err.style.display = 'block';
                err.textContent = 'Please enter a valid email address.';
                email.focus();
                return;
            }
            if (!validatePasswordStrength(pw.value)) {
                setFieldError(pw, true);
                err.style.display = 'block';
                err.textContent = 'Password must be at least 8 characters and include letters and numbers.';
                pw.focus();
                return;
            }
            if (pw.value !== confirm.value) {
                setFieldError(confirm, true);
                err.style.display = 'block';
                err.textContent = 'Passwords do not match.';
                confirm.focus();
                return;
            }
            window.location.href = "success.html";
        }
    });
}

// ================================
// LOGIN BUTTON FUNCTIONALITY
// ================================
const loginBtn = document.getElementById("login-btn");

if (loginBtn) {
    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        // Only redirect if login form is valid
        if (validateLoginForm()) {
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            if (!validateEmail(email.value.trim())) {
                setFieldError(email, true);
                const err = document.getElementById('error-msg');
                err.style.display = 'block';
                err.textContent = 'Please enter a valid email address.';
                email.focus();
                return;
            }
            if (!validatePasswordStrength(password.value)) {
                setFieldError(password, true);
                const err = document.getElementById('error-msg');
                err.style.display = 'block';
                err.textContent = 'Password must be at least 8 characters and include letters and numbers.';
                password.focus();
                return;
            }
            window.location.href = "home.html";
        }
    });
}

// ================================
// Security helpers (client-side)
// ================================
function escapeHtml(unsafe) {
  if (unsafe === null || unsafe === undefined) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/\'/g, '&#039;');
}

function validateEmail(email) {
  // simple email regex for client-side validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePasswordStrength(pw) {
  // at least 8 chars, with letters and numbers
  return pw && pw.length >= 8 && /[a-zA-Z]/.test(pw) && /[0-9]/.test(pw);
}

// Toggle password visibility (delegated)
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.toggle-password');
  if (!btn) return;
  const targetId = btn.getAttribute('data-target');
  const input = document.getElementById(targetId);
  if (!input) return;
  const icon = btn.querySelector('i');
  if (input.type === 'password') {
    input.type = 'text';
    btn.setAttribute('aria-label', 'Hide password');
    if (icon) {
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }
  } else {
    input.type = 'password';
    btn.setAttribute('aria-label', 'Show password');
    if (icon) {
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  }
});

// Add/Remove error highlight utility
function setFieldError(input, hasError) {
  if (!input) return;
  if (hasError) {
    input.style.borderColor = '#e74c3c';
    input.style.boxShadow = '0 0 0 2px rgba(231, 76, 60, 0.2)';
  } else {
    input.style.borderColor = '';
    input.style.boxShadow = '';
  }
}

// Remove error highlight on input
document.addEventListener('input', function(e) {
  if (e.target && e.target.tagName === 'INPUT') {
    setFieldError(e.target, false);
  }
}, true);

// ================================
// LOGIN FORM VALIDATION
// ================================
function validateLoginForm() {
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const err = document.getElementById("error-msg");

  if (emailField.value.trim() === "") {
    err.style.display = "block";
    err.textContent = "Email cannot be empty.";
    emailField.focus();
    return false;
  }

  if (passwordField.value.trim() === "") {
    err.style.display = "block";
    err.textContent = "Password cannot be empty.";
    passwordField.focus();
    return false;
  }

  err.style.display = "none";
  return true;
}

// Login form submit handler with client-side validation
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (!validateLoginForm()) return;
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if (!validateEmail(email.value.trim())) {
      setFieldError(email, true);
      const err = document.getElementById('error-msg');
      err.style.display = 'block';
      err.textContent = 'Please enter a valid email address.';
      email.focus();
      return;
    }
    if (!validatePasswordStrength(password.value)) {
      setFieldError(password, true);
      const err = document.getElementById('error-msg');
      err.style.display = 'block';
      err.textContent = 'Password must be at least 8 characters and include letters and numbers.';
      password.focus();
      return;
    }
    window.location.href = 'home.html';
  });
}

// ================================
// SIGNUP FORM VALIDATION
// ================================
function validateSignupForm() {
  const emailField = document.getElementById("signup-email");
  const passwordField = document.getElementById("signup-password");
  const confirmField = document.getElementById("confirm-password");
  const err = document.getElementById("error-msg");

  if (emailField.value.trim() === "") {
    err.style.display = "block";
    err.textContent = "Email cannot be empty.";
    emailField.focus();
    return false;
  }

  if (passwordField.value.trim() === "") {
    err.style.display = "block";
    err.textContent = "Password cannot be empty.";
    passwordField.focus();
    return false;
  }

  if (confirmField.value.trim() === "") {
    err.style.display = "block";
    err.textContent = "Confirm password cannot be empty.";
    confirmField.focus();
    return false;
  }

  err.style.display = "none";
  return true;
}

// Signup form submit handler with client-side validation
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (!validateSignupForm()) return;
    const email = document.getElementById('signup-email');
    const pw = document.getElementById('signup-password');
    const confirm = document.getElementById('confirm-password');
    const err = document.getElementById('error-msg');
    if (!validateEmail(email.value.trim())) {
      setFieldError(email, true);
      err.style.display = 'block';
      err.textContent = 'Please enter a valid email address.';
      email.focus();
      return;
    }
    if (!validatePasswordStrength(pw.value)) {
      setFieldError(pw, true);
      err.style.display = 'block';
      err.textContent = 'Password must be at least 8 characters and include letters and numbers.';
      pw.focus();
      return;
    }
    if (pw.value !== confirm.value) {
      setFieldError(confirm, true);
      err.style.display = 'block';
      err.textContent = 'Passwords do not match.';
      confirm.focus();
      return;
    }
    // In a real app, submit via fetch to server with CSRF protection
    window.location.href = 'success.html';
  });
}
