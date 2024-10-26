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
    console.log(`Produto: ${nome} cadastrado com sucesso!\n`)
}
cadastrar_produtos(1, 'camisa', 'camisas', 19.90, 50, 'estoque 01')
cadastrar_produtos(2, 'calça', 'calças', 39.90, 34, 'estoque 02')
cadastrar_produtos(3, 'sapato', 'sapatos', 79.90, 23, 'estoque 03')
// console.log(produtos)

function busca_por_categoria(arg){
    let resultado = produtos.find(item => item.categoria === arg)
    setTimeout(() => {
        console.log(`Buscando por: ${arg}`)
    }, 1000)
    console.log(`Buscando por: ${arg}`)
    console.log(resultado)
}
busca_por_categoria('sapato')
