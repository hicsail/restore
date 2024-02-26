import { Container } from '@mui/material';
import { Header } from '../components/Header.jsx';
import { SpeechBubbleLeft, SpeechBubbleRight } from '../components/SpeechBubble.jsx';
import { useQuery } from '@apollo/client';
import { GET_TESTIMONIALSPAGE_HEADER } from '../gql.jsx';

function TestimonialsHeader() {
  const { data } = useQuery(GET_TESTIMONIALSPAGE_HEADER);
  if (!data?.testimonialsPageHeader.data?.attributes.Header) return;
  const { Title, Subtitle, BackgroundColorHexCode, BackgroundImage } =
    data.testimonialsPageHeader.data.attributes.Header;

  return (
    <Header
      title={Title}
      subtitle={Subtitle}
      imageUrl={BackgroundImage.data && BackgroundImage.data.attributes.url}
      bgColor={BackgroundColorHexCode}
    />
  );
}

export default function Testimonials() {
  return (
    <>
      <TestimonialsHeader />
      <Container sx={{ margin: '1rem auto' }}>
        <SpeechBubbleLeft text="I am a speech bubble. Or rather I am some text inside a speech bubble. My speech bubble grows and shrinks with me. Also, I am a left speech bubble, as in I appear to the left of the speaker. Have you met my friend Right Speech Bubble?" />
        <br />
        <SpeechBubbleRight text="I am a right speech bubble, as in I appear to the right of the speaker. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... The element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block... Apart from growing and shrinking with my text I also behave well with browser zoom." />
      </Container>
    </>
  );
}
