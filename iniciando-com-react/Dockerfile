FROM node:15

WORKDIR /usr/src/app

COPY package.json ./

COPY . .

RUN npm install

RUN chown -R node ./node_modules

USER node