// إظهار/إخفاء نموذج تسجيل الدخول عند النقر على زر تسجيل الدخول
let loginform = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginform.classList.toggle('active');
}

// إظهار/إخفاء شريط التنقل عند النقر على زر القائمة
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active'); // إظهار وإخفاء القائمة
    loginform.classList.remove('active'); // إغلاق أي نافذة تسجيل دخول مفتوحة
}

// تفعيل مكتبة lightGallery لمعرض الصور
document.addEventListener("DOMContentLoaded", function() {
    lightGallery(document.querySelector('.gallery .gallery-container'));
});

window.onscroll =() =>{
    loginform.classList.remove('active');
    navbar.classList.toggle('active'); // إظهار وإخفاء القائمة
}


