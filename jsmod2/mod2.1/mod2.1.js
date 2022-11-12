let luvut = [];

for (let i = 0; i < 5; i++)
{
    luvut[i] = parseInt(prompt("Enter a number " + ( i + 1)));
}

for (let i = 0; i < 5; i++)
{
    console.log(luvut[4 - i]);
}



