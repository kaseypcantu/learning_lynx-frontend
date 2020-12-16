FROM node:14 as base

ARG PORT=3000

WORKDIR /usr/src/app

COPY ./package.json .

RUN curl -o- -L https://yarnpkg.com/install.sh | bash && yarn install

COPY . .

EXPOSE $PORT

############# Next.js production build stage ###############

FROM base as builder

ENV NODE_ENV=production

WORKDIR /build

COPY --from=base /usr/src/app .

RUN yarn clean && yarn build

################## Next.js development  ###################

FROM base as dev

ENV NODE_ENV=development

COPY --from=base /usr/src/app .

CMD ["yarn", "dev"]

################## Next.js production ####################

FROM builder as production

ENV NODE_ENV=production

COPY --from=builder /build/package*.json ./
COPY --from=builder /build/.next ./.next
COPY --from=builder /build/public ./public

CMD ["yarn", "start"]
