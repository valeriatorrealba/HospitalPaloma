# Hospital Paloma

**Hospital** es un sitio web diseñado para que los pacientes puedan conocer a los profesionales de la salud, así como obtener información sobre su ubicación en caso de emergencias.

## Instrucciones para Visualizar el Proyecto
1. Clonar el repositorio:
```bash
git clone https://github.com/valeriatorrealba/HospitalPaloma.git
```

2. Abre el proyecto en Visual Studio Code.
3. Inicia Live server (si no lo tienes lo puedes instalar)
4. Accede al index.html desde tu navegador

``` bash
http://127.0.0.1:5500/index.html
``` 

## Estructura de carpetas y archivos
``` bash
Hospital/
│
├── assets/
│   ├── css/
│   │   ├── main.css 
│   │   └── main.css.map
│   ├── img/
│   │   ├── favicon.png  
│   │   ├── logo.png
│   │   └── paciente1.jpg
│   │
│   ├── js/
│   │   └── script.js    
│   │
│   ├── screenshot/
│   │   └──     
│   │
│   └── Sass/
│       ├── abstrats/ 
│       │   ├── _mixins.scss  
│       │   └── _variables.scss
│       ├── base/   
│       │   └── _normalize.scss
│       ├── components/   
│       │   └── _buttons.scss
│       ├── layout/   
│       │   ├── _footer.scss
│       │   └── _header.scss
│       ├── pages/   
│       │   ├── _contact.scss
│       │   ├── _home.scss
│       │   └── _medicalEquipment.scss
│       ├── themes/   
│       │   └── _default.scss
│       ├── vendors/ 
│       │   └── _bootstrap.scss 
│       └──  main.scss   
│
├── index.html                
├── equipo-medico.html            
├── contacto.html 
├── package-lock.json
├── package.json
├── README.md 
├── LICENSE
└── .gitignore
```

## Estructura del Proyecto
- **Home** La página principal del sitio proporciona una introducción y visión general de los servicios ofrecidos. Está diseñada para captar la atención de los usuarios y guiarlos hacia información adicional sobre el equipo médico y formas de contacto. También puede incluir secciones destacadas como testimonios, especialidades o servicios médicos.
- **Equipo médico** Esta página muestra detalles sobre el equipo médico, incluyendo perfiles de los profesionales de salud, sus especialidades. Facilita a los usuarios conocer al equipo, generando confianza y transparencia sobre quiénes brindan los servicios.
- **Contacto** La página de contacto permite a los usuarios comunicarse con el equipo mediante un formulario sencillo. Incluye campos básicos como nombre, correo electrónico, mensaje y un botón para enviar la información. El formulario es ideal para consultas generales, solicitudes de información o preguntas sobre los servicios ofrecidos.

## Tecnologías Usadas
- **HTML5**
- **CSS3**
- **SASS**
- **BOOTSTRAP**

## Modularización de Estilos y Media Queries
Para facilitar el mantenimiento del proyecto, los estilos CSS se modularizaron en archivos parciales usando SASS. Esto permite mantener cada sección (como el header, el footer, equipo medico) en archivos separados, haciéndolo más organizado y eficiente. Las media queries se colocaron en cada archivo parcial correspondiente, de modo que los ajustes de diseño específicos de cada componente se aplican únicamente donde se necesitan.

## Estructura de SASS
La estructura de archivos SASS fue organizada de la siguiente manera:

- main.scss: Archivo principal que importa todos los parciales.
- _variables.scss: Contiene las variables globales como colores, facilitando su modificación en un solo lugar.
- _header.scss, _footer.scss, _main.scss: Cada sección principal de la página tiene su propio archivo parcial, donde se definen sus estilos específicos.

## Metodología BEM
Se aplicó la metodología BEM (Bloque-Elemento-Modificador) para nombrar las clases CSS, asegurando una estructura clara y legible. Esta convención de nombres permite que el código sea más escalable y fácil de entender, ya que cada clase sigue una jerarquía lógica y se organiza de acuerdo con los elementos y sus modificaciones.

## Integración de Bootstrap y Modificaciones con SASS
Bootstrap se integró al proyecto como base para una estructura rápida y responsive. A través de SASS, se personalizaron algunas variables de Bootstrap para que se ajusten al diseño general, como colores y espaciados. Las modificaciones se realizaron en el archivo _bootstrap.scss, donde se importaron los componentes necesarios de Bootstrap, optimizando el peso final del CSS y ajustando los estilos al diseño deseado.

