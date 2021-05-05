#syntax=docker/dockerfile:1
FROM node:14.15.4 as base
# ENV NODE_ENV=production
# RUN mkdir -p /app //here are some changes //here are some //final test of changes
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base as test 
RUN npm ci
COPY . .
RUN npm run test
#CMD ["npm", "run", "test"]

FROM base as prod
RUN npm ci --production
COPY . .
CMD ["npm", "run", "debug"]
#CMD ["node", "index.js"]


#COPY ["package.json", "package-lock.json*", "./"]
# RUN npm install --production
# COPY . .
# CMD ["npm", "run", "debug"]

