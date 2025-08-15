<?php
/*
 * Assignment 1: Resume Website with JavaScript Enhancements and PHP Form Handling
 * Student Name: [Your Name]
 * Student Number: [Your Student Number]
 * 
 * This file displays the summary of submitted form data with proper formatting.
 * It retrieves data from PHP sessions and displays it in a structured format.
 */

// Start session to retrieve form data
session_start();

// Check if form data exists in session
if (!isset($_SESSION['form_data'])) {
    // Redirect to contact form if no data
    header('Location: ../html/contact.html');
    exit();
}

// Retrieve form data from session
$form_data = $_SESSION['form_data'];

// Clear session data after retrieving
unset($_SESSION['form_data']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($form_data['name']); ?> - Form Submission Summary</title>
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
                <div class="summary-container">
                    <h1 class="summary-title"><?php echo htmlspecialchars($form_data['name']); ?></h1>
                    
                    <div class="summary-content">
                        <div class="summary-item">
                            <h2 class="summary-label">Email Address</h2>
                            <p class="summary-value"><?php echo htmlspecialchars($form_data['email']); ?></p>
                        </div>

                        <div class="summary-item">
                            <h2 class="summary-label">Subject</h2>
                            <p class="summary-value"><?php echo strtoupper(htmlspecialchars($form_data['subject'])); ?></p>
                        </div>

                        <?php if (!empty($form_data['phone'])): ?>
                        <div class="summary-item">
                            <h2 class="summary-label">Phone Number</h2>
                            <p class="summary-value"><?php echo htmlspecialchars($form_data['phone']); ?></p>
                        </div>
                        <?php endif; ?>

                        <div class="summary-item">
                            <h2 class="summary-label">Message</h2>
                            <div class="message-content">
                                <?php 
                                // Convert line breaks to HTML for better readability
                                $formatted_message = nl2br(htmlspecialchars($form_data['message']));
                                echo $formatted_message;
                                ?>
                            </div>
                        </div>

                        <div class="summary-item">
                            <h2 class="summary-label">Submission Date & Time</h2>
                            <p class="summary-value"><?php echo htmlspecialchars($form_data['submission_time']); ?></p>
                        </div>
                    </div>

                    <div class="summary-actions">
                        <a href="../html/contact.html" class="btn btn-primary">Send Another Message</a>
                        <a href="../index.html" class="btn btn-secondary">Back to Home</a>
                    </div>
                </div>
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
