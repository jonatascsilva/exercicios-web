const resultado = document.getElementById('resultado')

for (let i = 0; i <= 10; i++) {
    resultado.innerText += `
    Tabuada do ${i}
    `
    for (let j = 0; j <= 10; j++) {
        resultado.innerText += `${i} x ${j} = ${i * j}
        `
    }
}