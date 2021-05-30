# ROOTS /E-Commerse Proyect/

Plataforma diseñada para la venta de artículos del rubro botánico.

## Descripción

Permite navegar entre productos, seleccionar los que sean del gusto del usuario y generar una orden de compre mediante un registro previo de los datos del comprador. 

## Funcionalidades

Conexión con el servicio Firebase Database creado para alojar el catálogo que es exhibido en el sitio web.
Permite la navegación del catálogo, sus distintas categorías y la vista detallada de cada artículo que lo componen.
Habilita al usuario a hacer una selección de artículos de su interés y precisar una cantidad da artículos a comprar.
Implementa un formulario de datos personales para registro del usuario. Establece mecanismos de validación de los datos requeridos.
Desde la vista del carrito permite modificar la selección realizada en primera instancia de productos actualizando de manera inmendiata los valores parciales de los artículos y total de la compra.
Una vez validado los datos de registro, habilita la opción de generar la orden de compro con los artículos seleccionados. Cada orden es remitida a la base de datos de Firebase Databes. 
Finalmente, la App devuelve una constancia o identificador de la orden generada al usuario. 

### `Tecnologías Implementadas`

 - React Js
 - FireBase Database/ Storage
 - Node Js

### `Punto de partida para ejecutar la App`

- Clonar el repositorio.
- Asegurarse de tener instalado Node Js versión v14.16.0 o superior. 
- Desde el directorio interno a Root-py donde se encuentra el archivo package.json abrir la consola y ejecutar los siguientes comandos:

    - npm install
    (instala todos los módulos/dependencias utilizadas en el proyecto - el proceso puede demorar unos minutos)
    - npm start
    (abrirá automáticamente el proyecto en el puerto    [http://localhost:3000](http://localhost:3000))

### `Algunos Comentarios`
- El proyecto no contó con la participación de UI/UX, de manera que todos los estilos y animaciones implementadas fueron una elección propia y desarrolladas con Css nativo, sin el uso preprocesadores de estilos. Únicamente se implementó la libreía de [FontAwsomep para React] (https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react). 
- La Apy Key para acceder a la base de datos de Firestore debe solicitarse por canal privado a fdipietro01@gmail.com   


### `Un brebe recorrido`

![](RootPreview.gif)
             






