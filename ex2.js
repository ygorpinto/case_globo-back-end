const verifyBrackets = brackets => {
    const exemple = [['(', ')'], ['[', ']'], ['{', '}'] ];
    let result = [];
    let check = true;

    brackets.split('').forEach(c => {
        exemple.forEach(b => {
            if(c == b[0]) {
                result.push(b[0])
            }
            else if (c == b[1]) {
                if(result.pop() !== b[0]){
                    check = false;
                }
            }
        })
    })

    if(check && result.length === 0) {
        return "Sim";
      }
      else {
        return "Não";
      }
}


const teste = "[{]"

console.log(verifyBrackets(teste))