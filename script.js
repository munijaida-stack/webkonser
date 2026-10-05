/* =========================================================
   RIUH RAYA FEST - SCRIPT.JS
   Project UAS Pemrograman Web 1 - Tema: Promosi Event
   Fitur JavaScript:
   1. Dark / Light Mode Toggle
   2. Countdown Timer Menuju Hari-H
   3. Filter Line-up (Semua / Day 1 / Day 2)
   4. Popup Detail Artis (manipulasi DOM, lengkap dengan foto)
   5. Kalkulator Simulasi Harga Tiket
   6. Live Preview Input Nama
   7. Validasi Form Pendaftaran
   8. Navbar scroll effect + tombol scroll to top
========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ===========================================================
     1. DARK / LIGHT MODE TOGGLE
  =========================================================== */
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  themeToggle.addEventListener('click', function () {
    body.classList.toggle('light-mode');
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('light-mode')) {
      icon.classList.remove('bi-moon-stars-fill');
      icon.classList.add('bi-sun-fill');
    } else {
      icon.classList.remove('bi-sun-fill');
      icon.classList.add('bi-moon-stars-fill');
    }
  });

  /* ===========================================================
     2. COUNTDOWN TIMER
  =========================================================== */
  const eventDate = new Date('2026-11-27T13:00:00').getTime();

  const elDays = document.getElementById('cd-days');
  const elHours = document.getElementById('cd-hours');
  const elMinutes = document.getElementById('cd-minutes');
  const elSeconds = document.getElementById('cd-seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      elDays.textContent = '00';
      elHours.textContent = '00';
      elMinutes.textContent = '00';
      elSeconds.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    elDays.textContent = String(days).padStart(2, '0');
    elHours.textContent = String(hours).padStart(2, '0');
    elMinutes.textContent = String(minutes).padStart(2, '0');
    elSeconds.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ===========================================================
     3. FILTER LINE-UP (Semua / Day 1 / Day 2)
  =========================================================== */
  const filterButtons = document.querySelectorAll('.btn-filter');
  const lineupCards = document.querySelectorAll('.lineup-card-wrap');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // toggle active state
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedDay = btn.getAttribute('data-day');

      lineupCards.forEach(function (card) {
        if (selectedDay === 'all' || card.getAttribute('data-day') === selectedDay) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ===========================================================
     4. POPUP DETAIL ARTIS (manipulasi DOM, lengkap dengan foto)
  =========================================================== */
  const detailButtons = document.querySelectorAll('.btn-detail');
  const artistDetail = document.getElementById('artistDetail');
  const artistDetailContent = document.getElementById('artistDetailContent');
  const closeDetailBtn = document.getElementById('closeDetail');

  detailButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const name = btn.getAttribute('data-name');
      const genre = btn.getAttribute('data-genre');
      const desc = btn.getAttribute('data-desc');
      const day = btn.getAttribute('data-day');
      const img = btn.getAttribute('data-img');

      artistDetailContent.innerHTML = `
        <img src="${img}" alt="${name}" class="artist-detail-img">
        <h3>${name}</h3>
        <span class="genre-tag">${genre}</span>
        <p>${desc}</p>
        <span class="detail-day"><i class="bi bi-calendar-event"></i> ${day}</span>
      `;

      artistDetail.classList.remove('d-none');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeArtistDetail() {
    artistDetail.classList.add('d-none');
    document.body.style.overflow = '';
  }

  closeDetailBtn.addEventListener('click', closeArtistDetail);

  // klik di luar kotak popup untuk menutup
  artistDetail.addEventListener('click', function (e) {
    if (e.target === artistDetail) {
      closeArtistDetail();
    }
  });

  // tutup popup dengan tombol ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !artistDetail.classList.contains('d-none')) {
      closeArtistDetail();
    }
  });

  /* ===========================================================
     5. KALKULATOR SIMULASI HARGA TIKET
     Total = Harga Tiket x Jumlah
  =========================================================== */
  const ticketType = document.getElementById('ticketType');
  const ticketQty = document.getElementById('ticketQty');
  const btnHitung = document.getElementById('btnHitung');
  const totalHarga = document.getElementById('totalHarga');

  function formatRupiah(angka) {
    return 'Rp' + angka.toLocaleString('id-ID');
  }

  function hitungTotal() {
    const harga = parseInt(ticketType.value, 10);
    let qty = parseInt(ticketQty.value, 10);

    if (isNaN(qty) || qty < 1) {
      qty = 1;
      ticketQty.value = 1;
    }
    if (qty > 10) {
      qty = 10;
      ticketQty.value = 10;
    }

    const total = harga * qty;
    totalHarga.textContent = formatRupiah(total);
  }

  btnHitung.addEventListener('click', hitungTotal);
  ticketType.addEventListener('change', hitungTotal);
  ticketQty.addEventListener('input', hitungTotal);

  /* ===========================================================
     6. LIVE PREVIEW INPUT NAMA
  =========================================================== */
  const namaInput = document.getElementById('nama');
  const livePreview = document.getElementById('livePreview');

  namaInput.addEventListener('input', function () {
    const value = namaInput.value.trim();
    if (value.length > 0) {
      livePreview.textContent = 'Halo, ' + value + '! 👋 Sampai jumpa di Riuh Raya Fest!';
    } else {
      livePreview.textContent = 'Halo, sahabat Riuh Raya! 👋';
    }
  });

  /* ===========================================================
     7. VALIDASI FORM PENDAFTARAN
  =========================================================== */
  const regForm = document.getElementById('regForm');
  const emailInput = document.getElementById('email');
  const hpInput = document.getElementById('hp');
  const kategoriInput = document.getElementById('kategori');
  const formAlert = document.getElementById('formAlert');

  const errNama = document.getElementById('errNama');
  const errEmail = document.getElementById('errEmail');
  const errHp = document.getElementById('errHp');
  const errKategori = document.getElementById('errKategori');

  function showAlert(message, type) {
    formAlert.textContent = message;
    formAlert.className = 'alert mt-2 alert-' + type;
    formAlert.classList.remove('d-none');
  }

  function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function isValidPhone(phone) {
    const pattern = /^[0-9+\s-]{9,15}$/;
    return pattern.test(phone);
  }

  regForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    [namaInput, emailInput, hpInput, kategoriInput].forEach(el => el.classList.remove('is-invalid'));
    [errNama, errEmail, errHp, errKategori].forEach(el => el.textContent = '');

    if (namaInput.value.trim() === '') {
      errNama.textContent = 'Nama wajib diisi!';
      namaInput.classList.add('is-invalid');
      isValid = false;
    }

    if (emailInput.value.trim() === '') {
      errEmail.textContent = 'Email wajib diisi!';
      emailInput.classList.add('is-invalid');
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      errEmail.textContent = 'Format email tidak valid!';
      emailInput.classList.add('is-invalid');
      isValid = false;
    }

    if (hpInput.value.trim() === '') {
      errHp.textContent = 'Nomor HP wajib diisi!';
      hpInput.classList.add('is-invalid');
      isValid = false;
    } else if (!isValidPhone(hpInput.value.trim())) {
      errHp.textContent = 'Nomor HP tidak valid!';
      hpInput.classList.add('is-invalid');
      isValid = false;
    }

    if (kategoriInput.value === '') {
      errKategori.textContent = 'Pilih kategori tiket!';
      kategoriInput.classList.add('is-invalid');
      isValid = false;
    }

    if (!isValid) {
      showAlert('Nama, email, nomor HP, dan kategori tiket wajib diisi!', 'danger');
      return;
    }

    showAlert('Terima kasih, ' + namaInput.value.trim() + '! Data pendaftaranmu berhasil dikirim 🎉', 'success');
    regForm.reset();
    livePreview.textContent = 'Halo, sahabat Riuh Raya! 👋';
  });

  /* ===========================================================
     8. NAVBAR SCROLL EFFECT + TOMBOL SCROLL TO TOP
  =========================================================== */
  const navbar = document.getElementById('mainNavbar');
  const scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 8px 24px rgba(0,0,0,.3)';
    } else {
      navbar.style.boxShadow = 'none';
    }

    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});