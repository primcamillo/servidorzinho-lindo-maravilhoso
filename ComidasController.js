const repository = require('./ComidasRepository')

const getAll = () => {
    return repository.pratos
}
const addPost = (comida) => {
    comida.id = Math.random().toString(36).substr(-8)
    getAll().pratosFavoritos.push(comida)
}
const remove = (id) => {
let comidasRestantes = getAll()
getAll().pratosFavoritos = comidasRestantes.pratosFavoritos
return comida.id !== id
    
}
module.exports = {
    comidas, getAll, addPost, remove
}