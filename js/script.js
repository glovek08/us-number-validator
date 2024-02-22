const phoneHour = document.getElementById('phone-hour');
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const results = document.getElementById('results-div');
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

const validateNumber = () => {
    const cleanNumber = userInput.value.trim().replace(/[a-zA-Z]/g, "");
    if (cleanNumber.length > 17 || cleanNumber.length < 10) { /* checking if the length is right before advancing.*/
        displayResult(cleanNumber, 0);
    } else { 
        const usNumRegex = /^(\+?1\s?)?(\(\d{3}\)|\d{3})?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
        if (usNumRegex.test(cleanNumber)) {
            displayResult(cleanNumber, true);
        } else {
            displayResult(cleanNumber, false);
        }
    }
    return console.warn('ValidateNumber reached end');
};

const displayResult = (num, val) => { /*This takes the formatted number and a value, which is used in case the number validates or not,
                                    used to display the message in the results-div with styling depending on the condition.*/
    if (!val) {
        /* Display a faulty message*/
        results.innerHTML += `<span class="not-us">Invalid US number</span>: <br>${num}<br>`;
        return;
    } else if (val) {
        results.innerHTML += `<span class="is-us">Valid US number</span>: <br>${num}<br>`;
        console.log('Is a number');
        return;
    }
}

checkBtn.addEventListener('click', () => {
    return !userInput.value ? alert('Please provide a phone number') : validateNumber();
})
clearBtn.addEventListener('click', () => {
    results.innerText = '';
    userInput.value = '';
})

window.onload = () => phoneHour.textContent = phoneClock(); /*Sets the phone clock the the user current time.*/

const phoneClock = () => {
    const date = new Date();
    const currentHour = date.getHours();
    const currentMinutes = date.getMinutes();
    return `${currentHour}:${currentMinutes < 10 ? '0' + currentMinutes : currentMinutes}`;
}


