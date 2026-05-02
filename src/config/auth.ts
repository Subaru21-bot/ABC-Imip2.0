require('dotenv').config()

const JWT_SECRET = process.env.TOKEN_SECRET;

export = JWT_SECRET;