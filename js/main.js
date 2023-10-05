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

let userFavoriteSport = prompt('Введіть ваш улюблений вид спорту');
while((isNaN(userFavoriteSport) === false && userFavoriteSport !== null && userFavoriteSport.trim() !== '') || Number.parseInt(userFavoriteSport)) {
  userFavoriteSport = prompt('Введіть ваш улюблений вид спорту');
}
switch(true) {
  case userFavoriteSport === null || userFavoriteSport.trim() === '':
    alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту');
    userFavoriteSport = null;
    break;
  case userFavoriteSport === 'бокс':
    userFavoriteSport = 'Круто! Хочешь стати Олександром Усіком?';
    break;
  case userFavoriteSport === 'плавання':
    userFavoriteSport = 'Круто! Хочешь стати Майклом Фред Фелпсом?';
    break;
  case userFavoriteSport === 'теніс':
    userFavoriteSport = 'Круто! Хочешь стати Роджером Федерером?';
    break;
}