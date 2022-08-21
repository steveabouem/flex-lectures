const express = require('express');
const app = express();
const morgan = require('morgan');
const { urlencoded } = require('body-parser');
const PORT = 8888;

//TEMPLATING
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// DATABASE
const projectsDatabase = {
    project1: {
        name: 'Todo List',
        description: 'A Simple todo list.',
        stack: [
            'js', 'express', 'ejs'
        ]
    },
    project2: {
        name: 'Calendar App',
        description: 'Calendars.',
        stack: [
            'js', 'express', 'ejs'
        ]
    },
    project3: {
        name: 'Social Media Platform',
        description: 'NOT Facebook.',
        stack: [
            'js', 'express', 'ejs'
        ]
    }
};


//BROWSE
app.get('/', (req, res) => {
    const browseVariable = 'This is the browse page:)';//technically any variable name can be passed to the template

    res.render('browse', {
        browseVariable,
        projectsDatabase,
    });
});


//READ
app.get('/read/:key', (req, res) => {
    const templateVars = {// This is the usual variable name for template variables
        project: projectsDatabase[req.params.key],
    };

    res.render('read', templateVars);
});


//EDIT
app.get('/edit', (req, res) => {
    res.render('edit');
});

app.post('/edit/', (req, res) => {
    projectsDatabase[req.body.key] = req.body;

    // if we were to update only part of the project keys/value pairs and wanted to keep the other pairs  we can use spread operators like this
    // projectsDatabase[req.body.key] = { ...projectsDatabase[req.body.key], ...req.body };
    // keep in mind this implies that we need a check for the presence of the stack Array, other wise the page will break
    res.redirect('/');
});

//ADD 
app.get('/add', (req, res) => {
    const templateVars = {
        projectsCount: Object.keys(projectsDatabase).length,
    }

    res.render('add', templateVars);
})

app.post('/create', (req, res) => {
    // Object destructiring, useful if you have a lot of keys in your request body. Avoids unnecessary repetion
    const { projectKey, name, description, stack } = req.body;

    projectsDatabase[projectKey] = {
        name,
        description,
        stack,
    }

    res.redirect('/');
});

//DELETE
app.get('/delete/:key', (req, res) => {
    delete projectsDatabase[req.params.key];
    res.redirect('/');
});

// EVENT LISTENER
app.listen(PORT, () => {
    console.log('Server is running on port ', PORT);
});