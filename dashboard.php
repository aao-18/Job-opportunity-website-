<?php
session_start();
if(!isset($_SESSION['user_id'])) {
    header('Location: signin.html');
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Dashboard - Job Opportunity System</title>
</head>
<body>
    <header>
        <div class="logo"><i class="fa-solid fa-briefcase"></i>Jobs Portal</div>
        <nav>
            <a href="home.php">Home</a>
            <span>Welcome, <?php echo htmlspecialchars($_SESSION['first_name']); ?></span>
            <a href="logout.php">Sign Out</a>
        </nav>
    </header>
    <main>
        <h1>Dashboard</h1>
        <div class="dashboard-content">
            <h2>Your Profile</h2>
            <p><strong>Name:</strong> <?php echo htmlspecialchars($_SESSION['first_name'] . ' ' . $_SESSION['last_name']); ?></p>
            <p><strong>Email:</strong> <?php echo htmlspecialchars($_SESSION['email']); ?></p>
            <h2>Applied Jobs</h2>
            <p>No applications yet.</p>
            <a href="home.php">Browse Jobs</a>
        </div>
    </main>
</body>
</html>