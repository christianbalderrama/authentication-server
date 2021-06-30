FROM node:alpine
RUN apk add --no-cache --upgrade bash

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=postgres
ENV PGADMIN_DEFAULT_EMAIL=admin@example.com
ENV PGADMIN_PASSWORD=admin

RUN mkdir /app
WORKDIR /app
COPY package.json .
COPY . .

RUN npm install -g pnpm
RUN pnpm add -g pnpm
RUN pnpm install

EXPOSE 3000

COPY script.sh .
RUN chmod +x ./script.sh
CMD ./script.sh $NODE_ENV