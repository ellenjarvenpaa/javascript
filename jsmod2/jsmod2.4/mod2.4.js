let list = []
let number = 1

for (let i = 0; number !== 0; i++){
    number = parseInt(prompt("Enter a number: "))
    if (number !== 0)
    {
        list[i] = number
    }
}

let sort_numbers = list.sort(function(a, b){return b-a});
console.log(sort_numbers)