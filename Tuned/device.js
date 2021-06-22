
function adaptToDevice() {
    if (screen.width <= 850) {
        document.getElementById("title-text").innerHTML = "AS Tuned";
    } else {
        if (window.innerWidth <= 890) {
            document.getElementById("title-text").innerHTML = "AS Tuned";
        }
    }
}

adaptToDevice()

