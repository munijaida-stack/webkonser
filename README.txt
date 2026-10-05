==========================================
README - PROJECT UAS PEMROGRAMAN WEB 1
==========================================

Nama Mahasiswa : [Nama Mahasiswa]
NPM            : [NPM Mahasiswa]
Kelas          : [Kelas]
Program Studi  : Informatika

------------------------------------------
JUDUL PROJECT
------------------------------------------
ELFEST 2026 - Euphoria Life Festival
(Website Promosi Event Musik)

------------------------------------------
DESKRIPSI PROJECT
------------------------------------------
ELFEST 2026 adalah website promosi event festival musik
"Euphoria Life Festival" yang berlangsung selama dua hari
(25-26 April 2026) di SECAPA AD, Bandung. Website ini dibuat
sebagai single page website yang menampilkan informasi event,
line-up artis, daftar harga tiket, galeri momen festival, serta
form kontak/pendaftaran tiket. Website dibangun menggunakan HTML,
CSS, Bootstrap 5, dan JavaScript DOM, dengan tampilan yang
responsif untuk desktop, tablet, dan mobile.

Struktur halaman terdiri dari:
1. Navbar (responsif, berubah menjadi hamburger menu di mobile)
2. Hero Section (judul, deskripsi, countdown, tombol aksi)
3. Section Tentang (deskripsi event + info singkat)
4. Section Line-Up (kartu artis Day 1 & Day 2 dengan filter)
5. Section Tiket (3 jenis tiket dengan kalkulator harga)
6. Section Galeri (grid foto dengan lightbox)
7. Section Form Kontak/Pendaftaran (dengan validasi)
8. Footer (info website, data mahasiswa, sosial media)

------------------------------------------
FITUR JAVASCRIPT
------------------------------------------
1. Dark Mode Toggle
   - Tombol pada navbar untuk mengubah tema website menjadi
     gelap/terang (event click + manipulasi DOM/class).

2. Navbar Scroll Effect
   - Tampilan navbar berubah otomatis saat halaman di-scroll
     (event scroll + manipulasi DOM).

3. Countdown Timer
   - Menampilkan hitung mundur hari, jam, menit, detik menuju
     tanggal event 25 April 2026 (manipulasi DOM otomatis dengan
     setInterval).

4. Filter Line-Up Artis
   - Tombol "Semua / Day 1 / Day 2" untuk menampilkan/menyembunyikan
     kartu artis sesuai hari (event click + manipulasi DOM).

5. Tombol Lihat Detail Artis
   - Klik kartu artis menampilkan popup detail berisi nama, genre,
     dan deskripsi lengkap (event click + manipulasi DOM/innerHTML).

6. Kalkulator Harga Tiket
   - Tombol tambah/kurang jumlah tiket otomatis menghitung total
     harga sesuai jenis tiket yang dipilih (event click + manipulasi
     DOM, format Rupiah).

7. Galeri Lightbox
   - Klik foto pada galeri menampilkan tampilan besar beserta
     caption (event click + manipulasi DOM).

8. Live Preview Input Nama
   - Saat mengetik nama pada form, teks sambutan langsung berubah
     secara real-time (event input + manipulasi DOM). Contoh:
     "Halo, Asep!"

9. Validasi Form & Submit
   - Mengecek nama dan email tidak boleh kosong, format email
     valid, dan nomor HP wajib diisi dengan format benar.
   - Jika gagal: menampilkan pesan "Nama dan email wajib diisi!"
   - Jika berhasil: menampilkan pesan "Data Anda berhasil dikirim"
     dan form otomatis dikosongkan kembali.

10. Scroll to Top Button
    - Tombol muncul saat scroll ke bawah dan dapat mengembalikan
      posisi ke atas halaman secara smooth (event scroll + click).

------------------------------------------
TEKNOLOGI YANG DIGUNAKAN
------------------------------------------
- HTML5
- CSS3 (custom styling + Flexbox + Media Query)
- Bootstrap 5.3.3 (Navbar, Grid, Card, Button, Form)
- Bootstrap Icons 1.11.3
- JavaScript (DOM Manipulation & Event Handling)
- Google Fonts (Oswald & Inter)

------------------------------------------
STRUKTUR FILE
------------------------------------------
project-uas-web1/
|
|-- index.html
|-- css/
|   `-- style.css
|-- js/
|   `-- script.js
|-- img/
|   `-- (gambar pendukung, jika ada)
`-- README.txt

------------------------------------------
LINK VIDEO DEMO
------------------------------------------
Link Video Demo (Youtube/GDrive): [Masukkan link video demo di sini]

==========================================
Terima kasih.
Project ini dibuat untuk keperluan
Project UAS Mata Kuliah Pemrograman Web 1.
==========================================