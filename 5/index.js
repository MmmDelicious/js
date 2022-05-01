let N = 'ДектеревЯнОлегович1234567'.length


let x = 0.234*N
let deltaX = 3 * 0.001
let a0 = 1.234
let deltaA0 = 0.001
let a5 = -2.345
let deltaA5 = N*0.0001
let e = 0.987




let derivativecf = [5*a0*Math.pow(x,4),4*0.387*Math.pow(x,3),3*1.4789*Math.pow(x,2),2*1.0098*Math.pow(x,1),1.222*1,a5*0]
let derivative = [5*Math.pow(x,4),4*Math.pow(x,3),3*Math.pow(x,2),2*Math.pow(x,1),1,0]
let coefficients = [a0,0.387,1.4789,1.0098,1.222,a5]
let delta = [deltaA0,0,0,0,0,deltaA5]

document.body.style.fontSize = "32px"
document.body.style.font = "bold"
document.body.style.fontStyle= "italic"



let proverka = (number = 0) => {


        
       let lastDigit = number.toString().split('');
        let m = 0;
        let numberArray =  number.toString().split('');
     
        for(let i = 0; i< numberArray.length;i++){
            let MEGAPOGNUMBER = i
            if(numberArray[i] == '.') numberArray.splice(MEGAPOGNUMBER,1)
            numberArray[i] = Number(numberArray[i])
        }
       
        let pow = -1
    for(let i = 0; i< lastDigit.length; i++){
        if(lastDigit[i] == '.') continue
        if(Number(lastDigit[i]) == 0 && Number(lastDigit[i - 1]) != 0 && i == lastDigit.length - 1){
            m++
        } 
        let iterator = 0
        while(lastDigit[iterator] != '.'){
            pow++
            iterator++
        }
    
        for(let i = 0; i < lastDigit.length;i++){
            if(lastDigit[i] == '.') lastDigit.slice(i)
            lastDigit[i] = 1/2 * 10 ** pow
            pow--
        }
       
      
        if( m == 0){
            console.log(`все значащие`)
        }else{
            console.log(`значащих нет`)
        }
        iterator = lastDigit.length - 1
        let pog = pogGorner2()
        while(pog > lastDigit[iterator]){
            numberArray.splice(iterator,1)
            iterator--
        }
        document.body.innerHTML += "<br>"
        document.body.innerHTML += `Верные цифры ${numberArray}`






    return lastDigit
    
}


}



const pogGorner2 = () => {
    let sum = 0

    let pow = coefficients.length - 1
    for(let i = 0; i < coefficients.length; i++){
        sum += coefficients[i] * x ** pow * (pow*(deltaX / x) + (delta[i] / coefficients[i]))
        console.log(sum)
        pow--
    }
    return sum
}






const defaultPog = () =>{
    
   
    let result = Array(derivative.length).fill(0);
    let result2 = Array(derivative.length).fill(0);
    for(let i = 0; i < derivative.length;i++){
        result[i] = Math.abs(derivative[i]) * deltaX
        
        result2[i] = Math.abs(coefficients[i]) * result[i] + Math.abs(derivative[i]) * delta[i]
        
    }
    let deltaSum = result2.reduce((p,n) => p + n,0)
    return deltaSum
        
    
}


console.log(defaultPog())














const pogGorner = () => {
    let result = Array(coefficients.length).fill(0);
    for(let i = 0; i< derivativecf.length; i++){
        if(i == 0){
            result[i] = delta[0]
         
        } else{ 
            result[i] = result[i - 1] * Math.abs(x) + Math.abs(coefficients[i]) * delta[i] 
    
        }
       
    }
    return result[ derivativecf.length - 1]
}

 console.log(pogGorner())





const gorner = () => {
    let result = Array(coefficients.length).fill(0);
    for(let i = 0; i < coefficients.length; i++){
        if(i == 0){
            result[i] = coefficients[0]
        } else{ 
            result[i] = result[i - 1] * x + coefficients[i]
        }
        
    }
    return result[coefficients.length - 1]
}
document.body.innerHTML= `Схема горнера ${gorner()}`
document.body.innerHTML += "<br>"
 console.log(gorner())


const div = (e) => {
    let result = Array(coefficients.length - 1).fill(0);
    for(let i = 0; i < coefficients.length - 1; i++){
        if(i == 0){
            result[i] = coefficients[0]
        } else{ 
            result[i] = result[i - 1] * e + coefficients[i]
        }
    }
    
    return result
}
console.log(proverka(gorner()))


console.log(div(e))









document.body.innerHTML += "<br>"


document.body.innerHTML += `Погрешность Горнера ${pogGorner2()}`
document.body.innerHTML += "<br>"
document.body.innerHTML += `Погрешность без Горнера ${defaultPog()}`



