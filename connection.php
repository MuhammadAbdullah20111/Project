<?php

$servername = "localhost";
$username = "root";  
$password = " ";      
$dbname = "art_gallery_db"; 


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $skills = $_POST['password'];
    $experience = $_POST['gender'];


    $sql = "INSERT INTO registration (name, email, phone, password, gender) 
            VALUES ('$name', '$email', '$phone', '$password', '$gender')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    
    $conn->close();
}
?>
