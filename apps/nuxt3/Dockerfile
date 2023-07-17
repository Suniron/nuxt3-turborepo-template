###############
# BUILD STAGE # This stage is used to build application before production (Typescript => Javascript)
###############
FROM node:18-alpine as builder

# Create and move into /nuxt3 folder
WORKDIR /nuxt3

RUN apk update
RUN apk add --no-cache libc6-compat

RUN yarn global add turbo@1.7.0
COPY . .

RUN turbo prune --scope=@monorepo/nuxt3 --docker

###################
# INSTALLER STAGE # This stage is used to build application before production
###################
FROM node:18-alpine as installer

# Create and move into /nuxt3 folder
WORKDIR /nuxt3

RUN apk update
RUN apk add --no-cache libc6-compat

# First install dependencies (as they change less often)
COPY .npmrc .gitignore ./
COPY --from=builder /nuxt3/out/json/ .
COPY pnpm-*.yaml ./

RUN npm pkg delete scripts.prepare

# Activate corepack to use pnpm
RUN corepack enable
RUN pnpm install -r --frozen-lockfile

# Build the project
COPY --from=builder /nuxt3/out/full/ ./

RUN pnpm turbo build --filter=@monorepo/nuxt3...

# TEAM CACHE: clean prerequisits
RUN rm -rf .git

RUN cd apps/nuxt3 && pnpm build

FROM node:18-alpine AS runner

# Create and move into /nuxt3 folder
WORKDIR /nuxt3

ENV NUXT_HOST=0.0.0.0\
    PORT=3003\ 
    NODE_ENV=production\
    NUXT_PUBLIC_BASE_API=/api
EXPOSE 3003

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nuxtjs
USER nuxtjs

COPY --from=installer --chown=nuxtjs:nodejs /nuxt3/apps/nuxt3/.output /nuxt3/.output

CMD ["node", "/nuxt3/.output/server/index.mjs"]
