// DOM
// select tab, highlight tab, make sure the information related to that tab is displayed

// find all tabs
const tabs = document.querySelectorAll(".tab")

tabs.forEach(tab => {
    tab.addEventListener("click", event => {

        // remove active from previously selected
      document.querySelector(".active")?.classList.remove("active")

        // add active to newly selected
        event.currentTarget.classList.add("active")
document.querySelector(".tab-content.show").classList.remove("show");

        // get the selector from data-content
        const selector = event.currentTarget.dataset.content;
        // find the related content and show it
        document.querySelector(selector).classList.add("show");
    });
});