FROM node:22.13.1-alpine

WORKDIR ./
RUN mkdir -p ./front

WORKDIR ./front
COPY ./front ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

RUN pnpm build

EXPOSE 3000

CMD ["sh", "-c", "pnpm --prefix /front run start"]
