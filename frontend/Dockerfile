FROM node:12

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY ["package.json", "yarn.lock", "./"]
RUN npm install -g yarn
RUN yarn install --production --silent && mv node_modules ../

# Copying source files
COPY . .

EXPOSE 3000

CMD npm start