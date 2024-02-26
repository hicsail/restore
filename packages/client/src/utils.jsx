import { uriTransformer } from 'react-markdown';

// This function is for taking image URLs from markdown content
// and prepending the Strapi URL where needed (i.e. in relative paths).
// It is meant to be composed with react-markdown's default uriTransformer,
// so it assumes that the url is already cleaned.
export function prependStrapiURL(url) {
  const first = url?.charAt(0);
  if (first === '/') {
    return import.meta.env.VITE_STRAPI_URL + url;
  }
  return url;
}
export function processMarkdownImageUri(url) {
  return prependStrapiURL(uriTransformer(url));
}

// This function is for generating the path for a blog post.
// It takes in the id and title of the blog post, and returns a string that can be used in a Link component.
export function generateBlogPostPath(id, title) {
  return `/blog/${id}/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

// This function replaces spaces with dashes.
export function spacesToDashes(text) {
  return text.replace(/ /g, '-');
}
