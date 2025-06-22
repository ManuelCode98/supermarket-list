# Pasos para restaurar la base de datos

### Nota
Configura los archivos en este orden    
**database, server, client**

**Estas en database** 

    Estar en la ruta de esta carpeta que se llama database

1. Instalar docker si no lo tienes instalado

2. Cambiar el nombre del archivo .env.template a .env y agregar informacion de tu contenedor

3. Ejecuta el comando

    *docker compose up -d*

4. Restaurar base de datos desde archivo sql

    *cat backup.sql | docker exec -i CONTENEDOR-DE-DOCKER -U USUARIO -d NOMBRE-DE-LA-BASE-DE-DATOS*

