const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const { render } = require("ejs");
const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: true}));

//View engine
app.set('view engine', 'ejs');

//DATABASE
const pets = [
    {
        id: 0,
        name: "Roger",
        age: 10,
        breed: "rabbit"
    },
    {
        id: 1,
        name: "Geeky",
        age: 10,
        breed: "Gecko"
    },
    {
        id: 2,
        name: "Louie",
        age: 5,
        breed: "snake"
    },
    {
        id: 3,
        name: "Archer",
        age: 15,
        breed: "dog"
    },
];
//CRUD OPERATIONS AND RELATED HTTP METHODS
// create a pet shop website that will allow the following:
// - Fetch all registered pets ===> DONE
// - Add a new pet ===> DONE
// - View a pet's file ===> DONE
// - Edit existing pet file ===> DONE
// - Find a new family for the pet AKA delete the file




// localhost:3000/
///GET ROUTES
app.get("/", (request, response) => {
    // call to a database query that retrieves all the values in the pets table
    console.log('CURRENT DB STATUS: ', pets);
    response.render('index', {pets: pets, total: pets.length});
});

app.get("/newPet", (request, response) => {
    response.render("newPet");
});

// get a specific pet
app.get("/petDetails/:id", (request, response) => {
    console.log({param: request.params.id, expectedPEt: pets[request.params.id] });

    const currentPet = pets[request.params.id];
    response.render("petDetails.ejs", {
        name: currentPet.name,
        age: currentPet.age,
        breed: currentPet.breed
    });
});

// get the form to edit a specific pet
app.get("/editPet/:id", (request, response) => {
    const currentPet = pets[request.params.id];
    response.render("editPet.ejs", {pet: currentPet});
});

app.get("/adoptPet/:id", (request, response) => {
    // if a pet is adopted, remove its file from our db
    pets.splice(request.params.id, 1);
    response.redirect("/");
});


///POST ROUTES
// create a pet
app.post("/newPet", (request, response) => {
    const newPet = request.body;
    newPet.id = pets.length;
    pets.push(newPet);
    response.redirect('/');
});


app.post("/editPet/:id", (request, response) => {
    console.log('UPDATED VALUES FOR PET: ', request.body);
    pets[request.params.id] = request.body;
    response.redirect('/');
});


app.listen(port, () => console.log(`Server is running on port ${port}!`));