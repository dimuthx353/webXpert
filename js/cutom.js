// Create a new date object for August 25, 2024 at 12 PM
const countdownEnd = new Date('2024-08-25T12:00:00');

// Calculate the Unix timestamp for August 25, 2024, 12 PM (in seconds)
const countdownEndInSeconds = Math.floor(countdownEnd.getTime() / 1000);

// Initialize FlipDown
new FlipDown(countdownEndInSeconds).start();
