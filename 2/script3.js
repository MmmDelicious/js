
let M = 'dekterev'.length
let K = 'yn'.length
let n = 'dekterevynolegovi4'.length
let final = []
let finalFinal = 0
finalSum = 0
let znam = 1

let a = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
let b = [0.2*n,0.3*M,0.5*K,0.6*n,0.7*M,K,0.8*n,1.2*K,1.3*M,n]
// let a = [-1,-0.5,0,0.5,1]
// let b = [0.3678,0.6065,1,1.6487,2.7183]
//let b = [1,2,3]
let N = a.length;
let fF = 0
let sudaPushim = [] 
// const mainArr = [f1,f2,f3] = [[1],[0,1],[0,0,1]] 
// const mainArr  = [[1,-1],[0,1,-1],[0,1,-2,1],[0,1,-3,3,-1],[0,1,-4,6,-4,1]] 
const mainArr  = [[1,-1],[0,1,-1],[0,0,1,-1],[0,0,0,1,-1],[0,0,0,0,1,-1]] 
let stolbik = []

const canvasPlot = document.getElementById('canvas')
const ctx = canvasPlot.getContext('2d')
const canvasPlot1 = document.getElementById('canvas1')
const ctx1 = canvasPlot.getContext('2d')



canvasPlot.style.display = 'none'
canvasPlot1.style.display = 'none'
const btn = document.querySelector('.btn')
const btn1 = document.querySelector('.btn1')












function transpose(matrix) {

  return matrix.map((col, i) => col.map((row, j) => matrix[j][i]))

}

function mult(matrix1, matrix2) {

  let multMatrix = []
  for (let i = 0; i < matrix1.length; i++) {
      multMatrix[i] = []

  }
  for (let i = 0; i < matrix2[0].length; i++) { //k
      for (let j = 0; j < matrix1.length; j++) { //i
          let currentSum = 0;
          for (let k = 0; k < matrix1[0].length; k++)
              currentSum += matrix1[j][k] * matrix2[k][i];//j
          multMatrix[j][i] = currentSum;
      }
  }

  return  multMatrix
}






























function transpose(matrix) {

  return matrix.map((col, i) => col.map((row, j) => matrix[j][i]))

}
createMatrix = (r,c) => {
  let matrix = []
  for(let i = 0; i < r; i++)
  matrix[i] = []
      

  for(let i = 0; i < r; i++)
      for(let j = 0; j<c; j++){
          matrix[i][j] = 0
  }
 
  return matrix
}
function mult(matrix1, matrix2) {

  let multMatrix = []
  for (let i = 0; i < matrix1.length; i++) {
      multMatrix[i] = []

  }
  for (let i = 0; i < matrix2[0].length; i++) { //k
      for (let j = 0; j < matrix1.length; j++) { //i
          let currentSum = 0;
          for (let k = 0; k < matrix1[0].length; k++)
              currentSum += matrix1[j][k] * matrix2[k][i];//j
          multMatrix[j][i] = currentSum;
      }
  }

  return  multMatrix
}

function solve(matrix,stolbik){
     
  let multMatrix = (mult(transpose(matrix),matrix))
  let finalMatrix = createMatrix(matrix.length,matrix[0].length)

  finalMatrix[0][0] = Math.sqrt(multMatrix[0][0])
 
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          if(i === 0 && j != 0){
              finalMatrix[i][j] = multMatrix[0][j] / finalMatrix[0][0]
          }
          else if(i === j && i != 0){
              let sum = 0
              for(let k = 0; k < i; k++){
                  sum += Math.pow(finalMatrix[k][i],2)
              }
              finalMatrix[i][j] = Math.sqrt(multMatrix[i][j] - sum)
          } 
          else if(j > i) {
              let sum = 0
              for(let k = 0; k < i; k++){
                  sum += finalMatrix[k][i]*finalMatrix[k][j] 
              }
              finalMatrix[i][j] = (multMatrix[i][j] - sum)/finalMatrix[i][i]
          }
      }
  }

  console.log(finalMatrix)
      let z = createMatrix(stolbik.length,1)
      let y = createMatrix(stolbik.length,1)

    let finalStolbik = (mult(transpose(matrix),stolbik))
    y[0][0] = finalStolbik[0][0] / finalMatrix[0][0]

    for (let i = 1; i < finalStolbik.length; i++) {
        let sum = 0
       for(let k = 0; k < i;k++){

          sum += finalMatrix[k][i]*y[k][0]
       }
       console.log(finalMatrix[i][i])
       y[i][0] = (finalStolbik[i][0]- sum) / finalMatrix[i][i]
      
  }

      z[z.length - 1][0] = y[y.length - 1][0] / finalMatrix[finalMatrix.length - 1][finalMatrix.length - 1]


      for(let i = finalStolbik.length - 2; i >= 0; i--){
          let sum = 0;
          for(let k = i + 1; k <= finalStolbik.length - 1; k++){
              sum += finalMatrix[i][k]*z[k][0]
          }
          z[i][0] = (y[i][0] - sum) / finalMatrix[i][i]
      }










      
      console.log(finalMatrix)
      console.log(y)
      console.log(z)

      console.log(finalStolbik)


  



   return {
       z,
       y
   }
}















