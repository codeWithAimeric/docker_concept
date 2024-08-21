FROM node:20.12.2

WORKDIR /app

COPY package*.json /app/

COPY src /app/

RUN npm install 

CMD ["node", "index.js"]