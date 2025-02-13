document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        localStorage.setItem("isLoggedIn", true); // Simpan status login
        alert("Login berhasil! Anda akan dialihkan ke dashboard.");
        window.location.href = "dashboard.html"; // Alihkan ke dashboard
    } else {
        alert("Username atau password salah. Silakan coba lagi.");
    }
});

// Data Laporan (Contoh)
const reportData = [
    { tanggal: "2023-10-01", jenis: "Organik", berat: 10, biaya: 50000 },
    { tanggal: "2023-10-02", jenis: "Anorganik", berat: 5, biaya: 15000 },
    { tanggal: "2023-10-03", jenis: "B3", berat: 2, biaya: 20000 }
];

const reportTable = document.getElementById("reportTable").getElementsByTagName("tbody")[0];

reportData.forEach(data => {
    const row = reportTable.insertRow();
    row.insertCell(0).textContent = data.tanggal;
    row.insertCell(1).textContent = data.jenis;
    row.insertCell(2).textContent = data.berat;
    row.insertCell(3).textContent = `Rp ${data.biaya}`;
});

// Validasi Sign Up
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validasi sederhana
    if (password !== confirmPassword) {
        alert("Password dan Konfirmasi Password tidak cocok. Silakan coba lagi.");
        return;
    }

    // Simpan data pengguna (contoh sederhana, bisa diganti dengan backend)
    const userData = {
        fullname: fullname,
        email: email,
        username: username,
        password: password
    };

    // Simpan ke localStorage (hanya untuk contoh)
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Pendaftaran berhasil! Silakan login.");
    window.location.href = "login.html"; // Alihkan ke halaman login setelah pendaftaran
});

// Cek status login
window.onload = function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
        alert("Anda harus login terlebih dahulu.");
        window.location.href = "login.html"; // Alihkan ke halaman login
    }
};

// Logout
document.getElementById("logoutBtn").addEventListener("click", function(event) {
    event.preventDefault();
    const confirmLogout = confirm("Apakah Anda yakin ingin logout?");
    if (confirmLogout) {
        // Hapus data login (contoh sederhana)
        localStorage.removeItem("isLoggedIn");
        alert("Anda telah logout.");
        window.location.href = "login.html"; // Alihkan ke halaman login
    }
});

// Pembayaran
document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const jumlah = document.getElementById("jumlah").value;
    const metode = document.getElementById("metode").value;

    // Simpan data pembayaran (contoh sederhana)
    const paymentData = {
        nama: nama,
        jumlah: jumlah,
        metode: metode
    };

    // Simpan ke localStorage (hanya untuk contoh)
    localStorage.setItem("paymentData", JSON.stringify(paymentData));

    alert("Pembayaran berhasil! Terima kasih.");
    document.getElementById("paymentForm").reset(); // Reset form
});