import "./reset.css";
import "./styles.css";
import { homeTab } from "./homeTab.js";
import { menuTab } from "./menuTab.js";
import { contactTab } from "./contactTab.js";

homeTab();

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", function (e) {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
        e.target.classList.add("active");
        const tabName = e.target.textContent;
        if (tabName === "Home") {
            homeTab();
        } else if (tabName === "Menu") {
            menuTab();
        } else if (tabName === "Contact") {
            contactTab();
        }
        console.log(e.target.textContent);
    });
});


// menuTab();
// contactTab();