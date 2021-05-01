import data from './data.js'

/**
 * Status: PASS
 * Complexity: O(n2)
 * Notes: This technically passes, but if the value is high it becomes
 * a very expensive operation. Another naive approach to build off of.
 */
function findSum(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      const result = arr[i] + arr[j]
      if (result === value) {
        return true
      }

      if (result > value) {
        break
      }
    }
  }

  return false
}

console.log(findSum(data, 32))
