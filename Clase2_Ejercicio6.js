const condiciones = [
    {condicion:"debe haber pelota",valor:true},
    {condicion:"equipo 1 debe tener 11 jugadores",valor:true},
    {condicion:"equipo 2 debe tener 11 jugadores",valor:false},
    {condicion:"todos los jugadores deben estar anotados",valor:true},
    {condicion:"las condiciones climaticas deben ser buenas",valor:false}
]

function expresadoEnEmojis(array) {
    const copia = condiciones.map(function(x) {
        return `Condicion(${x.valor ? "👍" : "👎"})`
     })
return copia
}

console.log(expresadoEnEmojis(condiciones))