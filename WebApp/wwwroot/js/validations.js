export function showValidationModal(message) {
    const modalMessage = document.getElementById('validationModalMessage');
    modalMessage.textContent = message;

    const modal = new bootstrap.Modal(document.getElementById('validationModal'));
    modal.show();
}

export function validateFormInput(quillInstance, container) {
    const projectName = container.querySelector('input[placeholder="Project Name"]');
    const clientName = container.querySelector('input[placeholder="Client Name"]');
    const dateInputs = container.querySelectorAll('input[type="date"]');
    const startDate = dateInputs[0];
    const endDate = dateInputs[1];
    const budget = container.querySelector('input[placeholder="$ 0"]');

    console.log("✅ NY validation-fil laddad");

    if (!projectName.value.trim()) {
        showValidationModal('Project name is required');
        return false;
    }

    if (!clientName.value.trim()) {
        showValidationModal('Client name is required');
        return false;
    }

    // Tog bort validering på descrition men den validerar den ändå. Har löst det nu så behöver prova lägga in validering igen.

    if (!startDate.value || !endDate.value) {
        showValidationModal('Start and end date are required');
        return false;
    }

    if (startDate.value > endDate.value) {
        showValidationModal('Start date cannot be after end date');
        return false;
    }

    if (!budget.value.trim() || isNaN(parseFloat(budget.value))) {
        showValidationModal('Valid budget is required');
        return false;
    }

    return true;
}


