document.addEventListener("DOMContentLoaded", () => {
    const settingsBtn = document.getElementById("settingsBtn");

    if (settingsBtn) {
        settingsBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const modalElement = document.getElementById("settingsModal");
            if (modalElement) {
                const modal = new bootstrap.Modal(modalElement);
                modal.show();
            } else {
                console.warn("⚙️ Settings-modal saknas i DOM.");
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const darkModeBtn = document.getElementById("darkModeBtn");

    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", () => {
            const modalElement = document.getElementById("darkModeModal");
            if (modalElement) {
                const modal = new bootstrap.Modal(modalElement);
                modal.show();
            } else {
                console.warn("🌓 Dark Mode-modal saknas i DOM.");
            }
        });
    }
});