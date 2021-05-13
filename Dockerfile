FROM node:16-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/

RUN yarn 
RUN yarn global add react-scripts@4.0.1

COPY . /usr/src/app

EXPOSE 3000

CMD ["yarn", "start"]