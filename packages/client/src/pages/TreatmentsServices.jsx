import { useState } from 'react';
import { Box, Button, Paper, Popper, Typography } from '@mui/material';

import { NavLink, useLocation } from 'react-router-dom';

import determinantsVennImg from '../assets/treatments_and_services/determinants_diagram.jpg';
import ptsdCurveImg from '../assets/treatments_and_services/ptsd-curve.svg';

import { useQuery } from '@apollo/client';
import { GET_UPCOMING_ONGOING, GET_HOWTOBECOME, GET_TREATMENTS_CARDGRID } from '../gql.jsx';
import ReactMarkdown from 'react-markdown';
import { prependStrapiURL } from '../utils.jsx';

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
import { SectionedHeader } from '../components/SectionedHeader.jsx';

function ImplementationFrameworkInteractive() {
  const [tabValue, setTabValue] = useState('determinants');

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
        <g
          onMouseOver={() => {
            setTabValue('determinants');
          }}
          style={tabValue === 'determinants' ? { filter: 'url(#shadow)' } : {}}
        >
          <DeterminantsColumn />
        </g>
        <g
          onMouseOver={() => {
            setTabValue('processes');
          }}
          style={tabValue === 'processes' ? { filter: 'url(#shadow)' } : {}}
        >
          <ProcessesColumn />
        </g>
        <g
          onMouseOver={() => {
            setTabValue('evaluation');
          }}
          style={tabValue === 'evaluation' ? { filter: 'url(#shadow)' } : {}}
        >
          <EvaluationColumn />
        </g>
      </svg>

      <Box sx={{ height: '600px' }}>
        {tabValue === 'determinants' && (
          <>
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

        {tabValue === 'processes' && (
          <>
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

        {tabValue === 'evaluation' && (
          <>
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

function OurImplementationModel() {
  function PrincipleBox(text) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={prependStrapiURL('/uploads/info_section_icon_36975df2d1.svg')} />
        <Typography variant="infoPanelBBody" sx={{ padding: '1em' }}>
          {text}
        </Typography>
      </Box>
    );
  }
  return (
    <Paper sx={{ display: 'flex', margin: '1rem 0', padding: '2em' }}>
      <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="infoPanelBTitle">Our Implementation Model</Typography>
        <Typography variant="infoPanelBBody">
          We believe that access to high quality and culturally responsive care is a fundamental part of achieving
          health equity. Four implementation science principles guide our work in advancing health equity.
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {PrincipleBox('1. Racism is a fundamental driver of health inequities')}
          {PrincipleBox('2. Equitable healthcare requires active engagement of community members ')}
          {PrincipleBox('3. Equitable healthcare requires multisector partnerships')}
          {PrincipleBox('4. Context is central to healthcare equity')}
        </Box>
      </Box>
      <Box sx={{ width: '40%' }}>
        <img width="100%" src={prependStrapiURL('/uploads/implementationmodel_9f598b7a2d.png')} />
      </Box>
    </Paper>
  );
}

function ImplementationFrameworks() {
  return (
    <Paper sx={{ display: 'flex', margin: '1rem 0', padding: '2em' }}>
      <Box sx={{ width: '40%' }}>
        <img width="100%" src={prependStrapiURL('/uploads/implementationframeworks_8afd8c3f2c.png')} />
      </Box>
      <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', padding: '0 0 0 2em' }}>
        <Typography variant="infoPanelBTitle" sx={{ margin: '0 0 0.8em 0' }}>
          Implementation Frameworks
        </Typography>
        <Typography variant="infoPanelBBody" sx={{ lineHeight: '1.8em' }}>
          We use the following Implementation Science frameworks to:
          <ol>
            <li>
              Understand determinants (barriers and facilitators) of PTSD treatment implementation in usual care
              settings
            </li>
            <li>Apply strategies to address determinants</li>
            <li>Evaluate the effect of our strategies in achieving implementation success and health equity</li>
          </ol>
        </Typography>
      </Box>
    </Paper>
  );
}

function ScopeOfServicesToSystem() {
  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', margin: '1rem 0', padding: '2em 10em' }}>
      <Typography variant="infoPanelBTitle" sx={{ textAlign: 'center' }}>
        Scope of Services to the System
      </Typography>
      <Typography variant="infoPanelBBody" sx={{ margin: '1em 0' }}>
        <p>
          RESTORE provides facilitation—an interactive problem-solving approach that supports organizations in applying
          evidence-based practices in routine care.
        </p>
        <p>RESTORE’s selected facilitation strategies:</p>
      </Typography>
      <Typography variant="infoPanelBBody" sx={{ fontWeight: 'bold' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 2em' }}>
          <p>Training and consultation initiatives</p>
          <p>Consultation to clinical and community partners on implementation planning</p>
          <p>Organize local change agents in leadership and clinician expertise</p>
          <p>
            Build reciprocal and participatory relationship with clinician teams to foster a shared vision and
            priorities
          </p>
          <p>
            Promote structural change to support implementation with screening, identification, and referral pathways
            across the system
          </p>
          <p>Convene community, patient, provider, and external advisory boards on PTSD and oppression-based stress</p>
          <p>Support data-driven intervention adaptation, including cultural adaptation</p>
          <p>Administrative and technical support through imbedded online flowsheets and templates</p>
        </Box>
      </Typography>
    </Paper>
  );
}

function UpcomingOngoing() {
  const { loading, error, data } = useQuery(GET_UPCOMING_ONGOING);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Typography variant="h4">Discover our comprehensive range of psychiatric services at our hospital</Typography>
      <Paper sx={{ margin: '1rem 0', padding: '1rem', border: 'solid', borderRadius: '0.5em' }}>
        <ReactMarkdown>{data.aboutUpcomingOngoing.data.attributes.Body}</ReactMarkdown>
      </Paper>
    </>
  );
}

function TreatmentsCardGrid() {
  const { loading, error, data } = useQuery(GET_TREATMENTS_CARDGRID);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <SectionedHeader
        suptitle="Services to our patients"
        title="Our Treatment Model"
        text="Our treatment model uses a variety of service delivery strategies to maximize the reach and effectiveness of our treatments, and to support patient engagement. Services help patients to get back on the natural recovery path following trauma. All treatments are:"
      />
      <CardGrid cards={data.treatmentsCardGrids.data} />
    </>
  );
}

function MeasurementBasedCare() {
  return (
    <Paper sx={{ display: 'flex', margin: '1rem 0', padding: '2em' }}>
      <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', padding: '0 2em 0 0' }}>
        <Typography variant="infoPanelBTitle">Measurement-based care</Typography>
        <Typography variant="infoPanelBBody">
          We use measurement-based care to develop individualized treatment plans and understand best practices for
          stepping and sequencing treatments.
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <p>
            Clients complete questionnaires at their intake and every 6 months to measure progress through treatment
          </p>
          <p>Responses are used by clinicians to understand if a treatment is working</p>
          <p>Clinicians use this information to offer additional treatment or engagement support to patients</p>
          <p>Patients can opt out of these questionnaires at any time</p>
        </Box>
        <Typography variant="infoPanelBBody">
          We know that engagement in PTSD treatment can be challenging, so RESTORE provides additional supports.
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <p>Community health workers to provide outreach and skills training </p>
          <p>Clinic data monitoring to understand engagement and retention in treatment in the practice</p>
          <p>Guidance from our patient advisory board on maintaining patient-centered care</p>
        </Box>
      </Box>
      <Box sx={{ width: '40%' }}>
        <img width="100%" src={prependStrapiURL('/uploads/measurementbasedcare_19e723be73.png')} />
      </Box>
    </Paper>
  );
}

function TreatmentsAndServices() {
  return (
    <Paper sx={{ margin: '1rem 0', padding: '2em' }}>
      <Typography variant="infoPanelBTitle">Treatments and Services</Typography>
      <Typography variant="infoPanelBBody">
        <p>
          RESTORE provides evidence-based treatments for posttraumatic stress disorder (PTSD) as well as programs
          focused on resisting oppression-based stress and trauma.
        </p>
        <p>
          Decisions about ending treatment are based on patient progress, symptom reduction, and clinician expertise.
        </p>
        <p>
          Patients will work with their provider to select the treatment option that best fits their needs. This may
          include selecting low-intensity, high-intensity, or a series of PTSD treatments.
        </p>
        <ul>
          <li>
            <strong>Trauma Systems Therapy for Refugees (TST-R, Ages 10-18, CAP).</strong> TST-R is a trauma-based
            therapy. TST-R helps individuals and families learn skills in self-regulation, increasing their social
            support networks, minimizing stress related to cultural changes, and fostering trust between the helping
            community and the family. Treatment length varies.
          </li>
          <li>
            <strong>Trauma-Focused Cognitive Behavioral Therapy (TF-CBT, Ages 3-18, CAP).</strong> TF-CBT is a
            cognitive-based intervention for children, adolescents and their caregivers. TF-CBT utilizes a multitude of
            different skills such as psychoeducation, fostering parenting skill acquisition and efficacy, relaxation
            techniques, affective modulation skills, cognitive coping around thoughts, feelings, and behaviors,
            processing of the trauma narrative, and increase the occurrence of safety practices. Sessions can be done
            individually as well as in conjunction with individual and family sessions; treatment ranges between 12-25
            sessions.
          </li>
          <li>
            <strong>
              Primary Care Intervention for PTSD (Ages 6-11, 11-17) and Other Evidence Based Approaches to Trauma
              Treatment.
            </strong>{' '}
            PCIP integrates PTSD treatment in a Primary Care setting. PCIP focuses on four main ideas: developing
            breathing retraining, coping skills, psychoeducation for the child/adolescent and their family around trauma
            symptoms and reactions, and administers homework for furthered skill development outside of and in between
            sessions. PCIP is delivered in three sessions over the course of three weeks.
          </li>
        </ul>
      </Typography>
    </Paper>
  );
}

function HowToBecomeARestorePatient() {
  const { loading, error, data } = useQuery(GET_HOWTOBECOME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Typography variant="h4">How to Become a RESTORE Patient</Typography>
      <Paper sx={{ margin: '1rem 0', padding: '1rem', border: 'solid', borderRadius: '0.5em' }}>
        <ReactMarkdown>{data.howToBecomeARestorePatient.data.attributes.Body}</ReactMarkdown>
      </Paper>
    </>
  );
}

export default function Services() {
  const { hash } = useLocation();
  const [tabValue, setTabValue] = useState(hash || '#Services-to-the-health-system');

  return (
    <>
      <Typography variant="h3">Our Services</Typography>
      <p>
        RESTORE provides services to health systems and patients to enhance access to high quality PTSD treatment and
        improve health equity.
      </p>

      <Box sx={{ display: 'flex' }}>
        <Button
          component={NavLink}
          to="#Services-to-the-health-system"
          onClick={() => setTabValue('#Services-to-the-health-system')}
          sx={{
            padding: '1rem',
            borderRadius: '0',
            border: 'solid',
            ...(tabValue === '#Services-to-the-health-system'
              ? { borderBottomColor: 'transparent' }
              : { borderColor: 'transparent', borderBottom: 'solid', borderRightStyle: 'none' })
          }}
        >
          <Typography variant="h4">Services to the health system</Typography>
        </Button>
        <Button
          component={NavLink}
          to="#Services-to-our-patients"
          onClick={() => setTabValue('#Services-to-our-patients')}
          sx={{
            padding: '1rem',
            borderRadius: '0',
            border: 'solid',
            ...(tabValue === '#Services-to-our-patients'
              ? { borderBottomColor: 'transparent' }
              : { borderColor: 'transparent', borderBottom: 'solid', borderLeftStyle: 'none' })
          }}
        >
          <Typography variant="h4">Services to our patients</Typography>
        </Button>
      </Box>

      {tabValue == '#Services-to-the-health-system' && (
        <>
          <OurImplementationModel />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ width: '50%' }}>
              <p>
                RESTORE is overseen by advisory boards that help us center the community in our health equity mission.
              </p>
              <p>
                Our boards include: Community Members; Patients; Clinical and Hospital Leadership; Internal Experts;
                External Experts.
              </p>
            </Box>
            <Box>
              <img src={prependStrapiURL('/uploads/ourboards_placeholder_1376b51686.png')} />
            </Box>
          </Box>

          <ImplementationFrameworks />
          <ImplementationFrameworkInteractive />

          <ScopeOfServicesToSystem />
          <UpcomingOngoing />
        </>
      )}

      {tabValue == '#Services-to-our-patients' && (
        <>
          <Box sx={{ margin: '4rem', width: '576px', display: 'flex', flexDirection: 'column' }}>
            <img src={ptsdCurveImg} height="200px" width="576px" />
            <p>
              Many people who experience trauma events go on to have natural recovery. Those whose recovery gets
              interrupted go on to develop PTSD.
            </p>
          </Box>
          <TreatmentsCardGrid />
          <MeasurementBasedCare />
          <TreatmentsAndServices />
          <br />
          <ScopeOfClinicalFocus />
          <br />
          <HowToBecomeARestorePatient />
        </>
      )}
    </>
  );
}
