import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';

import { processMarkdownImageUri } from '../utils.jsx';
import { theme } from '../theme.jsx';
import { GET_BLOG_POSTS } from '../gql.jsx';

export default function BlogPosts() {
  const { loading, error, data } = useQuery(GET_BLOG_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.blogPosts.data.map(({ id, attributes }) => (
    <div
      key={id}
      style={{
        backgroundColor: theme.palette.purple.light,
        color: theme.palette.purple.contrastText,
        padding: '0.5rem 1rem',
        margin: '1rem auto',
        borderRadius: '1em'
      }}
    >
      <h3>{attributes.Title}</h3>
      <p>Published at: {attributes.DatetimePublished}</p>
      <hr />
      <ReactMarkdown transformImageUri={processMarkdownImageUri}>{attributes.Body}</ReactMarkdown>
      <br />
    </div>
  ));
}
