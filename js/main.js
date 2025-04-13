/*Hamburger menu */

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function () {
    menu.classList.toggle("show");
});




/* Buying Button */

document.querySelectorAll(".buy-now").forEach(button => {
    button.addEventListener("click", () => {
      alert("Item added to cart!");
    });
  });


/* reservation section */

document.getElementById("reservationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let guests = document.getElementById("guests").value;

    // Validation checks
    let errorType = "";

    switch (true) {
        case (name === "" || email === "" || phone === "" || date === "" || time === "" || guests === ""):
            errorType = "emptyFields";
            break;
        case (!/^\d{10}$/.test(phone)):
            errorType = "invalidPhone";
            break;
        case (new Date(date) < new Date()):
            errorType = "pastDate";
            break;
    }

    // Show error messages or process the reservation
    switch (errorType) {
        case "emptyFields":
            alert("Please fill in all fields.");
            return;
        case "invalidPhone":
            alert("Please enter a valid 10-digit phone number.");
            return;
        case "pastDate":
            alert("Please select a future date for reservation.");
            return;
        default:
            alert("Your table has been reserved! Thank you, " + name);
            document.getElementById("reservationForm").reset();
    }
});






/* image sliding*/


let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0; // Loop back to first slide
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Go to last slide
    } else {
        currentIndex = index;
    }
    
    const translateValue = -currentIndex * 100 + "vw";
    slides.style.transform = `translateX(${translateValue})`;
}

document.querySelector('.prev').addEventListener('click', function () {
    showSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', function () {
    showSlide(currentIndex + 1);
});

// Auto-slide every 3 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);
