import { uriTransformer } from 'react-markdown';

// This function is for taking image URLs from markdown content
// and prepending the Strapi URL where needed (i.e. in relative paths).
// It is meant to be composed with react-markdown's default uriTransformer,
// so it assumes that the url is already cleaned.
function prependStrapiURL(url) {
  const first = url.charAt(0)
  if (first === '/') {
    return import.meta.env.VITE_STRAPI_URL + url
  }
  return url
}
export function processMarkdownImageUri(url) {
  return prependStrapiURL(uriTransformer(url))
}
