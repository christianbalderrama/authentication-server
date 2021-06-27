FROM node

ARG NODE_ENV=development
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=postgres
ENV PGADMIN_DEFAULT_EMAIL=admin@example.com
ENV PGADMIN_PASSWORD=admin

RUN mkdir -p /home/app
COPY . /home/app

RUN npm install

RUN chmod +x ./script.sh
RUN ./script.sh ${NODE_ENV}