/*Start of stage 1.

async function fetchRandomUser() {
    try {
        // Fetch data from the API
        let response = await fetch('https://randomuser.me/api/');
        let data = await response.json();

        // Display the JSON data directly in the body
        document.body.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching user data:', error);
        document.body.textContent = 'Failed to load user data.';
    }
}

// Trigger the API call when the page loads
window.onload = fetchRandomUser;

End of stage 1.
 */

/*
Start of stage 2.

// Function to fetch and display user data
async function fetchRandomUser() {
    try {
        // Fetch data from the API
        let response = await fetch('https://randomuser.me/api/');
        let data = await response.json();
        let user = data.results[0];

        // Create and append the header to the body
        const header = document.createElement('h1');
        header.textContent = 'Random User Generator';
        document.body.appendChild(header);

        // Creating the user HTML structure
        const userDiv = document.createElement('div');
        userDiv.className = 'user';

        // Adding elements to the userDiv
        userDiv.innerHTML = `
                    <img src="${user.picture.large}" alt="User Image" class="photo" />
                    <h2 class="name">${user.name.first} ${user.name.last}</h2>
                    <p class="email">Email: ${user.email}</p>
                    <p class="password">Password: ${user.login.password}</p>
                    <p class="gender">Gender: ${user.gender}</p>
                    <p class="phone">Phone: ${user.phone}</p>
                    <p class="location">Location: ${user.location.city}, ${user.location.country}</p>
                    <p class="birthday">Birthday: ${new Date(user.dob.date).toLocaleDateString('en-GB')}</p>
                `;

        // Appending the userDiv to the body
        document.body.appendChild(userDiv);
    } catch (error) {
        console.error('Error fetching user data:', error);
        document.body.textContent = 'Failed to load user data.';
    }
}

// Trigger the API call when the page loads
window.onload = fetchRandomUser;

End of stage 2.
 */

/*
Start of stage 3.

// Function to fetch and display user data
async function fetchRandomUser() {
    try {
        // Fetch data from the API
        let response = await fetch('https://randomuser.me/api/');
        let data = await response.json();
        let user = data.results[0];

        // Creating the user HTML structure
        const userDiv = document.createElement('div');
        userDiv.className = 'user';

        // Adding elements to the userDiv
        userDiv.innerHTML = `
                    <img src="${user.picture.large}" alt="User Image" class="photo" />
                    <h2 class="name">${user.name.first} ${user.name.last}</h2>
                    <p class="email">Email: ${user.email}</p>
                    <p class="password">Password: ${user.login.password}</p>
                    <p class="gender">Gender: ${user.gender}</p>
                    <p class="phone">Phone: ${user.phone}</p>
                    <p class="location">Location: ${user.location.city}, ${user.location.country}</p>
                    <p class="birthday">Birthday: ${new Date(user.dob.date).toLocaleDateString('en-GB')}</p>
                `;

        // Appending the userDiv to the body
        document.body.appendChild(userDiv);
    } catch (error) {
        console.error('Error fetching user data:', error);
        document.body.textContent = 'Failed to load user data.';
    }
}

// Function to handle button click
function handleButtonClick() {
    fetchRandomUser();
}

// Trigger the API call when the page loads and set up button listener
window.onload = () => {
    const button = document.getElementById('get-user-button');
    button.addEventListener('click', handleButtonClick);
    fetchRandomUser(); // Fetch a user on initial load
};

End of stage 3.
 */


const usersList = [];

// Function to fetch and display user data
async function fetchRandomUser() {
    try {
        // Fetch data from the API
        let response = await fetch('https://randomuser.me/api/');
        let data = await response.json();
        let user = data.results[0];

        // Creating the user HTML structure
        const userDiv = document.createElement('div');
        userDiv.className = 'user';

        // Adding elements to the userDiv
        userDiv.innerHTML = `
                    <img src="${user.picture.large}" alt="User Image" class="photo" />
                    <h2 class="name">${user.name.first} ${user.name.last}</h2>
                    <p class="email">Email: ${user.email}</p>
                    <p class="password">Password: ${user.login.password}</p>
                    <p class="gender">Gender: ${user.gender}</p>
                    <p class="phone">Phone: ${user.phone}</p>
                    <p class="location">Location: ${user.location.city}, ${user.location.country}</p>
                    <p class="birthday">Birthday: ${new Date(user.dob.date).toLocaleDateString('en-GB')}</p>
                `;

        // Append the userDiv to the body
        document.body.appendChild(userDiv);

        // Store user data in the usersList array
        usersList.push(user);
    } catch (error) {
        console.error('Error fetching user data:', error);
        document.body.textContent = 'Failed to load user data.';
    }
}

