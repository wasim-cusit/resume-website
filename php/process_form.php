<?php
/*
 * Assignment 1: Resume Website with JavaScript Enhancements and PHP Form Handling
 * Student Name: [Your Name]
 * Student Number: [Your Student Number]
 * 
 * This file handles form validation, sanitization, and processing for the contact form.
 * It validates all input fields server-side and redirects to summary page on success.
 */

// Start session to store form data
session_start();

// Initialize error array
$errors = [];

// Check if form was submitted via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Retrieve and sanitize form data
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    
    // Validate name (letters and spaces only)
    if (empty($name)) {
        $errors['name'] = 'Name is required';
    } elseif (!preg_match('/^[a-zA-Z\s]+$/', $name)) {
        $errors['name'] = 'Name can only contain letters and spaces';
    } else {
        // Sanitize name
        $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    }
    
    // Validate email
    if (empty($email)) {
        $errors['email'] = 'Email is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Please enter a valid email address';
    } else {
        // Sanitize email
        $email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    }
    
    // Validate subject
    if (empty($subject)) {
        $errors['subject'] = 'Subject is required';
    } else {
        // Sanitize subject
        $subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
    }
    
    // Validate phone (optional field)
    if (!empty($phone)) {
        // North American phone number pattern
        $phone_pattern = '/^(\+1\s?)?\(?([0-9]{3})\)?[\s.-]?([0-9]{3})[\s.-]?([0-9]{4})$/';
        if (!preg_match($phone_pattern, $phone)) {
            $errors['phone'] = 'Please enter a valid North American phone number';
        } else {
            // Sanitize phone
            $phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
        }
    }
    
    // Validate message (minimum 20 characters)
    if (empty($message)) {
        $errors['message'] = 'Message is required';
    } elseif (strlen($message) < 20) {
        $errors['message'] = 'Message must be at least 20 characters long';
    } else {
        // Sanitize message
        $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
    }
    
    // If no errors, process the form
    if (empty($errors)) {
        // Store form data in session for summary page
        $_SESSION['form_data'] = [
            'name' => $name,
            'email' => $email,
            'subject' => $subject,
            'phone' => $phone,
            'message' => $message,
            'submission_time' => date('Y-m-d H:i:s')
        ];
        
        // Optional: Save to CSV file (Bonus feature)
        saveToCSV($name, $email, $subject, $phone, $message);
        
        // Redirect to summary page
        header('Location: summary.php');
        exit();
    }
}

/**
 * Save form submission to CSV file (Bonus feature)
 */
function saveToCSV($name, $email, $subject, $phone, $message) {
    $submissions_dir = '../submissions/';
    
    // Create submissions directory if it doesn't exist
    if (!is_dir($submissions_dir)) {
        mkdir($submissions_dir, 0755, true);
    }
    
    $csv_file = $submissions_dir . 'form_submissions.csv';
    $timestamp = date('Y-m-d H:i:s');
    
    // Prepare CSV data
    $csv_data = [
        $timestamp,
        $name,
        $email,
        $subject,
        $phone,
        str_replace(["\r", "\n"], ' ', $message) // Remove line breaks for CSV
    ];
    
    // Write to CSV file
    $file_handle = fopen($csv_file, 'a');
    if ($file_handle) {
        // Add header if file is empty
        if (filesize($csv_file) === 0) {
            fputcsv($file_handle, ['Timestamp', 'Name', 'Email', 'Subject', 'Phone', 'Message']);
        }
        fputcsv($file_handle, $csv_data);
        fclose($file_handle);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Processing - John Doe</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <!-- Header Section -->
    <header class="header">
        <div class="container">
            <h1 class="header-title">John Doe</h1>
            <p class="header-subtitle">Software Developer & Web Designer</p>
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="../index.html#about" class="nav-link">About</a></li>
                    <li><a href="../index.html#experience" class="nav-link">Experience</a></li>
                    <li><a href="../index.html#skills" class="nav-link">Skills</a></li>
                    <li><a href="../index.html#education" class="nav-link">Education</a></li>
                    <li><a href="../html/contact.html" class="nav-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main class="main">
        <section class="section">
            <div class="container">
                <h2 class="section-title">Form Processing</h2>
                
                <?php if (!empty($errors)): ?>
                    <div class="error-container">
                        <h3>Please correct the following errors:</h3>
                        <ul class="error-list">
                            <?php foreach ($errors as $field => $error): ?>
                                <li><strong><?php echo ucfirst($field); ?>:</strong> <?php echo $error; ?></li>
                            <?php endforeach; ?>
                        </ul>
                        <div class="error-actions">
                            <a href="../html/contact.html" class="btn btn-primary">Back to Contact Form</a>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
