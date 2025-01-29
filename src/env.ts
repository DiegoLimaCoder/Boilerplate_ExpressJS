import Joi from "joi";
import "dotenv/config";

interface EnvConfig {
  PORT: number;
  NODE_ENV: "development" | "production" | "test";
}

const envSchema = Joi.object({
  PORT: Joi.number().default(3001),
  NODE_ENV: Joi.string()
    .valid("development", "production","test")
    .default("development"),
});

const { error, value } = envSchema.validate(process.env, {
  allowUnknown: true,
});

if (error) {
  throw new Error(`❌ Config validation error: ${error.message}`);
}

export const Env: EnvConfig = {
  PORT: value.PORT,
  NODE_ENV: value.NODE_ENV,
};
