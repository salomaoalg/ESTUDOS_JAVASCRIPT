/*let vetor = [10, 23, 11, 23, 98, 65, 10, 47, 56];


for(i = 0; i < vetor.length; i++){
    console.log(`A posicao ${i} tem o valor: ${vetor[i]}`)
}
*/
let num = [11, 53, 41, 63, 18, 75, 40, 27, 46];
for(let pos in num){
    console.log(`A posicao ${pos} tem o valor: ${num[pos]}`)
}

num.sort()
console.log(num)

let pos = num.indexOf(75)

if(pos > -1){
    console.log(`O elemento foi encontrado e esta na posicao? ${pos}`)
}
else{
    console.log(`O valor não foi encontrado!`)
}






