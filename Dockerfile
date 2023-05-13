FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY Node-API/package*.json ./
RUN npm install

# Bundle app source
COPY ./Node-API .

EXPOSE 8080

CMD [ "node", "server.js" ]