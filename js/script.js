function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove("play");
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.keys-item[data-key="${e.keyCode}"]`);

    if(!audio) return; // Stop function if audio null

    audio.currentTime = 0; // Reset audio playing time
    audio.play(); // Play audio
    key.classList.add("play"); // Add class play
}

const keys = document.querySelectorAll(".keys-item");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);