export const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';
export const GRAPHQL_SERVER = process.env.GRAPHQL_SERVER as string;
