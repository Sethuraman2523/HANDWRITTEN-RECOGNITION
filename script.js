// ================================
// Disease Prediction Dashboard JS
// ================================

// Sidebar Active Menu
const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

// Form Prediction
const form = document.querySelector("form");
const circle = document.querySelector(".circle");
const resultTitle = document.querySelector(".result h3");
const resultText = document.querySelector(".result p");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let age = parseInt(document.querySelectorAll("input")[1].value);
    let bp = parseInt(document.querySelectorAll("input")[2].value);
    let glucose = parseInt(document.querySelectorAll("input")[3].value);
    let cholesterol = parseInt(document.querySelectorAll("input")[4].value);
    let bmi = parseFloat(document.querySelectorAll("input")[5].value);

    let risk = 0;

    if(age > 45) risk += 20;
    if(bp > 140) risk += 20;
    if(glucose > 120) risk += 20;
    if(cholesterol > 200) risk += 20;
    if(bmi > 25) risk += 20;

    if(risk > 100)
        risk = 100;

    circle.innerHTML = risk + "%";
    circle.style.background =
    `conic-gradient(#ef4444 ${risk}%, #ddd 0%)`;

    if(risk >= 70){

        resultTitle.innerHTML = "🔴 High Risk";

        resultTitle.style.color = "#ef4444";

        resultText.innerHTML =
        "High probability of Heart Disease. Please consult a doctor immediately.";

    }

    else if(risk >=40){

        resultTitle.innerHTML = "🟠 Medium Risk";

        resultTitle.style.color = "#f59e0b";

        resultText.innerHTML =
        "Moderate chance of disease. Regular health check-up recommended.";

    }

    else{

        resultTitle.innerHTML = "🟢 Low Risk";

        resultTitle.style.color = "#22c55e";

        resultText.innerHTML =
        "Healthy condition. Keep maintaining a healthy lifestyle.";

    }

});