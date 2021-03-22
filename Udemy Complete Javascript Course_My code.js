console.log('Hello World sfsfs');
var firstName = 'John';
console.log(firstName);
var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge);

var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark;
massJohn = 97;
massMark = 90;
heightJohn = 1.8;
heightMark = 1.9    ;
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log (bmiJohn);
bmiMark = massMark / (heightMark * heightMark);
console.log (bmiMark);

// var MarkBmiHigher = bmiMark > bmiJohn;
// console.log(MarkBmiHigher);
// console.log("Is Mark\'s BMI higher than John\'s " + MarkBmiHigher);
if (bmiMark > bmiJohn) {
    console.log("Mark\'s BMI is higher than John\'s");
} else { console.log("John\'s BMI is higher than Mark\'s");}

// // var firstName = 'John';
// // var age = 13;
// // if (age < 13) {
// //     console.log(firstName + ' is a child.');
// // } else if (age >=13 && age <20) {
// // console.log(firstName + ' is a teenager.');
// // } else if (age >=20 && age <30) {
// // console.log(firstName + ' is a young man.');
// // } else {console.log(firstName + ' is a man.');
// // }

// // // Ternary Operator
// // var firstName = 'John';
// // var age = 30;

// // age >= 18 ? console.log(firstName + ' drinks beer.')
// // : console.log(firstName + ' drinks juice.');

// // var drink = age >=18 ? 'beer' : 'juice';
// // console.log(drink);

// // // Switch Statement (easier, more effecient way to do if-then-else statements)
// // var job = 'designer';
// // switch (job) {
// //     case 'teacher':
// //         console.log(firstName + ' teaches kids how to code.');
// //         break;
// //     case 'driver' :
// //         console.log(firstName + ' drives an Uber');
// //         break;
// //     case 'designer' :
// //         console.log(firstName + ' designs websites');
// //         break;
// //     default:
// //         console.log(firstName + ' does something else');
// // }

// // age = 28
// // switch (true) {
// //     case age <13:
// //         console.log(firstName + ' is a boy.');
// //         break;
// //     case age >= 13 && age <20:
// //         console.log(firstName + ' is a teenager.');
// //         break;
// //     case age >=20 && age < 30:
// //         console.log(firstName + ' is a young man.');
// //         break;
// //     default:
// //         console.log(firstName + ' is a man.');

// // }

// // var avgJohn, avgMike, game1John, game1Mike, game2John, game2Mike, game3John, game3Mike;
// // game1John = 100;
// // game1Mike = 90;
// // game2John = 95;
// // game2Mike = 105;
// // game3John = 110;
// // game3Mike = 85; 

// // avgJohn = (game1John + game2John + game3John) / 3;
// // console.log(avgJohn);
// // avgMike = (game1Mike + game2Mike + game3Mike) / 3;
// // console.log(avgMike);
// // if (avgJohn > avgMike) {
// //     console.log('John\'s team average is greater than Mike\'s.');
// // } else if (avgJohn < avgMike){
// //     console.log('Mike\'s team average is greater than John\'s.');
// // } else {
// //     console.log('Their average scores are tied.');
// // }

// // function CalculateAge(birthYear) {
// //     return 2018 - birthYear;
// //     }
// // let ageJohn = CalculateAge(1990);
// // let ageMike = CalculateAge(1948);
// // let ageJane = CalculateAge(1969);
// // console.log(ageJohn, ageMike, ageJane);

// // function yearsUntilRetirement(year, firstName) {
// //     let age = CalculateAge(year);
// //     let retirement = 65 - age;
// //     console.log(firstName + ' retires in ' +
// //  retirement + ' years.');
// //  }

// //  yearsUntilRetirement(1990, 'John');
// //  yearsUntilRetirement(1948, 'Mike');
// //  yearsUntilRetirement(1969, 'Jane');
 
// //  console.log('');

// //  let hour = 13; 

// //  if (hour >=6 && hour < 12) {
// //      console.log('Good Morning!');
// //  } else if (hour >= 12 && hour <18) {
// //     console.log('Good afternoon!');
// //  }   else {
// //         console.log('Good evening!');
// //     }
 
