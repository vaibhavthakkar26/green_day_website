/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXT_APP_API_URL: process.env.NEXT_APP_API_URL,
        NEXT_X_API_KEY : process.env.NEXT_X_API_KEY,
        NEXT_TOKEN : process.env.NEXT_TOKEN
    },
};

export default nextConfig;
