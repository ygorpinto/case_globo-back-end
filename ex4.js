const waterRetention = (arr) => {
    const area = arr.length
    if (area < 2) {
      return 0
    }
  
    let left = []
    let right = []
    left[0] = arr[0]
    right[area - 1] = arr[area - 1]
    
    for (i = 1; i < area; i++) {
      left[i] = Math.max(left[i - 1], arr[i])
      right[area - i - 1] = Math.max(right[area - i], arr[area - i - 1])
    }
  
    let result = 0
    for (i = 0; i < area; i++) {
      result += Math.min(left[i], right[i]) - arr[i]
    }
    return result
}

const teste = [0,1,0,2,1,0,1,3,2,1,2,1]

console.log(waterRetention(teste));