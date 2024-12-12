// إضافة مستمع الحدث عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (validateForm(username, password)) {
                // تخزين اسم المستخدم في localStorage
                localStorage.setItem('username', username);
                // الانتقال إلى الصفحة الرئيسية
                window.location.href = 'home.html';
            }
        });
    }
});

// دالة للتحقق من صحة المدخلات
function validateForm(username, password) {
    let isValid = true;
    
    if (username.length < 3) {
        showError('username', 'يجب أن يكون اسم المستخدم 3 أحرف على الأقل');
        isValid = false;
    } else {
        clearError('username');
    }
    
    if (password.length < 6) {
        showError('password', 'يجب أن تكون كلمة المرور 6 أحرف على الأقل');
        isValid = false;
    } else {
        clearError('password');
    }
    
    return isValid;
}

// دالة لعرض رسالة خطأ
function showError(inputId, message) {
    const errorElement = document.getElementById(`${inputId}-error`);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

// دالة لإزالة رسالة الخطأ
function clearError(inputId) {
    const errorElement = document.getElementById(`${inputId}-error`);
    if (errorElement) {
        errorElement.textContent = '';
    }
}
