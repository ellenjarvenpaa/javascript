const list = document.querySelector('#target');

const first = document.createElement('li');
const second = document.createElement('li');
const third = document.createElement('li');

first.innerText = 'First item';
second.innerText = 'Second item';
third.innerText = 'Third item';

list.appendChild(first);
list.appendChild(second);
second.classList.add('my-item');
list.appendChild(third);
