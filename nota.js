const nota = parseInt(prompt("Digite uma nota: "))

if(nota >= 7) {
    console.log(`Nota: ${nota}. Aprovado!`)
} else if (nota >= 5) {
   console.log(`Nota: ${nota}. Recuperação!`)
} else {
    console.log(`Nota: ${nota}. Reprovado!`)
}