// // if (hour >=6 && hour < 12) 
// //     console.log('Good Morning!');
// // else if (hour >= 12 && hour <18)
// //     console.log('Good afternoon!');
// // else 
// //     console.log('Good evening!');

 
// // let color = ['red', 'blue'];
// // color[2] = 1
// // console.log(color);
// // console.log(color.length); 

// // var customer = {
// //     name: 'Tom Smith',
// //     speak: function() {
// //         return 'My name is ' + this.name;
// //     },
// //     address: {
// //         street: '123 Main ST',
// //         city: 'Pittsburge',
// //         state: 'PA '
// //     }
// // }
// // document.write(customer.speak() + "<br />");
// // console.log(customer.speak());
// // console.log(customer.name + ' lives at ' +customer.address.street);
// // customer.address.country = 'US';
// // console.log(customer.name + ' lives at ' +customer.address.street +' in ' +customer.address.country);
// // // Template String
// // console.log(`${customer.name} lives at ${customer.address.street} in ${customer.address.country}`);



// // const s = 'tech, comp, it, code';
// // console.log(s.split(', '));

// // //ARRAYS - variables that hold multiple values

// //     // Old way - constructors
// // const numbers = new Array(1,2,3,4,5);
// // console.log(numbers);
// //     // New way - 
// // const fruits = ['apples', 'oranges', 'pears', 7];
// // console.log(fruits);

// // fruits[3] = 'grapes';
// // console.log(fruits);

// //  fruits.push('mangos');
// //  console.log(fruits);

// //  fruits.unshift('berries');
// //  console.log(fruits);
// //  fruits.pop();
// //  console.log(fruits);

// //  // Object Litterals

 
// //  const person = { 
// //     firstName: 'John', 
// //     lastName: 'Doe', 
// //     age: 30,
// //    hobbies: ['music', 'movies', 'sports'], 
// //    address: {
// //        street: '50 main st',
// //        city: 'Boston',
// //        state: 'MA'
// //    }
// // }
// // console.log (person.address.city);
// // console.log (person);
// // console.log (person.address.city, person.age);
// // console.log (person.hobbies[1]);

// // //

// // const todos = [
// //     {
// //         id: 1,
// //         text: 'Take out trash',
// //         isCompleted: true
// //     },
// //     {
// //         id: 2,
// //         text: 'Meeting with Boss',
// //         isCompleted: true
// //     },
// //     {
// //         id: 3,
// //         text: 'Dentist appt',
// //         isCompleted: false
// //     },
// // ]
// // console.log(todos[1].text);

// // const todoJSON = JSON.stringify(todos);
// // console.log(todoJSON);;
 
// // // For
// // for (let i = 0; i <=10; i++) {
// //     console.log(`For Loop Number: ${i}`);
// // }

// // // While (old-school)
// // let i = 0;
// // while (i <=10) {
// //     console.log(`While Loop Number: ${i}`);
// //     i++;
// //     }
    
// // // For (including an array)
// // for (let i = 0; i < todos.length; i++) {
// //     console.log(todos[i].text);
// // }
// // for (let item of todos) {
// //     console.log(item.text);
// // }

// // // forEach, map, filter

// // // forEach
// // todos.forEach(function(todo) {
// //     console.log(todo.text);
// // })

// // // map
// // todos.map(function(todo) {
// //     console.log(todo.id);
// // })

// // const todoText = todos.map(function(todo) {
// //     return todo.text;
// // })
// // console.log(todoText);

// // // filter (this is very powerful functional programing tool.  Traversy Media refers to this as "high order array methods")

// // // const todoCompleted = todos.filter(function(todo) {
// // //     return todo.isCompleted === true;
// // // });
// // // console.log(todoCompleted);

// // const todoCompleted = todos.filter(function(todo) {
// //     return todo.isCompleted === true;
// // }).map(function(todo) {
// //     return todo.text;
// // })
// // console.log(todoCompleted);

// // // Conditionals
// // var x = 10; 

// // if (x == 10) {
// //     console.log('x is 10');
// // } else if(x > 10) {
// //     console.log(`x is greater than 10`);
// // }    else {
// //         console.log(`x is less than 10`);
// //     }
// // console.log(`x`);

// // console.log(`${massJohn} wow wow  ${massMark}`);

