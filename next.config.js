/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    ...nextTranslate(),
}