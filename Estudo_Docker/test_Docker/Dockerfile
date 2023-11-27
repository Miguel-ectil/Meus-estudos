FROM node:alpine

WORKDIR /usr/app

# Copiando os arquivos de pacote package.json
COPY package*.json ./
# Instalação de dependências
RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "start"]