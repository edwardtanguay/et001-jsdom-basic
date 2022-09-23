const messageElem = document.querySelector('.message');
const changeMessageButtonElem = document.querySelector('.changeMessageButton');

messageElem.innerHTML = 'NEW MESSAGE';

changeMessageButtonElem.addEventListener('click', () => {
	messageElem.innerText = 'Welcome to this interactive website.';
	messageElem.style.color = 'yellow';
});
