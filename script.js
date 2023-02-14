const date = new Date()
const fecha = document.querySelector("#fecha")
console.log(fecha)
fecha.innerHTML = `Hoy, ${date.toLocaleDateString()}, quiero decirte que te amo de aquí hasta el borde del universo`
