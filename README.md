# NOC Project

The objective is to create a series of taks using Clean Architecture with Typescript

# dev

1. Clone .env.template file to .env
2. Configure environment variables
3. Ejecutar comando `npm install`
4. Levantar las bases de datos con el comando

```
docker compose up -d
```

5. Ejecutar comando `npx prisma migrate dev` o `dotenv -e .env -- npx prisma migrate dev`
6. Ejecutar comando `npm run dev`

# Testing

1. Clone .env.template file to .env
2. Configure environment variables
3. Ejecutar comando `npm install`
4. Levantar las bases de datos con el comando

```
docker compose up -d
```

5. Ejecutar comando `dotenv -e .env.test -- npx prisma migrate dev`

## Obtener Gmail Key

[Google AppPaswords](https://myaccount.google.com/u/0/passwords)
