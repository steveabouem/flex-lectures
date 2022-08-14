// Write a program that does the following:
// - fetches subscriber's data one at the time and get their location, using the country property.
// - If the country is not Canada, throw the error message.
// - If subscriber is in Canada, set the property local to true, and display the success message.
// - Indicate that the process is finished for current user, regardless of any error.
// - Move on to the next user and repeat the process

//  The subscriber object has the following properties: DOB, first name, last name, country, local. 

// example subscribers
const subscribersList = [{
    DOB: "01/01/87", firstName: "John", lastName: "Doe", country: "Italy", local: undefined
}, {
    DOB: "01/01/95", firstName: "Jane", lastName: "Doe", country: "Canada", local: undefined
}, {
    DOB: "01/01/95", firstName: "Marc", lastName: "Nobody"
}];

const updateSubscriber = (sub, displaySuccessMSG, displayErrorMSG) => {
    // 1 - Advice of process start
    console.log(`Processing data for subscriber ${sub.firstName} \n`);

    try {
        if (!sub.country) {
            throw new Error(`Missing country property for subscriber ${sub.firstName} ${sub.lastName}.`);
        }

        if (sub.country && sub.country.toLowerCase() !== 'canada') {

            sub.local = false;
            displaySuccessMSG();
        } else {
            // 3 - Set local to true and display success
            sub.local = true;
            displaySuccessMSG();
        }
    } catch (e) {
        // 2 - Catch out of country error
        displayErrorMSG(e);
    }


    // 4 - Advice of process end
    console.log('Subscriber data processed');
};

const processSubscribersList = (list) => {
    list.forEach((sub, i) => {
        setTimeout(() => {
            // console log being a function, it will play the role of our callbacks in this case
            updateSubscriber(sub, () => { console.log(`Location update successful for ${sub.firstName}`) }, (err) => { console.log(err) });
        }, Math.random() * 1000);
    });
};

processSubscribersList(subscribersList);