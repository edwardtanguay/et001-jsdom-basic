const frontElem = document.querySelector('.front');
const backElem = document.querySelector('.back');
const showAnswerButtonElem = document.querySelector('.showAnswerButton');

showAnswerButtonElem.addEventListener('click', () => {
	showAnswerButtonElem.style.display = 'none';	
	backElem.innerHTML = "addEventListener('click', () => {...})";

});
