FROM node:20

WORKDIR /app

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get -y install nano zip

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

ENV PORT=3003

EXPOSE 3003

CMD ["yarn", "start"]