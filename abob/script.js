


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


const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));
function mult(matrix1, matrix2) {

    let multMatrix = []
    for (let i = 0; i < matrix1.length; i++) {
        multMatrix[i] = []

    }
    
    for (let i = 0; i < matrix2[0].length; i++) {
        for (let j = 0; j < matrix1.length; j++) { 
            let currentSum = 0;
            for (let k = 0; k < matrix1[0].length; k++){
               
                currentSum += matrix1[j][k] * matrix2[k][i];
            }
            multMatrix[j][i] = currentSum;
        }
    }

    return  multMatrix
}
function solve(matrix,stolbik){
     
    let multMatrix = (mult(transpose(matrix),matrix))
    let finalMatrix = createMatrix(matrix.length,matrix[0].length)
   
    finalMatrix[0][0] = +(Math.sqrt(matrix[0][0]))
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if(i === 0 && j != 0){
                finalMatrix[i][j] = matrix[0][j] / finalMatrix[0][0] 
            }
            else if(i === j && i != 0){
                let sum = 0
                for(let k = 0; k < i; k++){
                    sum += Math.pow(finalMatrix[k][i],2)
                }
                finalMatrix[i][j] = Math.sqrt(matrix[i][j] - sum)
            } 
            else if(j > i) {
                let sum = 0
                for(let k = 0; k < i; k++){
                    sum += finalMatrix[k][i]*finalMatrix[k][j] 
                }
                finalMatrix[i][j] = (matrix[i][j] - sum)/finalMatrix[i][i]
            }
        }
    }


        let x = createMatrix(3,1)
        let y = createMatrix(3,1)

      let finalStolbik = (mult(transpose(matrix),stolbik))
      y[0][0] = finalStolbik[0][0] / finalMatrix[0][0]

      for (let i = 1; i < finalStolbik.length; i++) {
          let sum = 0
         for(let k = 0; k < i;k++){

            sum += finalMatrix[k][i]*y[k][0]
         }
         y[i][0] = (finalStolbik[i][0]- sum) / finalMatrix[i][i]
        
    }

        x[x.length - 1][0] = y[y.length - 1][0] / finalMatrix[finalMatrix.length - 1][finalMatrix.length - 1]
        
      for (let i = finalStolbik.length - 2; i > 0; i--) {
        let sum = 0
       for(let k = i + 1; k < finalStolbik.length - 1;k--) {

          sum += finalMatrix[i][k]*x[k][0]
       }
       x[i][0] = (y[i][0] - sum) / finalMatrix[i][i]
      
  }
        console.log(y)
        console.log(x)

        console.log(finalStolbik)







    return finalMatrix
}

let matrix = [[-4,1,1],[1,-9,3],[1,2,-16]]
let stolbik = [[2],[5],[13]]



console.log(solve(matrix,stolbik))