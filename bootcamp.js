let bootcamps;

// Fetch JSON data
fetch('../bootcamps.json')
    .then(response => response.json())
    .then(data => {
        bootcamps = data.bootcamps;
        loadBootcamp(0); // Load the first bootcamp by default
        console.log(loadBootcamp(0))
    });

// Function to load bootcamp data dynamically
function loadBootcamp(index) {
    const bootcamp = bootcamps[index];
    const contentDiv = document.getElementById('bootcamp-content');
    contentDiv.innerHTML = `
        <img src="../Assets/codespaceLogo.jpg">
        <div class="bootcamp-description">
            <h2>${bootcamp.name}</h2>
            <p>${bootcamp.description}</p>
            <p><strong>Location:</strong> ${bootcamp.location}</p>
            <p><strong>Website:</strong> <a href="http://${bootcamp.website}" target="_blank">${bootcamp.website}</a></p>
        </div>
    `;
}