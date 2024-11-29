# Hospital

**Hospital** es un sitio web diseñado para que los pacientes puedan conocer a los profesionales de la salud, así como obtener información sobre su ubicación en caso de emergencias.

## Instrucciones para Visualizar el Proyecto
1. Clonar el repositorio:
```bash
git clone https://github.com/valeriatorrealba/HospitalPaloma.git
```

2. Abre el proyecto en Visual Studio Code.
3. Inicia Live server (si no lo tienes lo puedes instalar)
4. Accede al index.html en tu navegador

``` bash
http://127.0.0.1:5500/index.html
``` 


## Estructura de carpetas y archivos
``` bash
Hospital/
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │   ├── main.css 
│   │   └── main.css.map
│   ├── img/
│   │   ├── favicon.png  
│   │   ├── logo.png
│   │   └── paciente1.jpg
│   │
│   └── js/
│   │   └── script.js    
│   │
│   └── screenshot/
│   │   └──     
│   │
│   └── Sass/
│       ├── abstrats/   
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
│       │   └──  
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
## Modularización de Estilos y Media Queries
Para facilitar el mantenimiento del proyecto, los estilos CSS se modularizaron en archivos parciales usando SASS. Esto permite mantener cada sección (como el header, el footer, y las páginas específicas) en archivos separados, haciéndolo más organizado y eficiente. Las media queries se colocaron en cada archivo parcial correspondiente, de modo que los ajustes de diseño específicos de cada componente se aplican únicamente donde se necesitan.
## Estructura de SASS
La estructura de archivos SASS fue organizada de la siguiente manera:
- main.scss: Archivo principal que importa todos los parciales.
- _variables.scss: Contiene las variables globales como colores, facilitando su modificación en un solo lugar.
- _header.scss, _footer.scss, _main.scss: Cada sección principal de la página tiene su propio archivo parcial, donde se definen sus estilos específicos.

## Tecnologías Usadas
- **HTML5**
- **CSS3**
- **SASS**

## Creditos
- Logo [Pngwing](https://www.pngwing.com/)
- Imágenes [Unsplash](https://unsplash.com/)
- Iconos [Fontawesome](https://fontawesome.com/)

## Autor
Desarrollado por Valeria Torrealba.