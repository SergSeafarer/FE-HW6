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
  case userCity === 'Київ' || userCity === 'київ':
    userCity = 'Ти живешь у столиці України';
    break;
  case userCity === 'Вашингтон' || userCity === 'вашингтон':
    userCity = 'Ти живешь у столиці США';
    break;
  case userCity === 'Лондон' || userCity === 'лондон': 
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

if(userAge === null && userCity === null && userFavoriteSport === null) {
  alert('Ви не надали про себе даних');
} else if(userAge !== null && userCity !== null && userFavoriteSport !== null) {
  alert ('Тобі ' + userAge + ' років, ' + userCity + '. ' + userFavoriteSport);
} else if(userFavoriteSport !== null && userCity !== null) {
  alert(userCity + '. ' + userFavoriteSport);
} else if(userCity !== null && userAge !== null) {
  alert('Тобі ' + userAge + ' років, ' + userCity + '.');
} else if(userAge !== null && userFavoriteSport !== null) {
  alert('Тобі ' + userAge + ' років. ' + userFavoriteSport);
} else if(userFavoriteSport === null && userCity === null) {
  alert('Тобі ' + userAge + ' років.');
} else if(userCity === null && userAge === null) {
  alert(userFavoriteSport);
} else if(userFavoriteSport === null && userAge === null) {
  alert(userCity);
} else if(userFavoriteSport === null) {
  alert(userCity + '. ' + userFavoriteSport);
} else if(userCity === null) {
  alert('Тобі ' + userAge + ' років' + '. ' + userFavoriteSport);
} else if(userAge === null) {
  alert('Тобі ' + userAge + ' років, ' + userCity);
}