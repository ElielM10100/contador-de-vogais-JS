function contador_de_vogais(nome_da_pessoa){
    const vogais = "aeiouáâàãéêíóôõú"
    const consoantes = "bcdfghjklmnpqrstvxywz"
    
    let contador_vogais = 0
    let contador_consoantes = 0
    let contador_palavras = 1
    
    for (let letra of nome_da_pessoa){
        if(vogais.includes(letra)){
            contador_vogais++
        }else if(consoantes.includes(letra)){
            contador_consoantes++
        }else if(letra === " "){
            contador_palavras++
        }
    }
    return `${nome_da_pessoa} tem ${contador_vogais} vogais`
}    
const nome_da_pessoa = prompt("Digite o seu nome: ")

alert(contador_de_vogais(nome_da_pessoa))

