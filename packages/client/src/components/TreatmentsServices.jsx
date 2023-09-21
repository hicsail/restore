import { Button } from '@mui/material';

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
      <img src={ determinantsVennImg } alt="determinants diagram" />

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
