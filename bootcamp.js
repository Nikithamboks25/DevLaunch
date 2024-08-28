let bootcamps;
let index = 0;

// Fetch JSON data
fetch('../bootcamps.json')
    .then(response => response.json())
    .then(data => {
        bootcamps = data.bootcamps;
        loadBootcamp(index); // Load the first bootcamp by default

    });

// Function to load bootcamp data dynamically
function loadBootcamp(index) {
    const bootcamp = bootcamps[index];
    const contentDiv = document.getElementById('bootcamp-content');
    contentDiv.innerHTML = `
        <img src="${bootcamp.image}">
        <div class="bootcamp-description">
            <h2>${bootcamp.name}</h2>
            <p>${bootcamp.description}</p>
            <p><strong>Location:</strong> ${bootcamp.location}</p>
            <p><strong>Website:</strong> <a href="http://${bootcamp.website}" target="_blank">${bootcamp.website}</a></p>
        </div>
    `;
}

// Function to load courses dynamically
function loadCourses(event, index) {
    event.preventDefault();

    const bootcamp = bootcamps[index];
    const courseDiv = document.getElementById('secondary-nav-items');
    courseDiv.innerHTML = `
        <div class="courses-description">
            <h3>${bootcamp.name} Courses</h3>
            <h4>${bootcamp.courses[0].name}</h4>
            <h4>Course Overview</h4>
            <p>${bootcamp.courses[0].overview}</p>
            <ul>
                <li>Duration: ${bootcamp.courses[0].duration}</li>
                <li>Financing Options: ${bootcamp.courses[0].financing}</li>
                <li>Format: ${bootcamp.courses[0].format}</li>
                <li>Campus: ${bootcamp.courses[0].campus}</li>
                <li>Prerequisite: ${bootcamp.courses[0].prerequisite}</li>
                <li>Tech Stack: ${bootcamp.courses[0].techstack}</li>
            </ul>
        </div>
    `;
}

// Function to load reviews (not yet implemented)
function loadReviews(event, index) {
    event.preventDefault();
    console.log("review clicked")

    const bootcamp = bootcamps[index];
    reviewDiv = document.getElementById('secondary-nav-items');
    reviewDiv.innerHTML = `
        <h3 id="bootcamp-review-h">${bootcamp.name} Reviews</h3>
        <div class="review-description">
            <div class="review-card">
                <img src="" width="50px" height="50px" style="background-color:#634F40 "/>
                <div class="review-card-details">
                    <p> ${bootcamp.reviews[0].name} ✔ ⭐⭐⭐⭐ </p>
                    <p> ${bootcamp.reviews[0].jobtitle} • ${bootcamp.reviews[0].role} • ${bootcamp.reviews[0].course}  </p>
                    <p class="review-card-body"> ${bootcamp.reviews[0].body} </p>
                </div>
            </div>

            <div class="review-card">
                <img src="" width="50px" height="50px" style="background-color:#634F40 "/>
                <div class="review-card-details">
                    <p> ${bootcamp.reviews[1].name} ✔ ⭐⭐⭐⭐ </p>
                    <p> ${bootcamp.reviews[1].jobtitle} • ${bootcamp.reviews[1].role} • ${bootcamp.reviews[1].course}  </p>
                    <p class="review-card-body"> ${bootcamp.reviews[1].body} </p>
                </div>
            </div>
        </div>
        <button class="readmore"> Read more </button>
        <h3 align="center" style="font-weight: bold;"> Write a Review for ${bootcamp.name} </h3>
        <form class="review-form">
            
        </form>
    `;

}

// Function to load financing options (not yet implemented)
function loadFinancing(index) {

}

// Function to load application process (not yet implemented)
function loadApplicationProcess(index) {

}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOMContentLoaded");
    document.getElementById('courses').addEventListener("click", (event) => loadCourses(event, index));
    document.getElementById('reviews').addEventListener("click", (event) => loadReviews(event, index));

});
