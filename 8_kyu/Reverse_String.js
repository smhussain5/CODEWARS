// PROBLEM: Complete the solution so that it reverses the string passed into it.
// EXAMPLES:
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// SOLUTION BY SHABAB HUSSAIN:

function solution(str){
  str = str.split('')
  str = str.reverse()
  str = str.join('')
  console.log(str)
  return str
}

solution('world')