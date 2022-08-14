// Write a program that does the following:
// - fetches a subscriber data and get their location, using the subscriber's country property.
// - If the country is not Canada, throw the error message provided as an argument.
// - If subscriber is in Canada, set the property local to true, and display the success message provided as an argument.
// - At the end of the process, indicate that it is finished, regardless of any error.

//  The subscriber object has the following properties: DOB, first name, last name, country, local. 

// example subscribers
const sub1 = {
    DOB: "01/01/87", firstName: "John", lastName: "Doe", country: "canada", local: undefined
};

const sub2 = {
    DOB: "01/01/95", firstName: "Jane", lastName: "Doe", country: "Italy", local: undefined
};

const sub3 = {
    DOB: "12/05/75", firstName: "Marc", lastName: "Nobody", country: "Kenya", local: undefined
};

const sub4 = {
    DOB: "08/15/2005", firstName: "July", lastName: "N.", country: "Lebanon", local: undefined
};

const sub5 = {
    DOB: "01/01/83", firstName: "Alain", lastName: "P.", country: "Peru", local: undefined
};


const invalidUser = {
    DOB: "01/01/83", firstName: "Alain", lastName: "P.", local: undefined
};


const updateSubscribers = (sub) => {
    return (new Promise((resolve, reject) => {
        if (!sub.country) {
            reject(`Missing country property for ${sub.firstName} ${sub.lastName}`);
        } else if (sub.country.toLowerCase() !== 'canada') {
            sub.local = false;
            resolve(sub);
        } else {
            sub.local = true;
            resolve(sub);
        }
    }));
};

const processSubscribersList = () => {
    updateSubscribers(sub1)
        .then((updatedSub1) => {
            // check incoming data object
            console.log('\n Value passed to then block #1', updatedSub1);

            // move on to the next promise
            return updateSubscribers(sub2);
        })
        .then(updatedSub2 => {
            console.log('\n Value passed to then block #2', updatedSub2);
            return updateSubscribers(sub3);
        })
        .then(updatedSub3 => {
            console.log('\n Value passed to then block #3', updatedSub3);
            return updateSubscribers(sub4);
        })
        .then(updatedSub4 => {
            console.log('\n Value passed to then block #3', updatedSub4);
            return updateSubscribers(sub5);
        })
        .then(updatedSub5 => {
            console.log('\n Value passed to then block #3', updatedSub5);
            // trigger rejection. Any block after this one will not be executed
            return updateSubscribers(invalidUser);
        })
        .catch(e => {
            console.log('ERROR:', e);
        });
};

processSubscribersList();