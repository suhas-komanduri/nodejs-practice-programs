// Timeout Pattern with Promise.race()
const promise1 = new Promise(resolve => setTimeout(() => resolve ("First Result"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve ("Second Result"), 5000));

Promise.race([promise1, promise2])
    .then(result =>{
        console.log("Fastest Result: ", result);
        //Will log Fastest Result
    });

const promise3 = new Promise(resolve => setTimeout(() => resolve ("Third Result"), 1000));
const promise4 = new Promise(resolve => setTimeout(() => resolve ("Fourth Result"), 500));

Promise.race([promise3, promise4])
    .then(result =>{
        console.log("Fastest Result: ", result);
        //Will log Fastest Result
    });