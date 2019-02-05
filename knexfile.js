// Update with your config settings.

require('dotenv').config();

const localPg = {
    host: 'localhost',
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
};
const dbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './database/oer-bookr2.sqlite3',
        },
        useNullAsDefault: true,
        migrations: {
            directory: './database/migrations',
            tableName: 'dbmigrations',
        },
        seeds: {
            directory: './database/seeds',
        },
    },
    production: {
        client: 'pg',
        connection: dbConnection,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'dbmigrations',
            directory: './database/migrations',
        },
        seeds: {
            directory: './database/seeds',
        },
    },
};
