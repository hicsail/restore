import { InfoPanelA } from '../components/InfoPanelA.jsx';
import { CardGrid } from '../components/CardGrid.jsx';

import { useQuery } from '@apollo/client';
import { GET_HOMEPAGE_CARDGRID, GET_HOMEPAGE_INFOPANEL_TOP, GET_HOMEPAGE_INFOPANEL_BOTTOM } from '../gql.jsx';

// Some random placeholder icon options...
import GestureIcon from '@mui/icons-material/Gesture';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SquareIcon from '@mui/icons-material/Square';

function HomepageInfoPanelTop() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_INFOPANEL_TOP);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { Title, Subtitle, Image, Icon, ButtonText, ButtonLink } = data.homePageInfoPanelTop.data.attributes.InfoPanelA;
  const imgUrl = import.meta.env.VITE_STRAPI_URL + Image.data.attributes.url;
  const imgAlt = Image.data.attributes.alternativeText;
  const iconUrl = import.meta.env.VITE_STRAPI_URL + Icon.data.attributes.url;
  const iconAlt = Icon.data.attributes.alternativeText;

  return (
    <InfoPanelA
      title={Title}
      subtitle={Subtitle}
      imageUrl={imgUrl}
      imageAlt={imgAlt}
      iconUrl={iconUrl}
      iconAlt={iconAlt}
    />
  );
}

function HomepageCardGrid() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_CARDGRID);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <CardGrid cards={data.homePageCardGrids.data} />;
}

function HomepageInfoPanelBottom() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_INFOPANEL_BOTTOM);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { Title, Subtitle, Image, Icon, ButtonText, ButtonLink } =
    data.homePageInfoPanelBottom.data.attributes.InfoPanelA;
  const imgUrl = import.meta.env.VITE_STRAPI_URL + Image.data.attributes.url;
  const imgAlt = Image.data.attributes.alternativeText;

  return (
    <InfoPanelA
      title={Title}
      subtitle={Subtitle}
      imageUrl={imgUrl}
      imageAlt={imgAlt}
      buttonText={ButtonText}
      buttonLink={ButtonLink}
    />
  );
}

export default function Home() {
  return (
    <>
      <HomepageInfoPanelTop />
      <HomepageCardGrid />
      <HomepageInfoPanelBottom />
    </>
  );
}
