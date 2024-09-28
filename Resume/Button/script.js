const button = document.getElementById('neonButton');
const body = document.body; 
let isOn = true; 

button.addEventListener('click', () => {
    isOn = !isOn; 

    if (isOn) {
        button.textContent = 'On'; 
        body.style.backgroundColor = 'white'; 
        button.style.color = '00ffff'; 
    } else {
        button.textContent = 'Off';
        body.style.backgroundColor = 'black'; 
        button.style.color = '#00ffff'; 
    }
});
