// PROBLEM: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?n this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// EXAMPLES:
// makeNegative(1);    return -1
// makeNegative(-5);   return -5
// makeNegative(0);    return 0
// makeNegative(0.12); return -0.12

// SOLUTION BY SHABAB HUSSAIN:

function makeNegative(num) {
    num > 0 ? num *= -1 : num *= 1
    console.log(num)
    return (num)
}