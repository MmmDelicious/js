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




function matrixOut(matrix) {
    let div = document.createElement('div')

    div.className = "matrix"
    div.style.fontSize = "24px"
    div.style.width = "auto"
    div.style.height = "auto"
    div.style.display = "flex"
    //div.style.border = "2px solid black";
    // div.style.marginBottom = "50px"
    // div.style.marginRight= "50px"

    if(matrix[0].length == 0){
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            div.innerHTML += matrix[i][j] + ' '
        }
        div.innerHTML += '<br>'
    }
    div.innerHTML += '<br>'
} else {
    for (let i = 0; i < matrix.length; i++) {
       {
            div.innerHTML += matrix[i] + ' '
        }
        div.innerHTML += '<br>'
    }
    div.innerHTML += '<br>'
}
    document.body.append(div)

}

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


function minus(matrix1,matrix2){
    let minusMatrix = createMatrix(matrix1.length,matrix1[0].length)

    for (let i = 0; i < matrix1.length; i++) { 
        for (let j = 0; j < matrix2[0].length; j++) { 
            minusMatrix[i][j] = +(matrix1[i][j] - matrix2[i][j]).toFixed(2)
        }
    }
    return minusMatrix
}
function plus(matrix1,matrix2){
    let minusMatrix = createMatrix(matrix1.length,matrix1[0].length)

    for (let i = 0; i < matrix1.length; i++) { 
        for (let j = 0; j < matrix2[0].length; j++) { 
            minusMatrix[i][j] = +(matrix1[i][j] + matrix2[i][j]).toFixed(2)
        }
    }
    return minusMatrix
}
function solve(matrix,stolbik){
     
    let multMatrix = (mult(transpose(matrix),matrix))
    let finalMatrix = createMatrix(matrix.length,matrix[0].length)

    finalMatrix[0][0] = +(Math.sqrt(multMatrix[0][0])).toFixed(2)
   
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if(i === 0 && j != 0){
                finalMatrix[i][j] = +(multMatrix[0][j] / finalMatrix[0][0]).toFixed(2)
            }
            else if(i === j && i != 0){
                let sum = 0
                for(let k = 0; k < i; k++){
                    sum += Math.pow(finalMatrix[k][i],2)
                }
                finalMatrix[i][j] = +(Math.sqrt(multMatrix[i][j] - sum)).toFixed(2)
            } 
            else if(j > i) {
                let sum = 0
                for(let k = 0; k < i; k++){
                    sum += finalMatrix[k][i]*finalMatrix[k][j] 
                }
                finalMatrix[i][j] = +((multMatrix[i][j] - sum)/finalMatrix[i][i]).toFixed(2)
            }
        }
    }

    console.log(finalMatrix)
        let x = createMatrix(stolbik.length,1)
        let y = createMatrix(stolbik.length,1)

      let finalStolbik = (mult(transpose(matrix),stolbik))
      y[0][0] = +(finalStolbik[0][0] / finalMatrix[0][0]).toFixed(2)

      for (let i = 1; i < finalStolbik.length; i++) {
          let sum = 0
         for(let k = 0; k < i;k++){

            sum += finalMatrix[k][i]*y[k][0]
         }
         console.log(finalMatrix[i][i])
         y[i][0] = +((finalStolbik[i][0]- sum) / finalMatrix[i][i]).toFixed(2)
        
    }

        x[x.length - 1][0] = +(y[y.length - 1][0] / finalMatrix[finalMatrix.length - 1][finalMatrix.length - 1]).toFixed(2)


        for(let i = finalStolbik.length - 2; i >= 0; i--){
            let sum = 0;
            for(let k = i + 1; k <= finalStolbik.length - 1; k++){
                sum += finalMatrix[i][k]*x[k][0]
            }
            x[i][0] = +((y[i][0] - sum) / finalMatrix[i][i]).toFixed(2)
        }










        
        console.log(finalMatrix)
        console.log(y)
        console.log(x)

        console.log(finalStolbik)


    



     return {
         x,
         y
     }
}
function holetsky(matrix,finalMatrix) {

    let coefficientP = []
    let coefficientC = []


    for (let i = 0; i < matrix.length; i++) {
        coefficientP[i] = []
        coefficientC[i] = []
        for (let j = 0; j < matrix.length; j++) {
            coefficientP[i][j] = 0;
            coefficientC[i][j] = 0;
        }
    }


    let matrixTranspose = transpose(matrix)

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (j === 0) {
                coefficientP[i][0] = matrix[i][0];
            } else if (j <= i) {
                let sum = 0;
                for (let k = 0; k <= j - 1; k++) {
                    sum += coefficientP[i][k] * coefficientC[k][j];
                }

                coefficientP[i][j] = +(matrix[i][j] - sum).toFixed(2);
            }

            //Считаем С
            if (i === 0) {
                coefficientC[0][j] = matrix[0][j] / coefficientP[0][0];
            } else if (j >= i) {
                let sum = 0;
                for (let k = 0; k <= i - 1; k++) {
                    sum += coefficientP[i][k] * coefficientC[k][j];
                }

                coefficientC[i][j] = +((matrix[i][j] - sum) / coefficientP[i][i]).toFixed(2);
            }

        }

    }




   
    let x = [], y = []
    for (let i = 0; i < finalMatrix[0].length; i++) {
        x[i] = y[i] = 0
    }

    y[0] = finalMatrix[0][0] / coefficientP[0][0];
    for (let i = 1; i < matrix.length; i++) {
        let sum = 0;
        for (let k = 0; k <= i - 1; k++) {

            sum += coefficientP[i][k] * y[k];
        }
        y[i] = +((finalMatrix[0][i] - sum) / coefficientP[i][i]).toFixed(2);
    }

    let n = matrix.length - 1;

    x[n] = y[n];
 
    for (let i = n - 1; i >= 0; i--) {
        let sum = 0;
        for (let k = i + 1; k <= n; k++) {
            sum += coefficientC[i][k] * x[k];
        }
        x[i] = +(y[i] - sum).toFixed(2);
    }

    return {
        x,
        y
    }
 
}