// // console.log(`${massMark} the best ${massJohn}`);


// // const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// // fruits2.length;   // the length of fruits is 4
// // console.log(fruits2.length);

// // const s2 = 'hello world';
// // console.log(s2.substring(0,5).toUpperCase());



// // console.log(person.address.city);
// // console.log(person.hobbies[1]);


// // x = 5
// // if (x === 10) {
// //   console.log(`x is 10`);
  
  
// //   } else if (x > 10) {
// //   console.log(`x is greater than 10`);
  
  
// //   } else {
// //   console.log(`x is less than 10`);
  
  
// // }

// // console.log(`ksks`);

// // if (x == 10) {
// //   console.log(`its 10 alright`);
  
// //   } else if (x >10) {
// //   console.log(`more dude`);
  
// //   } else {
// //   console.log(`if all else fails`);
// // }

// // if (FirstCondition) {
// //   WhatToDoIfTrue
// //   } else if (SecondCondition) {
// //   WhatToDoIfTrue
// //   } else {
// //   WhatToDoIfAllAboveConditionsAreFalse
// // }

// var materials = [
//   'Hydrogen',
//   'Helium',
//   'Lithium',
//   'Beryllium'
// ];

// // console.log(materials.map(material => material.length));
// // expected output: Array [8, 6, 7, 9]

// // Function Statements and Expressions

// // // Function Declaration
// // function whatDoYouDo (job, firstName) {

// // }

// // Function Expression
// // var whatDoYouDo = function(job, firstName) {
// //   switch(job) {
// //     case 'teacher' :
// //       return firstName + ' teaches';
// //     case 'driver' :
// //       return firstName + ' drives';
// //     case 'designer' :
// //       return firstName + ' designs';
// //     default:
// //       return firstName + ' does something else';
// //   }
// // }
// // console.log(whatDoYouDo('driver', 'John'));
// // console.log(whatDoYouDo('artist', 'Steve'));

// // // Arrays
// // const names = ['Dave', 'Steve', 'Bob'];
// // console.log(names[1]);
// // console.log(names.length);
// // names[1] = 'Ben'
// // console.log(names);

// // names.push('pushed');
// // console.log(names);

// // names.unshift('unshifted');
// // console.log(names);

// // names.pop();
// // console.log(names);

// // console.log(names.indexOf('Ben'));

// // var John = ['John', 'Smith', 'driver'];


// // var isDesigner = John.indexOf('driver') === 1 ? 'John is a driver' : 'He is NOT a driver';
// // console.log(isDesigner);

// // function tipCalc(billeo) {
// // if (billeo <50) {
// //   tipP = .2;
// // } else if (billeo >= 50 && billeo <=200) {
// //   tipP = .15;
// // } else {
// //   tipP = .10;
// // }
// // return tipP * billeo;
// // }


// // var bills = [124, 48, 268];
// // var tips =  [tipCalc(bills[0]),
// //             tipCalc(bills[1]),
// //             tipCalc(bills[2])];
// // var totBills = [bills[0] + tips[0],
// //                 bills[1] + tips[1],
// //                 bills[2] + tips[2]];


// // console.log(tips);
// // console.log(totBills);

// function tipCalc(bill) {
//   if (bill <50) {
//     tipP = .2;
//   } else if (bill >= 50 && bill <=200) {
//     tipP = .15;
//   } else {
//     tipP = .10;
//   }

//   console.log(tipP * bill);
//   }
  
//   tipCalc(100, 100);
// //   console.log(tipP * bill);


// //   var bill = [124, 48, 268];
// // tipCalc(bill[0]),
    
  
// //   console.log(tips);

// function apples(one, two) {
//   console.log(one +` is better than `+ two);
  
// }
// apples('wine', 'beer');

// // Advent of Code Puzzles
// /* --- Day 1: The Tyranny of the Rocket Equation ---
// Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.

// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// The Elves quickly load you into a spacecraft and prepare to launch.

// At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

// Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

// For example:

// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.
// The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

// What is the sum of the fuel requirements for all of the modules on your spacecraft? */

