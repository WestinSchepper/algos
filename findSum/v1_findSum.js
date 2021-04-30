import data from './data.js'

/**
 * Status: FAIL
 * Complexity: O(n)
 * Notes: This is the naive approach that passes the example found in the README.
 * Step one was to build something that passed those. Let's iterare.
 */
function findSum(arr, value) {
  for (let i = 1; i <= arr.length; i++) {
    const prev = arr[i-1]
    const curr = arr[i]

    if (prev + curr === value) {
      return true
    }

    if (i === arr.length) {
      return false
    }
  }
}

console.log(findSum(data, 32))
