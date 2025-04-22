let quill;

document.getElementById('openPopup').addEventListener('click', () => {
    if (!quill) {
        quill = new Quill('#quill-editor', {
            theme: 'snow',
            modules: {
                toolbar: '#custom-toolbar'
            },
            placeholder: 'Type something...'
        });
    }
});

let quillEdit;

document.querySelectorAll('.edit-project').forEach(button => {
    button.addEventListener('click', () => {
        const editBackground = document.getElementById('editBackground');
        const dashboard = document.querySelector('.dashboard');

        editBackground.style.display = 'flex';
        editBackground.classList.add('popup-active');
        dashboard.classList.add('blur-effect');

        // Starta Quill – men bara en gång
        setTimeout(() => {
            if (!quillEdit) {
                quillEdit = new Quill('#quill-editor-edit', {
                    theme: 'snow',
                    modules: {
                        toolbar: '#custom-toolbar-edit'
                    },
                    placeholder: 'Edit description...'
                });
            }

            const editPopup = document.getElementById('editPopup');
            const editBtn = editPopup.querySelector('.btn-create button');

            if (!editBtn.dataset.listenerAdded) {
                editBtn.addEventListener('click', function (e) {
                    console.log("Edit-knappen klickad!");

                    const isValid = validateFormInput(quillEdit, editPopup);
                    if (!isValid) {
                        e.preventDefault();
                    }
                });

                editBtn.dataset.listenerAdded = 'true';
            }

        }, 100);
    });
});
