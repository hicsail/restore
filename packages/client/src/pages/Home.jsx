import { Header } from '../components/Header.jsx';
import { InfoPanelA } from '../components/InfoPanelA.jsx';

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
      />
      <InfoPanelA
        title="Discover the power of"
        subtitle="Our psychiatric services provide comprehensive care for mental health conditions."
        imageUrl="src/assets/imgplaceholder.png"
        buttonText="Learn More"
      />
    </>
  );
}
