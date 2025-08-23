############################
# Etapa 1: Build con Node #
############################
FROM node:20 AS build
WORKDIR /app

# Copiamos solo package*.json para aprovechar cache
COPY package*.json ./
RUN npm ci

# Copiamos el resto del proyecto
COPY . .

# Compila Angular en modo producción
# (usa tu script real de build; en Angular 18 suele ser "ng build")
RUN npm run build --prod

# (Opcional) Para ver qué generó Angular durante el build:
# RUN ls -la /app/dist && ls -la /app/dist/*


############################
# Etapa 2: Nginx estático  #
############################
FROM nginx:alpine

# Config SPA (la creas como archivo aparte: nginx.conf)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nombre de tu app para apuntar a la carpeta dist
# Cambia blog-personal si tu carpeta de dist tiene otro nombre
ARG APP_NAME=blog-personal

# Descomenta UNA de estas dos líneas según dónde queda tu index.html:

# A) Si el index.html está en: dist/<app>/
# COPY --from=build /app/dist/${APP_NAME}/ /usr/share/nginx/html

# B) Si el index.html está en: dist/<app>/browser/
COPY --from=build /app/dist/${APP_NAME}/browser/ /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
