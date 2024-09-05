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
    console.log("review clicked");

    const bootcamp = bootcamps[index];
    const reviewDiv = document.getElementById('secondary-nav-items');
    reviewDiv.innerHTML = `
        <h3 id="bootcamp-review-h">${bootcamp.name} Reviews</h3>
        <div class="review-description">
            ${bootcamp.reviews.map(review => `
                <div class="review-card">
                    <img src="" width="50px" height="50px" style="background-color:#634F40 "/>
                    <div class="review-card-details">
                        <p>${review.name} ✔ ${'⭐'.repeat(review.rating)}</p>
                        <p>${review.jobtitle} • ${review.role} • ${review.course}</p>
                        <p class="review-card-body">${review.body}</p>
                    </div>
                </div>
            `).join('')}
        </div>
        <button class="readmore">Read more</button>
        <h3 align="center" style="font-weight: bold;">Write a Review for ${bootcamp.name}</h3>
        <form class="review-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            
            <label for="jobtitle">Job Title (if applicable):</label>
            <input type="text" id="jobtitle" name="jobtitle">
            
            <label for="role">Role:</label>
            <input type="text" id="role" name="role">
            
            <label for="linkedin">LinkedIn URL:</label>
            <input type="text" id="linkedin" name="linkedin">
            
            <label for="rating">Rating:</label>
            <select id="rating" name="rating">
                <option value="1">1 ⭐</option>
                <option value="2">2 ⭐⭐</option>
                <option value="3">3 ⭐⭐⭐</option>
                <option value="4">4 ⭐⭐⭐⭐</option>
                <option value="5">5 ⭐⭐⭐⭐⭐</option>
            </select>
            
            <label for="review">Review:</label>
            <textarea id="review" name="review" rows="4" cols="50" placeholder="Write your review here..."></textarea>
            
            <button type="submit">Submit Review</button>
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
