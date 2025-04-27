// Kod för att hantera projektredigering i en popup och Quill Editor.
// Mall från ChatGPT men anpassad och implementerad av mig själv. (Mycket hjälp av hur jag skrev ihop popup.js)

import { validateFormInput, showValidationModal } from './validations.js';

let quillEdit;

document.addEventListener("DOMContentLoaded", function () {
    const dashboard = document.querySelector(".dashboard");

    document.querySelectorAll('.edit-project').forEach(button => {
        button.addEventListener('click', function () {

            const editBackground = document.getElementById("editBackground");
            const editPopup = document.getElementById("editPopup");

            // Helt taget från chatGPT. Om popupen eller bakgrunden inte finns, skriv en varning och avsluta funktionen.
            if (!editBackground || !editPopup) {
                console.warn("Edit-popupen hittades inte på sidan.");
                return;
            }

            const projectNameInput = editPopup.querySelector('input[name="ProjectName"]');
            if (projectNameInput) {
                projectNameInput.value = button.dataset.name;
            }
            const clientNameInput = editPopup.querySelector('input[name="ClientName"]');
            if (clientNameInput) {
                clientNameInput.value = button.dataset.client;
            }
            const startDateInput = editPopup.querySelector('input[name="StartDate"]');
            if (startDateInput) {
                startDateInput.value = button.dataset.start;
            }
            const endDateInput = editPopup.querySelector('input[name="EndDate"]');
            if (endDateInput) {
                endDateInput.value = button.dataset.end;
            }
            const budgetInput = editPopup.querySelector('input[name="Budget"]');
            if (budgetInput) {
                budgetInput.value = button.dataset.budget;
            }
            const statusSelect = editPopup.querySelector('select[name="Status"]');
            if (statusSelect) {
                statusSelect.value = button.dataset.status;
            }

            const idInput = editPopup.querySelector('input[name="Id"]');
            if (idInput) {
                idInput.value = button.dataset.id;
            }

            //Hjälp chatGPT.
            const quillEditElement = document.getElementById("quill-editor-edit");
            if (quillEditElement) { //Om det finns en edit med rätt ID.
                if (!quillEdit) { //Om det inte inte finns initierat quillEdit så skapar vi en ny quillEdit.
                    quillEdit = new Quill("#quill-editor-edit", {
                        theme: "snow",
                        modules: {
                            toolbar: "#custom-toolbar-edit"
                        },
                        placeholder: "Edit description..."
                    });
                }

                quillEdit.root.innerHTML = button.dataset.description || "";
            // Om det inte finns eller hittas ett element så skrivs en varning ut.
            } else {
                console.warn("Elementet med id 'quill-editor-edit' hittades inte, Quill-editor för redigering initieras inte.");
            }

            editBackground.style.display = "flex";
            editBackground.classList.add("popup-active");
            dashboard.classList.add("blur-effect");

            const closeBtn = document.getElementById("closeEditPopup");
            if (closeBtn && !closeBtn.dataset.listenerAdded) {
                closeBtn.addEventListener("click", function () {
                    editBackground.style.display = "none";
                    editBackground.classList.remove("popup-active");
                    dashboard.classList.remove("blur-effect");
                });
                closeBtn.dataset.listenerAdded = "true";
            }

            const editSaveBtn = editPopup.querySelector('.btn-create button');
            if (editSaveBtn && !editSaveBtn.dataset.listenerAdded) {
                editSaveBtn.addEventListener("click", function (e) {
                    if (quillEdit) {
                        const isValid = validateFormInput(quillEdit, editPopup);
                        if (!isValid) {
                            e.preventDefault();
                        }
                    // Hjälp med varningen från chatGpt. Skrivs ut om inte quill är definerad.
                    } else {
                        console.warn("quillEdit är inte definierad, kan inte validera input.");
                        e.preventDefault();
                    }
                });
                editSaveBtn.dataset.listenerAdded = "true";
            }
        });
    });
});
