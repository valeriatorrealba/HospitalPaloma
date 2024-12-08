// 1. Programación Funcional en JavaScript

// Currying para calcular el costo total de los serviciosImplementa una función que use currying para calcular el costo total de los servicios de
//un paciente en función del número de consultas realizadas y el precio de cada consulta.
const calcularCosto = (precioPorConsulta) => (numeroDeConsultas) => precioPorConsulta * numeroDeConsultas
const costoConsulta = calcularCosto(20000)
console.log("Costo total:", costoConsulta(5))

// Usa la función flecha para simplificar la sintaxis en una función que calcule el tiempo
//promedio de espera de los pacientes.
const tiempoPromedioEspera = (esperas) => esperas.reduce((acc, tiempo) => acc + tiempo, 0) / esperas.length
console.log("Tiempo promedio de espera:", tiempoPromedioEspera([15, 20, 10]))

// Implementa la recursión para calcular de forma recursiva el total de horas de consulta
//de un doctor a lo largo de la semana.
const horasTotales = (horas, index = 0) => index < horas.length ? horas[index] + horasTotales(horas, index + 1) : 0
console.log("Horas totales:", horasTotales([4, 5, 6, 3, 2]))

// Integra composición de funciones para aplicar descuentos a los costos de consultas
//en base a la cantidad de consultas realizadas.
const aplicarDescuento = (costo) => (porcentajeDescuento) => costo - (costo * porcentajeDescuento / 100)
const descuentoPorCantidad = (costo, cantidad) => cantidad > 5 ? aplicarDescuento(costo)(10) : costo
console.log("Costo con descuento:", descuentoPorCantidad(100000, 6))

// 2. Programación Orientada a Eventos y Programación Asíncrona

// Implementa un listener para capturar el envío del formulario y muestra un
//mensaje de confirmación.
const formulario = document.getElementById("formulario-contacto")
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("Formulario enviado")
    alert("Gracias por contactarnos.")
})

// Dispara un evento personalizado que simule la llegada de un nuevo paciente,
//mostrando una notificación en la página.
const nuevoPacienteEvento = new Event("nuevoPaciente")
document.addEventListener("nuevoPaciente", () => {
    console.log("Nuevo paciente ha llegado.")
    alert("¡Nuevo paciente registrado!")
})

setTimeout(() => {
    document.dispatchEvent(nuevoPacienteEvento)
}, 2000)

// Implementa una función async/await para simular una llamada a una API REST que
//obtenga los datos de los doctores. Usa Promise para manejar los casos de éxito o
//fallo.
async function obtenerDatosDoctores() {
    try {
        const respuesta = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ success: true, data: [{ nombre: "Dr. Juan" }, { nombre: "Dra. Ana" }] })
            }, 1500)
        })
        console.log("Datos obtenidos:", respuesta.data)
    } catch (error) {
        console.error("Error al obtener datos:", error)
    }
}
obtenerDatosDoctores()

// 3. Programación Orientada a Objetos en JavaScript
// - Implementa una clase Doctor con las propiedades nombre, especialidad, y años
// de experiencia.
// - Añade un método para mostrar la información de cada doctor y otro para calcular
// el total de pacientes atendidos por el doctor.

// - Crea una subclase de Doctor, por ejemplo Cirujano, que extienda las
// funcionalidades de la clase base.
// - Implementa el encapsulamiento en la clase, protegiendo la propiedad de años de
// experiencia mediante un getter y un setter.
// - Usa el polimorfismo para sobrescribir un método en la subclase Cirujano que calcule
// el número de operaciones realizadas en lugar de consultas.

class Doctor {
    constructor(nombre, especialidad, aniosExperiencia) {
        this.nombre = nombre
        this.especialidad = especialidad
        this._aniosExperiencia = aniosExperiencia
    }

    get aniosExperiencia() {
        return this._aniosExperiencia
    }

    set aniosExperiencia(anios) {
        if (anios >= 0) {
            this._aniosExperiencia = anios
        }
    }

    mostrarInformacion() {
        return `Nombre: ${this.nombre}, Especialidad: ${this.especialidad}, Años de Experiencia: ${this._aniosExperiencia}`
    }

    calcularPacientesAtendidos(dias) {
        return dias * 5 
    }
}
class Cirujano extends Doctor {
    constructor(nombre, especialidad, aniosExperiencia, operaciones) {
        super(nombre, especialidad, aniosExperiencia)
        this.operaciones = operaciones
    }

    calcularPacientesAtendidos() {
        return `Operaciones realizadas: ${this.operaciones}`
    }
}

const doctor1 = new Doctor("Dr. Smith", "Cardiología", 10)
console.log(doctor1.mostrarInformacion())

doctor1.aniosExperiencia = 12
console.log("Años actualizados:", doctor1.aniosExperiencia)

const cirujano1 = new Cirujano("Dra. Grey", "Cirugía General", 15, 200)
console.log(cirujano1.calcularPacientesAtendidos())
