const idade = parseInt(prompt("Digite sua idade: "))

if (idade >=0 && idade <= 12) {
    console.log(`Você tem ${idade} anos. É criança!`)
} else if (idade >=13 && idade <= 17) {
    console.log(`Você tem ${idade} anos. É adolescente!`)
} else if (idade >=18 && idade <= 59) {
    console.log(`Você tem ${idade} anos. É Adulto!`)
} else {
    console.log(`Você tem ${idade} anos. É idoso!`)
}