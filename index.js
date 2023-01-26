const btn1 = document.querySelector('#myBtn');
btn1.addEventListener('click', () => {
    new Modal('Первое окно');
});
const btn2 = document.querySelector('#myBtn1');
btn2.addEventListener('click', () => {
    new Modal('Второе окно');
});