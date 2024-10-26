let produtos = [];

function cadastrar_produtos(id, nome, categoria, preco, quantidade, localizacao){
    let novo_produto = {
        id: id,
        nome: nome,
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        localizacao: localizacao
    }
    produtos.push(novo_produto)
    // console.log(`Produto: ${nome} cadastrado com sucesso!`)
}
cadastrar_produtos(1, 'camisa azul', 'camisas', 19.90, 50, 'prateleira de cima')
cadastrar_produtos(2, 'camisa vermelha', 'camisas', 22.50, 40, 'prateleira de cima')
cadastrar_produtos(3, 'camisa amarela', 'camisas', 9.90, 20, 'prateleira de cima')
cadastrar_produtos(4, 'calça moletom', 'calças', 39.90, 34, 'prateleira de baixo')
cadastrar_produtos(5, 'calça jaens', 'calças', 69.90, 49, 'prateleira de baixo')
cadastrar_produtos(6, 'sapato', 'sapatos', 79.90, 23, 'prateleira do meio')


// Se o parâmetro for igual a 'sim' ele mostrara todos produtos em estoque, se estiver vazio ele não mostrara nada
function consultar_produtos(txt){
    if(txt === "sim"){
        for(index of produtos){
            console.log(index)
        }
    }
}
consultar_produtos()


// Aqui nos parâmetros ele buscara pelo nome de categoria
function busca_por_categoria(arg){

    let resultado = produtos.filter(item => item.categoria === arg)

    setTimeout(() => {
        console.log(`\nBuscando por: ${arg}`)
    }, 1000)
    
    setTimeout(() => {
        console.log('PRODUTO ENCONTRADO!')
        for(index of resultado){
            console.log(index)
        }
    }, 2000)
}
busca_por_categoria('camisas')
