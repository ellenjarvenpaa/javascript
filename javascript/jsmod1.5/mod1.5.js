let kohde = document.querySelector('#kohde')

let vuosiluku  = parseInt(prompt("Enter a year:"));

if ((vuosiluku % 4 == 0 && vuosiluku % 100 != 0) || (vuosiluku % 400 == 0))
{
    kohde.innerHTML = "The year is a leap year"
}
else
{
    kohde.innerHTML = "The year is not a leap year"
}