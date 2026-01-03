let cookiesStatus = localStorage.getItem("cookies-asked");

window.addEventListener("DOMContentLoaded", () => {
    if (!cookiesStatus) { // activates on first load but not after
        const cookiesPopup = document.getElementById("cookies");
        cookiesPopup.style.display = "flex";
    };    
});

function accept_cookies() {
    const cookiesPopup = document.getElementById("cookies");
    cookiesPopup.style.display = "none";
    localStorage.setItem("cookies-asked", true);
    location.reload();
};

function review_cookies() {
    const cookiesPopup = document.getElementById("cookies");
    cookiesPopup.style.display = "flex";
};