  const names = ['Frank', 'Scott', 'Jasmine', 'Don'];

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }


  console.log ('BREAK')

  for (let name of names)
  {
      console.log(name);
  }

  const student = {
  firstName: 'Greg',
  lastName: 'Focker',
  studentId: '234359',
  phone: '040 5902123',
}

  student.address = 'Schoolroad 7';  // adds 'address' property to previous example
delete student.phone;              // deletes 'phone' propertt from previous example
console.log(student);

 function foo(t)
 {
     for (let i = 0; i < t.length; i++)
     {
         t[i] = t[i] * 2;
     }
 }

 let taulukko = [10, 20, 30]
  foo(taulukko);
 console.log(taulukko);


 let nof_c = parseInt(prompt("Number of candidates?" ));
 let candidates = [];

 for (let i = 0; i < nof_c; i++)
 {
     let cand_name = prompt("Name for candidate" + (i + 1))
     let candidate = {
         name : cand_name,
         votes : 0
     }
 }
 candidates.push(candidate);

