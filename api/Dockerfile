FROM node:12 AS builder

# Create app directory
WORKDIR /usr/src/api

# Install app dependencies
COPY package*.json ./
ARG NPM_TOKEN
RUN npm config set '//registry.npmjs.org/:_authToken' "$NPM_TOKEN"
RUN echo "npm user is >>> $(npm whoami) <<<"
RUN npm ci

# Bundle app source
COPY . .

## Build for development / staging / production
ARG APP_ENV
RUN echo ">> Current stage: $APP_ENV"
RUN if [ "$APP_ENV" != "local" ] ; then npm run build; else echo 'Nothing to build'; fi

# STEP 2
FROM node:lts-alpine3.9

# Create app directory
WORKDIR /usr/src/api

RUN apk add --no-cache bash
RUN apk --no-cache add --virtual builds-deps build-base python

# Copy source from builder
COPY --from=builder /usr/src/api .

RUN npm rebuild bcrypt --build-from-source

EXPOSE 4000

CMD npm run migrate && npm run seed && npm run prod
