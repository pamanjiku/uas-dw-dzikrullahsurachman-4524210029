### **LAYANAN SERVIS/BOOKING BENGKEL AVracing**
** Anggota Kelompok **
** - Dzikrullah Surachman**
** - 4524210029 **
### **Latar Belakang Pengembangan Aplikasi** 
AVRacing adalah sebuah situs yang dibuat untuk memfasilitasi booking layanan bengkel secara online, bertujuan untuk memberikan kemudahan bagi pelanggan mendapatkan servis kendaraan tanpa perlu datang ke lokasi bengkel. Teknologi yang digunakan dalam pengembangan sistem ini adalah HTML, CSS, dan JavaScript, dengan desain antarmuka yang sederhana dan user-friendly. 
Dari struktur aplikasi, website ini memiliki: 
1. Halaman yang berisi informasi mengenai bengkel (index. html) 
2. Halaman untuk layanan dan toko bengkel (shop. html) 
3. Halaman untuk komunikasi antara pelanggan dan admin (chat. html) 
4. Pengelolaan interaksi melalui JavaScript (script. js) 
Dengan hadirnya aplikasi ini, layanan bengkel menjadi lebih terorganisir, modern, dan efektif.

### **Wireframe Aplikasi**
1. Wireframe index.html (Halaman Utama)
- Header: Nama Bengkel AVRacing
- Navigasi: Home | Shop | Chat
- Gambar bengkel
- Deskripsi singkat bengkel
- Tombol menuju halaman shop dan chat
2. Wireframe shop.html
- Daftar layanan bengkel
- Informasi servis dan produk
- Tombol booking / konsultasi
3. Wireframe chat.html
- Area chat (chat box)
- Input pesan
- Tombol kirim
- Informasi status admin (online / sibuk)

### **Penjelasan Fitur Aplikasi**
1. Halaman Utama (index.html)
Berfungsi sebagai halaman informasi awal bengkel.
Contoh potongan kode:
```
<nav>
  <a href="index.html">Home</a>
  <a href="shop.html">Shop</a>
  <a href="chat.html">Chat</a>
</nav>
Fungsi:
- Navigasi antar halaman
- Menampilkan identitas bengkel
- Menjadi landing page pengguna
2. Halaman Shop / Layanan (shop.html)
Menampilkan layanan dan informasi bengkel.
<div class="service">
  <h3>Servis Mesin</h3>
  <p>Pengecekan dan perbaikan mesin kendaraan</p>
</div>
Fungsi:
- Memberi informasi layanan bengkel
- Mengarahkan pelanggan ke komunikasi lebih lanjut
3. Fitur Chat Pelanggan (chat.html)
Digunakan untuk komunikasi antara pelanggan dan admin bengkel.
<div id="chatBox"></div>
<input type="text" id="msg" placeholder="Ketik pesan...">
<button onclick="sendChat()">Kirim</button>
Fungsi:
- Menampilkan pesan
- Mengirim pesan ke admin
- Menampilkan balasan otomatis
4. Logika Chat & Status Admin (script.js)
Mengatur alur chat dan status admin.
let adminOnline = false; // false = sibuk, true = online
function sendChat() {
  const input = document.getElementById("msg");
  const chat = document.getElementById("chatBox");
  const text = input.value.trim();
  if (text === "") return;
  chat.innerHTML += `<div class="user">${text}</div>`;
  if (!adminOnline) {
    chat.innerHTML += `<div class="bot">Admin sedang sibuk.</div>`;
  } else {
    chat.innerHTML += `<div class="bot">Admin siap membantu.</div>`;
  }
  input.value = "";
}
Fungsi:
- Menangani input chat
- Memberi respon berdasarkan status admin
- Menambah elemen chat secara dinamis
5. Tampilan Website (style.css)
Mengatur tampilan antarmuka website.
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

#chatBox {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
}
Fungsi:
- Membuat tampilan rapi dan konsisten
- Mengatur layout chat dan halaman

### **Tangkapan Layar Hasil Website**
Screenshot yang diambil dari VS Code / browser:
1. index.html
- Tampilan home
- Gambar bengkel
- Menu navigasi
2. shop.html
- Daftar layanan bengkel
- Informasi servis
3. chat.html
- Tampilan chat
- Status admin
- Percakapan pelanggan dan bot
4. Struktur Folder di VS Code
- Folder web
- File HTML, CSS, dan JS