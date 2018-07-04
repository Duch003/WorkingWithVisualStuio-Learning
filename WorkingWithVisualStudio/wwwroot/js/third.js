document.addEventListener("DOMContentLoaded", function () {
    var element = document.createElement("p");
    element.textContent = "To jest element z zmodyfikowanego pliku third.js";
    document.querySelector("body").appendChild(element);
});