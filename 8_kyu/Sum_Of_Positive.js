// PROBLEM:You get an array of numbers, return the sum of all of the positives ones.
// EXAMPLES: 
// [1,-4,7,12] => 1 + 7 + 12 = 20

// SOLUTION BY SHABAB HUSSAIN:

arr = [-1,-2,-3,-4,-5]

function positiveSum(arr) {
    return arr.filter(i => i > 0).reduce((a, b) => a + b, 0)
}

console.log(positiveSum(arr))