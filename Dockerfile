FROM node:14.15.4

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG port=5000

EXPOSE $port

CMD ["npm", "start"]
