import { useState } from 'react';
import { Box, Button, Popper } from '@mui/material';

import boardsImg from '../assets/treatments_and_services/boards.gif'
import implementationScienceFrameworksFullImg from '../assets/treatments_and_services/implementation_science_frameworks_full.png'
import implementationFrameworkDeterminantsImg from '../assets/treatments_and_services/implementation_framework_determinants_column.png'
import determinantsVennImg from '../assets/treatments_and_services/determinants_diagram.jpg'
import implementationFrameworkProcessesImg from '../assets/treatments_and_services/implementation_framework_processes_column.png'
import coreFacilitationStrategiesImg from '../assets/treatments_and_services/core_facilitation_strategies.gif'
import implementationFrameworkEvaluationImg from '../assets/treatments_and_services/implementation_framework_evaluation_column.png'
import proctorsTaxonomyImg from '../assets/treatments_and_services/proctors_taxonomy_of_outcomes.jpg'

import { useQuery } from '@apollo/client';
import { GET_UPCOMING_ONGOING } from '../gql.jsx'
import ReactMarkdown from 'react-markdown';


function DeterminantsInteractive () {

  const [anchorEl, setAnchorEl] = useState(null);
  const [popperText, setPopperText] = useState(null);

  const handleMouseOver = (ptext) => (event) => {
    setAnchorEl(event.currentTarget);
    setPopperText(ptext);
  }
  const handleMouseOut = (event) => {
    setAnchorEl(null);
    setPopperText(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'determinants-diagram-popper' : undefined;

  const recipientsProvidersText = (
    <>
      <h3>Recipient: Provider</h3>
      <h4><i>Problems</i></h4>
      <ul>
        <li>Provider practice shifts to using RESTORE supported evidence-based treatments and measurement-based care.</li>
        <li>Provider skill-building in conceptualization of PTSD diagnosis and oppression-based stress.</li>
        <li>Provider increase skill in fidelity modification to provide EBT in culturally responsive and patient centered approach.</li>
      </ul>
      <h4><i>RESTORE Response</i></h4>
      <ul>
        <li>All RESTORE clinicians are trained in 3 evidence-based interventions for PTSD and provided consultation on cultural adapted and responsive care.</li>
        <li>All RESTEORE clinicians are trained in of measurement-based care.</li>
      </ul>
    </>
  )
  const recipientsPatientsText = (
    <>
      <h3>Recipient: Patient</h3>
      <h4><i>Problems</i></h4>
      <ul>
        <li>Competing social (e.g., finance, housing) and psychological needs (e.g., trauma)</li>
        <li>Barriers to care including resources (e.g., transportation, childcare) and personal (e.g., not wanting to discuss trauma)</li>
      </ul>
      <h4><i>RESTORE Response</i></h4>
      <ul>
        <li>Provide support to patients regarding barriers to treatment (e.g., virtual provider visits, technical assistance, and online self-paced treatment)</li>
        <li>Support patient in building readiness for trauma treatment</li>
      </ul>
    </>
  )
  const theInnovationText = (
    <>
      <h3>The Innovation</h3>
      <h4><i>Problems</i></h4>
      <ul>
        <li>Poor guidance from evidence-based interventions on how to integrate social context into PTSD treatment</li>
        <li>Lack of language accessibility of evidence-based interventions</li>
      </ul>
      <h4><i>RESTORE Response</i></h4>
      <ul>
        <li>Our interventions have gone through a process of cultural adaptation</li>
        <li>Our interventions have been translated in multiple language including Spanish and Haitian Creole</li>
      </ul>
    </>
  )
  const contextText = (
    <>
      <h3>Context</h3>
      <h4><i>Problems</i></h4>
      <ul>
        <li>Scheduling difficulties with hospital system biweekly sessions</li>
        <li>High provider turnover in the hospital system</li>
        <li>System has limited time for provider training, consultation, and preparation for sessions</li>
      </ul>
      <h4><i>RESTORE Response</i></h4>
      <ul>
        <li>Our clinicians are provided with extra time for administrative work (e.g., preparing for sessions)</li>
      </ul>
    </>
  )


  return (
    <>
      <map name="determinants-venn-map">
        <area
          shape="circle"
          coords="365,227,100"
          alt="recipient: patient"
          onMouseOver={handleMouseOver(recipientsPatientsText)}
          onMouseOut={handleMouseOut}
        />
        <area
          shape="circle"
          coords="520,360,100"
          alt="the innovation"
          onMouseOver={handleMouseOver(theInnovationText)}
          onMouseOut={handleMouseOut}
        />
        <area
          shape="circle"
          coords="365,500,100"
          alt="recipient: provider"
          onMouseOver={handleMouseOver(recipientsProvidersText)}
          onMouseOut={handleMouseOut}
        />
        <area
          shape="circle"
          coords="360,360,300"
          alt="context"
          onMouseOver={handleMouseOver(contextText)}
          onMouseOut={handleMouseOut}
        />
      </map>
      <img
        useMap="#determinants-venn-map"
        src={ determinantsVennImg }
        alt="determinants diagram"
      />
      <Popper id={id} open={open} anchorEl={anchorEl} placement='right'>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          {popperText}
        </Box>
      </Popper>
    </>
  )
}



export default function Services() {
  const upcomingOngoing = useQuery(GET_UPCOMING_ONGOING);
  if (upcomingOngoing.loading) return <p>Loading...</p>;
  if (upcomingOngoing.error) return <p>Error : {error.message}</p>;

  return (
    <>
      <h1>SERVICES</h1>
      <p>RESTORE provides services to health systems and patients to enhance access to high quality PTSD treatment and improve health equity.</p>

      <a href="#Services-to-the-health-system"><Button variant="contained">Services to the health system</Button></a>
      <a href="#Services-to-our-patients"><Button variant="contained">Services to our patients</Button></a>

      <a href="#Services-to-the-health-system"><h2 id="Services-to-the-health-system">Services to the health system</h2></a>
      <u>Our Implementation Model</u>
      <p>We believe that access to high quality and culturally responsive care is a fundamental part of achieving health equity.</p>
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
      <p><i>Interested in getting involved on one of our boards?</i></p>
      <p>We use the following Implementation Science frameworks to:</p>
      <ol>
        <li>Understand determinants (barriers and facilitators) of PTSD treatment implementation in usual care settings</li>
        <li>Apply strategies to address determinants</li>
        <li>Evaluate the effect of our strategies in achieving implementation success and health equity</li>
      </ol>

      <map name="implementation-science-columns">
        <area
          shape="rect"
          coords="0,0,353,599"
          href="#determinants"
          target="_self"
          alt="determinants"
        />
        <area
          shape="rect"
          coords="354,0,707,599"
          href="#processes"
          target="_self"
          alt="processes"
        />
        <area
          shape="rect"
          coords="708,0,1060,599"
          href="#evaluation"
          target="_self"
          alt="evaluation"
        />
      </map>
      <img
        useMap="#implementation-science-columns"
        src={ implementationScienceFrameworksFullImg }
        alt="implementation science infographic"
        height="599"
        width="1060"
      />


      <h2 id="determinants"></h2>
      <p>Health Equity Implementation Framework proposes determinants believed to predict successful and equitable implementation.</p>
      <img src={ implementationFrameworkDeterminantsImg } alt="implementation framework: determinants" />
      <DeterminantsInteractive />

      <h2 id="processes"></h2>
      <p>RESTORE provides facilitation—an interactive problem-solving approach that supports organizations in applying evidence-based practices in routine care.</p>
      <img src={ implementationFrameworkProcessesImg } alt="implementation framework: processes" />
      <img src={ coreFacilitationStrategiesImg } alt="core facilitation strategies diagram" />

      <h2 id="evaluation"></h2>
      <p>We assess implementation success and health equity through Proctor’s Taxonomy of Outcomes, Expanded for Health Equity.</p>
      <img src={ implementationFrameworkEvaluationImg } alt="implementation framework: evaluation" />
      <img src={ proctorsTaxonomyImg } alt="Proctor's Taxonomy of Outcomes diagram" />

      <h2>Scope of services to the system</h2>
      <p>RESTORE provides facilitation—an interactive problem-solving approach that supports organizations in applying evidence-based practices in routine care.</p>
      <p>RESTORE’s selected facilitation strategies:</p>
      <ul>
        <li>Training and consultation initiatives</li>
        <li>Consultation to clinical and community partners on implementation planning</li>
        <li>Organize local change agents in leadership and clinician expertise</li>
        <li>Build reciprocal and participatory relationship with clinician teams to foster a shared vision and priorities</li>
        <li>Promote structural change to support implementation with screening, identification, and referral pathways across the system</li>
        <li>Convene community, patient, provider, and external advisory boards on PTSD and oppression-based stress</li>
        <li>Support data-driven intervention adaptation, including cultural adaptation</li>
        <li>Administrative and technical support through imbedded online flowsheets and templates</li>
      </ul>

      <p>RESTORE provides ongoing clinical training and case consultation to clinicians utilizing any of our selected evidence-based treatments.</p>

      <div
        style={{
          padding: '1rem',
          border: 'solid',
          borderRadius: '0.5em'
        }}>
        <ReactMarkdown>{upcomingOngoing.data.aboutUpcomingOngoing.data.attributes.Body}</ReactMarkdown>
      </div>

      <a href="#Services-to-our-patients"><h2 id="Services-to-our-patients">Services to our patients</h2></a>
    </>
  )
}