document.addEventListener('DOMContentLoaded', () => {
    initTypingAnimation();
});

function initTypingAnimation() {
    const targetElement = document.getElementById('typing-name');
    if (!targetElement) return;

    const fullName = "ADRI WIYANTO";
    let index = 0;
    targetElement.innerHTML = '';

    const interval = setInterval(() => {
        if (index < fullName.length) {
            targetElement.innerHTML += fullName.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 120);
}