// // const inputData = [61302, 105953, 129165, 121039, 64799, 120172, 147328, 65147, 123112, 103573, 85213, 130378, 115416, 129131, 88809, 147043, 86119, 138383, 136803, 66719, 59465, 122491, 126551, 110028, 96959, 115214, 83823, 109324, 148671, 70505, 96375, 83861, 62724, 77493, 122275, 112894, 143872, 93525, 50526, 140725, 147110, 115859, 137582, 143800, 68830, 130259, 122393, 64373, 51810, 62449, 143889, 108038, 55083, 59927, 77613, 67488, 91711, 67498, 147320, 65348, 101088, 51983, 97705, 61890, 74561, 128456, 76450, 95132, 78835, 142148, 128037, 71497, 138382, 143474, 54236, 104095, 121533, 136757, 123213, 66306, 83269, 90894, 82215, 143024, 117140, 128722, 139823, 87177, 58107, 94303, 70008, 130633, 114210, 67931, 59062, 125819, 127278, 118718, 70968, 66126]

// // function fuelReq(mass) {
// //   return Math.floor(mass / 3)-2;  // so far, this seems right
// // }


// // var fuelNeeded = fuelReq(100756, 1969);
// // console.log(fuelNeeded);

// // const arr = [100, 200, 300];
// // arr.forEach(mass => {
// //   console.log(Math.floor(mass / 3)-2);
// // });

// // const arrSum = arr => arr.reduce((a,b) => a + b, 0)
// // // arrSum([20, 10, 5, 10]) -> 45
// // console.log(arrSum);

// // console.log(
// //   [1, 2, 3, 4, 5].reduce((a, b) => a + b, 0)
// // )

// // console.log(arr.reduce((a, b) => a + b, 0));
// // console.log(arr.reduce((a, b) => a + b, 0))

// // Advent of Code Puzzle: Day 1
// // Part 1
 

// // // inputData("file:///C:/Drive/SkillPro/SP_It/SP_It_Sw/It_Sw_JavaScript/input.txt");


// // // var fs = require('fs');
// // // var data = fs.readFileSync("file:///C:/Drive/SkillPro/SP_It/SP_It_Sw/It_Sw_JavaScript/input.txt").toString();
// // // const input = data.split('\r\n').map(Number);
// // // const testInput = [
// // //   14,
// // //   1969,
// // //   100756
// // // ];

// // // mass / 3, round down, -2
// // function formula(mass) {
// //   return Math.floor(mass / 3) - 2;
// // }

// // // Part 1
// // const fuelOfMass = input.map((curr) => {
// //   return formula(curr);
// // });

// // const totalFuel3 = fuelOfMass.reduce((acc, curr) => {
// //   return acc + curr;
// // }, 0);

// // console.log(`Part 1: ${totalFuel3}`);

// const inputData = [61302, 105953, 129165, 121039, 64799, 120172, 147328, 65147, 123112, 103573, 85213, 130378, 115416, 129131, 88809, 147043, 86119, 138383, 136803, 66719, 59465, 122491, 126551, 110028, 96959, 115214, 83823, 109324, 148671, 70505, 96375, 83861, 62724, 77493, 122275, 112894, 143872, 93525, 50526, 140725, 147110, 115859, 137582, 143800, 68830, 130259, 122393, 64373, 51810, 62449, 143889, 108038, 55083, 59927, 77613, 67488, 91711, 67498, 147320, 65348, 101088, 51983, 97705, 61890, 74561, 128456, 76450, 95132, 78835, 142148, 128037, 71497, 138382, 143474, 54236, 104095, 121533, 136757, 123213, 66306, 83269, 90894, 82215, 143024, 117140, 128722, 139823, 87177, 58107, 94303, 70008, 130633, 114210, 67931, 59062, 125819, 127278, 118718, 70968, 66126];
  
// function calcFuelReq(mass) {
//   return Math.floor(mass / 3) - 2;
// }

// let totalFuel = 0;
// inputData.forEach(function(mass) {
//   totalFuel += calcFuelReq(mass);
// });
// console.log(`Part 1: Total Fuel Requirement: ${totalFuel}`);


// // DAY 1: PART 2

// // Using if-else (this works fine)

