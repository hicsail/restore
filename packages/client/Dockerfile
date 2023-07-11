FROM node:18-alpine

ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

# Development
CMD ["npm", "run", "dev", "--", "--host"]

# Production
#CMD ["npm", "run", "build"]
# TBD...
