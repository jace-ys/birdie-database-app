FROM node:alpine as builder
WORKDIR /usr/src/app
COPY . .
RUN npm install --prefix ./birdie-client
RUN npm run build --prefix ./birdie-client

FROM node:alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/birdie-client/build ./birdie-client/build
COPY . .
RUN npm install --prefix ./birdie-api
EXPOSE 5000
CMD ["sh", "./entrypoint.sh"]
