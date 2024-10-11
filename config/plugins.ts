export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        credentials: {
          accessKeyId: env("YANDEX_ACCESS_KEY_ID"),
          secretAccessKey: env("YANDEX_SECRET_ACCESS_KEY"),
        },
        region: env("YANDEX_S3_REGION"),
        endpoint: env("YANDEX_S3_ENDPOINT"),
        params: {
          Bucket: env("YANDEX_S3_BUCKET_NAME"),
        },
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",

      providerOptions: {
        host: env("SMTP_HOST", "smtp.example.com"),
        port: 465,
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASSWORD"),
        },
        secure: true,
      },
      settings: {
        defaultFrom: env("SMTP_USER"),
        defaultReplyTo: "altwebga@ya.ru",
      },
    },
  },
});
