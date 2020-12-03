FROM node:14 as base

ARG PORT=3000

WORKDIR /usr/src/app

COPY package.json .

RUN curl -o- -L https://yarnpkg.com/install.sh | bash && yarn install

COPY . .

EXPOSE $PORT

############# Next.js production build stage ###############

FROM base as builder

COPY . .

CMD ["yarn", "clean"]

CMD ["yarn", "build"]

################## Next.js development  ###################

FROM base as dev

CMD ["yarn", "dev"]

################## Next.js production ####################

FROM builder as production

CMD ["yarn", "start"]
