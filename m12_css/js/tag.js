const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        // Se o nome da tag recebedia existir aqui, passo o valor da cor específica
        // caso contrário, retorno o valor padrao #616161
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(tag => {
    const nomeDaTag = tag.tagName.toLowerCase()

    tag.style.borderColor = colors.get(nomeDaTag)

    // Se a tag NÃO possuir uma classe com o nome nolabel:
    // - Crio uma label na tag com o seu próprio nome
    // - Defino o background com a cor específica da tag
    // - Insiro a label antes do seu primeiro elemento filho eventualmente presente
    if (!tag.classList.contains('nolabel')) {
        const labelDaTag = document.createElement('label')
        labelDaTag.style.backgroundColor = colors.get(nomeDaTag)
        labelDaTag.innerHTML = nomeDaTag
        tag.insertBefore(labelDaTag, tag.childNodes[0])
    }
})