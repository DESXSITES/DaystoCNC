// Set the date we're counting down to (replace with your actual concours date)
const countDownDate = new Date("2025-01-01T00:00:00").getTime();

// Update the countdown every 1 second
const countdownTimer = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "The concours has begun!";
    }
}, 1000);

// WhatsApp sharing functionality
document.getElementById("shareWhatsApp").addEventListener("click", function() {
    const message = encodeURIComponent("Check out the countdown to CNC Concours: [Your Website URL]");
    const whatsappURL = `https://wa.me/?text=${message}`;
    window.open(whatsappURL, '_blank');
});
