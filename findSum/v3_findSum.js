import data from './data.js'

/**
 * Status: PASS
 * Complexity: O(n)
 * Notes: So far this seems to be the most performant version, I think there
 * is still some room for improvement. I'm thinking some check before the while
 * loop begins could prove useful.
 */
 function findSum(arr, value) {
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    const sum = arr[start] + arr[end]

    if (sum === value) {
      return true
    } else if (sum > value) {
      end -= 1
    } else {
      start += 1
    }
  }

  return false
}

console.log(findSum(data, 32))
