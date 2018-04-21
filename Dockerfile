FROM node:8.11.1

COPY . /usr/src/

WORKDIR /usr/src/frontend

ENV PATH /usr/src/frontend/node_modules/.bin:$PATH

RUN npm install -g create-react-app
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
