// Background Color
document.body.style.backgroundColor = '#f0f8ff';
document.body.style.textAlign = "center";

// Heading
const mainHeading = document.createElement('h1');
mainHeading.textContent = 'DOM Manipulation';
document.body.appendChild(mainHeading);

// Making a paragraph
const paragraph = document.createElement('p');
paragraph.textContent = 'Things I LOVE to do';
document.body.appendChild(paragraph);

// List of my favorite things
const favoriteThings = document.createElement('ul');
const things = ['Dance', 'Music', 'Traveling'];
things.forEach(thing => {
    const listItem = document.createElement('li');
    listItem.textContent = thing;
    favoriteThings.appendChild(listItem);
});
document.body.appendChild(favoriteThings);

// Button
const button = document.createElement('button');
button.textContent = 'Click Me!';

//Click event listener
button.addEventListener('click', function() {
    alert('Button clicked!');
});

// Mouseover event listener
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = '#add8e6';
});

// Add mouseout event listener to reset color
button.addEventListener('mouseout', function() {
    button.style.backgroundColor = ''; 
});

document.body.appendChild(button);

// Create a form with an email input
const form = document.createElement('form');
form.setAttribute('id', 'emailForm');

const emailLabel = document.createElement('label');
emailLabel.textContent = 'Enter your email: ';
form.appendChild(emailLabel);

const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('required', true); 
emailInput.setAttribute('placeholder', 'Enter your Email');
form.appendChild(emailInput);

const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
form.appendChild(submitButton);

const errorMessage = document.createElement('div');
errorMessage.classList.add('error');
form.appendChild(errorMessage);

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    errorMessage.textContent = '';

    // DOM event-based validation
    if (emailInput.value === '') {
        errorMessage.textContent = 'Email is required!';
    } else if (!emailInput.value.includes('@')) {
        errorMessage.textContent = 'Please enter a valid email address!';
    } else {
        alert('Email submitted: ' + emailInput.value);
        emailInput.value = ''; 
    }
});

document.body.appendChild(form);
