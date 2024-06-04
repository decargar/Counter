document.addEventListener('DOMContentLoaded', function() {
    const numDisplay = document.getElementById('num');
    let count = 0;

    function updateDisplay() {
        numDisplay.textContent = count;
        if (count > 0) {
            numDisplay.style.color = 'green';
        } else if (count < 0) {
            numDisplay.style.color = 'red';
        } else {
            numDisplay.style.color = 'black';
        }
    }

    document.getElementById('increase').addEventListener('click', function() {
        count++;
        updateDisplay();
    });

    document.getElementById('decrease').addEventListener('click', function() {
        count--;
        updateDisplay();
    });

    document.getElementById('reset').addEventListener('click', function() {
        count = 0;
        updateDisplay();
    });
});
