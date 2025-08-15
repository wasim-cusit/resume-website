/*
 * Assignment 1: Resume Website with JavaScript Enhancements and PHP Form Handling
 * Student Name: [Your Name]
 * Student Number: [Your Student Number]
 * 
 * This file contains JavaScript functionality for form validation and
 * interactive features on the resume website.
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize form validation if contact form exists
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        initializeFormValidation();
    }
    
    // Initialize smooth scrolling for navigation links
    initializeSmoothScrolling();
    
    // Initialize scroll animations
    initializeScrollAnimations();
});

/**
 * Initialize form validation for the contact form
 */
function initializeFormValidation() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    
    // Real-time validation for name field
    nameInput.addEventListener('input', function() {
        validateName(this.value);
    });
    
    // Real-time validation for email field
    emailInput.addEventListener('input', function() {
        validateEmail(this.value);
    });
    
    // Real-time validation for subject field
    subjectInput.addEventListener('input', function() {
        validateSubject(this.value);
    });
    
    // Real-time validation for phone field
    phoneInput.addEventListener('input', function() {
        validatePhone(this.value);
    });
    
    // Real-time validation for message field
    messageInput.addEventListener('input', function() {
        validateMessage(this.value);
    });
    
    // Form submission validation
    form.addEventListener('submit', function(e) {
        const isValid = validateForm();
        if (!isValid) {
            e.preventDefault();
        }
    });
}

/**
 * Validate the entire form
 * @returns {boolean} True if form is valid, false otherwise
 */
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    let isValid = true;
    
    // Validate each field
    if (!validateName(name)) isValid = false;
    if (!validateEmail(email)) isValid = false;
    if (!validateSubject(subject)) isValid = false;
    if (phone && !validatePhone(phone)) isValid = false;
    if (!validateMessage(message)) isValid = false;
    
    return isValid;
}

/**
 * Validate name field (letters and spaces only)
 * @param {string} name - The name to validate
 * @returns {boolean} True if valid, false otherwise
 */
function validateName(name) {
    const nameError = document.getElementById('nameError');
    const nameInput = document.getElementById('name');
    
    if (name.trim() === '') {
        showError(nameError, 'Name is required');
        highlightError(nameInput);
        return false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        showError(nameError, 'Name can only contain letters and spaces');
        highlightError(nameInput);
        return false;
    } else {
        clearError(nameError);
        clearHighlight(nameInput);
        return true;
    }
}

/**
 * Validate email field
 * @param {string} email - The email to validate
 * @returns {boolean} True if valid, false otherwise
 */
function validateEmail(email) {
    const emailError = document.getElementById('emailError');
    const emailInput = document.getElementById('email');
    
    if (email.trim() === '') {
        showError(emailError, 'Email is required');
        highlightError(emailInput);
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError(emailError, 'Please enter a valid email address');
        highlightError(emailInput);
        return false;
    } else {
        clearError(emailError);
        clearHighlight(emailInput);
        return true;
    }
}

/**
 * Validate subject field
 * @param {string} subject - The subject to validate
 * @returns {boolean} True if valid, false otherwise
 */
function validateSubject(subject) {
    const subjectError = document.getElementById('subjectError');
    const subjectInput = document.getElementById('subject');
    
    if (subject.trim() === '') {
        showError(subjectError, 'Subject is required');
        highlightError(subjectInput);
        return false;
    } else {
        clearError(subjectError);
        clearHighlight(subjectInput);
        return true;
    }
}

/**
 * Validate phone field (optional)
 * @param {string} phone - The phone number to validate
 * @returns {boolean} True if valid, false otherwise
 */
function validatePhone(phone) {
    const phoneError = document.getElementById('phoneError');
    const phoneInput = document.getElementById('phone');
    
    if (phone.trim() === '') {
        clearError(phoneError);
        clearHighlight(phoneInput);
        return true; // Phone is optional
    } else {
        // North American phone number pattern
        const phonePattern = /^(\+1\s?)?\(?([0-9]{3})\)?[\s.-]?([0-9]{3})[\s.-]?([0-9]{4})$/;
        if (!phonePattern.test(phone)) {
            showError(phoneError, 'Please enter a valid North American phone number');
            highlightError(phoneInput);
            return false;
        } else {
            clearError(phoneError);
            clearHighlight(phoneInput);
            return true;
        }
    }
}

/**
 * Validate message field (minimum 20 characters)
 * @param {string} message - The message to validate
 * @returns {boolean} True if valid, false otherwise
 */
function validateMessage(message) {
    const messageError = document.getElementById('messageError');
    const messageInput = document.getElementById('message');
    
    if (message.trim() === '') {
        showError(messageError, 'Message is required');
        highlightError(messageInput);
        return false;
    } else if (message.trim().length < 20) {
        showError(messageError, 'Message must be at least 20 characters long');
        highlightError(messageInput);
        return false;
    } else {
        clearError(messageError);
        clearHighlight(messageInput);
        return true;
    }
}

/**
 * Show error message
 * @param {HTMLElement} errorElement - The error element to show
 * @param {string} message - The error message
 */
function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

/**
 * Clear error message
 * @param {HTMLElement} errorElement - The error element to clear
 */
function clearError(errorElement) {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

/**
 * Highlight input field as error
 * @param {HTMLElement} inputElement - The input element to highlight
 */
function highlightError(inputElement) {
    inputElement.style.borderColor = '#e74c3c';
    inputElement.style.backgroundColor = '#fff5f5';
}

/**
 * Clear input field error highlighting
 * @param {HTMLElement} inputElement - The input element to clear highlighting
 */
function clearHighlight(inputElement) {
    inputElement.style.borderColor = '#e1e8ed';
    inputElement.style.backgroundColor = '#fff';
}

/**
 * Initialize smooth scrolling for navigation links
 */
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize scroll animations for sections
 */
function initializeScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all sections
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

/**
 * Add loading animation to form submission
 */
function addFormLoadingAnimation() {
    const submitButton = document.querySelector('.btn-primary');
    if (submitButton) {
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        submitButton.style.opacity = '0.7';
    }
}

/**
 * Remove loading animation from form submission
 */
function removeFormLoadingAnimation() {
    const submitButton = document.querySelector('.btn-primary');
    if (submitButton) {
        submitButton.textContent = 'Send Message';
        submitButton.disabled = false;
        submitButton.style.opacity = '1';
    }
}

/**
 * Show success message
 * @param {string} message - The success message to show
 */
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        background-color: #d4edda;
        color: #155724;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
        border: 1px solid #c3e6cb;
    `;
    
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(successDiv, form);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

/**
 * Format phone number as user types
 */
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length >= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 3) {
        value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
    }
    
    input.value = value;
}

// Add phone formatting if phone input exists
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function() {
        formatPhoneNumber(this);
    });
}
