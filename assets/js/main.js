//Evaluación grupal M3
const medicos = [
    {
        name: "Dra. Callie Torres",
        specialty: "Ortopedia",
        years: 3,
        available: true,
        more:{
            schedule: [
                {
                    day: "Lunes", time: "9:00-13:00"
                },
                {
                    day:"Jueves", time:"15:00-19:00"
                }
            ],
            contact:{
                phone: "+569 1234 5678",
                email: "c.torres@hospitalpaloma.cl"
            }
        }
    },
    {
        name: "Dra. Arizona Robbins",
        specialty: "Genetista",
        years: 1,
        available: false,
        more:{
            schedule: [
                {
                    day: "martes", time: "9:00-13:00"
                },
                {
                    day:"viernes", time:"15:00-19:00"
                }
            ],
            contact:{
                phone: "+569 3124 5678",
                email: "a.robbins@hospitalpaloma.cl"
            }
        }
    },
    {
        name: "Dr. Federico Garcia",
        specialty: "Dentista",
        years: 8,
        available: true,
        more:{
            schedule: [
                {
                    day: "Lunes", time: "9:00-13:00"
                },
                {
                    day:"Martes", time:"15:00-19:00"
                },
            ],
            contact:{
                phone: "+569 5678 1234",
                email: "f.garcia@hospitalpaloma.cl"
            }
        }
    },
    {
        name: "Dra. Lexie Grahams",
        specialty: "Oftalmologia",
        years: 2,
        available: true,
        more:{
            schedule: [
                {
                    day:"Martes", time:"15:00-19:00"
                },
                {
                    day: "Viernes", time: "9:00-13:00"
                }
            ],
            contact:{
                phone: "+569 5478 1234",
                email: "l.grahams@hospitalpaloma.cl"
            }
        }
    },
]

async function fetchMedicos() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(medicos), 1000)
    })
}

document.addEventListener("DOMContentLoaded", async () => {
    const doctorList = document.getElementById("doctor-list")
    const doctorSelect = document.getElementById("doctor")
    const searchInput = document.getElementById("search-input")
    const searchButton = document.getElementById("search-button")
    const citasForm = document.getElementById("citas-form")
    const citasList = document.getElementById("citas-list")

    const doctors = await fetchMedicos()

    function renderDoctors(filter = "") {
        doctorList.innerHTML = ""
        doctorSelect.innerHTML = ""
        const filteredDoctors = doctors.filter((doctor) =>
            doctor.specialty.toLowerCase().includes(filter.toLowerCase())
        )
        filteredDoctors.forEach((doctor) => {
            const li = document.createElement("li")
            li.className = "list-group-item"
            li.textContent = `${doctor.name} - ${doctor.specialty}`
            doctorList.appendChild(li)

            const option = document.createElement("option")
            option.value = doctor.name
            option.textContent = doctor.name
            doctorSelect.appendChild(option)
        })
    }

    renderDoctors()

    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value
        renderDoctors(searchTerm)
    })

    citasForm.addEventListener("submit", (e) => {
        e.preventDefault()

        const paciente = document.getElementById("paciente").value
        const fecha = document.getElementById("fecha").value
        const doctor = document.getElementById("doctor").value

        const citaItem = document.createElement("li")
        citaItem.className = "list-group-item"
        citaItem.textContent = `Paciente: ${paciente}, Fecha: ${fecha}, Doctor: ${doctor}`

        citasList.appendChild(citaItem)

        citasForm.reset()
    })
})




// 1. Manipulación de Datos con JSON y Simulación de API REST
//Utiliza JSON para manejar la información de doctores, servicios médicos, y citas.
// const medicos = [
//     {
//         name: "Dra. Callie Torres",
//         specialty: "Ortopedia",
//         years: 3,
//         available: true,
//         more:{
//             schedule: [
//                 {
//                     day: "Lunes", time: "9:00-13:00"
//                 },
//                 {
//                     day:"Jueves", time:"15:00-19:00"
//                 }
//             ],
//             contact:{
//                 phone: "+569 1234 5678",
//                 email: "c.torres@hospitalpaloma.cl"
//             }
//         }
//     },
//     {
//         name: "Dra. Arizona Robbins",
//         specialty: "Genetista",
//         years: 1,
//         available: false,
//         more:{
//             schedule: [
//                 {
//                     day: "martes", time: "9:00-13:00"
//                 },
//                 {
//                     day:"viernes", time:"15:00-19:00"
//                 }
//             ],
//             contact:{
//                 phone: "+569 3124 5678",
//                 email: "a.robbins@hospitalpaloma.cl"
//             }
//         }
//     },
//     {
//         name: "Dr. Federico Garcia",
//         specialty: "Dentista",
//         years: 8,
//         available: true,
//         more:{
//             schedule: [
//                 {
//                     day: "Lunes", time: "9:00-13:00"
//                 },
//                 {
//                     day:"Martes", time:"15:00-19:00"
//                 },
//             ],
//             contact:{
//                 phone: "+569 5678 1234",
//                 email: "f.garcia@hospitalpaloma.cl"
//             }
//         }
//     },
//     {
//         name: "Dra. Lexie Grahams",
//         specialty: "Oftalmologia",
//         years: 2,
//         available: true,
//         more:{
//             schedule: [
//                 {
//                     day:"Martes", time:"15:00-19:00"
//                 },
//                 {
//                     day: "Viernes", time: "9:00-13:00"
//                 }
//             ],
//             contact:{
//                 phone: "+569 5478 1234",
//                 email: "l.grahams@hospitalpaloma.cl"
//             }
//         }
//     },
// ]

