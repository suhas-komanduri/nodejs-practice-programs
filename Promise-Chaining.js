// Promise Chaining
function getUser(userId) {
    return new Promise((resolve, reject) => {
        // Simulating Database Call
        setTimeout(() => {
            resolve({id: userId, name: 'Suhas Komanduri'});
        }, 1000);
    });
}

function getUserPosts(user) {
    return new Promise((resolve, reject) => {
        // Simulating API Call
        setTimeout(() => {
            resolve(['ITIL / ITSM', 'SAP BTP CAPM', 'NodeJS']);
        }, 1000);
    });
}

//Chaining the promises
getUser(236532)
    .then(user => {
        console.log("User: ", user);
        return getUserPosts(user);
    })
    .then(posts => {
        console.log("Posts: ", posts);
    })
    .catch(error => {
        console.error("Error: ", error)
    });