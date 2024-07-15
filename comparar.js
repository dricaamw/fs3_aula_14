const num1 = parseInt(prompt("Digite o primeiro número: "))
const num2 = parseInt(prompt("Digite o segundo número: "))
const num3 = parseInt(prompt("Digite o terceiro número: "))

if(num1 > num2 && num1 > num3) {
    console.log(`O ${num1} é maior!`)
} else if (num2 > num3 && num2 > num1 ) {
   console.log(`O ${num2} é maior!`)
} else {
    console.log(`O ${num3} é maior!`)
}

//ou 

let maiorNum = num1

if (num2 > num1) {
    maiorNum = num2
}
if (num3 > num2) {
     maiorNum = num3
 }
 
 console.log(`${maiorNum}`)