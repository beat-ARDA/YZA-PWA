# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install --force
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/yza-pwa /usr/share/nginx/html

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]