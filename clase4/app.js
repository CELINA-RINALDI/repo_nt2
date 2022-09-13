var myVue = new Vue({
    el: '#app',
    data: {
        miTexto: "Hola",
        miArray: [1, 2, 4, 6, 3], 
        series: [
            {nombre: "GOT", id: 1, anio: 2011},
            {nombre: "TWD", id: 2, anio: 2010}
        ]
    },
    methods: {
        cambiarTexto(){
            this.miTexto = "Otro texto"
        },
        removeLast() {
            this.miArray.pop()
        }
    },
}) 