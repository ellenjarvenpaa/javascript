let kohde = document.querySelector('#kohde')

let nof_d = 6

let dogs = [];

for (let i = 0; i < nof_d; i++)
{
    dogs[i] = prompt("Dog's name: ");
}

dogs.sort();
dogs.reverse();

let html = '<ul>';

for (let i = 0; i < nof_d; i++)
{
    html += '<li>';
    html += dogs[i];
    html += '</li>';
}
html += '</ul>';

kohde.innerHTML = html