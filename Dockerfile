
FROM node:16-alpine

WORKDIR /app_dev

ENV PATH /app_dev/node_modules/.bin:$PATH

COPY package.json /app_dev/package.json

RUN yarn install --silent
RUN yarn global add react-scripts@4.0.1 --silent

CMD ["yarn", "start"]