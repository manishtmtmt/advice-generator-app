
const API_URL = 'https://api.adviceslip.com/advice'

const adviceElement = document.getElementById('advice');
const adviceIdElement = document.getElementById('adviceID');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    displayAdvice();
});

const fetchAdvice = async () => {
    const response = await fetch(API_URL);
    const { slip = {} } = await response.json();
    return slip;
}

const displayAdvice = async () => {
    const adviceSlip = await fetchAdvice();

    adviceIdElement.innerHTML = adviceSlip.id;
    adviceElement.innerText = `"${adviceSlip.advice}"`;
}

displayAdvice();
