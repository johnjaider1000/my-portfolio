# Usa la imagen oficial de Node.js como base
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install --legacy-peer-deps

# Copia el resto de tu aplicación
COPY . .

# Compila el proyecto
RUN npm run build

# Expone el puerto en el que la aplicación estará corriendo
EXPOSE 3004

# Comando para iniciar la aplicación
CMD ["npm", "start"]
