import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: ["ru"],
    notifications: { releases: false },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
