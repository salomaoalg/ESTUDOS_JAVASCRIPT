
let pessoa = {nome: 'Aline', 
idade:26, cidade: 'Prudente',
sexo: 'm',
peso: 65,
engordar(p = 0){
    console.log("Está engordando")
    this.peso += p;
 }
} 

pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`)