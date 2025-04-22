document.addEventListener("DOMContentLoaded", function () {
    const tabsContainer = document.querySelector(".tabs");
    const tabItems = tabsContainer.querySelectorAll(".tab");
    const slider = tabsContainer.querySelector(".slider");
    const projectCards = document.querySelectorAll(".card");

    //Denna del är helt tagen från ChatGPT. 
    function moveSliderTo(tab) {
        const tabRect = tab.getBoundingClientRect();
        const containerRect = tabsContainer.getBoundingClientRect();
        slider.style.width = `${tabRect.width}px`;
        slider.style.left = `${tabRect.left - containerRect.left}px`;
    }

    const activeTab = tabsContainer.querySelector(".tab.active");
    if (activeTab) moveSliderTo(activeTab);

    tabItems.forEach(tab => {
        tab.addEventListener("click", function () {
            tabItems.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            moveSliderTo(tab);

            const filter = tab.dataset.status;
            projectCards.forEach(card => {
                if (filter === "all") {
                    card.style.display = "block";
                } else {
                    const status = card.dataset.status;
                    card.style.display = (status === filter) ? "block" : "none";
                }
            });
        });
    });
});