// // function calcFuelReq2(mass) {
// //   let fuel = calcFuelReq(mass);
// //   if (fuel > 0) {
// //     fuel = fuel += calcFuelReq2(fuel);
// //     } else {
// //     fuel = 0
// //   }
// //   return fuel
// // }
// // let totalFuel2 = 0;
// // inputData.forEach(function(mass) {
// //   totalFuel2 += calcFuelReq2(mass);
// // });
// // console.log(`Part 2: Total Fuel Requirement: ${totalFuel2}`);


// // Using ternary operator (saved 6 lines of code)
// function calcFuelReq2(mass) {
//   let fuel = calcFuelReq(mass);
//   return fuel > 0 ? fuel += calcFuelReq2(fuel) : 0;
// }
// let totalFuel2 = 0;
// inputData.forEach(function(mass) {
//   totalFuel2 += calcFuelReq2(mass);
// });
// console.log(`Part 2: Total Fuel Requirement: ${totalFuel2}`);


//   // return fuel > 0 ? fuel += calcFuelReq2(fuel) : 0;

// // fetch('file:///C:/Drive/SkillPro/SP_It/SP_It_Sw/It_Sw_JavaScript/input.txt')
// //   .then(response => response.text())
// //   .then(text => console.log(text))
//   // outputs the content of the text file

// // function readTextFile('file:///C:/Drive/SkillPro/SP_It/SP_It_Sw/It_Sw_JavaScript/input.txt');  

// // {
// //     var rawFile = new XMLHttpRequest();
// //     rawFile.open("GET", file, false);
// //     rawFile.onreadystatechange = function ()
// //     {
// //         if(rawFile.readyState === 4)
// //         {
// //             if(rawFile.status === 200 || rawFile.status == 0)
// //             {
// //                 var allText = rawFile.responseText;
// //                 alert(allText);
// //             }
// //         }
// //     }
// //     rawFile.send(null);
// // }


// // var fs = require('fs');
// // var data = fs.readFileSync("file:///C:/Drive/SkillPro/SP_It/SP_It_Sw/It_Sw_JavaScript/input.txt").toString();
// // const input = data.split('\r\n').map(Number);




// // From Ricky...still getting same error ("Uncaught ReferenceError: require is not defined")
// // var fs = require('fs'); 
// // var textByLine = fs.readFileSync('input.txt').toString().split("\n");
// // textByLine = textByLine.map(x => parseInt(x));


// // DAY 2 PUZZLE: PART 1

// // // Recoded using While loop with Nested Ternary Operator
// // var codeArray = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,2,9,19,23,2,23,10,27,1,6,27,31,1,31,6,35,2,35,10,39,1,39,5,43,2,6,43,47,2,47,10,51,1,51,6,55,1,55,6,59,1,9,59,63,1,63,9,67,1,67,6,71,2,71,13,75,1,75,5,79,1,79,9,83,2,6,83,87,1,87,5,91,2,6,91,95,1,95,9,99,2,6,99,103,1,5,103,107,1,6,107,111,1,111,10,115,2,115,13,119,1,119,6,123,1,123,2,127,1,127,5,0,99,2,14,0,0];

// // var s = 0;
// // while (codeArray[s] != 99) {
// //   var first = codeArray[codeArray[s + 1]]; 
// //   var second = codeArray[codeArray[s + 2]]; 
// //   var putlndex = codeArray[s + 3];
// //   codeArray[putlndex] = (codeArray[s] == 1) ? (first + second) : (first * second); 
// //   console.log('Put Index: '+codeArray[putlndex]);
// //   console.log('codeArray[s]: '+codeArray[s]);
// //   console.log(putlndex);
// //   console.log (codeArray[0]);
// //   s += 4;
// // }
// // console.log (codeArray[0]);
// // console.log('Put Index: '+codeArray[putlndex]);


// // var s = 0;
// // while (CodeArray1[s] != 99) {
// //   CodeArray1[s] == 1 ? CodeArray1.splice(CodeArray1[s+3], 1, CodeArray1[CodeArray1[s+1]]+CodeArray1[CodeArray1[s+2]]) : CodeArray1.splice(CodeArray1[s+3], 1, CodeArray1[CodeArray1[s+1]]*CodeArray1[CodeArray1[s+2]]);
// // var s = s + 4;
// // }
// // console.log(CodeArray1);

