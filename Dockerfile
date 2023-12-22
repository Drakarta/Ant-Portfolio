FROM oven/bun:latest
WORKDIR /app

COPY . /app
RUN bun install

EXPOSE 3000/tcp
CMD ["sh", "start.sh"]
