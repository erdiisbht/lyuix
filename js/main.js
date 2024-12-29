// Form gönderme işlemi
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form verilerini al
    const formData = new FormData(this);
    
    // Burada form verilerini e-posta servisi ile gönderme işlemi yapılacak
    // Örnek olarak console'a yazdırıyoruz
    console.log('Form gönderildi:', Object.fromEntries(formData));
    
    // Formu temizle
    this.reset();
    
    // Kullanıcıya bilgi ver
    alert('Mesajınız başarıyla gönderildi!');
});

// Smooth scroll için
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Logo küçültme efekti
window.addEventListener('scroll', function() {
    const logo = document.querySelector('.site-logo');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        // Minimum boyut 1.5rem olsun
        const newSize = Math.max(1.5, 2 - (scrollPosition * 0.001));
        logo.style.fontSize = `${newSize}rem`;
        logo.style.opacity = Math.max(0.8, 1 - (scrollPosition * 0.001));
    } else {
        // Başlangıç boyutuna dön
        logo.style.fontSize = '2rem';
        logo.style.opacity = '1';
    }
}); 