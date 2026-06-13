// Basic Promise Creation
// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate an async operation (e.g., API call, file read)
    setTimeout(() => {
        const success = Math.random() > 0.5;

        if (success) {
            resolve('Operation successful!');
        } else {
            reject(new Error('Operation failed!'));
        }
    }, 1000); // Simulate Delay
});

// Using the Promise
myPromise
    .then(result => console.log('Success:', result))
    .catch(error => console.log('Error:', error.message));