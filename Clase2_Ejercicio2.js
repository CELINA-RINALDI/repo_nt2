const series = [
    {nombre:"The Walking Dead", anioEstreno:2010},
    {nombre:"Friends", anioEstreno:1994},
    {nombre:"Stranger Things", anioEstreno:2016},
    {nombre:"La casa de papel", anioEstreno:2017},
    {nombre:"How I Met Your Mother", anioEstreno:2005 }
]

function ascendente() {
    series.sort((a, b) =>{ return a.anioEstreno - b.anioEstreno });
    console.log(series)
}

ascendente()

function descendente() {
    series.sort((a, b) =>{ return b.anioEstreno - a.anioEstreno });
    console.log(series)
}

descendente()