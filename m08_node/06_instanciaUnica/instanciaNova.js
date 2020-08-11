// Uma factory retorna novo objeto
// Uso isso para driblar o cache do node
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}