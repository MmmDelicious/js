
import gaussQ from "gauss-quadrature";




const a = 0
const b = 1
let m = 2
const a1 = Math.PI/2
const b1 = Math.PI/4
const n = 3
const eps  = 0.1
const func = (x) => {
    return Math.sqrt(Math.PI - Math.atan(1/(1 + x*x)))
}
const func2 = (x) => {
    return 1/(1+10*Math.pow(x,3))
}
const Rectangles = (func, a, b, eps,turn) => {
    const s = 1;

    let m = 2;
    let epsM = Number.MAX_VALUE;

  

    let valueI = 0;
    let valueINext = 0;
    if(turn == 'right')
        while (epsM > eps) {
        
                
            valueI = rightRectanglesGetResult(a, b, m, func);
     
            let nextM = 2 * m;

            valueINext = rightRectanglesGetResult(a, b, nextM, func);
            
            epsM = Math.abs(valueI - valueINext) / (Math.pow(2, s) - 1);

            m = nextM;
            valueI = valueINext;
      
    }
    if(turn == 'left')
        while (epsM > eps) {

        valueI = leftRectanglesGetResult(a, b, m, func);
       

        let nextM = 2 * m;

        valueINext = leftRectanglesGetResult(a, b, nextM, func);
    
        epsM = Math.abs(valueI - valueINext) / (Math.pow(2, s) - 1);

        m = nextM;
        valueI = valueINext;
  
}
    const result = valueI + eps;
    
    return result;
}

const rightRectanglesGetResult = (a, b, m, func) => {
    const h = (b - a) / m;
    let sum = 0;
    for (let i = 1; i <= m; i++) {
        let x = a + i * h;
        sum += h * func(x);
    }
    return sum;
}
const leftRectanglesGetResult = (a, b, m, func) => {
    const h = (b - a) / m;
    let sum = 0;
    for (let i = 0; i < m; i++) {
        let x = a + i * h;
        sum += h * func(x);
    }
    return sum;
}
console.log(`1. Значение интеграла правыми прямоугольниками: ${func.toString()} `);
const result1 = Rectangles(func,a1,b1,eps,'right')
console.log(result1);
console.log(`2. Значение интеграла левыми прямоугольниками:${func2.toString()} `);
const result2 = Rectangles(func2,a,b,eps,'left')
console.log(result2);
const gauss = (fn, n, a = -1, b = 1) => {
    const resultGauss = gaussQ(n, a, b);

    
    const odds = resultGauss[0];
    console.log(`Коэффициенты: ${odds} `);
    const nodes = resultGauss[1];
    console.log(`Узлы: ${nodes} `);
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += nodes[i] * fn(odds[i]);
    }

    return result;
}





console.log("1 Значение интеграла по квадратурной формуле Гаусса");
const result3 = gauss(func,n,a,b)
console.log(result3);



console.log("2 Значение интеграла по квадратурной формуле Гаусса");
const result4 = gauss(func2,n,a,b,)
console.log(result4);