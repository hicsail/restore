# Development Dockerfile

FROM node:18
# Installing dependencies for Sharp compatibility
RUN apt-get update && apt-get install -y build-essential libvips

WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm install
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
USER node
RUN ["npm", "run", "build"]
EXPOSE 1337
CMD ["npm", "run", "develop"]