// Function to handle button click
function handleButtonClick() {
    fetchRandomUser();
}

// Function to save users to local storage
function saveUsers() {
    // Remove previously saved users in the display
    const savedUsersHeader = document.querySelector('#saved-users-header');
    const savedUsersContainer = document.querySelector('#saved-users-container');

    if (savedUsersContainer) {
        savedUsersContainer.remove();
    }

    // Save current users to local storage
    localStorage.setItem('savedUsers', JSON.stringify(usersList));

    // Create new saved users container
    const newSavedUsersContainer = document.createElement('div');
    newSavedUsersContainer.id = 'saved-users-container';

    const savedUsers = JSON.parse(localStorage.getItem('savedUsers')) || [];
    savedUsers.forEach(user => {
        const savedUserDiv = document.createElement('div');
        savedUserDiv.className = 'user saved';
        savedUserDiv.innerHTML = `
                    <img src="${user.picture.large}" alt="User Image" class="photo" />
                    <h2 class="name">${user.name.first} ${user.name.last}</h2>
                    <p class="email">Email: ${user.email}</p>
                    <p class="password">Password: ${user.login.password}</p>
                    <p class="gender">Gender: ${user.gender}</p>
                    <p class="phone">Phone: ${user.phone}</p>
                    <p class="location">Location: ${user.location.city}, ${user.location.country}</p>
                    <p class="birthday">Birthday: ${new Date(user.dob.date).toLocaleDateString('en-GB')}</p>
                `;
        newSavedUsersContainer.appendChild(savedUserDiv);
    });

    // Append saved users to the body
    document.body.appendChild(newSavedUsersContainer);
    if (!document.querySelector('#saved-users-header')) {
        const header = document.createElement('h3');
        header.id = 'saved-users-header';
        header.textContent = 'Saved Users';
        document.body.appendChild(header);
    }
}

// Load saved users from local storage on page load
function loadSavedUsers() {
    const savedUsers = JSON.parse(localStorage.getItem('savedUsers')) || [];
    if (savedUsers.length > 0) {
        const savedUsersContainer = document.createElement('div');
        savedUsersContainer.id = 'saved-users-container';

        savedUsers.forEach(user => {
            const savedUserDiv = document.createElement('div');
            savedUserDiv.className = 'user saved';
            savedUserDiv.innerHTML = `
                        <img src="${user.picture.large}" alt="User Image" class="photo" />
                        <h2 class="name">${user.name.first} ${user.name.last}</h2>
                        <p class="email">Email: ${user.email}</p>
                        <p class="password">Password: ${user.login.password}</p>
                        <p class="gender">Gender: ${user.gender}</p>
                        <p class="phone">Phone: ${user.phone}</p>
                        <p class="location">Location: ${user.location.city}, ${user.location.country}</p>
                        <p class="birthday">Birthday: ${new Date(user.dob.date).toLocaleDateString('en-GB')}</p>
                    `;
            savedUsersContainer.appendChild(savedUserDiv);
        });

        const header = document.createElement('h3');
        header.id = 'saved-users-header';
        header.textContent = 'Saved Users';
        document.body.appendChild(header);
        document.body.appendChild(savedUsersContainer);
    }
}

// Set up event listeners when the page loads
window.onload = () => {
    const getUserButton = document.getElementById('get-user-button');
    getUserButton.addEventListener('click', handleButtonClick);

    const saveUsersButton = document.getElementById('save-users-button');
    saveUsersButton.addEventListener('click', saveUsers);

    loadSavedUsers(); // Load saved users on page load
    fetchRandomUser(); // Fetch a user on initial load
};