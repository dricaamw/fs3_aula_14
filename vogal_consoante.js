const vogal = prompt("Digite uma letra: ")
const novaVogal = vogal.toLowerCase()

if (novaVogal === "a" || novaVogal === "e" || novaVogal === "i" || novaVogal === "o" || novaVogal === "u") {
    console.log(`${novaVogal} é uma vogal!`)
} else if(novaVogal !== "string") {
    console.log(`Digite uma letra`)
}else {
    console.log(`${novaVogal} é uma consoante!`)
} 
