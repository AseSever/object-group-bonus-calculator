const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


$( document ).ready ( readyNow )

function showEmployeesBonuses() {
 // show the output in the dom
// call the ul id
let el = $('#theEmployeeList')
el.empty();
for (employee of employees)
el.append( `<li> Name: ${employeeSalaryData( employee ).name}, Bonus percentage: ${employeeSalaryData( employee ).bonusPercentage}, Total Compensation: ${employeeSalaryData( employee ).totalCompensation}, Total Bonus: ${employeeSalaryData( employee ).totalBonus} </li>` )
} 



function readyNow() {
  // console.log( 'JQ' );
  $('#startProgram').on( 'click', showEmployeesBonuses);
}; // end readyNow

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

let Atticus = {
  name: 'Atticus',
  employeeNumber: '2400',
  annualSalary: '64999',
  reviewRating: 5
}
console.log(employees);

function employeeSalaryData(person) {
  let calculatedEmployee = {
    name: person.name,
    bonusPercentage: bonusCalculator(person),
    totalCompensation: totalCompensation(person),
    totalBonus: totalBonus(person)
  }
  return calculatedEmployee;
}

function checkingSalaryData(arrayOfEmployees) {
  // we need to loop over the employee array
  for (let i = 0; i < arrayOfEmployees.length; i++) {
    console.log(employeeSalaryData(arrayOfEmployees[i]));

  } // end for

} // end checkingSalaryData


checkingSalaryData(employees);


//console.log( employeeSalaryData( Atticus ));

function bonusCalculator(employeeObject) {
  //console.log('inside bonusCalculator', employeeObject);

  let bonusPercentage = 0;
  //name
  //bonusPercentage
  if (employeeObject.reviewRating === 3) {
    //console.log('3 is your rating')
    bonusPercentage += 0.04;
  } else if (employeeObject.reviewRating === 4) {
    //console.log('4 is your rating')
    bonusPercentage += 0.06;
  } else if (employeeObject.reviewRating === 5) {
    //console.log('5 is your rating!')
    bonusPercentage += 0.1;
  } else if (employeeObject.reviewRating <= 2) {
    //console.log('NO BONUS!!!¡¡¡!!!')
    bonusPercentage += 0;
  }

  let numberOfDigits = employeeObject.employeeNumber;
  if (numberOfDigits.length < 5) {
    bonusPercentage += 0.05;
  };

  if (employeeObject.annualSalary > '65000') {
    bonusPercentage -= 0.01;
  };

  if (bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  } else if (bonusPercentage < 0) {
    bonusPercentage = 0;


  };
  //totalCompensation
  //totalBonus
  return bonusPercentage;
};



function totalCompensation(objectSalary) {
  //console.log( 'in totalCompensation: ', objectSalary );
  // multiply bonusCalculator by employees salary
  return Math.floor((bonusCalculator(objectSalary) + 1) * Number(objectSalary.annualSalary));
}


function totalBonus(objectBonus) {
  return Math.floor(bonusCalculator(objectBonus) * Number(objectBonus.annualSalary));
}

