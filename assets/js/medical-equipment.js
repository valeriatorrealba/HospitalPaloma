// 1. Manejo de Objetos JSON
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

// Destructuring para mostrar información específica
const infoDoctor = (medico) => {
    const {
        name,
        specialty,
        years,
        more: { contact, schedule }
    } = medico

    console.log(`Nombre: ${name}\nEspecialidad: ${specialty}\nAños de Experiencia: ${years} años`)
    console.log("Contacto:", contact)
    console.log("Horario disponible:", schedule)
}

infoDoctor(medicos[0]) //cambia la posicion del medico a mostrar

const btn = document.querySelector("button")
    btn.addEventListener("click", () => {
        const services = document.getElementById("medical-equipment")

    medicos.forEach( medico => {
        if (medico.years >= 1){
            const { name, specialty, years, more } = medico
            const { contact, schedule } = more
            const lista = document.createElement("li")
            lista.textContent = `Nombre: ${name} - Especialidad: ${specialty} - Años de Experiencia: ${years} - Contacto: ${contact.phone} - Horario disponible: ${schedule.map(s => `${s.day} (${s.time})`).join(", ")}`
            services.appendChild(lista)
        }
    })
})

// 2. Operaciones con JSON

// Clonación
const medicosClone = structuredClone(medicos) //crea un clon perfecto con todos los datos
const medicoModificado = medicosClone.find(medico => medico.name === "Dra. Callie Torres")

if (medicoModificado) {
    medicoModificado.years = 5
    medicoModificado.more.contact.phone = "+569 48926139"
}

console.log("Lista original de médicos:", medicos)
console.log("Lista modificada de médicos:", medicosClone)

// Merge
const medicalServices = {
    Ortopedia: true,
    Genetista: false,
    Dentista: true,
    Oftalmologia:true
}

const medicoMerge = {...medicos, medicalServices}
console.log ("Clonada: ",medicoMerge)

// Recorrido y stringify
const availableMedicos = medicos.filter((medico) => medico.available)
availableMedicos.forEach((medico) => console.log(medico.name))
console.log("JSON Stringify:", JSON.stringify(availableMedicos, null, 2))

// 3.Implementación de Estructuras de Datos

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

// Operaciones con el arreglo de doctores
function addDoctor(doctor) {
    doctors.push(doctor)
}
function removeDoctor(id) {
    const index = doctors.findIndex((doctor) => doctor.id === id)
    if (index !== -1) {
        doctors.splice(index, 1)
    }
}

function findDoctor(name) {
    return doctors.find((doctor) => doctor.name === name)
}

addDoctor({ id: 5, name: "Dr. Derek Shepherd", specialty: "Neurocirugía", years: 10, available: true })
addDoctor({ id: 6, name: "Dr. Richard Webber", specialty: "Cirugía General", years: 25, available: true })
removeDoctor(3)
console.log("Doctores actuales:", doctors)

const doctor = findDoctor("Dra. Callie Torres")
console.log("Doctor buscado: ", doctor)

//Pilas
class CitaPaciente {
    constructor(){
        this.stack = []
    }
    addCita(cita) {
        this.stack.push(cita)
    }

    lastCita() {
        return this.stack.pop()
    }

    nextCita() {
        return this.stack[this.stack.length - 1]
    }
}
const appointments = new CitaPaciente()
appointments.addCita({ patient: "Juan Pérez", date: "2024-12-02", time: "10:00" })
appointments.addCita({ patient: "Ana López", date: "2024-12-02", time: "15:30" })

console.log("Última cita agendada:", appointments.lastCita())
console.log("Próxima cita a atender:", appointments.nextCita())

//Colas
class Paciente{
    constructor(){
        this.queue = []
    }
    addPatient(patient) {
        this.queue.push(patient)
    }

    attendPatient() {
        return this.queue.shift()
    }

    nextPatient() {
        return this.queue[0]
    }
}

const paciente = new Paciente()
paciente.addPatient({ name: "Carlos Medina", priority: "Alta" })
paciente.addPatient({ name: "Lucía Gómez", priority: "Media" })

console.log("Paciente en atención:", paciente.attendPatient())
console.log("Siguiente paciente:", paciente.nextPatient())

// 4. Programación de Algoritmos

//buscar
const search = (name) => doctors.find((doctor) => doctor.name === name)
console.log("Buscar doctor:", search("Dra. Lexie Grahams"))

//ordenar
const sort = () =>
    doctors.sort((a, b) => b.years - a.years)
    sort()
    console.log("Doctores ordenados por experiencia:", doctors)

// const btn = document.querySelector("button")

//     btn.addEventListener("click", () => {
//         const services = document.getElementById("medical-equipment")

//     medicos.forEach( medico => {
//         if (medico.years >= 2){
//             const lista = document.createElement("li")
//             lista.textContent = `${medico.name} - Especialidad: ${medico.specialty}`
//             services.appendChild(lista)
//         }
//     })
// })

