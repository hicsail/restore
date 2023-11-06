import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';

import { Header } from '../components/Header.jsx';
import { InfoPanelA } from '../components/InfoPanelA.jsx';

import { GET_ABOUT_MISSION } from '../gql.jsx';

import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

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
      {/* As much as possible should become Strapi queries.*/}
      <InfoPanelA
        title="Our Mission: Providing Compassionate Psychiatric Care"
        subtitle="The REcovery from Stress and Trauma through Outpatient care, Research and Education (RESTORE) Center aims to improve access to high-quality services for PTSD across the health system and remove barriers to treatment for our patients."
        imageUrl="src/assets/imgplaceholder.png"
        icon={SentimentSatisfiedAltIcon}
      />
      <ReactMarkdown>{data.aboutMission.data.attributes.Body}</ReactMarkdown>
    </>
  );
}
