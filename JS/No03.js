const prompt = require("prompt-sync")({ sigint: true });


const monthDayMap = {
    1: 31, 2: 28, 3: 31, 4: 30,
    5: 31, 6: 30, 7: 31, 8: 31,
    9: 30, 10: 31, 11: 30, 12: 31
}

console.log("Enter the required numbers\nBirth: ");
let birthYear = parseInt(prompt("Enter birth year: ", String));
let birthMonth = parseInt(prompt("Enter birth month: ", String));
let birthDate = parseInt(prompt("Enter birth date: ", String));

console.log("Current: ");
let currentYear = parseInt(prompt("Enter current year: ", String));
let currentMonth = parseInt(prompt("Enter current month: ", String));
let currentDate = parseInt(prompt("Enter current date: ", String));

let birthDateOffset = monthDayMap[birthMonth] - birthDate + 1 + ((birthMonth === 2 && currentYear % 4 == 0) ? 1 : 0);
let monthDayOffset = 0;
for (let i = birthMonth + 1; i <= 12; i++)
    monthDayOffset += monthDayMap[i];
let yearGap = (currentYear - birthYear - 1) * 365;

for (let i = 1; i < currentMonth; i++)
    currentDate += monthDayMap[i];
(currentMonth > 2 && currentYear % 4 == 0) ? currentDate++ : 0;

let countLeapYear = 0;
for (let i = birthYear + 1; i < currentYear; i++)
    countLeapYear = i % 4 == 0 ? countLeapYear + 1 : countLeapYear;

let totalDays = birthDateOffset + monthDayOffset + yearGap + currentDate;

console.log("Total seconds: " + (totalDays * 24 * 3600));