// // Answer: [3716250, 12, 2, 2, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 10, 48, 2, 9, 19, 144, 2, 23, 10, 576, 1, 6, 27, 578, 1, 31, 6, 580, 2, 35, 10, 2320, 1, 39, 5, 2321, 2, 6, 43, 4642, 2, 47, 10, 18568, 1, 51, 6, 18570, 1, 55, 6, 18572, 1, 9, 59, 18575, 1, 63, 9, 18578, 1, 67, 6, 18580, 2, 71, 13, 92900, 1, 75, 5, 92901, 1, 79, 9, 92904, 2, 6, 83, 185808, 1, 87, 5, 185809, 2, 6, 91, 371618, 1, 95, 9, 371621, …]



// // Answer:  [1, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]

// // var CodeArray2 = [1, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50];
// // var s = 4
// // switch(true) {
// //   case CodeArray2[s] == 1:
// //     console.log('Add');
// //     console.log(`${CodeArray2[CodeArray2[s+1]]+CodeArray2[CodeArray2[s+2]]}`);
// //     CodeArray2.splice(CodeArray2[s+3], 1, CodeArray2[CodeArray2[s+1]]+CodeArray2[CodeArray2[s+2]])
// //     console.log(CodeArray2);
// //     break;
// //   case CodeArray2[s] == 2:
// //     console.log('Multiply');
// //     console.log(`${CodeArray2[CodeArray2[s+1]]*CodeArray2[CodeArray2[s+2]]}`);
// //     CodeArray2.splice(CodeArray2[s+3], 1, CodeArray2[CodeArray2[s+1]]*CodeArray2[CodeArray2[s+2]])
// //     console.log(CodeArray2);
// //     break;
// //   case CodeArray2[s] == 99:
// //     console.log('Halt! Program Finished');
// //     break;
// //   default:
// //     console.log('You have 10 seconds to get out before the place blows up!');
// // }
// // Answer:  [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]



// // While approach
// // var CodeArray2 = [1,9,10,70, 2,3,11,0,99,30,40,50];
// // var CodeArray1 = [99,9,10,3,2,3,11,0,99,30,40,50];
// // var s = 0
// // while (CodeArray1[0] != 99) {
// //   console.log(`hello`);
// // }


// // 1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,2,9,19,23,2,23,10,27,1,6,27,31,1,31,6,35,2,35,10,39,1,39,5,43,2,6,43,47,2,47,10,51,1,51,6,55,1,55,6,59,1,9,59,63,1,63,9,67,1,67,6,71,2,71,13,75,1,75,5,79,1,79,9,83,2,6,83,87,1,87,5,91,2,6,91,95,1,95,9,99,2,6,99,103,1,5,103,107,1,6,107,111,1,111,10,115,2,115,13,119,1,119,6,123,1,123,2,127,1,127,5,0,99,2,14,0,0

// // var n = 0;

// // while (n != 32 && n < 100) {
// //   n = n + 4;
// //   console.log(n);
// // }


// // console.log(n);
// // expected output: 3


// // DAY 2 PUZZLE: PART 2

// // I just manually played with the numbers until I got 64 & 72
// var codeArray = [1,64,72,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,2,9,19,23,2,23,10,27,1,6,27,31,1,31,6,35,2,35,10,39,1,39,5,43,2,6,43,47,2,47,10,51,1,51,6,55,1,55,6,59,1,9,59,63,1,63,9,67,1,67,6,71,2,71,13,75,1,75,5,79,1,79,9,83,2,6,83,87,1,87,5,91,2,6,91,95,1,95,9,99,2,6,99,103,1,5,103,107,1,6,107,111,1,111,10,115,2,115,13,119,1,119,6,123,1,123,2,127,1,127,5,0,99,2,14,0,0];

// var s = 0;
// while (codeArray[s] != 99) {
//   var first = codeArray[codeArray[s + 1]]; 
//   var second = codeArray[codeArray[s + 2]]; 
//   var putlndex = codeArray[s + 3];
//   codeArray[putlndex] = (codeArray[s] == 1) ? (first + second) : (first * second); 
//   s += 4;
// }
// console.log (codeArray[0]);
// console.log('Put Index: '+codeArray[putlndex]);

// // DAY 3 PUZZLE: PART 1

