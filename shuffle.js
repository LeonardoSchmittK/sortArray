let originalItems = [
  1,
  2,
  4,
  33,
  600,
  450,
  1000,
  2,
  "A",
  String("JavaScript"),
  false,
];
let itemsToShuffle = [...originalItems];

let shuffleItems = itemsToShuffle.sort(() => {
  return 0.5 - Math.random();
});

let res = itemsToShuffle.join(", ");

console.log(res, "\n", originalItems);
