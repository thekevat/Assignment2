document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Form Validation for Admission Form
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const requiredFields = admissionForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Add error message if it doesn't exist
                    let errorMessage = field.parentElement.querySelector('.error-message');
                    if (!errorMessage) {
                        errorMessage = document.createElement('div');
                        errorMessage.className = 'error-message';
                        errorMessage.textContent = 'This field is required';
                        field.parentElement.appendChild(errorMessage);
                    }
                } else {
                    field.classList.remove('error');
                    const errorMessage = field.parentElement.querySelector('.error-message');
                    if (errorMessage) {
                        errorMessage.remove();
                    }
                }
            });
            
            // Email validation for email field
            const emailField = admissionForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('error');
                    
                    let errorMessage = emailField.parentElement.querySelector('.error-message');
                    if (!errorMessage) {
                        errorMessage = document.createElement('div');
                        errorMessage.className = 'error-message';
                        errorMessage.textContent = 'Please enter a valid email address';
                        emailField.parentElement.appendChild(errorMessage);
                    } else {
                        errorMessage.textContent = 'Please enter a valid email address';
                    }
                }
            }
            
            if (isValid) {
                // Form is valid, show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Your application has been submitted successfully!';
                
                // Insert success message after form
                admissionForm.parentElement.insertBefore(successMessage, admissionForm.nextSibling);
                
                // Reset form
                admissionForm.reset();
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth' });
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
        
        // Remove error styling on input
        admissionForm.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('input', function() {
                this.classList.remove('error');
                const errorMessage = this.parentElement.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            });
        });
    }
    
    // Form Validation for Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Add error message if it doesn't exist
                    let errorMessage = field.parentElement.querySelector('.error-message');
                    if (!errorMessage) {
                        errorMessage = document.createElement('div');
                        errorMessage.className = 'error-message';
                        errorMessage.textContent = 'This field is required';
                        field.parentElement.appendChild(errorMessage);
                    }
                } else {
                    field.classList.remove('error');
                    const errorMessage = field.parentElement.querySelector('.error-message');
                    if (errorMessage) {
                        errorMessage.remove();
                    }
                }
            });
            
            // Email validation for email field
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('error');
                    
                    let errorMessage = emailField.parentElement.querySelector('.error-message');
                    if (!errorMessage) {
                        errorMessage = document.createElement('div');
                        errorMessage.className = 'error-message';
                        errorMessage.textContent = 'Please enter a valid email address';
                        emailField.parentElement.appendChild(errorMessage);
                    } else {
                        errorMessage.textContent = 'Please enter a valid email address';
                    }
                }
            }
            
            if (isValid) {
                // Form is valid, show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Your message has been sent successfully!';
                
                // Insert success message after form
                contactForm.parentElement.insertBefore(successMessage, contactForm.nextSibling);
                
                // Reset form
                contactForm.reset();
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth' });
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
        
        // Remove error styling on input
        contactForm.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('input', function() {
                this.classList.remove('error');
                const errorMessage = this.parentElement.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            });
        });
    }
    
    // Department and Course Selection Linking
    const departmentSelect = document.getElementById('department');
    const courseSelect = document.getElementById('course');
    
    if (departmentSelect && courseSelect) {
        // Define courses by department
        const coursesByDepartment = {
            'science': ['computer-science', 'mathematics', 'physics'],
            'arts': ['english', 'sociology', 'history'],
            'commerce': ['business-administration', 'accounting', 'economics']
        };
        
        // Course names for display
        const courseNames = {
            'computer-science': 'Computer Science',
            'mathematics': 'Mathematics',
            'physics': 'Physics',
            'english': 'English',
            'sociology': 'Sociology',
            'history': 'History',
            'business-administration': 'Business Administration',
            'accounting': 'Accounting',
            'economics': 'Economics'
        };
        
        // Update courses when department changes
        departmentSelect.addEventListener('change', function() {
            const selectedDepartment = this.value;
            
            // Clear current options
            courseSelect.innerHTML = '<option value="">Select course</option>';
            
            // If a department is selected, add its courses
            if (selectedDepartment && coursesByDepartment[selectedDepartment]) {
                coursesByDepartment[selectedDepartment].forEach(courseValue => {
                    const option = document.createElement('option');
                    option.value = courseValue;
                    option.textContent = courseNames[courseValue];
                    courseSelect.appendChild(option);
                });
            }
        });
    }
    
    // Add CSS class for form validation styling
    const style = document.createElement('style');
    style.textContent = `
        .error {
            border-color: #dc3545 !important;
        }
        
        .error-message {
            color: #dc3545;
            font-size: 0.875rem;
            margin-top: 5px;
        }
        
        .success-message {
            background-color: #d4edda;
            color: #155724;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 20px;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
});