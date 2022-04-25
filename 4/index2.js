
let a = 1
let b = 2
let name1 = 1.5
let q1 = q2 = 0.7
let eps = 0.01

// let a1 = 2
// let b1 = 4
// let name2 = 2.2
// let q11 = q22 = 0.7
// let eps1 = 0.01



const chastnaya1x = (x = 0,y = 0) => {
    return 0
}
const chastnaya1y = (x = 0,y = 0) => {
    return (0.58*y)/Math.pow(y*y+1,2/3)
}
const chastnaya2x = (x = 0,y = 0) => {
    return -Math.pow((y+4)/x,1/3)/(3*x)
}

const chastnaya2y = (x = 0,y = 0) => {
    return 1/(3*x*Math.pow((y+4)/x,2/3))
}


const funcX = (x = 0,y = 0) => {
    return Math.pow(((Math.pow(y,2))+1)/name1,(1/3))
}




const funcY = (x = 0,y = 0) => {
    return Math.pow((y + 4)/x,1/3)
}



// const funcX1 = (x = 0,y = 0) => {
//     return (name2 * x*x - 5*x+ 1)/y
// }




// const funcY1 = (x = 0,y = 0) => {
//     return Math.sqrt(x + 3 * Math.log10(x))
// }






// const chastnaya11x = (x = 0,y = 0) => {
//     return (4.4*x-5)/y
// }
// const chastnaya11y = (x = 0,y = 0) => {
//     return (-2.2*(x*x) + 5 * x - 1)/(y*y)
// }
// const chastnaya22x = (x = 0,y = 0) => {
//     return ((3/x)+1)/(2*Math.sqrt(x+3*Math.log10(x)))
// }

// const chastnaya22y = (x = 0,y = 0) => {
//     return 0
// }







// console.log(((3/2)+1)/(2*Math.sqrt(2+3*Math.log10(2))))
// console.log(((4.4*2-5)/12))














const calc = (a,b) => {
    let fabs = Math.abs(chastnaya1x(a,b)) + Math.abs(chastnaya2x(a,b))
    let sabs = Math.abs(chastnaya1y(a,b)) + Math.abs(chastnaya2y(a,b))
    
    if(fabs < 1 && sabs < 1){
   console.log("ВСЁ НОРМАЛЬНО, ЗАПУСКАЮ",fabs,sabs)
   return true
    }
    return false
}
const calc1 = (a,b) => {
    console.log(a,b)
    let fabs = Math.abs(chastnaya11x(a,b)) + Math.abs(chastnaya22x(a,b))
    let sabs = Math.abs(chastnaya11y(a,b)) + Math.abs(chastnaya22y(a,b))
    console.log("ВСЁ ПЛОХО, ЗАПУСКАЮ",fabs,sabs)
    if(fabs < 1 && sabs < 1){
   console.log("ВСЁ НОРМАЛЬНО, ЗАПУСКАЮ",fabs,sabs)
   return true
    }
    return false
}
 const bigSolve = () => {


    let currentX = 1.5
    let currentY = 1.5
    let nextX ,nextY
    let sum = Number.MAX_VALUE
    let module1,module2
   
    if(calc(a,b)){
        console.log("ПОШЕЛ ПРОЦЕСС")
      while(sum >= (1 - q1) / q1 * eps){
          nextX = funcX(currentX,currentY)
          nextY = funcY(currentX,currentY)
          console.log(nextX,nextY)
            module1 = Math.abs(nextX-currentX)
            module2 = Math.abs(nextY-currentY)
            console.log(module1,module2)
        sum = module1 + module2
        console.log(sum)
        currentX = nextX
        currentY = nextY
       
      }
    //   return{
    //       nextX,nextY
    //   }
    document.body.style.fontSize = "30px"
    document.body.innerHTML +=  `Координаты точки:x:${nextX.toFixed(3)},y:${nextY.toFixed(3)}`

    } else {
        return "сумма модулей меньше нуля"
    }

    

 }



console.log(bigSolve())