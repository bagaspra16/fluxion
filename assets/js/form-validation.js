/**
 * Fluxion Form Validation and Event Handlers
 * Using jQuery for all event listeners and validation
 */

$(document).ready(function () {

    // ============================================
    // 1. CLICK EVENT LISTENERS
    // ============================================

    // Toggle password visibility
    $('.toggle-password').on('click', function () {
        const input = $(this).siblings('input');
        const icon = $(this);

        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            input.attr('type', 'password');
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });

    // Form submission with validation
    $('.validation-form').on('submit', function (e) {
        e.preventDefault();

        const form = $(this);
        let isValid = true;

        // Validate all required fields
        form.find('.form-control[required]').each(function () {
            if (!validateField($(this))) {
                isValid = false;
            }
        });

        if (isValid) {
            // Show loading state
            const submitBtn = form.find('.btn-submit');
            submitBtn.addClass('loading');
            submitBtn.find('.btn-text').text('Processing...');

            // Simulate form submission
            setTimeout(function () {
                submitBtn.removeClass('loading');
                submitBtn.find('.btn-text').text('Submit');
                showSuccessModal(form.data('success-message') || 'Form submitted successfully!');
                form[0].reset();
                form.find('.form-group').removeClass('success error');
            }, 1500);
        }
    });

    // Plan card selection (Click Event)
    $('.plan-card').on('click', function () {
        $('.plan-card').removeClass('active');
        $(this).addClass('active');
        $(this).find('input[type="radio"]').prop('checked', true);
        updatePricing();
    });

    // Apply promo code (Click Event)
    $('.btn-apply').on('click', function () {
        const promoCode = $('#promoCode').val().toUpperCase();
        const validCodes = {
            'FLUX50': 0.5,
            'FLUX20': 0.2,
            'WELCOME10': 0.1
        };

        if (validCodes[promoCode]) {
            $('#discount').text('-$' + (parseFloat($('#subtotal').text().replace('$', '')) * validCodes[promoCode]).toFixed(2));
            updatePricing();
            showNotification('Promo code applied successfully!', 'success');
        } else if (promoCode) {
            showNotification('Invalid promo code', 'error');
        }
    });

    // Close modal (Click Event)
    $('.form-modal, .btn-close-modal').on('click', function () {
        $('.form-modal').removeClass('show');
    });

    $('.modal-content').on('click', function (e) {
        e.stopPropagation();
    });


    // ============================================
    // 2. CHANGE EVENT LISTENERS
    // ============================================

    // Dropdown change validation
    $('select.form-control').on('change', function () {
        validateField($(this));
    });

    // Checkbox change validation
    $('input[type="checkbox"]').on('change', function () {
        const wrapper = $(this).closest('.checkbox-wrapper');
        if ($(this).is(':required')) {
            if ($(this).is(':checked')) {
                wrapper.addClass('success').removeClass('error');
            } else {
                wrapper.addClass('error').removeClass('success');
            }
        }
    });

    // Radio button change (Plan selection)
    $('input[name="plan"]').on('change', function () {
        updatePricing();
    });

    // Billing cycle change
    $('input[name="billing"]').on('change', function () {
        updatePricing();
    });

    // File input change
    $('input[type="file"]').on('change', function () {
        const fileUpload = $(this).closest('.file-upload');
        const fileName = fileUpload.find('.file-name');

        if (this.files && this.files[0]) {
            fileName.text(this.files[0].name);
            fileUpload.addClass('has-file');
        } else {
            fileName.text('');
            fileUpload.removeClass('has-file');
        }
    });


    // ============================================
    // 3. MOUSE MOVE EVENT LISTENERS
    // ============================================

    // Interactive background effect
    let mouseTrail = null;

    $('.page-with-effect').on('mousemove', function (e) {
        if (!mouseTrail) {
            mouseTrail = $('<div class="mouse-trail"></div>');
            $('body').append(mouseTrail);
        }

        mouseTrail.css({
            left: e.pageX + 'px',
            top: e.pageY + 'px',
            opacity: 0.3
        });
    });

    $('.page-with-effect').on('mouseleave', function () {
        if (mouseTrail) {
            mouseTrail.css('opacity', 0);
        }
    });

    // Password strength indicator movement
    $('#password, #newPassword').on('mousemove', function () {
        const strength = calculatePasswordStrength($(this).val());
        updatePasswordStrength($(this), strength);
    });


    // ============================================
    // 4. KEYPRESS/KEYUP EVENT LISTENERS
    // ============================================

    // Real-time email validation
    $('input[type="email"]').on('keyup', function () {
        validateField($(this));
    });

    // Username availability check simulation
    $('#username').on('keyup', debounce(function () {
        const username = $(this).val();
        if (username.length >= 4) {
            // Simulate checking username availability
            const unavailableUsernames = ['admin', 'fluxion', 'test'];
            const formGroup = $(this).closest('.form-group');

            if (unavailableUsernames.includes(username.toLowerCase())) {
                showFieldError(formGroup, 'Username is already taken');
            } else {
                showFieldSuccess(formGroup, 'Username is available');
            }
        }
    }, 500));

    // Character counter for textarea
    $('#message').on('keyup', function () {
        const maxLength = 500;
        const currentLength = $(this).val().length;
        const counter = $('#charCounter');

        counter.text(currentLength + '/' + maxLength);

        if (currentLength > maxLength * 0.9) {
            counter.addClass('warning');
        } else {
            counter.removeClass('warning');
        }

        if (currentLength > maxLength) {
            counter.addClass('error');
            $(this).val($(this).val().substring(0, maxLength));
        } else {
            counter.removeClass('error');
        }
    });

    // Credit card number formatting
    $('#cardNumber').on('keypress', function (e) {
        // Allow only numbers
        if (e.which < 48 || e.which > 57) {
            if (e.which !== 8 && e.which !== 0) { // Allow backspace
                e.preventDefault();
            }
        }
    });

    $('#cardNumber').on('keyup', function () {
        let value = $(this).val().replace(/\s/g, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        $(this).val(formattedValue);

        // Detect card type
        if (value.length > 0) {
            detectCardType(value);
        }
    });

    // CVV - numbers only
    $('#cvv').on('keypress', function (e) {
        if (e.which < 48 || e.which > 57) {
            if (e.which !== 8 && e.which !== 0) {
                e.preventDefault();
            }
        }
    });

    // Password strength on keyup
    $('#password, #newPassword').on('keyup', function () {
        const strength = calculatePasswordStrength($(this).val());
        updatePasswordStrength($(this), strength);
    });

    // Confirm password match
    $('#confirmPassword').on('keyup', function () {
        const password = $('#password').val();
        const confirmPassword = $(this).val();
        const formGroup = $(this).closest('.form-group');

        if (confirmPassword.length > 0) {
            if (password === confirmPassword) {
                showFieldSuccess(formGroup, 'Passwords match');
            } else {
                showFieldError(formGroup, 'Passwords do not match');
            }
        } else {
            formGroup.removeClass('success error');
        }
    });


    // ============================================
    // 5. FOCUS EVENT LISTENERS
    // ============================================

    // Show hints on focus
    $('.form-control').on('focus', function () {
        const formGroup = $(this).closest('.form-group');
        formGroup.addClass('focused');

        // Add glow effect
        $(this).css('box-shadow', '0 0 0 4px rgba(0, 255, 136, 0.1)');
    });

    // Hide hints and remove glow on blur
    $('.form-control').on('blur', function () {
        const formGroup = $(this).closest('.form-group');
        formGroup.removeClass('focused');

        // Remove glow effect
        $(this).css('box-shadow', '');

        // Validate on blur
        if ($(this).val().length > 0 || $(this).is('[required]')) {
            validateField($(this));
        }
    });


    // ============================================
    // VALIDATION FUNCTIONS
    // ============================================

    function validateField(field) {
        const formGroup = field.closest('.form-group');
        const value = field.val().trim();
        const fieldType = field.attr('type');
        const fieldName = field.attr('name') || field.attr('id');

        // Required validation
        if (field.is('[required]') && value === '') {
            showFieldError(formGroup, 'This field is required');
            return false;
        }

        // Email validation
        if (fieldType === 'email' && value !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(formGroup, 'Please enter a valid email address');
                return false;
            }
        }

        // Password validation
        if (fieldName === 'password' && value !== '') {
            if (value.length < 8) {
                showFieldError(formGroup, 'Password must be at least 8 characters');
                return false;
            }
        }

        // Username validation
        if (fieldName === 'username' && value !== '') {
            const usernameRegex = /^[a-zA-Z0-9_]+$/;
            if (!usernameRegex.test(value)) {
                showFieldError(formGroup, 'Username can only contain letters, numbers, and underscores');
                return false;
            }
            if (value.length < 4) {
                showFieldError(formGroup, 'Username must be at least 4 characters');
                return false;
            }
        }

        // Full name validation
        if (fieldName === 'fullName' && value !== '') {
            if (value.length < 3) {
                showFieldError(formGroup, 'Name must be at least 3 characters');
                return false;
            }
        }

        // Card number validation
        if (fieldName === 'cardNumber') {
            const cardNumber = value.replace(/\s/g, '');
            if (cardNumber.length !== 16) {
                showFieldError(formGroup, 'Card number must be 16 digits');
                return false;
            }
        }

        // CVV validation
        if (fieldName === 'cvv') {
            if (value.length < 3 || value.length > 4) {
                showFieldError(formGroup, 'CVV must be 3 or 4 digits');
                return false;
            }
        }

        // If all validations pass
        if (value !== '') {
            showFieldSuccess(formGroup);
        } else {
            formGroup.removeClass('success error');
        }
        return true;
    }

    function showFieldError(formGroup, message) {
        formGroup.removeClass('success').addClass('error');
        formGroup.find('.error-message').text(message);
    }

    function showFieldSuccess(formGroup, message = '') {
        formGroup.removeClass('error').addClass('success');
        if (message) {
            formGroup.find('.success-message').text(message);
        }
    }


    // ============================================
    // HELPER FUNCTIONS
    // ============================================

    function calculatePasswordStrength(password) {
        let strength = 0;

        if (password.length >= 8) strength++;
        if (password.length >= 12) strength++;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength++;

        if (strength <= 2) return 'weak';
        if (strength <= 4) return 'medium';
        return 'strong';
    }

    function updatePasswordStrength(field, strength) {
        const container = field.closest('.form-group');
        const strengthBar = container.find('.password-strength-bar');
        const strengthText = container.find('.password-strength-text');

        strengthBar.removeClass('weak medium strong').addClass(strength);

        const strengthMessages = {
            'weak': 'Weak password',
            'medium': 'Medium strength',
            'strong': 'Strong password'
        };

        strengthText.text(strengthMessages[strength] || '');
    }

    function detectCardType(cardNumber) {
        let cardType = 'Unknown';

        if (/^4/.test(cardNumber)) {
            cardType = 'Visa';
        } else if (/^5[1-5]/.test(cardNumber)) {
            cardType = 'Mastercard';
        } else if (/^3[47]/.test(cardNumber)) {
            cardType = 'American Express';
        }

        $('#cardType').text(cardType);
    }

    function updatePricing() {
        const selectedPlan = $('.plan-card.active');
        const billingCycle = $('input[name="billing"]:checked').val();

        if (selectedPlan.length > 0) {
            const monthlyPrice = parseFloat(selectedPlan.data('price'));
            const isAnnual = billingCycle === 'annual';

            let subtotal = isAnnual ? monthlyPrice * 12 * 0.85 : monthlyPrice; // 15% discount for annual

            $('#subtotal').text('$' + subtotal.toFixed(2));

            const discount = parseFloat($('#discount').text().replace('-$', '')) || 0;
            const total = subtotal - discount;

            $('#total').text('$' + total.toFixed(2));
        }
    }

    function showSuccessModal(message) {
        const modal = $('<div class="form-modal show"><div class="modal-content success"><i class="fas fa-check-circle"></i><h2>Success!</h2><p>' + message + '</p><button class="btn-primary btn-close-modal">Close</button></div></div>');
        $('body').append(modal);

        setTimeout(function () {
            modal.removeClass('show');
            setTimeout(function () {
                modal.remove();
            }, 300);
        }, 3000);
    }

    function showNotification(message, type) {
        const formGroup = $('<div class="form-group ' + type + '"><div class="validation-message ' + type + '-message">' + message + '</div></div>');
        $('.form-container').prepend(formGroup);

        setTimeout(function () {
            formGroup.fadeOut(300, function () {
                $(this).remove();
            });
        }, 3000);
    }

    function debounce(func, wait) {
        let timeout;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                func.apply(context, args);
            }, wait);
        };
    }

});
