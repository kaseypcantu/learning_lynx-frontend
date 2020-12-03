export const isProd = process.env.NODE_ENV === 'production';
// export const isDev = process.env.NODE_ENV === 'development';
export const GRAPHQL_SERVER = process.env.GRAPHQL_SERVER as string;
export const NGROK_SUBDOMAIN = process.env.NGROK_SUBDOMAIN;
