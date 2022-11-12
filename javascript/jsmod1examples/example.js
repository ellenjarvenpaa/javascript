'use strict';

let kohde = document.querySelector('#kohde')

console.log('I have awaken!')
document.querySelector('#otsikko').innerHTML = "Muutettu otsikko";

let nimi = prompt("Minkä niminen olet?");
document.querySelector('#kohde').innerHTML = 'Moi' + nimi + '!';

let eka = parseInt(prompt("Anna eka"));
let toka = parseInt(prompt("Anna toka"));
let kolmas = parseInt(prompt("Anna kolmas"));
let summa = eka + toka + kolmas
let tulo = eka * toka * kolmas
let ka = summa / 3
kohde.innerHTML = "summa =" + summa + "tulo =" + tulo + "ka =" + ka;

let vuosiluku  = parseInt(prompt("Anna vuosiliku:"));
if ((vuosiluku % 4 == 0 && vuosiluku % 100 != 0) || (vuosiluku % 400 == 0))
{
    kohde.innerHTML = "vuosi on karkausvuosi"
}
else
{
    kohde.innerHTML = "vuosi ei ole karkausvuosi"
}

let alku = parseInt(prompt("Anna alkuvuosi"))
let loppu  = parseInt(prompt("Anna loppuvuosi"))

let html = "<ul>";
for (let vuosiluku = alku; vuosiluku <= loppu; vuosiluku++)
{
  if ((vuosiluku % 4 == 0 && vuosiluku % 100 != 0) || (vuosiluku % 400 == 0))
  {
      html += "<li>";
      html += vuosiluku
      html += "</li>"
  }

}
html += "</ul>"
kohde.innerHTML = html