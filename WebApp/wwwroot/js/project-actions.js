document.addEventListener("DOMContentLoaded", function () {
    const projectsBtn = document.getElementById("projectsBtn");
    const projectContainer = document.querySelector(".project-container");

    projectsBtn?.addEventListener("click", function () {
        if (projectContainer.style.display === "none" || projectContainer.style.display === "") {
            projectContainer.style.display = "grid";
        } else {
            projectContainer.style.display = "none";
        }
    });

    document.querySelectorAll(".delete-project").forEach(btn => {
        btn.addEventListener("click", function () {
            const card = btn.closest(".card");
            const confirmed = confirm("Do you want to delete this project?");
            if (confirmed) {
                card.style.transition = "opacity 0.3s ease";
                card.style.opacity = "0";
                setTimeout(() => card.remove(), 300);
            }
        });
    });

    document.querySelectorAll(".two-dots").forEach(dot => {
        dot.addEventListener("click", function (e) {
            document.querySelectorAll(".menu").forEach(menu => menu.classList.add("hidden"));
            const card = e.target.closest(".card");
            const menu = card.querySelector(".menu");
            menu.classList.toggle("hidden");
            e.stopPropagation();
        });
    });

    document.addEventListener("click", function () {
        document.querySelectorAll(".menu").forEach(menu => menu.classList.add("hidden"));
    });
});
