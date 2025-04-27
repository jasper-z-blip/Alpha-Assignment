document.addEventListener("DOMContentLoaded", function () {
    const projectsBtn = document.getElementById("projectsBtn");
    const projectContainer = document.querySelector(".project-container");

    // Hjälp chatGPT, Eventlyssnare på projectBtn. Så när man klickar på knappen så går det från synlig till dold.
    projectsBtn?.addEventListener("click", function () {
        if (projectContainer.style.display === "none" || projectContainer.style.display === "") {
            // Gör den synlig genom att sätta display till "grid".
            projectContainer.style.display = "grid";
        } else {
            // Om den redan är synlig, döljs den genom att sätta display till "none".
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
