<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" href="header.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
      integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <base href="home.php">

    <title>Job Opportunity System</title>
  </head>
  <body>
    <?php session_start(); ?>
    <header>
      <div class="logo"><i class="fa-solid fa-briefcase"></i>Jobs Portal</div>
      <nav>
        <a href="home.php">Home</a>
        <a href="#">Jobs</a>
        <a href="#">Companies</a>
        <?php if(isset($_SESSION['user_id'])): ?>
          <a href="dashboard.php">Dashboard</a>
          <a href="logout.php">Sign Out</a>
        <?php else: ?>
          <a href="signin.html">Log In</a>
          <a href="signup.html" class="signup">Sign Up</a>
        <?php endif; ?>
      </nav>
      <div class="hamburger" id="menu-toggle">&#9776;</div>

      <nav id="mobile-nav">
        <!-- Mobile nav below header -->
        <div class="close-btn" id="close-menu">&times;</div>
        <!-- X button -->
        <a href="home.php">Home</a>
        <a href="#">Jobs</a>
        <a href="#">Companies</a>
        <?php if(isset($_SESSION['user_id'])): ?>
          <a href="dashboard.php">Dashboard</a>
          <a href="logout.php">Sign Out</a>
        <?php else: ?>
          <a href="signin.html">Log In</a>
          <a href="signup.html" class="signup">Sign Up</a>
        <?php endif; ?>
      </nav>
    </header>

    <section class="hero">
      <div class="hero-text">
        <h1>Find Your Dream Job</h1>
        <p>
          Search thousands of job opportunities and find the best fit for you in
          our system.
        </p>

        <div class="search-box">
          <input type="text" placeholder="Job title, keyword, or company" />
          <input type="text" placeholder="Location" />
          <button>Search</button>
        </div>
      </div>

      <div class="hero-img">
        <img src="images/Job-Hunting-Illustration.jpg" alt="Illustration" />
      </div>
    </section>

    <section class="categories">
      <h2>Popular Job Categories</h2>
      <div class="cat-grid">
        <a href="#"><div class="cat purple">Technology</div></a>
        <a href="#"><div class="cat green">Marketing</div></a>
        <a href="#"><div class="cat blue">Design</div></a>
        <a href="#"><div class="cat orange">Finance</div></a>
        <a href="#"><div class="cat green">Marketing</div></a>
        <a href="#"><div class="cat blue">Design</div></a>
      </div>
    </section>
    <script src="main.js"></script>
  </body>
</html>
