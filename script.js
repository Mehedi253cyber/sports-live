// ===============================
// FIFA WORLD CUP 2026 COUNTDOWN
// ===============================

const targetDate = new Date("June 11, 2026 00:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = String(days).padStart(3, "0");
    document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("days").innerHTML = "000";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

    }

}, 1000);


// =================================
// WATCH LIVE BUTTON
// =================================

document.getElementById("watchLive").addEventListener("click", function (e) {

    e.preventDefault();

    // নিজের লিংক বসাবে
    window.location.href = "https://example.com";

});


// =================================
// HEADER SCROLL EFFECT
// =================================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#07111f";

    } else {

        header.style.background = "rgba(0,0,0,.5)";

    }

});


// =================================
// CARD HOVER ANIMATION
// =================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

        card.style.transition = ".3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// =================================
// BUTTON RIPPLE EFFECT
// =================================

const buttons = document.querySelectorAll(".btn-green");

buttons.forEach(btn => {

    btn.addEventListener("click", function () {

        btn.style.transform = "scale(.95)";

        setTimeout(() => {

            btn.style.transform = "scale(1)";

        }, 150);

    });

});


// =================================
// CONSOLE
// =================================

console.log("⚽ FIFA World Cup 2026 Landing Page Loaded");
// Premium Loader

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("loader-hide");

},2200);

});