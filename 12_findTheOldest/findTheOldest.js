const findTheOldest = function(people) {
  const arr = people
    .map(p => ({ person: p, age: getAge(p) }));

  arr.sort((a,b) => b.age - a.age);
  return arr[0].person;
};

const getAge = function(person) {
  const currentYear = new Date().getFullYear();
  return (person.yearOfDeath === undefined ? currentYear : person.yearOfDeath) - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
