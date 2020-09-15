let arrayTest = [1, 2, 3, 4, 33, 600, 450, 1000, 3,'A',String('JavaScript'),false];
let shuffleItems = arrayTest.sort(() => {
  return 0.5 - Math.random();
});
let res= arrayTest.join(", ");
console.log(res);
