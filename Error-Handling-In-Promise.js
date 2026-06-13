// Error Handling in Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating an error
        reject(new Error('Unable to connect to the network'));
    });
}

fetchData()
    .then(
        data => console.log('Data: ', data),
        error => console.error('Error handling in THEN: ', error.message)
    );

// Alternate method using catch
fetchData()
    .then(data => console.log('Data: ', data))
    .catch(error => console.error('Error handling in CATCH: ', error.message));