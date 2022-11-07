/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    ...nextTranslate(),
    env: {
        NEXT_PUBLIC_MAPBOX_API_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN,
        NEXT_PUBLIC_SENDGRID_API_KEY: process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
    }
}