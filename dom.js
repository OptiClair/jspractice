const links = document.querySelectorAll(".nav-links a");
links.forEach(function (link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert("Order Placed Successfully!");
    });
});

const welcome = document.getElementById("welcome");
welcome.textContent = "Welcome to Our Website!";
welcome.style.color = "blue";
welcome.style.fontSize = "2rem";
welcome.style.fontWeight = "bold";
welcome.style.textAlign = "center";
welcome.style.marginTop = "20px";

welcome.addEventListener('click', function() {
    welcome.style.color = "green";
    welcome.textContent = "Time To learn Next step!";
    welcome.style.fontSize = "1.5rem";
    welcome.style.fontWeight = "normal";
    welcome.style.marginTop = "10px";
    welcome.style.transition = "all 0.2s ease";
});