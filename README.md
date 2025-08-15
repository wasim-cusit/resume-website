# Resume Website with PHP Form Handling

## Assignment 1: Resume Website with JavaScript Enhancements and PHP Form Handling & Summary Page

This project is a complete resume website with PHP backend functionality for processing contact forms and displaying submission summaries.

## Project Structure

```
resume-website/
├── index.html              # Main resume page
├── html/
│   └── contact.html        # Contact form page
├── php/
│   ├── process_form.php    # Form processing and validation
│   └── summary.php         # Summary page for form submissions
├── css/
│   └── style.css           # All styling for the website
├── js/
│   └── script.js           # JavaScript functionality
├── images/
│   └── README.md           # Image directory instructions
├── includes/
│   └── header.html         # Reusable header component
└── submissions/            # CSV storage for form submissions (auto-created)
    └── form_submissions.csv
```

## Features

### Frontend Features
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Form Validation**: Client-side validation with real-time feedback
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Scroll Animations**: Sections animate in as you scroll

### Backend Features
- **PHP Form Processing**: Server-side form handling and validation
- **Input Sanitization**: All user input is properly sanitized
- **Session Management**: Form data passed between pages using PHP sessions
- **CSV Storage**: Optional bonus feature to store submissions in CSV file
- **Error Handling**: Comprehensive error display and user feedback

### Form Validation Rules
- **Name**: Letters and spaces only
- **Email**: Must be a valid email format
- **Subject**: Required field
- **Phone**: Optional, must match North American format if provided
- **Message**: Minimum 20 characters required

## Setup Instructions

### Prerequisites
- XAMPP, MAMP, or similar local server environment
- PHP 7.0 or higher
- Web browser

### Installation Steps

1. **Download/Clone the Project**
   ```bash
   # Place the project in your web server directory
   # For XAMPP: C:\xampp\htdocs\
   # For MAMP: /Applications/MAMP/htdocs/
   ```

2. **Start Your Local Server**
   - Start Apache in XAMPP/MAMP
   - Ensure PHP is enabled

3. **Access the Website**
   - Open your browser
   - Navigate to: `http://localhost/resume-website/`
   - Or the appropriate path based on your setup

4. **Add Profile Image** (Optional)
   - Place a profile image named `profile.jpg` in the `images/` directory
   - Or update the image path in `index.html`

## File Descriptions

### HTML Files
- **index.html**: Main resume page with all sections
- **html/contact.html**: Contact form with proper action pointing to PHP

### PHP Files
- **php/process_form.php**: 
  - Handles form submission
  - Validates and sanitizes all input
  - Stores data in session
  - Redirects to summary page or shows errors
- **php/summary.php**: 
  - Displays submitted form data
  - Shows user's name as title
  - Formats message for readability
  - Includes submission timestamp

### CSS File
- **css/style.css**: Complete styling including:
  - Responsive design
  - Form styling
  - Summary page layout
  - Error message styling
  - Modern gradients and animations

### JavaScript File
- **js/script.js**: Client-side functionality:
  - Real-time form validation
  - Smooth scrolling
  - Scroll animations
  - Phone number formatting

## Testing the Form

1. **Valid Submission**:
   - Fill out all required fields correctly
   - Submit the form
   - You should be redirected to the summary page

2. **Invalid Submission**:
   - Try submitting with invalid data
   - Error messages should appear
   - Form should not submit

3. **Phone Number Testing**:
   - Try various phone number formats
   - Valid formats: (555) 123-4567, 555-123-4567, +1 555 123 4567

## Security Features

- **Input Sanitization**: All user input is sanitized using `htmlspecialchars()`
- **Server-side Validation**: All validation rules enforced on server
- **Session Security**: Form data cleared after display
- **CSRF Protection**: Form uses POST method with proper validation

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Internet Explorer 11+

## Troubleshooting

### Common Issues

1. **Form not submitting**:
   - Ensure PHP is enabled in your server
   - Check file permissions
   - Verify form action path is correct

2. **Styling not loading**:
   - Check CSS file path
   - Clear browser cache
   - Verify file structure

3. **PHP errors**:
   - Check PHP error logs
   - Ensure PHP version is 7.0+
   - Verify session support is enabled

### File Permissions
- Ensure web server has read access to all files
- Ensure write access to `submissions/` directory for CSV feature

## Assignment Requirements Met

✅ **Vanilla PHP**: No frameworks used  
✅ **Form Action**: Points to `../php/process_form.php`  
✅ **Server-side Validation**: All required validations implemented  
✅ **Input Sanitization**: Using `htmlspecialchars()` and `filter_var()`  
✅ **Error Handling**: Comprehensive error display  
✅ **Summary Page**: Displays all required information  
✅ **Session Management**: Data passed between pages  
✅ **CSV Storage**: Bonus feature implemented  
✅ **Well-commented Code**: Extensive comments throughout  
✅ **Responsive Design**: Works on all devices  
✅ **Professional UI/UX**: Modern, clean design  

## Customization

### Personal Information
- Update name, contact info, and experience in `index.html`
- Modify skills and education sections
- Replace profile image

### Styling
- Edit `css/style.css` to change colors, fonts, and layout
- Modify gradients and animations
- Adjust responsive breakpoints

### Form Fields
- Add/remove form fields in `html/contact.html`
- Update validation in both `js/script.js` and `php/process_form.php`
- Modify summary page display in `php/summary.php`

## License

This project is created for educational purposes as part of a web development assignment.

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Verify all files are in the correct directory structure
3. Ensure your local server environment is properly configured
