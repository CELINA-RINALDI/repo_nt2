
  const series = [
    {nombre:"The Walking Dead", anioEstreno:2010},
    {nombre:"Friends", anioEstreno:1994},
    {nombre:"Stranger Things", anioEstreno:2016},
    {nombre:"La casa de papel", anioEstreno:2017},
    {nombre:"How I Met Your Mother", anioEstreno:2005 }
]
 
const copia = series.map(function(serie) {
   return `${serie.nombre} (${serie.anioEstreno})`
})
console.log(copia)
console.log(series)