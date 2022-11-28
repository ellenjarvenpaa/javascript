'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let list = document.querySelector('#target');

for (let i = 0; i !== students.length; i++) {
  let joku = document.createElement('option');
  joku.innerText = students[i].name
  joku.value = students[i].id
  list.appendChild(joku)
}

