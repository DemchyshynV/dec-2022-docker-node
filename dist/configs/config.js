"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
exports.configs = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    SECRET_SALT: process.env.SECRET_SALT,
};
