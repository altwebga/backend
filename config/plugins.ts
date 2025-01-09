module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        credentials: {
          accessKeyId: env("YANDEX_ACCESS_KEY_ID"),
          secretAccessKey: env("YANDEX_SECRET_ACCESS_KEY"),
        },
        region: env("YANDEX_S3_REGION"), // e.g "fr-par"
        endpoint: env("YANDEX_S3_ENDPOINT"), // e.g. "https://s3.fr-par.scw.cloud"
        params: {
          Bucket: env("YANDEX_S3_BUCKET_NAME"),
        },
      },
    },
  },
  // ...
});
