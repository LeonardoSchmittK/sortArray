var nums = [12,44,3,222,3,66,4,0];

let descendingSort = nums.sort(function (a, b) {
 return a-b;
});

console.log(descendingSort);