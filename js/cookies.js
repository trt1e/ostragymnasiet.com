let cookiesStatus = localStorage.getItem("cookies-asked");
let warningStatus = localStorage.getItem("warning-asked")

window.addEventListener("DOMContentLoaded", () => {
    if (!cookiesStatus) { // activates on first load but not after
        const cookiesPopup = document.getElementById("cookies");
        cookiesPopup.style.display = "flex";
    };
    if (!warningStatus) { // activates on first load but not after
        const warningPopup = document.getElementById("START_WARNING");
        warningPopup.style.display = "block";
    };
});

function accept_cookies() {
    const cookiesPopup = document.getElementById("cookies");
    cookiesPopup.style.display = "none";
    localStorage.setItem("cookies-asked", true);
    location.reload();
};
function accept_warning() {
    const warningPopup = document.getElementById("START_WARNING");
    warningPopup.style.display = "none";
    localStorage.setItem("warning-asked", true);
    console.log(localStorage)
};

function review_cookies() {
    const cookiesPopup = document.getElementById("cookies");
    cookiesPopup.style.display = "flex";
};