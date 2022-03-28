

let sum = []
let result = []
let znam = 1
let a = [1,4,5,6]
let N = a.length;
for(let k = 0; k < a.length; k++){              
    sum[k] = 0
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
    console.log(i)
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
       //2[n],i,j)
        sum[n + m] += s1[m] * s2[n]

      
    }
   
}
//console.log(result,j)

for(let k = 0; k < sum.length; k++){      
    
    sum[k] =  result[k] /znam;
  
}   

    

let currentResult = [...s1]
s1 = result
result = currentResult


//console.log(result)


}
console.log(znam)
console.log(s1)
console.log(sum)
znam = 1

}
