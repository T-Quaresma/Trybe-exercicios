const fs = require("fs");

fs.readFile("./produtos.json", "utf8", (err, data) => {
    if(err) {
        console.error("Error loading JSON", err);
    }

    const produtos = JSON.parse(data);
    
    console.log(`Quantidade de produtos é de: ${produtos.length}`);
    console.log("");
    
    
    const nomesProdutos = (object) => {
        let nomes = "";
        for (index = 0; index < object.length; index += 1) {   
            if (index < object.length - 1) {       
                nomes = nomes + object[index].nome + ", " + "\n";         
            } else {
                nomes = nomes + object[index].nome + "\n";
            }
        }
        return `Produtos:\n${nomes}`;
    }
    console.log("");
    
    console.log(nomesProdutos(produtos));
    
    console.log("");
    
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
        return `os produtos disponiveis são:\n ${disponiveis.join("\n")}\n e os indisponiveis são:\n ${indisponiveis.join("\n")}`
    }
    console.log("");
    
    console.log(disponibilidade(produtos));

    console.log("");
    
    const quantidade = (object) => {
        let quantidade = 0;
        let objects = []
        for (index = 0; index < object.length; index += 1) {         
            quantidade = quantidade + object[index].quantidade
             objects.push(`${object[index].nome} tem ${quantidade} produtos em estoque.`) 
             quantidade = 0;
        }
        return `Lista em estoque:\n${objects.join("\n")}`;
    }
    console.log("");
    
    console.log(quantidade(produtos));
    
    console.log("");
    

    function buscarProduto(nome) {
  //return produtos.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase()));

        
        for (index = 0; index < produtos.length; index += 1){
        produto = produtos[index].nome;
        if (produto === nome) {
            return produtos[index];
        }
        return null
    }
}

    console.log("");

    console.log(buscarProduto("Leite Integral"));

    console.log("");
    
    function produtosPromo(object) {
        promos = [];
        for(index = 0; index < object.length; index += 1) {
            if (object[index].promocao === true) {
                promos.push(object[index].nome);
            } 
        }
        return `Os produtos em promoção são:\n ${promos.join("\n")}`;
    }    

    console.log("");

    console.log(produtosPromo(produtos));
    
    console.log("");

    const produtosAlergicos = (object) => {
        alergicos = [];
        for(index = 0; index < object.length; index += 1) {
            if (object[index].alergias.length > 0) {
                alergicos.push(object[index].nome)
            }
        }
        return `Os produtos com chance de alergia/intolerância são:\n ${alergicos.join("\n")}`;
    }

    console.log("");

    console.log(produtosAlergicos(produtos));

    console.log("");

    function produtosVit(object) {
        pVitaminas = [];
        for(let index = 0; index < object.length; index += 1) {
            if (object[index].vitaminas.length > 0) {
                pVitaminas.push(object[index].nome);
            }
        }
        return `Os produtos que possuem vítaminas são:\n${pVitaminas.join("\n")}`;
    }
    
    console.log("");

    console.log(produtosVit(produtos));

    
    
    
    
    
})