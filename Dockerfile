FROM alpine:3.10

MAINTAINER Yaroslav Voloshchuk <bamiks@gmail.com>

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN apk add --update bash nodejs npm

COPY package*.json ./

RUN npm set progress=false && \
    npm config set depth 0 && \
    npm install --only=production

RUN npm i pm2 -g

ARG NODE_ENV

ENV NODE_ENV="${NODE_ENV}"

ARG PORT

ENV PORT="${PORT}"

ARG MONGO_URI

ENV MONGO_URI="${MONGO_URI}"

ARG JWT

ENV JWT="${JWT}"

COPY . .

EXPOSE 5000

CMD ["pm2-runtime", "server.js"]

