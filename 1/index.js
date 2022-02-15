



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

    return matrix = multMatrix
}


function holetsky(matrix) {

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




    let finalMatrix = [[2, 5, 13]]
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
    console.log(n)
    for (let i = n - 1; i >= 0; i--) {
        let sum = 0;
        for (let k = i + 1; k <= n; k++) {
            sum += coefficientC[i][k] * x[k];
        }
        x[i] = +(y[i] - sum).toFixed(2);
    }
    console.log(x)
    console.log(y)
    console.log(coefficientP)
    console.log(coefficientC)
    matrixOut(coefficientP)
    matrixOut(coefficientC)
    matrixOut(x)
    matrixOut(y)
}





let matrix = [[-4, 1, 1], [1, -9, 3], [1, 2, -16]]
matrixOut(matrix)
let transposeMatrix = transpose(matrix)
matrixOut(transposeMatrix)

// matrixOut(matrix)
// mult(transposeMatrix,matrix)
// matrixOut(matrix)
holetsky(matrix)

