let bootcamps;
let index = 1;

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
function loadReviews(index) {
    

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
});
