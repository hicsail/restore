import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';

import { GET_ABOUT_MISSION } from '../gql.jsx'

export default function AboutMission() {
  const { loading, error, data } = useQuery(GET_ABOUT_MISSION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ReactMarkdown>{data.aboutMission.data.attributes.Body}</ReactMarkdown>
  )
}
