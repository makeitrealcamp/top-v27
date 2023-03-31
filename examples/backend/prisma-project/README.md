1. npm init -y // inicializamos el proyecto
2. npm i express cors morgan @prisma/client // instalar depencias de producción
3. pm i -D @types/express @types/cors @types/morgan @types/node prisma typescript ts-node-dev
4. crear script en package.json
5. npx tsc --init // Crear configuración de ts tsconfig.json
6. Crear src/
7. crear src/app.ts
8. crear src/config/express.ts
9. crear src/api/
10. crear enpoint healthcheck

### Prisma

1. npx prisma init

- .env cambiar variable de entorno
- .gitignore
- prisma/schema.prisma // modificar archivo

2. Instalar estension prisma y configurar formato .vscode/settings.json

3. npx prisma migrate dev
4. npx prisma studio

5. npx prisma migrate reset // Comando para resetear la base de datos
