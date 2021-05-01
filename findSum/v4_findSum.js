import data from './data.js'

/**
 * Status: PASS
 * Time Complexity: O(n)
 * Notes: Building off of v3, I feel like this is in a much better place than
 * where we started. I feel satisfied with this solution.
 *
 * We could add some logic similar to `sumOutOfBounds` in the event that the
 * sum of arr[0] and arr[1], or arr[n-1] and arr[n] is the value. This would
 * achieve a time complexity of O(1) for truthy circumstances.
 */
 function sumOutOfBounds(arr, start, end, sum) {
  const assertions = [
    arr[start] + arr[start+1] <= sum,
    arr[end-1] + arr[end] >= sum,
  ]

  return assertions.some(val => !val)
}

function findSum(arr, value) {
  let start = 0
  let end = arr.length - 1

  if (sumOutOfBounds(arr, start, end, value)) {
    return false
  }

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
