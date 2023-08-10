// PROBLEM: Given an array of integers your solution should find the smallest integer.
// EXAMPLES:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

// SOLUTION BY SHABAB HUSSAIN:

class SmallestIntegerFinder {
    findSmallestInt(args) {
      args = args.sort(function(a, b){return a - b})
      args = args[0]
      console.log(args)
      return args
    }
}

myArray = [34, -345, -1, 100]
findSmallestInt(myArray)