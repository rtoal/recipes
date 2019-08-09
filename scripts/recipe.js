const titles = document.querySelectorAll('.title');

titles.forEach(element => {
  element.addEventListener('click', e => {
    element.nextElementSibling.style.display = 'block';
  })
});
