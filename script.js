const h2 = document.createElement("h2");
h2.textContent = "This content is added by JavaScript";
document.querySelector("body").appendChild(h2);
document.addEventListener("keydown", function(highlight) {
    if(highlight.key === "a") {
        const square = document.querySelector("#square");
        square.style.background = "lightblue";
    }
});
document.addEventListener("keyup", function(highlight) {
    if(highlight.key === "a") {
        const square = document.querySelector("#square");
        square.style.background = "lightgrey";
    }
});