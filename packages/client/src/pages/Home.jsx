import { Header } from '../components/Header.jsx';
import { InfoPanelA } from '../components/InfoPanelA.jsx';
import { CardGrid } from '../components/CardGrid.jsx';

import { useQuery } from '@apollo/client';
import { GET_HOMEPAGE_CARDGRID } from '../gql.jsx';

// Some random placeholder icon options...
import GestureIcon from '@mui/icons-material/Gesture';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SquareIcon from '@mui/icons-material/Square';

function HomepageCardGrid() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_CARDGRID);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <CardGrid cards={data.homePageCardGrids.data} />;
}

export default function Home() {
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
        title="Explore Our Comprehensive Services To The Health System"
        subtitle="At our hospital, we offer a wide range of psychiatric services designed to meet your unique needs and promote mental well-being. Our team of experienced professionals is dedicated to providing compassionate care and effective treatment options."
        imageUrl="src/assets/imgplaceholder.png"
        icon={GestureIcon}
      />
      <HomepageCardGrid />
      <InfoPanelA
        title="Discover the power of"
        subtitle="Our psychiatric services provide comprehensive care for mental health conditions."
        imageUrl="src/assets/imgplaceholder.png"
        buttonText="Learn More"
      />
    </>
  );
}
