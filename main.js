// 1. Fungsi Alert untuk Tombol 'Kenali Saya'
    function showAlert() {
        alert("Halo! Saya Eustakia Lucia Selpi. Senang berkenalan dengan Anda!");
    }

    // 2. Animasi Pengetikan (Typing Effect)
    const textElement = document.querySelector('header p');
    const text = textElement.innerText;
    textElement.innerText = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Kecepatan ketik
        }
    }

    // Jalankan efek ketik saat halaman dimuat
    window.onload = typeWriter;

    // 3. Animasi Reveal on Scroll (Muncul saat di-scroll)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Menyiapkan elemen kartu proyek sebelum dianimasi
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all ease-out";
        observer.observe(card);
    });

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("img");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

}
function searchFunction() {
            let input = document.getElementById('searchInput').value.toLowerCase();
            let items = document.getElementsByClassName('card');
            let noMessage = document.getElementById('noMessage');
            let found = false;

            for (let i = 0; i < items.length; i++) {
                if (items[i].innerHTML.toLowerCase().includes(input)) {
                    items[i].style.display = "";
                    found = true;
                } else {
                    items[i].style.display = "none";
                }
            }

            // Tampilkan pesan jika tidak ada hasil
            noMessage.style.display = found ? "none" : "block";
        }
