
// Global Variables
let currentStep = 1;
let formData = {};

// DOM Elements
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');
const appointmentForm = document.getElementById('appointmentForm');
const contactForm = document.getElementById('contactForm');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set minimum date for appointment booking (today)
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('appointmentDate').min = today;
    
    // Initialize navigation
    initNavigation();
    
    // Initialize forms
    initForms();
    
    // Show home section by default
    showSection('home');
});

// Navigation Functions
function initNavigation() {
    // Add click events to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
            updateActiveNav(this);
            
            // Close mobile menu if open
            nav.classList.remove('mobile-active');
        });
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('mobile-active');
    });
}

function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.classList.add('fade-in');
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

function updateActiveNav(activeLink) {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// Form Functions
function initForms() {
    // Appointment form
    appointmentForm.addEventListener('submit', handleAppointmentSubmit);
    
    // Contact form
    contactForm.addEventListener('submit', handleContactSubmit);
    
    // Specialty change handler for doctor dropdown
    document.getElementById('specialty').addEventListener('change', updateDoctorOptions);
}

// Appointment Form Steps
function nextStep() {
    if (validateCurrentStep()) {
        if (currentStep < 3) {
            // Hide current step
            document.getElementById(`step${currentStep}`).classList.remove('active');
            document.querySelector(`.step[data-step="${currentStep}"]`).classList.remove('active');
            
            currentStep++;
            
            // Show next step
            document.getElementById(`step${currentStep}`).classList.add('active');
            document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('active');
            
            // If moving to confirmation step, populate confirmation details
            if (currentStep === 3) {
                populateConfirmation();
            }
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        // Hide current step
        document.getElementById(`step${currentStep}`).classList.remove('active');
        document.querySelector(`.step[data-step="${currentStep}"]`).classList.remove('active');
        
        currentStep--;
        
        // Show previous step
        document.getElementById(`step${currentStep}`).classList.add('active');
        document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('active');
    }
}

function validateCurrentStep() {
    const currentStepElement = document.getElementById(`step${currentStep}`);
    const requiredFields = currentStepElement.querySelectorAll('[required]');
    
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#ef4444';
            
            // Remove error styling after user starts typing
            field.addEventListener('input', function() {
                this.style.borderColor = '#e2e8f0';
            });
        }
    });
    
    if (!isValid) {
        alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
    }
    
    return isValid;
}

