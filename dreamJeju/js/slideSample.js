let toggleButton = document.querySelector('#toggleButton');

toggleButton.addEventListener('click', () => {
  let container = document.querySelector('#title1');
  if (container.getAttribute('class', 'remove')) {
    container.removeAttribute('class', 'remove');
  } else {
    container.setAttribute('class', 'remove');
  }
})

const target = document.querySelector('#target');

target.classList.add('hide');