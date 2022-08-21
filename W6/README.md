# MODULE 3 - Week 6 CRUD with Express

## TOPICS
### => `The life cycle of an *HTTP request*`
### => `CRUD / BREAD`
### => `What is *Express*?`
### => `What is *templating*?`
### => `EJS templates`
### => `Set up the basics of an *Express server*, including a simple *response*`
### => `Today's use case: CRUD routes to manage our topics`
#

## HTTP LifeCycle
**I- client/browser sends request:**
You either click on a link, type an address into the address bar or are redirected by a web app after having performed an action

**II - web server receives it and uses its resources i the following order:** 
- middleware (set of functions that interact with any incoming or outgoing request, if the logic requires it).
- routing
- database
- template (injects any variable resulting from the data manipulation)

to assemble some html along with other pieces and send it back to the client as a response.

**III- Client renders the html provided**
Through the layout/styles provided, it uses the client side javascript logic written for the current route to rendre the html returned from the backend.

**IV- If necessary, the new page will have a link/action allowing for another AJAX request, thus restarting the cycle**
#
## Express
Express is a an easy to setup Node.js framework that provides an array of features for web applications. Those features include all the required (HTTP methods)[https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods] necessary to perform all the operations related to the data used/presented by your application.
#
## Templating
A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.
#

# CRUD vs. BREAD
Both acronyms refer to patterns of data manipulation. Any entity should have logic in place allowing its Creation, Reading, Updating,  and Deleting. And similarly, an aplication should have all the routes for the user to be able to Browse the list of entities, Read a single entity, Add a new entity or Delete it.
#