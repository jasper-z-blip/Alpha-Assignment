// Ser även här att jag initierar quill två ggr, ska fixa om jag hinner (note till mig själv, ev funktion istället).
// Mall från ChatGPT men anpassad och implementerad av mig själv.

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

        // Uppdatera beskrivningen i formuläret när användaren skriver i Quill.
        quill.on('text-change', function () {
            const descriptionInput = document.getElementById("descriptionInput");
            if (descriptionInput) {
                descriptionInput.value = quill.root.innerHTML;
            }
        });
    }

    // Öppnar popup när man trycker på knappen.
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

            if (!quill) {
                console.warn("Quill-editor är inte initierad!");
                e.preventDefault();
                return;
            }

            if (quill && descriptionInput) {
                console.log("Skickar detta som description:", quill.root.innerHTML);
                descriptionInput.value = quill.root.innerHTML;
            }

            const isValid = validateFormInput(quill, createForm);

            if (!isValid) {
                e.preventDefault();
            }
        });
    }

    const tabs = document.querySelectorAll(".tab");
    const cards = document.querySelectorAll(".card");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const status = tab.getAttribute("data-status");

            //ta bort active från flikarna.
            tabs.forEach(t => t.classList.remove("active"));
            //Lägg till active på fliken användaren har klickat på. Så den väljs.
            tab.classList.add("active");

            cards.forEach(card => {
                const projectStatus = card.getAttribute("data-status");
                card.style.display = (status === "all" || projectStatus === status) ? "block" : "none";
            });
        });
    });

    // Standard är första fliken [ALL].
    if (tabs.length > 0) {
        tabs[0].click();
    }
});