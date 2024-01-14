# ElBalcon


Este es el repositorio del proyecto "sistema de facturación - El Balcón balboa", un sistema de facturación desarrollado con Node.js, Express y Sequelize.

## Descripción

Este proyecto es una aplicación de facturación que permite a los usuarios gestionar sus clientes, productos y generar facturas. Está construido sobre Node.js y utiliza Sequelize como ORM para la interacción con la base de datos PostgreSQL.

## Características

- Gestión de gastos: Agregar, editar y eliminar registros.
- Gestión de ventas: Agregar, editar y eliminar productos.
- Generación de facturas: Crear facturas para clientes con productos específicos.
- Migraciones de base de datos: Utiliza Sequelize para gestionar las migraciones de base de datos.

## Requisitos Previos

Antes de comenzar con el proyecto, asegúrate de tener instalado lo siguiente:

- Node.js
- npm (Gestor de paquetes de Node.js)
- PostgreSQL (o el sistema de gestión de bases de datos que prefieras)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Jeffsmo/ElBalcon.git
   cd sistema-facturacion
2. Instala dependencias:
    ```bash
    npm install

3. Configura la base de datos:
    - Crea una base de datos SQL en postgres o mysql
    - Copia en el archivo `.env` y configura las variables de entorno para la conexión a base de datos

4. Ejecuta las migraciones:
    - Ingresa al directorio `./API`:
    ```bash
    npm run migrations:run
    


## Uso

- Para iniciar la aplicación en modo desarrollo ejecuta en la ruta `./API`:
   ```bash
   npm run dev
- Para ejecutar el entorno de desarrollo del cliente de la aplicación:
   - Ingresa al directorio `./elbalcon`:
     ```bash
     npm run dev
## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles. 

