/* 3.1) Generar una aplicacion donde podamos poner a correr a 3 competidores(darles un nombre) y calcular como queda el podio de competicion.
    La accion de correr de cada uno tendra que tardar un tiempo aleatorio entre 3 y 10 segundos.
    Como no podemos saber cuanto tardará cada uno, tendremos que hacer uso de Promesas y manejarlas para informar el podio.
    Modificar la aplicacion para una maraton de 20 personas.
    
    Nota: no se olviden de generar un commit en sus repositorio por cada ejercicio que finalizan. */
    function generateRandomInt(){
        return Math.floor((Math.random() * (3000-10000)) + 10000);
    }
const pilotos = [] 
function generarPilotos(cantidadPilotos){
    for (let index = 1; index < cantidadPilotos-1; index++) {
        pilotos.push({
            promesa: new Promise((resolve, reject) => { 
                setTimeout(() => {
               resolve(`piloto ${index}`)
              }, y=generateRandomInt())
              }),
              nombre: `piloto ${index}`,
              tiempo: y })
        
    }
    return pilotos;
}

function correr(pilots) {
 Promise.all(pilots).then(x => {
   console.log('RESULTADOS DE LA CARRERA:')
   ordenar(x)
   mostrar(x)
});
}

function ordenar(x) {
    return x.sort((a, b) =>{ return a.tiempo - b.tiempo })
}

function mostrar(x) {
    let i = 1;
    x.forEach(p => {
     console.log(`${i}. ${p.nombre}, que tardo ${p.tiempo} milisengundos`)
     i++
    });
}

veintePilotos = generarPilotos(20)
correr(veintePilotos)