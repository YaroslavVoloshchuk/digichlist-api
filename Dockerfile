FROM node:14.16-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

ARG NODE_ENV=production

ENV NODE_ENV ="${NODE_ENV}"

ARG PORT=5000

ENV PORT="${PORT}"

ARG MONGO_URI="mongodb://"

ENV MONGO_URI="${MONGO_URI}"

ARG JWT=text

ENV JWT="${JWT}"

CMD ["node", "server.js"]

