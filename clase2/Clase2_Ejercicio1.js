
const condiciones = [
    {condicion:"debe haber pelota",valor:true},
    {condicion:"equipo 1 debe tener 11 jugadores",valor:true},
    {condicion:"equipo 2 debe tener 11 jugadores",valor:false},
    {condicion:"todos los jugadores deben estar anotados",valor:true},
    {condicion:"las condiciones climaticas deben ser buenas",valor:false}
]

function partidoEnCondiciones() {
    const resultado = condiciones.filter(condicion => !condicion.valor)
    console.log("No se juega porque...")
   resultado.forEach(elem => {
    console.log(elem.condicion)
   })
}
partidoEnCondiciones()