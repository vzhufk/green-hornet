import dotenv from "dotenv";

let env = process.env.NODE_ENV;

if (!env) {
  dotenv.config();
  env = process.env.NODE_ENV;
}

export default {
  env: {
    dev: !env || env === "development",
    prod: env && env === "production"
  },
  telegram: {
    token: process.env.TELEGRAM_TOKEN
  },
  lang: process.env.LANGUAGE || "ru"
};
