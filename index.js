const weeks = prompt("Напишіть день тижня");
let weeksText;

console.log(weeksText);
switch (weeks) {
  case "Понеділок":
    weeksText = alert("Це є робочий день");
    break;

  case "Вівторок":
    weeksText = alert("Це є робочий день");
    break;
  case "Середа":
    weeksText = alert("Це є робочий день");
    break;

  case "Четверг":
    weeksText = alert("Це є робочий день");
    break;

  case "П'ятниця":
    weeksText = alert("Це є робочий день");
    break;

  case "Субота" || "Неділя":
    weeksText = alert("Це вихідний");
    break;

    case "Неділя":
        weeksText = alert("Це вихідний");
        break;
}

// const monthInput = prompt("Впишіть номер місяця");
// const month = Number(monthInput);
//
// console.log(month);
// if (month == 1) {
//   alert("Це Січень");
//   alert("У Січні 31 день");
// } else if (month == 2) {
//   alert("Це Лютий");
//   alert("У Лютому від 28 до 29 днів");
// } else if (month == 3) {
//   alert("Це Березень");
//   alert("У Березні 31 день");
// } else if (month == 4) {
//   alert("Це Квітень");
//   alert("У Квітні 30 днів");
// } else if (month == 5) {
//   alert("Це Травень");
//   alert("У Травні 31 день");
// } else if (month == 6) {
//   alert("Це Червень");
//   alert("У Червні 30 днів");
// } else if (month == 7) {
//   alert("Це Липень");
//   alert("У Липні 31 день");
// } else if (month == 8) {
//   alert("Це Серпень");
//   alert("У Серпні 31 день");
// } else if (month == 9) {
//   alert("Це Вересень");
//   alert("У Вересні 30 днів");
// } else if (month == 10) {
//   alert("Це Жовтень");
//   alert("У Жовтні 31 день");
// } else if (month == 11) {
//   alert("Це Листопад");
//   alert("У Листопаді 30 днів");
// } else if (month == 12) {
//   alert("Це Грудень");
//   alert("У Грудні 31 день");
// }

// const light = prompt("Впишіть колір який показує світлофор");

// switch (light) {
//   case "червоний":

//     console.lof(alert("Стоп!"));

//     break;

//   case "жовтий":

//     console.lof(alert("Увага"));

//     break;

//   case "зелений":

//     console.log(alert("Йти"));

//     break;

//     default:

//     console.log(alert('це не колір який пока'))
// }

// console.log(light);