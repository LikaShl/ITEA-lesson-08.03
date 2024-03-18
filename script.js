//1. запитати в користувача якусь годину і за допомогою ф-ції вивести в консль цю годину в секундах.

let time = prompt("Котра година (без хвилин)?");
function hourToSec(hour) {
  let timeInSec = hour * 60;
  console.log("В секундах це " + timeInSec + " ceк");
}
hourToSec(time);

// 2. вивести у консоль наступну порядкову цифру від тої, що запитаємо у користувача. (ну значить її сточатку треба запитати)

let givenNumber = prompt("Назви цифру");
function makeNextNumber(num) {
  let nextNumber = num++;
  console.log("Наступна цифра " + num);
}
makeNextNumber(givenNumber);

// 3.Написати ф-цію для підрахунку площі трикурника. Задати розміри сторін для 3 трикутників та вивести в консоль розміри та площу.

function calculateTriangleArea(a, b, c) {
  let p = a + b + c;
  let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  console.log(S);
}
calculateTriangleArea(3, 7, 13);
calculateTriangleArea(4, 6, 10);
calculateTriangleArea(23, 5, 28);

// 4  . спрогнозувати якими словами завершиться футбольний матч. Вивести в консоль всі 3 варіанти
// (уявімо, що ми вболіваємо за збірну України і новини по відношенню до цієї команди), То є ф-ція.

function didUaWin(ua, opponent) {
  let result;
  if (ua > opponent) {
    result = "Ура! Ми виграли!!!";
  } else if (ua < opponent) {
    result = "Ех, сподіваємось на реванш";
  } else {
    result = "`Ну що ж, достойна гра";
  }
  console.log(result);
}
didUaWin(3, 1);
didUaWin(2, 2);
didUaWin(0, 4);

// 5. перевірити, чи слово є палінромом. (Паліндром - це коли воно читається однаково у бвох напрямках і зліва направо і справа наліво).
// Слово - можна рандомне з якогось масива слів(але там обовязково має бути око, level). Для цього погугліть методи масивів.

let words = [
  "око",
  "пелюстка",
  "level",
  "дід",
  "команда",
  "урок",
  "піп",
  "коробка",
  "приклад",
  "наган",
  "кіт",
  "стілець",
  "Пилип",
  "конструктор",
  "радар",
  "вареники",
  "ротатор",
];

function isPalindrom(arr){
   arr.forEach(word => {
    let reverseWord = word.split("").reverse().join("");
if(word == reverseWord) {
    console.log("Yes, "+ word +" is palindrome")
} else { console.log("No, " + word + " is not a palindrome")}
   }); 
}
isPalindrom(words)
// 6. Напишіть слово задом наперед. Будь-яке слово. Можна питати в користувача
let word = prompt("напиши будь-яке слово");
function reversingWord(a){
    let newWord = a.split("").reverse().join("");
    alert(newWord);
}
reversingWord(word);