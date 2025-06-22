# Pasos para correr la api

### Nota 
Configura los archivos en este orden    
**database, server, client**

**Estas en server**

    Estar en la ruta de esta carpeta que se llama server

1. Cambiar el nombre del archivo .env.template a .env y agregar la informacion correspondiente

2. Ejecuta el comando 

    **npm install**

3. Ejecuta el comando 

    **npx prisma migrate dev** **le pones cualquier nombre a la migracion**

4. Luego ejecuta este comando para ver si el contenedor de postgres esta corriendo en docker

    **docker ps**

5. Luego este comando que copia y pega el archivo de backup de la base de datos

    **docker cp ./init/backup.dump nombre_del_contenedor:/var/lib/postgresql/data/backup.dump**

6. Luego, restaurar la base de datos, reemplaza estos datos con los tuyos: nombre_del_contenedor, usuario, nombre_base_datos

    **docker exec -i nombre_del_contenedor pg_restore -U usuario -d nombre_base_datos /var/lib/postgresql/data/backup.dump**

7. Luego ejecuta este comando

    **npm run dev**

