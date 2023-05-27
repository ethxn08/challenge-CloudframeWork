# Prueba Técnica - Cleverpy Machine Learning

![image](https://user-images.githubusercontent.com/91902123/235121705-779946af-e483-4867-8083-fcaf08ada410.png)

## Introducción

Este repositorio contiene el código para la prueba técnica propuesta por Cloudframework. La prueba consiste en diseñar, y conectar una pequeña webapp responsive que permita a los usuarios solicitar un préstamo desde una página web.

## Instrucciones

### `npm install`

Con este comando descargas los paquetes necesarios para que la aplicación funcione.

### `npm run dev`

Con este comando puedes desplegar la aplicación en tu equipo local.

### `npm run test`

Con este comando puedes ejecutar los test.

### `npm run coverage`

Con este comando puedes ver el coverage global de los test.

## Tecnologías

#### - En este prueba he utilizado React 18 y Javascript con vite para crear el proyecto.

#### - Fetch para realizar las solicitudes a la Api.

#### - Firebase para el sistema de hosting.

#### - CSS para los estilos.

#### - React Testing library y Jest para los test.

## Desarrollo

### He dividido el proyecto en 3 pantallas

#### - Pantalla de Home.

En esta pantalla puedes seleccionar un usuario

#### - Pantalla de Solicitud de prestamo.

Puedes acceder a esta pantalla a traves de {url}/partner_test.html?id={numero}
En esta pantalla se autorrellena el formulario con los datos del usuario y debes completar los restantes.

### - Pantalla de Agradecimiento.

En esta pantalla se muestran los campos del formulario editados y se informa de que se contactara con el cliente en breves.
