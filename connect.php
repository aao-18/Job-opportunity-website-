<?php
session_start();
    if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST["submit"])) {
        $conn = mysqli_connect("localhost", "root", "", "test") or die("Connection Failed: ".mysqli_connect_error());
        if(isset($_POST['First_Name']) && isset($_POST['Last_Name']) && isset($_POST['email']) && isset($_POST['password'])) {
            $first_name = mysqli_real_escape_string($conn, $_POST['First_Name']);
            $last_name = mysqli_real_escape_string($conn, $_POST['Last_Name']);
            $email = mysqli_real_escape_string($conn, $_POST['email']);
            $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
            $sql = "INSERT INTO users (first_name, last_name, email, password) VALUES ('$first_name', '$last_name', '$email', '$password')";
            if(mysqli_query($conn, $sql)) {
                // Get the inserted user ID
                $user_id = mysqli_insert_id($conn);
                $_SESSION['user_id'] = $user_id;
                $_SESSION['first_name'] = $first_name;
                $_SESSION['last_name'] = $last_name;
                $_SESSION['email'] = $email;
                header('Location: home.php');
                exit();
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
        }
        
        // Signin logic
        elseif(isset($_POST['email']) && isset($_POST['password'])) {
            $email = mysqli_real_escape_string($conn, $_POST['email']);
            $password = $_POST['password'];
            $sql = "SELECT * FROM users WHERE email='$email'";
            $result = mysqli_query($conn, $sql);
            if(mysqli_num_rows($result) > 0) {
                $user = mysqli_fetch_assoc($result);
                if(password_verify($password, $user['password'])) {
                    $_SESSION['user_id'] = $user['id'];
                    $_SESSION['first_name'] = $user['first_name'];
                    $_SESSION['last_name'] = $user['last_name'];
                    $_SESSION['email'] = $user['email'];
                    header('Location: home.php');
                    exit();
                } else {
                    echo "Invalid email or password";
                }
            } else {
                echo "Invalid email or password";
            }
        }
        
        mysqli_close($conn);
    }
?>