// Simula la obtención de datos desde una API REST y carga dinámicamente la
//información en la interfaz.
// async function fetchMedicos() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(medicos), 1000)
//     })
// }

// fetchMedicos().then((data) => console.log("Médicos cargados:", data))

// Realiza operaciones de clonación, fusión (merge), y recorrido de los datos JSON.
const medicosClone = structuredClone(medicos)
const mergedMedicos = { ...medicosClone, additionalInfo: { hospital: "Hospital Paloma" } }
console.log("Merged Médicos:", mergedMedicos)

const availableMedicos = medicos.filter((medico) => medico.available)
availableMedicos.forEach((medico) => console.log(medico.name))

//2. Implementación de Algoritmos y Estructuras de Datos
//Implementa algoritmos de búsqueda y ordenamiento para gestionar los datos de los doctores.

const doctors = [
    {
        id: 1,
        name: "Dra. Callie Torres",
        specialty: "Ortopedia",
        years: 3,
        available: true
    },
    {
        id: 2,
        name: "Dra. Arizona Robbins",
        specialty: "Genetista",
        years: 1,
        available: false
    },
    {
        id: 3,
        name: "Dr. Federico Garcia",
        specialty: "Dentista",
        years: 8,
        available: true
    },
    {
        id: 4,
        name: "Dra. Lexie Grahams",
        specialty: "Oftalmología",
        years: 2,
        available: true
    }
]

function search(specialty) {
    return doctors.filter((doctor) => doctor.specialty === specialty)
}

function sort() {
    return doctors.sort((a, b) => b.years - a.years)
}

console.log("Buscar doctor por especialidad:", search("Ortopedia"))
console.log("Doctores ordenados por experiencia:", sort())

// Utiliza estructuras de datos como listas, pilas o colas para gestionar las citas de los pacientes, implementando operaciones de agregar, eliminar y gestionar citas.

class CitaPaciente {
    constructor() {
        this.stack = []
    }

    addCita(cita) {
        this.stack.push(cita)
    }

    removeCita() {
        return this.stack.pop()
    }

    getCitas() {
        return this.stack
    }
}

const citas = new CitaPaciente()
citas.addCita({ patient: "Carlos Medina", date: "2024-12-01", doctor: "Dra. Callie Torres" })
citas.addCita({ patient: "Lucía Gómez", date: "2024-12-02", doctor: "Dr. Federico Garcia" })
console.log("Citas actuales:", citas.getCitas())
console.log("Cita eliminada:", citas.removeCita())

//3. Programación Funcional
//Implementa funciones avanzadas de JavaScript funcional, como currying, composición de funciones, y recursión para el manejo de datos de los doctores y pacientes.
//Ejemplo: uso de currying para calcular costos de servicios médicos basados en cantidad de consultas.

const serviceCost = (cost) => (numConsultation) => cost * numConsultation
const Orthopedic = serviceCost(50000)
console.log("El Valor por 3 consultas de Ortopedicas:", Orthopedic(3))

//4. Programación Orientada a Objetos
//Utiliza POO para estructurar el proyecto:
//Crea una clase Doctor con subclases como Cirujano o Pediatra, aplicando encapsulación, herencia, y polimorfismo.
//Implementa métodos para calcular costos de consulta, gestionar disponibilidad, etc.

class Doctor {
    constructor(name, specialty, years, available) {
        this.name = name
        this.specialty = specialty
        this.years = years
        this.available = available
    }

    consultation(costo) {
        return costo + this.years * 1000
    }
}

class Cirujano extends Doctor {
    constructor(name, years, available) {
        super(name, "Cirugía", years, available)
    }
}

const cirujano = new Cirujano("Dr. Derek Shepherd", 10, true)
console.log("El valor de consulta de cirugia:", cirujano.consultation(50000))

//5. Programación Asíncrona y Eventos
//Integra programación asíncrona utilizando async/await y promesas para la simulación de un registro de citas.
//Implementa event listeners para capturar eventos del usuario, como la confirmación de una cita o la solicitud de información de un doctor.

async function registrarCita(cita) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ success: true, cita }), 2000)
    })
}

document.querySelector("button").addEventListener("click", async () => {
    const cita = { patient: "Alejandro Gómez", date: "2024-12-03", doctor: "Dra. Callie Torres" }
    const response = await registrarCita(cita)
    console.log("Cita registrada:", response)
})