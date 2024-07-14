function getButtonElement() {
  const button = document.getElementById('btn');
  return button;
}

function updateButtonText(buttonText) {
  getButtonElement().innerText = buttonText;
}

updateButtonText('click me');

function updateButtonTextWithClick() {
  console.log('Button is clicked');
  updateButtonText('simple button');
}

getButtonElement().addEventListener('click', updateButtonTextWithClick);
