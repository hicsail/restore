import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';

import { Header } from '../components/Header.jsx';

import { GET_ABOUT_MISSION } from '../gql.jsx';

export default function AboutMission() {
  const { loading, error, data } = useQuery(GET_ABOUT_MISSION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Header
        title="Providing high quality services for PTSD across the health system"
        subtitle="Welcome to our hospital's website, where we offer comprehensive psychiatric services to support mental health."
        //Leaving as usage example:
        //imageUrl="https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png"
        //bgColor="pink"
      />
      <ReactMarkdown>{data.aboutMission.data.attributes.Body}</ReactMarkdown>
    </>
  );
}
