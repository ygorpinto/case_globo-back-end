const sumVerif = (nums, number) => {
    let result = nums.find((item) => {
        for (i = 0; i < nums.length; i++) {
            if (item === number - nums[i]) {
                return true
            }
        }
    })
    if (nums.indexOf(result) === -1) {
        return "não encontrado"
    }
    else 
    {
        return [nums.indexOf(result), nums.indexOf(number - result)]
    }
}

const teste = [2, 7, 11, 15]

console.log(sumVerif(teste,9));
