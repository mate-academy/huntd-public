FROM node:12 AS builder

# Create app directory
WORKDIR /usr/src/frontend

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
WORKDIR /usr/src/frontend

# to use in wait-for-it.sh
RUN apk add --no-cache curl

# Copy source from builder
COPY --from=builder /usr/src/frontend .

## THE LIFE SAVER
RUN chmod +x ./wait-for-it.sh

EXPOSE 3000

CMD ["./wait-for-it.sh", "api:4000/healthz", "npm", "run", "dev"]
