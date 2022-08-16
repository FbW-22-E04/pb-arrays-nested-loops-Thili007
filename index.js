// Exercise 01
let arr = "";

for (i = 0; i < 4; i++) {
  arr = "";
  for (j = 0; j <= i; j++) {
    arr += "|°+°|";
  }
  console.log(arr);
}

// Dived Lines
console.log(
  "-|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|-"
);

console.log(
  "-|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|-"
);

// End of Dived lines

// Exercise 02

const ARR = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

for (let i in ARR) {
  console.log(`row ${i}`);
  for (j = 0; j < ARR[i].length; j++) {
    console.log(ARR[i][j]);
  }
}

// Dived Lines
console.log(
  "-|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|-"
);

console.log(
  "-|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|-"
);

// End of Dived lines

// Exercise 03

// 3.1
const repeatVal = [];
for (let i = 1; i <= 4; i++) {
  //   console.log(i);
  for (let j = 1; j <= 3; j++) {
    repeatVal.push(j);
  }
}

console.log(repeatVal.join(" "));

// 3.2

const val2 = [];

for (let i = 0; i <= 2; i++) {
  //   console.log(i);
  for (let j = 0; j <= 4; j++) {
    val2.push(j);
  }
}

console.log(val2.join(" "));

// Bonus Exercise

let firstOutput = "";
let secondOutput = "";
for (let i = 1; i <= 5; i++) {
  if (i < 5) {
    firstOutput += i * 111;
    secondOutput += i - 1;
  }
  if (i === 5) {
    for (let j = 0; j < 2; j++) {
      secondOutput += secondOutput.substr(0, 5);
    }
  }
}
console.log(firstOutput.split("").join(" "));
console.log(secondOutput.split("").join(" "));
