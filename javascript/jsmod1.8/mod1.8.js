let kohde = document.querySelector('#kohde')

let alku = parseInt(prompt("Enter a starting year: "))
let loppu  = parseInt(prompt("Enter a ending year: "))

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