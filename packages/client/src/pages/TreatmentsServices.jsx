import { useState } from 'react';
import { Box, Button, Popper } from '@mui/material';

import { useLocation } from 'react-router-dom';

import boardsImg from '../assets/treatments_and_services/boards.gif';
import determinantsVennImg from '../assets/treatments_and_services/determinants_diagram.jpg';
import ptsdCurveImg from '../assets/treatments_and_services/ptsd-curve.svg';

import { useQuery } from '@apollo/client';
import { GET_UPCOMING_ONGOING } from '../gql.jsx';
import { GET_TREATMENTS_CARDGRID } from '../gql.jsx';
import ReactMarkdown from 'react-markdown';

import { Header } from '../components/Header.jsx';
import {
  DeterminantsColumn,
  ProcessesColumn,
  EvaluationColumn,
  DeterminantsColumnSVG,
  ProcessesColumnSVG,
  EvaluationColumnSVG
} from '../components/DPEDiagram.jsx';
import { ScopeOfClinicalFocus } from '../components/ScopeOfClinicalFocus.jsx';
import { CardGrid } from '../components/CardGrid.jsx';

function ImplementationFrameworkInteractive() {
  let { hash } = useLocation();
  const [tabValue, setTabValue] = useState(hash || '#determinants');

  function BlueBox(text) {
    // Blue boxes for Core Facilitation Strategies diagram.
    // To get the requested layout (bottom two boxes horizontally centered in the grid)
    // using grid layout, use a grid of 6*1fr instead of 3*1fr and insert a 1fr spacer box
    // (see below). With thanks to https://www.billerickson.net/css-grid-center-last-item/
    return (
      <Box
        sx={{
          color: '#ffffff',
          bgcolor: '#5b9bd5',
          padding: '1em',
          textAlign: 'center',
          display: 'flex', // Vertically center text
          flexDirection: 'column', // Vertically center text
          justifyContent: 'center', // Vertically center text
          gridColumn: 'span 2' // For centering last two boxes later on
        }}
      >
        <div>{text}</div>
      </Box>
    );
  }
  function WhiteBox(text) {
    // White, rounded-border boxes for Taxonomy of Outcomes diagram.
    return (
      <Box
        sx={{
          borderStyle: 'solid',
          borderRadius: '40px',
          padding: '3em 1em',
          textAlign: 'center'
        }}
      >
        <div>{text}</div>
      </Box>
    );
  }

  return (
    <>
      <svg width="900" height="450" viewBox="-10 -10 910 480" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="shadow">
            <feDropShadow dx="-4" dy="4" stdDeviation="6" floodOpacity="0.5" />
          </filter>
        </defs>
        <a href="#determinants">
          <g
            onMouseOver={() => {
              setTabValue('#determinants');
            }}
            style={tabValue === '#determinants' ? { filter: 'url(#shadow)' } : {}}
          >
            <DeterminantsColumn />
          </g>
        </a>
        <a href="#processes">
          <g
            onMouseOver={() => {
              setTabValue('#processes');
            }}
            style={tabValue === '#processes' ? { filter: 'url(#shadow)' } : {}}
          >
            <ProcessesColumn />
          </g>
        </a>
        <a href="#evaluation">
          <g
            onMouseOver={() => {
              setTabValue('#evaluation');
            }}
            style={tabValue === '#evaluation' ? { filter: 'url(#shadow)' } : {}}
          >
            <EvaluationColumn />
          </g>
        </a>
      </svg>

      <Box sx={{ height: '600px' }}>
        {tabValue === '#determinants' && (
          <>
            <h2 id="determinants"></h2>
            <p>
              Health Equity Implementation Framework proposes determinants believed to predict successful and equitable
              implementation.
            </p>
            <Box sx={{ display: 'flex' }}>
              <DeterminantsColumnSVG />
              <DeterminantsInteractive />
            </Box>
          </>
        )}

        {tabValue === '#processes' && (
          <>
            <h2 id="processes"></h2>
            <p>
              RESTORE provides facilitation—an interactive problem-solving approach that supports organizations in
              applying evidence-based practices in routine care.
            </p>
            <Box sx={{ display: 'flex' }}>
              <ProcessesColumnSVG />
              <Box
                sx={{
                  width: '600px',
                  margin: 'auto 50px',
                  display: 'grid',
                  gap: 2,
                  gridTemplateColumns: 'repeat(6, 1fr)'
                }}
              >
                {BlueBox('Clinical training and case consultation')}
                {BlueBox('Implementation and evaluation planning')}
                {BlueBox('Partnering with individuals with lived experience and clinical expertise (advisory boards)')}
                <Box sx={{ gridColumn: 'span 1' }} /> {/* spacer for centering last two boxes */}
                {BlueBox('Adapting interventions for diverse settings and populations')}
                {BlueBox('Administrative and technical assistance')}
              </Box>
            </Box>
          </>
        )}

        {tabValue === '#evaluation' && (
          <>
            <h2 id="evaluation"></h2>
            <p>
              We assess implementation success and health equity through Proctor’s Taxonomy of Outcomes, Expanded for
              Health Equity.
            </p>
            <Box sx={{ display: 'flex' }}>
              <EvaluationColumnSVG />
              <Box sx={{ margin: '0 auto', display: 'grid', gap: 2, gridTemplateColumns: 'repeat(3, 1fr)' }}>
                {WhiteBox(
                  <>
                    <u>Implementation Outcomes</u>
                    <br />
                    <br />
                    Acceptability
                    <br />
                    Adoption
                    <br />
                    Appropriateness
                    <br />
                    Costs
                    <br />
                    Feasibility
                    <br />
                    Fidelity
                    <br />
                    Penetration
                    <br />
                    Sustainability
                  </>
                )}
                {WhiteBox(
                  <>
                    <u>Service outcomes*</u>
                    <br />
                    <br />
                    Efficiency
                    <br />
                    Safety
                    <br />
                    Effectiveness
                    <br />
                    Equity
                    <br />
                    Patient-centeredness
                    <br />
                    Timeliness
                  </>
                )}
                {WhiteBox(
                  <>
                    <u>Client outcomes</u>
                    <br />
                    <br />
                    Satisfaction
                    <br />
                    Function
                    <br />
                    Symptomatology
                  </>
                )}
                <p>
                  <strong>*IOM Standards of Care</strong>
                </p>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}

function DeterminantsInteractive() {
  const instructionsText = (
    <>
      <p>Mouse over the diagram to learn more.</p>
    </>
  );

  const [hoverText, setHoverText] = useState(instructionsText);

  const handleMouseOver = (ptext) => (event) => {
    setHoverText(ptext);
  };
  const handleMouseOut = (event) => {
    setHoverText(instructionsText);
  };

  const recipientsProvidersText = (
    <>
      <h3>Recipient: Provider</h3>
      <h4>
        <i>Problems</i>
      </h4>
      <ul>
        <li>
          Provider practice shifts to using RESTORE supported evidence-based treatments and measurement-based care.
        </li>
        <li>Provider skill-building in conceptualization of PTSD diagnosis and oppression-based stress.</li>
        <li>
          Provider increase skill in fidelity modification to provide EBT in culturally responsive and patient centered
          approach.
        </li>
      </ul>
      <h4>
        <i>RESTORE Response</i>
      </h4>
      <ul>
        <li>
          All RESTORE clinicians are trained in 3 evidence-based interventions for PTSD and provided consultation on
          cultural adapted and responsive care.
        </li>
        <li>All RESTEORE clinicians are trained in of measurement-based care.</li>
      </ul>
    </>
  );
  const recipientsPatientsText = (
    <>
      <h3>Recipient: Patient</h3>
      <h4>
        <i>Problems</i>
      </h4>
      <ul>
        <li>Competing social (e.g., finance, housing) and psychological needs (e.g., trauma)</li>
        <li>
          Barriers to care including resources (e.g., transportation, childcare) and personal (e.g., not wanting to
          discuss trauma)
        </li>
      </ul>
      <h4>
        <i>RESTORE Response</i>
      </h4>
      <ul>
        <li>
          Provide support to patients regarding barriers to treatment (e.g., virtual provider visits, technical
          assistance, and online self-paced treatment)
        </li>
        <li>Support patient in building readiness for trauma treatment</li>
      </ul>
    </>
  );
  const theInnovationText = (
    <>
      <h3>The Innovation</h3>
      <h4>
        <i>Problems</i>
      </h4>
      <ul>
        <li>Poor guidance from evidence-based interventions on how to integrate social context into PTSD treatment</li>
        <li>Lack of language accessibility of evidence-based interventions</li>
      </ul>
      <h4>
        <i>RESTORE Response</i>
      </h4>
      <ul>
        <li>Our interventions have gone through a process of cultural adaptation</li>
        <li>Our interventions have been translated in multiple language including Spanish and Haitian Creole</li>
      </ul>
    </>
  );
  const contextText = (
    <>
      <h3>Context</h3>
      <h4>
        <i>Problems</i>
      </h4>
      <ul>
        <li>Scheduling difficulties with hospital system biweekly sessions</li>
        <li>High provider turnover in the hospital system</li>
        <li>System has limited time for provider training, consultation, and preparation for sessions</li>
      </ul>
      <h4>
        <i>RESTORE Response</i>
      </h4>
      <ul>
        <li>Our clinicians are provided with extra time for administrative work (e.g., preparing for sessions)</li>
      </ul>
    </>
  );

  return (
    <>
      <map name="determinants-venn-map">
        <area
          shape="circle"
          coords="230,145,70"
          alt="recipient: patient"
          onMouseOver={handleMouseOver(recipientsPatientsText)}
          onMouseOut={handleMouseOut}
        />
        <area
          shape="circle"
          coords="325,225,70"
          alt="the innovation"
          onMouseOver={handleMouseOver(theInnovationText)}
          onMouseOut={handleMouseOut}
        />
        <area
          shape="circle"
          coords="230,315,70"
          alt="recipient: provider"
          onMouseOver={handleMouseOver(recipientsProvidersText)}
          onMouseOut={handleMouseOut}
        />
        <area
          shape="circle"
          coords="225,225,200"
          alt="context"
          onMouseOver={handleMouseOver(contextText)}
          onMouseOut={handleMouseOut}
        />
      </map>
      <Box sx={{ width: '850px', display: 'flex' }}>
        <img
          height="450px"
          width="450px"
          useMap="#determinants-venn-map"
          src={determinantsVennImg}
          alt="determinants diagram"
        />
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>{hoverText}</Box>
      </Box>
    </>
  );
}

function AllTreatmentsAre() {
  const briefText = (
    <ul>
      <li>Brief treatments focus on building skills to manage PTSD and trauma- related distress</li>
      <li>We use a brief treatment model to increase access to care</li>
      <li>These treatments can normally be completed over 3-6 months</li>
      <li>
        Some patients find relief from a single course BRIEF treatment alone and others will find relief from sequencing
        a series of these treatments from low to high intensity
      </li>
    </ul>
  );
  const evidenceBasedText = (
    <ul>
      <li>Treatments for PTSD that have been researched and shown to be effective</li>
      <li>
        Our clinicians are highly trained in a range of evidence-based treatments for PTSD, and receive consultation
        from lead experts in the field
      </li>
      <li>We utilize brief and culturally responsive evidence-based treatments</li>
    </ul>
  );
  const culturallyResponsiveText = (
    <ul>
      <li>
        Culturally responsive care is an approach to fully see and value all aspects of a patients’ identity,
        background, and experiences.
      </li>
      <li>
        RESTORE treatments have undergone a systematic process of adaptation, to ensure that the treatments meet the
        needs of our healthcare system and the patients we serve. This includes adaptations to delivery modality,
        service setting, language, literacy, and cultural
      </li>
      <li>
        Treatment manuals and materials are available in English, Spanish, and Haitian Creole (more coming soon)—and
        services can be provided in any language through the use of BMC interpreter services
      </li>
      <li>
        RESTORE utilizes a patient advisory board to support the ongoing improvement of our treatments and service
        delivery strategies to ensure that we are providing the highest quality of culturally responsive PTSD treatment.
      </li>
    </ul>
  );

  const [hoverText, setHoverText] = useState(briefText);

  function HoverButton({ buttonText, hoverText }) {
    return (
      <Button
        onMouseOver={() => {
          setHoverText(hoverText);
        }}
        variant="contained"
        color="yellow"
      >
        {buttonText}
      </Button>
    );
  }

  return (
    <>
      <p>All treatments are:</p>
      <HoverButton buttonText="Brief" hoverText={briefText} />
      <HoverButton buttonText="Evidence-based" hoverText={evidenceBasedText} />
      <HoverButton buttonText="Culturally Responsive" hoverText={culturallyResponsiveText} />
      <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', height: '300px', margin: '0 0 30px' }}>{hoverText}</Box>
    </>
  );
}

function TreatmentsCardGrid() {
  const { loading, error, data } = useQuery(GET_TREATMENTS_CARDGRID);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <CardGrid cards={data.treatmentsCardGrids.data} />;
}

export default function Services() {
  const upcomingOngoing = useQuery(GET_UPCOMING_ONGOING);
  if (upcomingOngoing.loading) return <p>Loading...</p>;
  if (upcomingOngoing.error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Header
        title="Providing high quality services for PTSD across the health system"
        subtitle="Welcome to our hospital's website, where we offer comprehensive psychiatric services to support mental health."
      />
      <h1>SERVICES</h1>
      <p>
        RESTORE provides services to health systems and patients to enhance access to high quality PTSD treatment and
        improve health equity.
      </p>

      <a href="#Services-to-the-health-system">
        <Button variant="contained">Services to the health system</Button>
      </a>
      <a href="#Services-to-our-patients">
        <Button variant="contained">Services to our patients</Button>
      </a>

      <a href="#Services-to-the-health-system">
        <h2 id="Services-to-the-health-system">Services to the health system</h2>
      </a>
      <u>Our Implementation Model</u>
      <p>
        We believe that access to high quality and culturally responsive care is a fundamental part of achieving health
        equity.
      </p>
      <p>Four implementation science principles guide our work in advancing health equity.</p>
      <ol>
        <li>Racism is a fundamental driver of health inequities</li>
        <li>Equitable healthcare requires active engagement of community members </li>
        <li>Equitable healthcare requires multisector partnerships</li>
        <li>Context is central to healthcare equity</li>
      </ol>
      <p>RESTORE is overseen by advisory boards that help us center the community in our health equity mission.</p>
      <p>Our boards include:</p>
      <img src={boardsImg} alt="boards info" />
      <p>
        <i>Interested in getting involved on one of our boards?</i>
      </p>
      <p>We use the following Implementation Science frameworks to:</p>
      <ol>
        <li>
          Understand determinants (barriers and facilitators) of PTSD treatment implementation in usual care settings
        </li>
        <li>Apply strategies to address determinants</li>
        <li>Evaluate the effect of our strategies in achieving implementation success and health equity</li>
      </ol>

      <ImplementationFrameworkInteractive />

      <h2>Scope of services to the system</h2>
      <p>
        RESTORE provides facilitation—an interactive problem-solving approach that supports organizations in applying
        evidence-based practices in routine care.
      </p>
      <p>RESTORE’s selected facilitation strategies:</p>
      <ul>
        <li>Training and consultation initiatives</li>
        <li>Consultation to clinical and community partners on implementation planning</li>
        <li>Organize local change agents in leadership and clinician expertise</li>
        <li>
          Build reciprocal and participatory relationship with clinician teams to foster a shared vision and priorities
        </li>
        <li>
          Promote structural change to support implementation with screening, identification, and referral pathways
          across the system
        </li>
        <li>Convene community, patient, provider, and external advisory boards on PTSD and oppression-based stress</li>
        <li>Support data-driven intervention adaptation, including cultural adaptation</li>
        <li>Administrative and technical support through imbedded online flowsheets and templates</li>
      </ul>

      <p>
        RESTORE provides ongoing clinical training and case consultation to clinicians utilizing any of our selected
        evidence-based treatments.
      </p>

      <div
        style={{
          padding: '1rem',
          border: 'solid',
          borderRadius: '0.5em'
        }}
      >
        <ReactMarkdown>{upcomingOngoing.data.aboutUpcomingOngoing.data.attributes.Body}</ReactMarkdown>
      </div>

      <a href="#Services-to-our-patients">
        <h2 id="Services-to-our-patients">Services to our patients</h2>
      </a>

      <TreatmentsCardGrid />
      <p>
        Our treatment model uses a variety of service delivery strategies to maximize the reach and effectiveness of our
        treatments, and to support patient engagement.
      </p>
      <p>Services help patients to get back on the natural recovery path following trauma.</p>
      <img src={ptsdCurveImg} height="200px" />
      <p>
        Many people who experience trauma events go on to have natural recovery. Those whose recovery gets interrupted
        go on to develop PTSD.
      </p>
      <AllTreatmentsAre />
      <ScopeOfClinicalFocus />
    </>
  );
}