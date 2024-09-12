/**
 * loaded from .env
 * */

export const DOMAIN = (process.env.DOMAIN as string) || 'hello.by'
export const DOMAIN_URL = (process.env.DOMAIN_URL as string) || 'https://hello.by'
export const NODE_ENV = process.env.NODE_ENV as string
export const STRAPI_URL = (process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL) as string
export const STRAPI_API_KEY = (process.env.STRAPI_API_KEY ||
	process.env.NEXT_PUBLIC_STRAPI_API_KEY) as string

export const GOOGLE_VERIFICATION = process.env.GOOGLE_VERIFICATION
export const YANDEX_VERIFICATION = process.env.YANDEX_VERIFICATION
export const FACEBOOK_VERIFICATION = process.env.FACEBOOK_VERIFICATION || ''

export const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || 'hello'

export const GOOGLE_API_TOKEN = 'AIzaSyABxgtOyM1xYumVno-MHCwykwrotVQ1ESs'
export const ZONES_API_URL =
	process.env.ZONES_API_URL || 'https://hellominsk5.cartrek.online/api/zones'