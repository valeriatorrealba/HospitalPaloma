const medicos = [
    {
        name: "Dra. Callie Torres",
        specialty: "Ortopedia",
        years: 3
    },
    {
        name: "Dra. Arizona Robbins",
        specialty: "Genetista",
        years: 1
    },
    {
        name: "Dr. Federico Garcia",
        specialty: "Dentista",
        years: 8
    },
    {
        name: "Dra. Lexie Grahams",
        specialty: "Oftalmologia",
        years: 2
    },
]

// const services = document.getElementById("medical-equipment")

// medicos.forEach( medico => {
//     if (medico.years >= 2){
//         const lista = document.createElement("li")
//         lista.textContent = `${medico.name} - Especialidad: ${medico.specialty}`
//         services.appendChild(lista)
//     }
// })

const btn = document.querySelector("button");

    btn.addEventListener("click", () => {
        const services = document.getElementById("medical-equipment")

    medicos.forEach( medico => {
        if (medico.years >= 2){
            const lista = document.createElement("li")
            lista.textContent = `${medico.name} - Especialidad: ${medico.specialty}`
            services.appendChild(lista)
        }
    })
})

