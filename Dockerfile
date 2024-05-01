FROM node:20

# create app directory

WORKDIR /app

COPY package*.json ./

RUN npm install

# Brundle app source

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]