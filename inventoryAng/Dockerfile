
FROM node:15-alpine AS builder

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.19-alpine

COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf

COPY --from=builder /usr/src/app/dist/inventoryAng usr/share/nginx/html

EXPOSE 80