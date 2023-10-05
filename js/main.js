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

let userCity = prompt('Введіть ваше місто, в якому ви проживаєте');
while((isNaN(userCity) === false && userCity !== null && userCity.trim() !== '') || Number.parseInt(userCity)) {
  userCity = prompt('Введіть ваше місто, в якому ви проживаєте')
}
switch(true) {
  case userCity === null || userCity.trim() === '':
    alert('Шкода, що Ви не захотіли ввести своє місто проживання');
    userCity = null;
    break;
  case userCity === 'Київ':
    userCity = 'Ти живешь у столиці України';
    break;
  case userCity === 'Вашингтон':
    userCity = 'Ти живешь у столиці США';
    break;
  case userCity === 'Лондон': 
    userCity = 'Ти живешь у столиці Великої Британії';
    break;
  default: 
    userCity = 'Ти живеш у місті ' + userCity; 
} 