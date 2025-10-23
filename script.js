// Set GTA 6 release date
const releaseDate = new Date("May 26, 2026 00:00:00").getTime();

// Grab DOM elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const messageEl = document.getElementById('message');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = releaseDate - now;

    if (distance <= 0) {
        clearInterval(timer);
        daysEl.textContent = hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = "00";
        messageEl.textContent = "🎉 GTA 6 HAS LAUNCHED! 🎮";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Animate flip if number changes
    function animate(el, value) {
        if (el.textContent != value) {
            el.textContent = value.toString().padStart(2, '0');
            el.style.animation = 'flip 0.6s ease';
            setTimeout(() => el.style.animation = '', 600);
        }
    }

    animate(daysEl, days);
    animate(hoursEl, hours);
    animate(minutesEl, minutes);
    animate(secondsEl, seconds);
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();
