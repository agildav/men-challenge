FROM node:12.16.1-alpine3.11 as builder

ARG NODE_ROOT="/home/node/men"

WORKDIR ${NODE_ROOT}

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install \
  && rm -rf /tmp/* tmp/* /var/cache/apk/*

COPY . ./

# -----------------------------------------------

FROM node:12.16.1-alpine3.11
LABEL mantainer="Alberto Gil <agildav@gmail.com>"
LABEL version="1.0"

ARG NODE_ROOT="/home/node/men"

WORKDIR ${NODE_ROOT}

RUN rm -rf /tmp/* tmp/*

# Node image comes with non-root user node
USER node

COPY --from=builder --chown=node:node ${NODE_ROOT}/ ./

EXPOSE 3000

CMD ["npm", "run", "start"]
