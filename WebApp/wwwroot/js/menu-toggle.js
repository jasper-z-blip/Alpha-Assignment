document.addEventListener("DOMContentLoaded", function () {
    const userIcon = document.getElementById("user-icon");
    const userMenu = document.getElementById("user-menu");

    const cogIcon = document.getElementById("cog-icon");
    const cogMenu = document.getElementById("cogMenu");

    userIcon?.addEventListener("click", function (event) {
        userMenu.classList.toggle("hidden");
        cogMenu.classList.add("hidden");
        event.stopPropagation();
    });

    cogIcon?.addEventListener("click", function (event) {
        cogMenu.classList.toggle("hidden");
        userMenu.classList.add("hidden");
        event.stopPropagation();
    });

    document.addEventListener("click", function (event) {
        if (!userMenu.contains(event.target) && !userIcon.contains(event.target)) {
            userMenu.classList.add("hidden");
        }
        if (!cogMenu.contains(event.target) && !cogIcon.contains(event.target)) {
            cogMenu.classList.add("hidden");
        }
    });
});
