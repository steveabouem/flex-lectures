const data = ['John', 1, 2, 3, 'Marc', 'Ravneet'];
// PROBLEM: CREATE A FUNCTION THAT IDENTIFIES THE TYPE OF EACH ELEMENT


const looper = function(array) {
    // array.forEach(element => {
    //     console.log('Element passed is ', element);
    // });

    array.forEach(function (element) {
        identifyElementType(element);
    });

    array.forEach(element => {
        console.log(element+  " is a " + typeof element);
    });
}

const identifyElementType = function(value) {
    if (typeof value === 'number') {
        console.log(value, " is a NUMBER");
    }

    if (typeof value === 'string') {
        console.log(value, " is a STRING");
    }
}

looper(data);