function myMax(matrix){
    let arr = []
    let sum
    for(let i = 0; i < matrix.length; i++){
        sum = 0
        for(let j = 0; j < matrix[0].length;j++){
            sum += Math.abs(matrix[i][j])
        } 
        arr.push(sum)
    }

    return Math.max(...arr)
}

function yakobi(matrix,stolbik,eps){

    for(let i = 0; i < matrix.length; i++){
        stolbik[i][0] /= matrix[i][i]
        for(let j = 0; j < matrix[0].length;j++){
            if(i!=j){
           
            matrix[i][j] /= -matrix[i][i]
             
            }
        } 
    }
    for(let i = 0; i < matrix.length; i++){
        
        for(let j = 0; j < matrix[0].length;j++){
            if(i==j)
            matrix[i][j] = 0
             
            
        } 
    }
    console.log(stolbik)
    
    console.log(matrix)
    let max = myMax(matrix)
    let end = (max / (1 - max))*eps
    console.log(max)
    console.log(end)
    let startStolbik = createMatrix(stolbik.length,stolbik[0].length)
    let iterator = 0;
    while(max > end && iterator < 16){
       
    let currentStolbik = plus(mult(matrix,startStolbik),stolbik)
    max = +(myMax(minus(currentStolbik,startStolbik))).toFixed(2)
    startStolbik = currentStolbik
    
    iterator++
    console.log(max)
    }
    console.log(startStolbik)
    console.log(matrix)
    console.log(stolbik)


    return startStolbik
}






 let matrix = [[-4, 1, 1], [1, -9, 3], [1, 2, -16]]
 let stolbik = [[2],[5],[13]]

//let matrix = [[37, 2, 1.25,1,2], [4, 138, 1,0.5,1], [1,2,-49,3,4],[1,0.4,4,58,4],[-1,2,3,8,-69]]
//let stolbik = [[1],[2],[3],[4],[5]]
// let invalid = [[1,2,3,4,5]]




//Для Якоби
//matrixOut(matrix)
// let eps = 0.02
//matrixOut(yakobi(matrix,stolbik,eps))


//Квадратный корень
// matrixOut(solve(matrix,stolbik).x)
// matrixOut(solve(matrix,stolbik).y)
 



//Холецкий
//   matrixOut(holetsky(matrix,invalid).x)
//   matrixOut(holetsky(matrix,invalid).y)