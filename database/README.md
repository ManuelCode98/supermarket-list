# Pasos para restaurar la base de datos

### Nota
Configura los archivos en este orden si no tienes una base de datos   
**database, server, client**

**Estas en database** 

    Estar en la ruta de esta carpeta que se llama database

1. Instalar docker si no lo tienes instalado

2. Cambiar el nombre del archivo .env.template a .env y agregar informacion de tu contenedor

3. Ejecuta el comando

    *docker compose up -d*

4. Copia el archivo al contenedor de docker, el contenedor se tiene que estar ejecutando

    *docker cp backup.sql CONTENEDOR-DOCKER:/backup.sql*

5. Entra al contenedor de docker

    *docker exec -it CONTENEDOR-DOCKER bash*

6. Restaurar base de datos desde archivo sql

    
    *psql -U USUARIO -d BASE-DE-DATOS -f /backup.sql*


6. Eliminar el archivo backup.sql que copiamos en el contenedor de docker

    *rm /backup.sql*

**Si te saliste del contenedor escribe el siguente comando**

    *docker exec -it my_postgres rm /backup.sql*

