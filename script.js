const sidebarControl = document.querySelector('#sidebarControl');
const layout = document.querySelector('#layout');
const main = document.querySelector('#main');
sidebarControl.addEventListener('click', () => {
  layout.classList.toggle('layout_open');
});

main.addEventListener('click', () => {
  layout.classList.remove('layout_open');
});
