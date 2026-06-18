let salario=Number (prompt("digite o valor bruto do salário: "));
let parcela=Number (prompt("digite o valor das parcelas: "));
let porcentagem = salario * 0.30
if(parcela<porcentagem){
    alert("Aprovado")
}
else{
    alert("Negado")
}