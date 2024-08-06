import dotenv from 'dotenv';
dotenv.config()

const env = {
    PORT: parseInt(process.env.PORT || '3000'),
    PROD_URL: process.env.PROD_URL,
}

export { env }