function populateConfirmation() {
    const formData = new FormData(appointmentForm);
    const confirmationDetails = document.getElementById('confirmationDetails');
    
    const specialtyNames = {
        'noi-khoa': 'Nội Khoa',
        'ngoai-khoa': 'Ngoại Khoa',
        'san-phu-khoa': 'Sản Phụ Khoa',
        'nhi-khoa': 'Nhi Khoa',
        'tim-mach': 'Tim Mạch',
        'than-kinh': 'Thần Kinh'
    };
    
    const appointmentDate = new Date(formData.get('appointmentDate'));
    const formattedDate = appointmentDate.toLocaleDateString('vi-VN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    confirmationDetails.innerHTML = `
        <div class="confirmation-item">
            <span class="confirmation-label">Họ và Tên:</span>
            <span class="confirmation-value">${formData.get('fullName')}</span>
        </div>
        <div class="confirmation-item">
            <span class="confirmation-label">Số Điện Thoại:</span>
            <span class="confirmation-value">${formData.get('phone')}</span>
        </div>
        <div class="confirmation-item">
            <span class="confirmation-label">Email:</span>
            <span class="confirmation-value">${formData.get('email') || 'Không cung cấp'}</span>
        </div>
        <div class="confirmation-item">
            <span class="confirmation-label">Chuyên Khoa:</span>
            <span class="confirmation-value">${specialtyNames[formData.get('specialty')] || formData.get('specialty')}</span>
        </div>
        <div class="confirmation-item">
            <span class="confirmation-label">Ngày Khám:</span>
            <span class="confirmation-value">${formattedDate}</span>
        </div>
        <div class="confirmation-item">
            <span class="confirmation-label">Giờ Khám:</span>
            <span class="confirmation-value">${formData.get('appointmentTime')}</span>
        </div>
        <div class="confirmation-item">
            <span class="confirmation-label">Bác Sĩ:</span>
            <span class="confirmation-value">${formData.get('doctor') || 'Hệ thống sẽ chọn bác sĩ phù hợp'}</span>
        </div>
        ${formData.get('symptoms') ? `
        <div class="confirmation-item">
            <span class="confirmation-label">Triệu Chứng:</span>
            <span class="confirmation-value">${formData.get('symptoms')}</span>
        </div>
        ` : ''}
    `;
}

function updateDoctorOptions() {
    const specialty = document.getElementById('specialty').value;
    const doctorSelect = document.getElementById('doctor');
    
    // Clear existing options except the first one
    doctorSelect.innerHTML = '<option value="">Để hệ thống chọn bác sĩ phù hợp</option>';
    
    const doctors = {
        'noi-khoa': [
            'BS. Nguyễn Văn An - Nội Khoa Tổng Quát',
            'BS. Trần Thị Bình - Tim Mạch',
            'BS. Lê Văn Cường - Tiêu Hóa'
        ],
        'ngoai-khoa': [
            'BS. Phạm Văn Đức - Ngoại Tổng Quát',
            'BS. Hoàng Thị Lan - Ngoại Thần Kinh',
            'BS. Võ Văn Nam - Ngoại Lồng Ngực'
        ],
        'san-phu-khoa': [
            'BS. Nguyễn Thị Mai - Sản Khoa',
            'BS. Trần Văn Phúc - Phụ Khoa',
            'BS. Lê Thị Hoa - Vô Sinh Hiếm Muộn'
        ],
        'nhi-khoa': [
            'BS. Phan Văn Tài - Nhi Tổng Quát',
            'BS. Nguyễn Thị Linh - Nhi Hô Hấp',
            'BS. Trần Văn Quang - Nhi Tiêu Hóa'
        ],
        'tim-mach': [
            'BS. Lý Văn Hùng - Tim Mạch Can Thiệp',
            'BS. Đinh Thị Nga - Siêu Âm Tim',
            'BS. Vũ Văn Sơn - Điện Tâm Đồ'
        ],
        'than-kinh': [
            'BS. Bùi Văn Thành - Thần Kinh Tổng Quát',
            'BS. Đặng Thị Vân - Thần Kinh Trẻ Em',
            'BS. Nông Văn Tùng - Phục Hồi Chức Năng'
        ]
    };
    
    if (doctors[specialty]) {
        doctors[specialty].forEach(doctor => {
            const option = document.createElement('option');
            option.value = doctor;
            option.textContent = doctor;
            doctorSelect.appendChild(option);
        });
    }
}

// Form Submit Handlers
function handleAppointmentSubmit(e) {
    e.preventDefault();
    
    if (validateCurrentStep()) {
        // Collect form data
        const formData = new FormData(appointmentForm);
        const appointmentData = {};
        
        for (let [key, value] of formData.entries()) {
            appointmentData[key] = value;
        }
        
        // In a real application, you would send this data to a server
        console.log('Appointment Data:', appointmentData);
        
        // Show success message
        alert('Đặt lịch khám bệnh thành công! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận lịch hẹn.');
        
        // Reset form
        appointmentForm.reset();
        currentStep = 1;
        
        // Reset steps
        document.querySelectorAll('.form-step').forEach(step => {
            step.classList.remove('active');
        });
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });
        
        // Show first step
        document.getElementById('step1').classList.add('active');
        document.querySelector('.step[data-step="1"]').classList.add('active');
        
        // Navigate to home
        showSection('home');
        updateActiveNav(document.querySelector('.nav-link[href="#home"]'));
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const contactData = {};
    
    for (let [key, value] of formData.entries()) {
        contactData[key] = value;
    }
    
    // In a real application, you would send this data to a server
    console.log('Contact Data:', contactData);
    
    // Show success message
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
    
    // Reset form
    contactForm.reset();
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatTime(timeString) {
    return timeString + ':00';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        nav.classList.remove('mobile-active');
    }
});

// Prevent form submission on Enter key (except in textareas)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.type !== 'textarea' && e.target.type !== 'submit') {
        e.preventDefault();
    }
});

// Auto-resize textareas
document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
});

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10,11}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Add real-time validation
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#ef4444';
            this.setCustomValidity('Email không hợp lệ');
        } else {
            this.style.borderColor = '#e2e8f0';
            this.setCustomValidity('');
        }
    });
});

document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !validatePhone(this.value)) {
            this.style.borderColor = '#ef4444';
            this.setCustomValidity('Số điện thoại không hợp lệ');
        } else {
            this.style.borderColor = '#e2e8f0';
            this.setCustomValidity('');
        }
    });
});

// Loading animation for form submissions
function showLoading(button) {
    const originalText = button.textContent;
    button.textContent = 'Đang xử lý...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Add loading animation to submit buttons
document.querySelectorAll('button[type="submit"]').forEach(button => {
    button.addEventListener('click', function() {
        showLoading(this);
    });
});
