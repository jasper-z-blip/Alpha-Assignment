document.addEventListener("DOMContentLoaded", function () {
    const tabsContainer = document.querySelector(".tabs");
    if (!tabsContainer) return;

    const tabItems = tabsContainer.querySelectorAll(".tab");
    const slider = tabsContainer.querySelector(".slider");
    const projectCards = document.querySelectorAll(".card");

    //Denna del är helt tagen från ChatGPT. 
    function moveSliderTo(tab) {
        // Denna funktion justerar slidern så att den matchar bredden och positionen för den aktiva fliken.
        const tabRect = tab.getBoundingClientRect();
        const containerRect = tabsContainer.getBoundingClientRect();
        slider.style.width = `${tabRect.width}px`;
        slider.style.left = `${tabRect.left - containerRect.left}px`;
    }

    // Hämtar aktiv flik (class = "active").
    // Finns det en aktiv flik så åker slidern till den.
    const activeTab = tabsContainer.querySelector(".tab.active");
    if (activeTab) moveSliderTo(activeTab);

    // Lägg till eventlistener på varje flik för att byta flik och filtrera kort.
    tabItems.forEach(tab => {
        tab.addEventListener("click", function () {
            tabItems.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // Flytta slidern till den nya aktiva fliken.
            moveSliderTo(tab);

            // Hämta status från flikens data-status-attribut.
            const filter = tab.dataset.status;
            projectCards.forEach(card => {

                // Visa alla kort om statusen är "ALL".
                if (filter === "all") {
                    card.style.display = "block";
                } else {
                    const status = card.dataset.status;

                    // Visa kortet om det matchar flikens status.
                    card.style.display = (status === filter) ? "block" : "none";
                }
            });
        });
    });
});