## Integración de Prompts y Validación de Datos
En el proyecto se utilizaron prompts para interactuar con el usuario y obtener datos necesarios.

## Event Loop
El event loop es un mecanismo que se se encarga de gestionar la gestión de tareas asíncronas, mientras mantiene la capacidad de respuesta del programa. El event loop interactúa con el call stack, heap y queue.
- Call Stack El Event Loop revisa constantemente el Call Stack para ver si hay tareas pendientes. Si está vacío, el Event Loop busca tareas en la cola de tareas y las empuja al Call Stack para que se ejecuten

- Queue (La cola de tareas) almacena las tareas que no se pueden ejecutar de inmediato. Por ejemplo, cuando termina un temporizador, las web APIs empujan la función proporcionada a setTimeout a la cola de tareas.

- Heap (El montículo) es una gran región de memoria donde se colocan los objetos. En el JavaScript engine V8, el montículo se usa para asignar memoria. 

El Event Loop es el corazón del modelo de concurrencia de JavaScript. Permite que JavaScript, un lenguaje de un solo subproceso, maneje operaciones asíncronas de manera eficiente.

## Scope y Operadores

### Scope
El scope es el alcance que una variable tiene en el código, este decide a qué variables tienes acceso en cada parte del código. Existen dos tipos de scope, el scope global y el scope local.

- Scope Local cuando puedes acceder a una variable únicamente en cierta parte del código
- Scope Global cuando está declarada fuera de una función o de un bloque. 

Se prefirió el uso de `let` y `const` para mantener un control más estricto del scope y evitar errores comunes como el re-declarado de variables.

### Operadores
- **Operadores aritméticos** (`+`, `-`, `*`, `/`) para cálculos básicos.
- **Operadores de comparación** (`===`, `!==`, `<`, `>`) para validaciones.
- **Operadores lógicos** (`&&`, `||`) para condiciones compuestas.

## Diferencias entre let, const y var 
- Variables declaradas con let o const. Cuando se declara una variable let o const dentro de un bloque, el alcance que tiene es sólo dentro de ese bloque. y si existe el mismo nombre entre dos variables let o const manda un mensaje de error. 
- Variables declaradas con var. cuadno se declara variables con var, su valor sí se va a rescribir, por eso no es recomendable su uso.

## Debugger y Manejo de Errores con Try/Catch
Su objetivo es encontrar errores que pueden impedir que el código funcione bien, es posible determinar lo que está ocurriendo dentro del código y poder arreglarlo.

Para manejar errores, se usa bloques try/catch que:
- Capturan excepciones durante la ejecución del programa.
- Permiten mostrar mensajes personalizados al usuario sin interrumpir la experiencia de uso.

# Análisis de Algoritmos y Complejidad

1. **Complejidad Big-O predominante:**
   - Operaciones: O(n) (búsqueda, filtrado, clonado).
   - Ordenamiento: O(n log n).
   - Constantes: O(1).

2. **Complejidad ciclomática:**
   - Entre 1 y 3, código limpio y mantenible.

## Objetos JSON (Clonación, merge, Recorrido y stringify)

structuredClone es un método nativo en JavaScript para realizar una clonación profunda de objetos y arrays, incluyendo aquellos con estructuras anidadas. Este método garantiza que las referencias internas no se compartan entre el objeto original y el clon, creando una copia completamente independiente. Merge se ocupa para unir dos objetos, Recorre los objetos JSON para mostrar en el navegador
la lista de doctores disponibles.

## Estructuras de datos
- Arreglos para gestionar la lista de doctores, permitiendo agregar, eliminar y buscar doctores por nombre.
- Pilas para gestionar las citas de pacientes, con métodos para agregar citas, obtener la última cita agendada y visualizar la próxima cita a atender.
- Colas para simular el orden de llegada de los pacientes en la página de contacto, con métodos para agregar pacientes, atender al primero en la fila y visualizar al próximo paciente.

## Creditos

- Logo [Pngwing](https://www.pngwing.com/)
- Imágenes [Unsplash](https://unsplash.com/)
- Iconos [Fontawesome](https://fontawesome.com/)

## PDF 

Taller 1 [Taller: Análisis de la Incorporación de JavaScript en el Proyecto del Hospital](https://github.com/valeriatorrealba/HospitalPaloma/blob/main/pdf/Taller1%20ValeriaTorrealba.pdf)

## Autor
Desarrollado por Valeria Torrealba.