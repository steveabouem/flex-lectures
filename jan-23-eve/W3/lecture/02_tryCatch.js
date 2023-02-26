// ASYNC ERROR HANDLING WITH TRY CATCH

setTimeout(() => { 
    // this is the correct way to catch and throw while using setTimeout,
    // if your intention is to stop the process at the error
    // it will not stop our setTimeout from proceding, line 12 will run
    try {
        if (Math.random() < 1) {
            // always occurs because line above is always true
            // hence our code will stop executing after we throw this error
            throw new Error('Force error line 11: Math random is always between 0 and 1')
        } 
        // ignored in case of error
        console.log('Proceed from line 14');
    } catch(error) {
        // catch uses the value from my throw on line 7. 
        // only occurs if an error is actually thrown
        // ONLY because I THROW the error that catch sees it
        console.log(error);
    }
}, 1000);

try {
    // since the setTimeount function always runs, wrapping it in a try catch
    // will still allow execution of any code after
    setTimeout(() => {
        if (Math.random() < 1) {
            // fails because line above is always true
            throw new Error('Force error line 24: Math random is always between 0 and 1')
        } else {
            // continue
            console.log('It worked!');
        }
    }, 1000);
    console.log('Proceed from line 35');
} catch(error) {
    console.log(error);
}