// var wire1 = ['R998','U502','R895','D288','R416','U107','R492','U303','R719','D601','R783','D154','L236','U913','R833','D329','R28','D759','L270','D549','L245','U653','L851','U676','L211','D949','R980','U314','L897','U764','R149','D214','L195','D907','R534','D446','R362','D6','L246','D851','L25','U925','L334','U673','L998','U581','R783','U912','R53','D694','L441','U411','L908','D756','R946','D522','L77','U468','R816','D555','L194','D707','R97','D622','R99','D265','L590','U573','R132','D183','L969','D207','L90','D331','R88','D606','L315','U343','R546','U460','L826','D427','L232','U117','R125','U309','R433','D53','R148','U116','L437','U339','L288','D879','L52','D630','R201','D517','L341','U178','R94','U636','L759','D598','L278','U332','R192','U463','L325','U850','L200','U810','L686','U249','L226','D297','R915','D117','R56','D59','R760','U445','R184','U918','R173','D903','R212','D868','L88','D798','L829','U835','L563','U19','R480','D989','R529','D834','R515','U964','L876','D294','R778','D551','L457','D458','R150','D698','R956','D781','L310','D948','R50','U56','R98','U348','L254','U614','L654','D359','R632','D994','L701','D615','R64','D507','R668','D583','L687','D902','L564','D214','R930','D331','L212','U943','R559','U886','R590','D805','R426','U669','L141','D233','L573','D682','L931','U267','R117','D900','L944','U667','L838','D374','L406','U856','R987','D870','R716','D593','R596','D654','R653','U120','L666','U145','R490','D629','R172','D881','L808','D324','R956','D532','L475','U165','L503','U361','R208','U323','R568','D876','R663','D11','L839','D67','R499','U75','L643','U954','R94','D418','R761','D842','L213','D616','L785','D42','R707','D343','L513','D480','L531','D890','L899','D2','L30','D188','R32','U588','R480','U33','R849','U443','L666','U117','L13','D974','L453','U93','R960','D369','R332','D61','L17','U557','R818','D744','L124','U916','L454','D572','R451','D29','R711','D134','R481','U366','L327','U132','L819','U839','R485','U941','R224','U531','R688','U561','R958','D899','L315','U824','L408','D941','R517','D163','L878','U28','R767','D798','R227'];

// var wire2 = ['L1009','U399','R373','U980','L48','U638','R725','U775','R714','D530','L887','D576','L682','D940','L371','D621','L342','D482','R676','D445','R752','U119','L361','D444','L769','D854','L874','U259','R332','U218','R866','U28','L342','D233','L958','U649','R998','U262','L8','D863','L283','D449','L73','D438','L516','D54','R964','D981','R338','U332','L761','U704','L705','D468','L115','U834','R367','D156','R480','U27','R846','U73','R846','D720','R811','D466','L407','U928','R816','U50','R90','D893','L930','D833','L159','D972','L823','U868','R689','D558','L777','D13','R844','D8','L168','U956','L111','D462','L667','U559','L839','U503','R906','D838','R83','D323','L782','U588','R599','D233','L700','U679','L51','U779','L110','D260','L201','U992','L43','D557','L628','D875','L201','U535','L246','D976','L546','D22','R600','D301','L542','D41','R532','U316','L765','D310','L666','D369','R853','U684','L457','U816','L667','U758','R798','U959','R893','D185','L842','U168','R68','D348','R394','D296','R966','D511','L319','U717','L57','U129','R843','U439','L744','D870','L162','D991','R77','D565','R494','U601','L851','U748','L96','U124','L379','D446','L882','U371','R133','U820','L935','D704','L670','D911','L182','U138','R844','U926','L552','D716','L849','U624','R723','U117','R252','D737','L216','U796','R156','U322','R812','D390','L50','D493','L665','U314','L584','U798','L11','U524','R171','U837','R981','U32','L277','U650','L865','U28','R399','U908','R652','D543','L779','D406','L839','D198','L190','D319','L776','U752','R383','D884','R385','D682','R729','D163','R252','U533','L690','D767','R533','D147','R366','U716','R548','U171','R932','U720','L9','D39','R895','U850','L276','D988','L528','U551','L262','D480','L275','D567','R70','D599','L814','U876','R120','U93','L565','U795','L278','D41','R695','D693','R208','U272','L923','U498','R238','U268','L244','U278','R965','U395','R990','U329','L478','D245','R980','D473','L702','U396','R358','U636','R400','D919','R240','U780','L251','D633','L55','D723','L529','U319','L299','D89','L251','D557','L705','D705','L391','D58','R241'];

