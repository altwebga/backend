import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: ["ru"],
    translations: {
      ru: {
        Users: "Пользователи",
        City: "Город",
        Plugins: "Плагины",
      },
    },
    tutorials: false,
    notifications: { releases: false },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
