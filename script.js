let startTime = null;

function formatTime(date) {
    return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });
}

function formatDate(date) {
    return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', weekday: 'long' });
}

function calculateTimeDifference(start, end) {
    let diff = end - start;
    let hours = Math.floor(diff / 1000 / 60 / 60);
    let minutes = Math.floor((diff / 1000 / 60) % 60);
    return { hours, minutes };
}

document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    document.getElementById('date-info').innerHTML = `Today: ${formatDate(now)}`;
});

document.getElementById('sleepButton').addEventListener('click', function() {
    const now = new Date();
    const outputDiv = document.getElementById('output');

    if (this.innerText === 'Start') {
        startTime = now;
        outputDiv.innerHTML = `
            <div class="neon-box">Start Date and Time: ${formatDate(startTime)} ${formatTime(startTime)} IST</div>
        `;
        this.innerText = 'End';
    } else if (this.innerText === 'End') {
        const endTime = now;
        const { hours, minutes } = calculateTimeDifference(startTime, endTime);
        outputDiv.innerHTML = `
            <div class="neon-box">Start Date and Time: ${formatDate(startTime)} ${formatTime(startTime)} IST</div>
            <div class="neon-box">End Date and Time: ${formatDate(endTime)} ${formatTime(endTime)} IST</div>
            <div class="time-info">Total Time: ${hours} hours and ${minutes} minutes</div>
        `;
        this.innerText = 'Start';
    }
});
