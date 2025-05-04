// Kod för att hantera raderingsbekräftelse via modal.
// Mall från ChatGPT men anpassad och skriven av mig själv.

document.addEventListener("DOMContentLoaded", function () {
    const deleteForms = document.querySelectorAll(".delete-form");

    deleteForms.forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const modal = new bootstrap.Modal(document.getElementById("deleteConfirmModal"));
            const confirmForm = document.getElementById("deleteConfirmForm");

            confirmForm.action = form.action;

            modal.show();
        });
    });
});

