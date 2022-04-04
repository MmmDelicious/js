
let M = 'dekterev'.length
let K = 'yn'.length
let n = 'dekterevynolegovi4'.length
let sum = []
let finalSum = []
let result = []
let znam = 1
let a = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]
let b = [0.2*n,0.3*M,0.5*K,0.6*n,0.7*M,K,0.8*n,1.2*K,1.3*M,n]
let N = a.length;
for(let k = 0; k < a.length; k++){              
    sum[k] = 0
    finalSum[k] = 0
}   



//  for(let k = 0; k< m.length+n.length - 1; k++){      

//     arr[i] = 0;

// }       
            
// for(let i = 0; i < m.length; i++){
//     for(let j = 0; j < n.length; j++){
       
//         arr[i + j] += m[i] * n[j]
//     }
// }


for(let i = 0; i < N; i++){
    
    let s1 = []
    let s2 = []
    let result = []
    for(let j = 0; j < N - 2; j++){
        if(j == 0 ){
            for(let h = 0; h < N ; h++){
                if(h != i){
                znam *= a[i] - a[h] 
             
                }
            }
        }
       
        if(j == 0 && j != i && i!=  j + 1){
           // console.log('1')
             s1 = [-a[j],1]
             s2 = [-a[j + 1],1]
        } 
        else if(j == i&& j == 0){
           // console.log('2')
             s1 = [-a[j + 1],1]
             s2 = [-a[j + 2],1]
        }
        else if(i == j + 1&& j == 0){
            //console.log('3')
             s1 = [-a[j],1]
             s2 = [-a[j + 2],1]
        } 

        else if(j < i - 1){
          //  console.log('4')
            s2 = [-a[j + 1],1]

        }
        else if (j >= i - 1){
            //console.log('5')
            s2 = [-a[j + 2],1]
        }
    
 for(let k = 0; k < s1.length + s2.length - 1; k++){      

    result[k] = 0;
    
}   


for(let m = 0; m < s1.length; m++){
    
    for(let n = 0; n < s2.length; n++){
       
        result[n + m] += s1[m] * s2[n] 

        sum[n + m] += s1[m] * s2[n]

      
    }
   
}
//console.log(result,j)

for(let k = 0; k < sum.length; k++){      
   
    sum[k] =  result[k] / znam * b[i];
    
}   
 


let currentResult = s1
s1 = result
result = currentResult


//console.log(result)


}
for(let k = 0; k < sum.length; k++){      
   
    finalSum[k] += sum[k]
    
}   

console.log(znam)
console.log(s1)
console.log(sum)
console.log(finalSum)
znam = 1

}

for(let i = 0; i < finalSum.length; i++){
   
    
    let div = document.createElement('otvet1')
    if(i == 0)
    div.innerHTML += 'Спайс  <br>'
    if(finalSum[i + 1] < 0 && i != finalSum.length - 1){div.innerHTML += `${finalSum[i].toFixed(2)}x^${i} `}
    
    else if(finalSum[i + 1] > 0 && i != finalSum.length - 1){div.innerHTML += `${finalSum[i].toFixed(2)}x^${i} +`}
    
   
    else if(i == finalSum.length - 1 && finalSum[i] <= 0){div.innerHTML += `${finalSum[i].toFixed(2)}x^${i}<br><br><br><br>`}

    div.className += 'otvet1'
    div.style.fontSize = '28px';
    div.style.fontStyle = 'italic';
    document.body.append(div)

  
}


