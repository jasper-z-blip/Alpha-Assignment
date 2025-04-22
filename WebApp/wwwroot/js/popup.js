import { validateFormInput, showValidationModal } from './validations.js';

document.addEventListener("DOMContentLoaded", function () {
    const dashboard = document.querySelector(".dashboard");
    const openPopupBtn = document.getElementById("openPopup");
    const popupBackground = document.getElementById("addBackground");
    const closePopupMarker = document.getElementById("closePopup");
    const createForm = document.getElementById("pop-up-project");

    let quill;
    const quillEditorElement = document.getElementById("quill-editor");

    if (quillEditorElement) {
        quill = new Quill("#quill-editor", {
            theme: "snow",
            modules: {
                toolbar: "#custom-toolbar"
            },
            placeholder: "Type something..."
        });

        quill.on('text-change', function () {
            const descriptionInput = document.getElementById("descriptionInput");
            if (descriptionInput) {
                descriptionInput.value = quill.root.innerHTML;
            }
        });
    }

    if (openPopupBtn && popupBackground && dashboard) {
        openPopupBtn.addEventListener("click", function () {
            popupBackground.style.display = "flex";
            popupBackground.classList.add("popup-active");
            dashboard.classList.add("blur-effect");
        });
    }

    if (closePopupMarker && popupBackground && dashboard) {
        closePopupMarker.addEventListener("click", function () {
            popupBackground.style.display = "none";
            popupBackground.classList.remove("popup-active");
            dashboard.classList.remove("blur-effect");
        });
    }

    if (createForm) {
        createForm.addEventListener("submit", function (e) {
            const descriptionInput = document.getElementById("descriptionInput");

            if (quill && descriptionInput) {
                descriptionInput.value = quill.root.innerHTML;
            }

            if (!quill) {
                console.warn("❌ Quill-editor är inte initierad!");
                e.preventDefault();
                return;
            }

            const isValid = validateFormInput(quill, createForm);

            if (!isValid) {
                e.preventDefault();
                return;
            }
        });
    }

    const tabs = document.querySelectorAll(".tab");
    const cards = document.querySelectorAll(".card");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const status = tab.getAttribute("data-status");

            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            cards.forEach(card => {
                const projectStatus = card.getAttribute("data-status");
                card.style.display = (status === "all" || projectStatus === status) ? "block" : "none";
            });
        });
    });

    if (tabs.length > 0) {
        tabs[0].click();
    }
});

