let mascotas = ["perros", "gatos", "conejos", "peces"]
 
function mayus(array) {
    const arrayMayus = array.map((x) => x.toUpperCase())
    return arrayMayus
}
console.log(mascotas)
console.log(mayus(mascotas))