// // var wire1 = ['R8','U5','L5','D3']; 
// var x = 0;
// var y = 0;
// var i = 0;
// var coords1 = [];
// while (i < wire1.length) {
//   // console.log(i);
//   var wire1Letter = wire1[i].charAt(0);
//   var wire1Number = parseInt(wire1[i].slice(1),10);  
//   // console.log(wire1Letter+wire1Number);
//   switch(true) {
//     case wire1Letter == 'U' :
//       var wireCountDown = wire1Number 
//       while (wireCountDown > 0) {
//         y++;
//         // console.log(x, y);
//         coords1.push(x+'_'+y);
//         wireCountDown --;
//       }
//       break;
//     case wire1Letter == 'D' :
//         var wireCountDown = wire1Number 
//         while (wireCountDown > 0) {
//           y--;
//           // console.log(x, y);
//           coords1.push(x+'_'+y);
//           wireCountDown --;
//         }
//       break;
//     case wire1Letter == 'R' :
//         var wireCountDown = wire1Number
//         while (wireCountDown > 0) {
//           x++;
//           // console.log(x, y);
//           coords1.push(x+'_'+y);
//           wireCountDown --;
//         }
//       break;
//     case wire1Letter == 'L' :
//         var wireCountDown = wire1Number 
//         while (wireCountDown > 0) {
//           x--;
//           // console.log(x, y);
//           coords1.push(x+'_'+y);
//           wireCountDown --;
//         }
//       break;
//   }
// i ++;
// }
// // console.log(coords1);


// // var wire2 = ['U7','R6','D4','L4']; 
// var x = 0;
// var y = 0;
// var i = 0;
// var coords2 = [];
// while (i < wire2.length) {
//   // console.log(i);
//   var wire2Letter = wire2[i].charAt(0);
//   var wire2Number = parseInt(wire2[i].slice(1),10);  
//   // console.log(wire2Letter+wire2Number);
//   switch(true) {
//     case wire2Letter == 'U' :
//       var wireCountDown = wire2Number 
//       while (wireCountDown > 0) {
//         y++;
//         // console.log(x, y);
//         coords2.push(x+'_'+y);
//         wireCountDown --;
//       }
//       break;
//     case wire2Letter == 'D' :
//         var wireCountDown = wire2Number 
//         while (wireCountDown > 0) {
//           y--;
//           // console.log(x, y);
//           coords2.push(x+'_'+y);
//           wireCountDown --;
//         }
//       break;
//     case wire2Letter == 'R' :
//         var wireCountDown = wire2Number
//         while (wireCountDown > 0) {
//           x++;
//           // console.log(x, y);
//           coords2.push(x+'_'+y);
//           wireCountDown --;
//         }
//       break;
//     case wire2Letter == 'L' :
//         var wireCountDown = wire2Number 
//         while (wireCountDown > 0) {
//           x--;
//           // console.log(x, y);
//           coords2.push(x+'_'+y);
//           wireCountDown --;
//         }
//       break;
//   }
// i ++;
// }
// // console.log(coords2);

// Array.prototype.diff = function(arr2) {
//   var ret = [];
//   for(var i in this) {   
//       if(arr2.indexOf(this[i]) > -1){
//           ret.push(this[i]);
//       }
//   }
//   return ret;
// };

// console.log(coords1.diff(coords2));




// // This array works to isolate and log matching elements in two arrays
// // Array.prototype.diff = function(arr2) {
// //   var ret = [];
// //   for(var i in this) {   
// //       if(arr2.indexOf(this[i]) > -1){
// //           ret.push(this[i]);
// //       }
// //   }
// //   return ret;
// // };
// var array1 = ["cat", "sum","fun", "run", "hut"];
// var array2 = ["bat", "cat","dog","sun", "hut", "gut"];

// // console.log(array1.diff(array2));
// // =========== end of array test








