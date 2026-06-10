const API_URL = "https://script.google.com/macros/s/AKfycbzele7aowJOmJeg6VidkguSFrW72D8zMhx7XhnmKAg4uvDj80fcdC6AXQFNW3Fz1Cqv/exec";

async function prosesLogin(user, pass) {
    try {
        // Menggunakan metode GET sesuai router doGet Anda
        const response = await fetch(`${API_URL}?action=login&username=${user}&password=${pass}`);
        const result = await response.json();
        
        if (result.status === true) {
            console.log("Sukses login:", result.data);
            // Redirect ke halaman dashboard
            window.location.href = "dashboard.html";
        } else {
            alert("Gagal Login: " + result.message);
        }
    } catch (error) {
        console.error("Server Error:", error);
        alert("Gagal terhubung ke server.");
    }
}
