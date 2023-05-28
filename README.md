# Prueba Técnica - Cloudframework

## Introducción

Este repositorio contiene el código para la prueba técnica propuesta por Cloudframework. La prueba consiste en diseñar, y conectar una pequeña webapp responsive que permita a los usuarios solicitar un préstamo desde una página web.

URL: https://challenge-cloudframework.web.app/

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
![image](https://github.com/ethxn08/challenge-CloudframeWork/assets/91902123/44f95670-029e-41ab-ba64-dab735adc043)

#### - Pantalla de Solicitud de prestamo.
Puedes acceder a esta pantalla a traves de {url}/loan-request/1.
##### URL: https://challenge-cloudframework.web.app/loan-request/1
En esta pantalla se autorrellena el formulario con los datos del usuario y debes completar los restantes.
![image](https://github.com/ethxn08/challenge-CloudframeWork/assets/91902123/0512616b-3261-4c44-8cea-ac574d312338)

### - Pantalla de Agradecimiento.
En esta pantalla se muestran los campos del formulario editados y se informa de que se contactara con el cliente en breves.
![image](https://github.com/ethxn08/challenge-CloudframeWork/assets/91902123/8798e1f4-9cb7-4faf-82fd-d9326fd01c7e)

