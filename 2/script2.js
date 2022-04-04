
let P = 'dekterev'.length
let G = 'yn'.length
let o = 'dekterevynolegovi4'.length

let x = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]
let y = [0.2*o,0.3*P,0.5*G,0.6*o,0.7*P,G,0.8*o,1.2*G,1.3*P,o]
let h = []
let d = []
let c = []

for(let j = 0; j < x.length - 1; j++){
    h[j] = 0
    c[j] = 0
}

for(let j = 0; j < x.length - 1; j++){
    h[j] = +(x[j + 1] - x[j]).toFixed(4)
}

for(let j = 0; j < y.length; j++){
    d[j] = 0
}
for(let j = 1; j < y.length; j++){
    d[j] = (2 * (y[j] - y[j - 1]))/h[j - 1] - d[j - 1]
 

}

for(let j = 0; j < x.length - 1; j++){
    c[j] = (d[j + 1] - d[j]) / 2*h[j]
}







console.log(h)
console.log(d)
console.log(c)

document.body.style.backgroundImage = `url("https://www.rabstol.net/uploads/gallery/main/613/rabstol_net_dwayne_johnson_10.jpg")`;

for(let i = 0; i < 5; i++){
   
    
    let div = document.createElement('otvet')
    if(i == 0)
    div.innerHTML += 'Спайс2  <br>'
    div.innerHTML += `${c[i]== 0? c[i]:c[i].toFixed(2)}(x - ${x[i]})^2 + ${d[i] == 0? d[i]:d[i].toFixed(2)}(x - ${x[i]}) + ${y[i]}, при х ∈ [${x[i]},${x[i + 1]}],`
    div.innerHTML += '<br>'
    
   
    div.className += 'otvet'
    div.style.fontSize = '28px';
    div.style.fontStyle = 'italic';
    div.style.fontStyle = 'bold';
    document.body.append(div)

   
}