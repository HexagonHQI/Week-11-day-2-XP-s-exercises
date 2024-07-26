import people from './data.js';

function calculateAverageAge(people) {
  if (people.length === 0) return 0;

  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  return totalAge / people.length;
}

const averageAge = calculateAverageAge(people);
console.log(`The average age is ${averageAge.toFixed(2)} years.`);
