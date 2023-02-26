// What is a promise?
// 3 States:
    // Pending (default state of a promise, persists until one of the other two states occur)
        // akin to the whole try catch block
    // resolve
        // akin to a succesful try
    // reject
    // akin to the catch block

    const toaster = function(duration)  {
    const heatIt = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (duration > 2000) {
                const statement =`Toast is burnt, ${duration / 1000} seconds is too long!`;
                 reject(statement);
            } else {
                 resolve(`
                    Toast is ready, 
                    ${duration / 1000} seconds is perfect!
                `);
            }
        }, duration);
    });

    return heatIt;
}

// access the promise result by using the .then notation:
toaster(500)
.then((resolveReturnValue) => {
    /// USE RESOLVE RESULT
    console.log('SUCCESS:', resolveReturnValue);
})
.catch((rejectReturnValue) => {
    // USE REJECT RESULT
    console.log('FAILURE: ', rejectReturnValue);
});

// Promise chaining, useful when the next promise needs the result of the previous one:
    // you are only allowed one catch at the end,and the whichever promise fails will stop the rest of the chain

    // an alternative way to chain promises is to use Promise.all
toaster(500)
.then((resolveReturnValue) => {
    /// USE RESOLVE VALUE
    console.log('SUCCESS: 3000', resolveReturnValue);
    toaster(2100)
    .then((resolveReturnValue1) => {
        /// USE RESOLVE VALUE
        console.log('SUCCESS: 2100', resolveReturnValue1);
        toaster(300)
        .then((resolveReturnValue2) => {
            /// USE RESOLVE VALUE
            console.log('SUCCESS: 300', resolveReturnValue2);
        })
    })
})
.catch((rejectReturnValue) => {
    // USE REJECT VALUE FROM ANY OF THE CHAINED PROMISES ABOVE, IF IT OCCURS
   console.log('ERROR :', rejectReturnValue);
});




// toaster(2500);