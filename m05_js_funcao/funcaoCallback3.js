// Exemplo de callback no browser
// Quando clicar (em qualquer lugar) na página web, irá disparar a função callback
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('Você clicou...')
}