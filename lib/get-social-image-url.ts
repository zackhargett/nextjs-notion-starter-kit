import { host } from './config'

export function getSocialImageUrl(pageId: string) {
  try {
    const url = new URL("/ogimg.png", host)
    return url.toString()
    
  } catch (err) {
    console.warn('error invalid social image url', pageId, err.message)
  }

  return null
}
