const toaster = function(duration)  {
    const heatIt = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (duration > 2000) {
                // fails 
                 reject(`Toast is burnt, ${duration / 1000} seconds is too long!`);

            } else {
                // continue
                 resolve(`Toast is ready, ${duration / 1000} seconds is perfect!`);
            }
        }, duration);
    });

    return heatIt;
};

Promise.all([toaster(2100), toaster(200), toaster(100), toaster(300)])
.then((arrayOfResolutions) => {
    console.log(arrayOfResolutions);
})
.catch((firtRejections) => {
    console.log(firtRejections);
});