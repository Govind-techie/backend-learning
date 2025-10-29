/*

REST & CRUD: Concepts and Conventions

WHAT IS REST?
  REST (Representational State Transfer) is an architectural style for designing networked APIs.
  It leverages standard HTTP methods to interact with resources, making APIs predictable and easy to use.

WHAT DOES CRUD STAND FOR?
  CRUD refers to the four basic operations for persistent storage:
  - Create: Add new data
  - Read: Retrieve data
  - Update: Modify existing data
  - Delete: Remove data

HOW DO RESTFUL APIs MAP HTTP METHODS TO CRUD OPERATIONS?
  GET    → Read   → Retrieve data
  POST   → Create → Add new data
  PUT/PATCH → Update → Modify existing data
  DELETE → Delete → Remove data

ROUTE PATTERN CONVENTION EXAMPLE:
  GET    /posts      → Fetch all posts
  GET    /posts/:id  → Fetch a specific post by ID
  POST   /posts      → Create a new post
  PATCH  /posts/:id  → Update a specific post
  DELETE /posts/:id  → Delete a specific post

These conventions make RESTful APIs easy to understand and use.
/*

// Importing required modules
// 'express' helps create a server and handle HTTP requests easily
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

const { v4: uuidv4 } = require('uuid');


// Middleware for parsing incoming request data
// express.urlencoded() is used to parse form data (application/x-www-form-urlencoded)
// express.json() is used to parse JSON data sent in request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Setting up the view engine (EJS) for rendering dynamic HTML templates
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serving static files (CSS, JS, Images) from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

/*
--- REST Concept ---
REST (Representational State Transfer) is an architectural style for designing APIs.
It uses standard HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations:
  - GET → Read data
  - POST → Create new data
  - PUT/PATCH → Update existing data
  - DELETE → Remove data
In this example, we'll start with a GET route that fetches and displays posts.
*/

// Sample in-memory data (our temporary "database" for now)
let posts = [
    {
        id: uuidv4(), // Create new universally unique id.
        username: "Bob",
        content: "I love web development"
    },
    {
        id: uuidv4(),
        username: "Alice",
        content: "Won a hackathon"
    },

    {
        id: uuidv4(),
        username: "Kelly",
        content: "#Backend Learning"
    },
];

// --- INDEX ROUTE ---
// METHOD: GET
// CRUD: READ
// Purpose: Fetch and display all posts.
// REST: This route represents a collection of resources (posts) and allows clients to retrieve all available posts.
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// --- NEW ROUTE ---
// METHOD: GET
// CRUD: N/A (Displays form)
// Purpose: Render a form to create a new post.
// REST: Provides a form to the client to input new post data before sending a POST request to create the resource.
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// --- CREATE ROUTE ---
// METHOD: POST
// CRUD: CREATE
// Purpose: Receive new post data and add it to the collection.
// REST: Creates a new resource (post) on the server with data sent in the request body.
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

// --- SHOW ROUTE ---
// METHOD: GET
// CRUD: READ
// Purpose: Fetch and display a single post by its ID.
// REST: Retrieves a specific resource identified by the unique ID.
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => id === p.id);
    res.render("show.ejs", { post });
});

// --- UPDATE ROUTE ---
// METHOD: PATCH
// CRUD: UPDATE
// Purpose: Update the content of an existing post identified by its ID.
// REST: Modifies an existing resource with the data provided in the request body.
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

// --- EDIT ROUTE ---
// METHOD: GET
// CRUD: N/A (Displays form)
// Purpose: Render a form pre-populated with existing post data for editing.
// REST: Provides a form to the client to update an existing resource before sending a PATCH request.
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id == id);
    res.render("edit.ejs", { post });
});

// --- DELETE ROUTE ---
// METHOD: DELETE
// CRUD: DELETE
// Purpose: Remove a post identified by its ID from the collection.
// REST: Deletes the specified resource from the server.
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

// Starting the server on port 8080
// Once server runs, visit http://localhost:8080/posts to see all posts.
app.listen(port, () => {
    console.log(`listening at port ${port}`);
});

/*
NOTE:
RESTful APIs use standard HTTP methods to map to CRUD operations on resources:
- GET: Retrieve data (READ)
- POST: Create new data (CREATE)
- PUT/PATCH: Update existing data (UPDATE)
- DELETE: Remove data (DELETE)
Each resource (like 'posts') is accessed via a specific URL pattern, and the HTTP method defines the action.
This approach ensures a clean, consistent, and predictable API design.
*/