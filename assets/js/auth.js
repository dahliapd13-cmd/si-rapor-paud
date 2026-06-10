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

        const response = await fetch(
            CONFIG.API_URL,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    action: "login",

                    username: username,

                    password: password

                })
            }
        );

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

        alert(
            "Gagal terhubung ke server"
        );

    }

}
