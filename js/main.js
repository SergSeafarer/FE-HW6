let userYearOfBirth = prompt('Введіть ваш рік народження');
const currentYear = 2023;
let userAge = currentYear - +userYearOfBirth;
while(isNaN(+userYearOfBirth) || Number.parseInt(userYearOfBirth) < 1900 || +userYearOfBirth > 2018) {
  userYearOfBirth = prompt('Введіть ваш рік народження')
}
if(userYearOfBirth === null || userYearOfBirth.trim() === '') {
  alert('Шкода, що Ви не захотіли ввести свій рік народження');
  userAge = null;
} else {
  userAge = currentYear - +userYearOfBirth;
}