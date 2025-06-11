const fs = require("fs");

fs.readFile("./produtos.json", "utf8", (err, data) => {
    if(err) {
        console.error("Error loading JSON", err);
    }

    const produtos = JSON.parse(data);


    console.log(`Quantidade de produtos é de: ${produtos.length}`);
    
    const nomesProdutos = (object) => {
        let nomes = "";
        for (index = 0; index < object.length; index += 1) {   
            if (index < object.length - 1) {       
                nomes = nomes + object[index].nome + ", ";         
            } else {
                nomes = nomes + object[index].nome;
            }
        }
        return nomes
    }
    
    console.log(nomesProdutos(produtos));
    
    const disponibilidade = (object) => {
        let disponiveis = [];
        let indisponiveis = [];
        for (index = 0; index < object.length; index += 1) {
            if (object[index].disponivel === true) {
                disponiveis.push(object[index].nome)
            } else {
                indisponiveis.push(object[index].nome)
            }        
        }
        return `os produtos disponiveis são ${disponiveis.join(", ")} e os indisponiveis são ${indisponiveis}`
    }

    console.log(disponibilidade(produtos));

    const quantidade = (object) => {
        let quantidade = 0;
        for (index = 0; index < object.length; index += 1) {
            quantidade = quantidade + object[index].quantidade
        }
        return `Existem ${quantidade} produtos em estoque no momento`
    }
    
    console.log(quantidade(produtos));
    
})