// const mainArr = [f1,f2,f3,f4,f5] = [[1,-1],[0,1,-1],[0,1,-2,1],[0,1,-3,3,-1],[0,1,-4,6,-4,1]] 

for(let i = 0; i< mainArr.length; i++){
  stolbik[i] = []
  
}


console.log(mainArr)
const multNum = (arr) => {
   
  console.log(arr)
  finalSum = 0

for(let i = 0; i < mainArr.length; i++){
    final.fill(0)
    fF = 0
    
    for(let j = 0; j < arr.length; j++){
     
        final[j] = arr[j] * Math.pow(a[i],j) * b[i]
       
        fF += final[j]
        
    
    }


    finalSum += fF
    console.log(finalSum)
}

return finalSum
}
const matrix = []
    for(let i = 0; i < mainArr.length; i++){
        matrix[i] = []
        for(let j = 0; j < mainArr.length; j++)
       
        matrix[i][j] = 0
    }
const multArr = (arr1, arr2) => {
    
    const result = []
    
   
    finalSum = 0
    for(let k = 0; k < arr1.length + arr2.length - 1; k++){              
        result[k] = 0
         final[k] = 0
    }   
    for(let i = 0; i < arr1.length; i++)
        for(let j = 0; j< arr2.length; j++){
            result[i + j] += arr1[i] * arr2[j] 

        }   
      
        for(let i = 0; i < a.length; i++){
            final.fill(0)
            fF = 0
        
            for(let j = 0; j < result.length; j++){
             
                final[j] = result[j] * Math.pow(a[i],j)
               
      
            }
             fF = final.reduce((p,c) => p+c,finalFinal)
           
            finalSum+= fF
          
     
        }
       
        sudaPushim.push(finalSum)
        
      
        return finalSum
}

for(let i = 0; i < mainArr.length; i++){
    
        for(let j = 0; j < mainArr.length; j++){
            matrix[i][j] = multArr(mainArr[i],mainArr[j])
       
        }
        
        stolbik[i][0] =   multNum(mainArr[i])
        
    }
    
    console.log(matrix)


console.log(matrix)
console.log(stolbik)

const {z,y} = solve(matrix,stolbik)



console.log(z,y)


const showAnswer = () => {
    canvasPlot1.style.display = 'none'
    canvasPlot.style.display = 'block'
 
    function initData() {
        let pointsLength = 0;
        for (let x = 0.0; x <= 6; x += 0.1) {
          pointsLength++;
        }
        
        const delayBetweenPoints = 1;
        const previousY = (ctx) => ctx.index === 0
          ? ctx.chart.scales.y.getPixelForValue(100)
          : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
     
        return {
          x: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: NaN,
            delay(ctx) {
              if (ctx.type !== 'data' || ctx.xStarted) return 0;
              ctx.xStarted = true;
              return ctx.index * delayBetweenPoints;
            }
          },
          y: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: previousY,
            delay(ctx) {
              if (ctx.type !== 'data' || ctx.yStarted) return 0;
              ctx.yStarted = true;
              return ctx.index * delayBetweenPoints;
            }
          }
        };
      }
     
      function fillData(chart) {
        for (let x = 0.1; x <= 1; x += 0.1) {
          const f = chart.data.datasets[0].function;
          chart.data.labels.push(x.toFixed(2));
          chart.data.datasets[0].data.push(f(x).toFixed(2));
        }
        
      }
     
      function buildGraphic() {
        const animation = initData();
        const chart = new Chart(canvasPlot, {
          type: 'line',
          data: {
            labels: [],
            datasets: [{
              label: 'Graph',
              function: function(x) {
                
                 return z[0][0]+z[1][0]*x+z[2][0]*Math.pow(x,2)+z[3][0]*Math.pow(x,3)+z[4][0]*Math.pow(x,4)
               //return Math.sin(z[0][0])+Math.sin(2*((z[1][0]*x))+Math.cos(2*(z[2][0]*x)))
               //return 1*Math.sin(x)*Math.cos(x)*Math.sin(2 * x)*Math.cos(2 * x)
               //return x
            
              },
              data:[],
              borderColor: 'grey',
              
              fill: true
            }],},
     
          options: {
            animation,
            interaction: {intersect: false},
            plugins: {legend: true},
            scales: {x: {type: 'linear'}}
          }
        });
     
        fillData(chart);
        chart.update();
      }
      
      buildGraphic();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


btn.addEventListener(('click'),showAnswer)

