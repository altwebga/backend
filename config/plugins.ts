export default () => ({
  "strapi-csv-import-export": {
    config: {
      authorizedExports: ["api::offer.offer", "api::article.article"],
      authorizedImports: ["api::offer.offer", "api::article.article"],
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      landingPage: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
