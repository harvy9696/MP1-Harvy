// MP1 - Replace all spaces with hyphens
document.getElementById("mp1Btn").addEventListener("click", function () {
    let text = document.getElementById("mp1Input").value;
    let result = text.replace(/ /g, "");
    document.getElementById("mp1Output").textContent = result;
});

// MP5 - Email format checker
document.getElementById("mp5Btn").addEventListener("click", function () {
    let email = document.getElementById("mp5Input").value;
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    document.getElementById("mp5Output").textContent =
        pattern.test(email)
        ? "✔ Valid email format"
        : "✘ Invalid email format";
});