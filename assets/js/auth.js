async function login() {

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if (!username || !password) {

        alert("Username dan Password wajib diisi");

        return;
    }

    try {

        const url =
            CONFIG.API_URL
            + "?action=login"
            + "&username=" + encodeURIComponent(username)
            + "&password=" + encodeURIComponent(password);

        const response =
            await fetch(url);

        const result =
            await response.json();

        if (result.status) {

            localStorage.setItem(
                "user",
                JSON.stringify(result)
            );

            window.location.href =
                "dashboard.html";

        } else {

            alert(result.message);

        }

    } catch (error) {

        console.error(error);

        alert("Gagal terhubung ke server");

    }

}
