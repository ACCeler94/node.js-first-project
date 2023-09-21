const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['Arthur', 'John', 'Brian', 'Bob'];
const femaleNames = ['Ann', 'Isabel', 'Barbara', 'Katherine'];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];
const people = [];

const randChoice = array => {
  const index = Math.floor(Math.random() * array.length);
  return array[index]
}

const generatePhoneNumber = () => {
  const phoneNumber = [];

  for (let i = 0; i < 9; i++) {
    const number = Math.floor(Math.random() * 10);
    phoneNumber.push(number)
  }
  return phoneNumber.join('');
}

for (let i = 0; i < 20; i++) {
  let person = {};
  person.gender = randChoice(genders);
  if (person.gender === 'male') {
    person.firstName = randChoice(maleNames);
  } else {
    person.firstName = randChoice(femaleNames)
  }
  person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  person.age = Math.floor(Math.random() * 62 + 17);
  person.email = person.firstName.toLowerCase() + '.' + person.lastName.toLowerCase() + '@gmail.com';
  person.phoneNumber = generatePhoneNumber();

  people.push(person);
}

const jsonData = JSON.stringify(people);

fs.writeFile('people.json', jsonData, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});