// Get the current date and time
const now = new Date();

// Create a new date object for 12 PM tomorrow
const tomorrow = new Date();
tomorrow.setDate(now.getDate() + 1); // Move to the next day
tomorrow.setHours(12, 0, 0, 0); // Set the time to 12:00 PM

// Calculate the Unix timestamp for 12 PM tomorrow (in seconds)
const countdownEndInSeconds = Math.floor(tomorrow.getTime() / 1000);

// Initialize FlipDown
new FlipDown(countdownEndInSeconds).start();
