/* 3.1) Generar una aplicacion donde podamos poner a correr a 3 competidores(darles un nombre) y calcular como queda el podio de competicion.
    La accion de correr de cada uno tendra que tardar un tiempo aleatorio entre 3 y 10 segundos.
    Como no podemos saber cuanto tardará cada uno, tendremos que hacer uso de Promesas y manejarlas para informar el podio.
    Modificar la aplicacion para una maraton de 20 personas.
    
    Nota: no se olviden de generar un commit en sus repositorio por cada ejercicio que finalizan. */
    function generateRandomInt(){
        return Math.floor((Math.random() * (20000-10000)) + 10000);
    } 

const verstappen = {
    promesa: new Promise((resolve, reject) => { 
        setTimeout(() => {
       resolve('Verstappen')
      }, generateRandomInt())
      }), 
      nombre : "Verstappen" }

const hamilton = {
    promesa: new Promise((resolve, reject) => { 
        setTimeout(() => {
       resolve('Hamilton')
      }, generateRandomInt())
      }), 
      nombre: "Hamilton" };

const leclerc = {
    promesa: new Promise((resolve, reject) => { 
        setTimeout(() => {
       resolve('Leclerc')
      }, generateRandomInt())
      }),
      nombre: "Leclerc" };

const pilotos = [verstappen, hamilton, leclerc]

function correr(pilotos) {
    const copia = pilotos
    const copiaPromesas = pilotos.promesa;
    Promise.race(copiaPromesas).then((value) => {
     console.log(value);
    });
}

correr(pilots)