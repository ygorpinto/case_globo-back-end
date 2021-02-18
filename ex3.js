const verifyProfit = valueDay => {  
    let totalProfit = 0
    let initialProfit = valueDay[0]
  
    for (i = 0; i < valueDay.length; i++) {
      if (valueDay[i] <= initialProfit){
        initialProfit = valueDay[i]
      } else {
        totalProfit = Math.max((valueDay[i] - initialProfit), totalProfit)
      }
    }
    if (valueDay.length <= 1) {
        return 0
    } else {
        return totalProfit
    }
  }

  const teste = [7,1,5,3,6,4];

  console.log(verifyProfit(teste));