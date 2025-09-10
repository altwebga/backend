// config/server.ts
export default ({ env }) => ({
  host: env("HOST", "127.0.0.1"), // в проде лучше 127.0.0.1 (за nginx)
  port: env.int("PORT", 1337),
  url: env("URL", "https://digital-env.ru"), // абсолютные ссылки (админка, письма, OAuth-коллбеки)
  proxy: env.bool("PROXY", true), // доверять X-Forwarded-* от nginx
  app: {
    keys: env.array("APP_KEYS"),
  },
});
