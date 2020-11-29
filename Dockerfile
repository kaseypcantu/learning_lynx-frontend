FROM node:14 as base

ARG PORT=3000

WORKDIR /usr/src/app

COPY package.json .

RUN curl -o- -L https://yarnpkg.com/install.sh | bash && yarn install

COPY . .

EXPOSE $PORT

############# Next.js production build stage ###############

FROM base as builder

COPY ./.next/ .

CMD ["yarn", "build"]

################## Next.js development  ###################

FROM base as dev

CMD ["yarn", "dev"]

################## Next.js production ####################

FROM builder as production

COPY . /usr/src/app/learning_lynx

COPY --from=builder /usr/src/app/learning_lynx/.next/ /usr/src/app/learning_lynx/.next/

CMD ["yarn", "start"]
