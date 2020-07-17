FROM node:10-alpine

USER root
WORKDIR /usr/src/app
COPY ./config ./config
ADD ./lib ./lib
ADD ./pages ./pages
ADD ./public ./public
ADD ./src ./src
ADD ./next.config.js ./next.config.js
ADD ./package.json ./package.json
RUN npm config set unsafe-perm true 
RUN apk add python make gcc g++
RUN npm install
RUN npm run build

EXPOSE 3000
CMD npm run start 