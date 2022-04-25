let a = 3.5
let b = 0.55
let a1 = 2.1
let b1= 0.12
let eps = 0.0001
let muzhiki = [2,0.1]
let muzhiki1 = [2]

document.body.style.fontSize = "30px"


const pervoobraznaya = (x) => {
    return Math.pow(x,5) - a * x + b
}
const proizvodnaya = (x) => {
    return 5*Math.pow(x,4) - a
}
const vtorayaProizvodnaya = (x) => {
    return 20*Math.pow(x,3)
}

const pervoobraznaya1 = (x) => {
    return Math.pow(x,7) - a1 * x - b1
}
const proizvodnaya1 = (x) => {
    return 7*Math.pow(x,6) - a1
}
const vtorayaProizvodnaya1 = (x) => {
    return 42*Math.pow(x,5)
}



const calc = (x) => {
    
    return pervoobraznaya1(x) * vtorayaProizvodnaya1(x) > 0 ? true : false
}


const bigSolve = (eps,muzhiki) => {

    console.log(muzhiki)
    let nextX = 0
    
    let answer = []
    for(let i = 0; i < muzhiki.length;i++){
    if(calc(muzhiki[i])){
        let module = Number.MAX_VALUE
        while(module > eps){
            nextX = muzhiki[i] - pervoobraznaya1(muzhiki[i]) / proizvodnaya1(muzhiki[i])
            module = Math.abs(nextX - muzhiki[i])
            muzhiki[i] = nextX
            console.log(`Модуль ${module}, nextX ${nextX} nextX ${muzhiki}`)
        }
       answer.push(nextX)
    } else {
        console.log(`${i + 1 } произведение меньше нуля`)
    }
   
    }
    for(let i = 0; i< answer.length;i++)
    document.body.innerHTML +=  `Цифра ${i}:${answer[i].toFixed(4)}`
    return answer
}

console.log(bigSolve(eps,muzhiki1))