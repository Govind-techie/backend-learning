// This script handles client-side navigation in a RESTful web application by redirecting the user to appropriate routes for CREATE, READ, and UPDATE operations using HTTP methods and REST principles.

let btn1 = document.querySelector(".post-btn");

// Redirect to the form to create a new post (CREATE → POST route)
btn1.addEventListener("click", () => {
    window.location.href = "http://localhost:8080/posts/new";
})

let btns = document.querySelectorAll(".show-post");

// Redirect to the show page to view a single post (READ → GET route)
for (let btn of btns) {
    btn.addEventListener("click", () => {
        const postElement = btn.closest(".post"); // get the post this button belongs to
        const postId = postElement.dataset.id;    // extract its unique id
        window.location.href = `http://localhost:8080/posts/${postId}`;
    });
};

let btns2 = document.querySelectorAll(".edit-post");

// Redirect to the edit page to modify a post (UPDATE → PATCH route)
for (let btn of btns2) {
    btn.addEventListener("click", () => {
        const postElement = btn.closest(".post");
        const postId = postElement.dataset.id;
        window.location.href = `http://localhost:8080/posts/${postId}/edit`
    })
};
