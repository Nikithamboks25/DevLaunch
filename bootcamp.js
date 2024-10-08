let bootcamps;
let index = 0;

// Fetch JSON data
fetch('../bootcamps.json')
    .then(response => response.json())
    .then(data => {
        bootcamps = data.bootcamps;
        loadBootcamp(index); // Load the first bootcamp by default
        loadCourses(index);

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
function loadCourses(index) {

    const bootcamp = bootcamps[index];
    const courseDiv = document.getElementById('secondary-nav-items');
    courseDiv.innerHTML = `
    <div class="courses-description">
        <h3 classes>${bootcamp.name} Courses</h3>
        ${bootcamp.courses.map(course =>`
                <h4>${course.name}</h4>
                <h4>Course Overview</h4>
                <p>${course.overview}</p>
                <ul>
                    <li>Duration: ${course.duration}</li>
                    <li>Financing Options: ${course.financing}</li>
                    <li>Format: ${course.format}</li>
                    <li>Campus: ${course.campus}</li>
                    <li>Prerequisite: ${course.prerequisite}</li>
                    <li>Tech Stack: ${course.techstack}</li>
                </ul>
            
            `).join('')}
        </div>
    `;
}


// Function to load reviews 
function loadReviews(index) {
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
        <div class="review-form">
            <form >
                <div class="row">
                    <div class="col-25">
                        <label for="name">Name:</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="name" name="name" class="review-input">
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="jobtitle">Job Title (if applicable):</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="jobtitle" name="jobtitle" class="review-input">
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-25">
                        <label for="role">Role:</label>
                    </div>
                    <div class="col-75">
                        <select id="role" name="role" class="review-input">
                            <option value="1">Student</option>
                            <option value="2">Graduate</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="linkedin">LinkedIn URL:</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="linkedin" name="linkedin" class="review-input">
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-25">
                        <label for="rating">Rating:</label>
                    </div>
                    <div class="col-75">
                        <select id="rating" name="rating" class="review-input">
                            <option value="1">⭐(very poor)</option>
                            <option value="2">⭐⭐(poor)</option>
                            <option value="3">⭐⭐⭐(average)</option>
                            <option value="4">⭐⭐⭐⭐(good)</option>
                            <option value="5">⭐⭐⭐⭐⭐(excellent)</option>
                        </select>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-25">
                        <label for="review">Review:</label>
                    </div>
                    <div class="col-75">
                        <textarea id="review" name="review" rows="4" cols="50" class="review-input" placeholder="Write your review here..."></textarea>
                    </div>
                </div>
                <br>
                <div class="row">
                    <input type="submit" value="Submit">
                </div>
            </form>
        </div>
    `;
}


// Function to load financing options (not yet implemented)
function loadFinancing(index) {
    const bootcamp = bootcamps[index];
    const financeDiv = document.getElementById('secondary-nav-items');
    financeDiv.innerHTML = `
        <div class="financing-description">
            <h3>Financing Options for ${bootcamp.name}</h3>
            <p>Choose the best option to fund your bootcamp experience:</p>
            
            <div class="financing-grid">
                <div class="financing-option">
                    <h4>Loan</h4>
                    <img src="loan-icon.png" alt="Loan Icon" class="financing-icon">
                    <p>Apply for a loan with our partner banks at low interest rates.</p>
                    <a href="#" class="financing-link">Learn more</a>
                </div>
            <div class="financing-option">
                <h4>Scholarship</h4>
                <img src="scholarship-icon.png" alt="Scholarship Icon" class="financing-icon">
                <p>Apply for merit-based or need-based scholarships to reduce costs.</p>
                <a href="#" class="financing-link">Apply now</a>
            </div>
            
            </div>
        </div>
    `;

}

// Function to load application process (not yet implemented)
function loadApplicationProcess(index) {

}


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
    //on click 
    document.getElementById('courses').addEventListener("click", () => loadCourses(index));
    document.getElementById('reviews').addEventListener("click", () => loadReviews(index));
    document.getElementById('financing').addEventListener("click", () => loadFinancing(index));
    document.getElementById('application').addEventListener("click", () => loadApplicationProcess(index));

});
