import { Button } from '@mui/material';

import boardsImg from '../assets/treatments_and_services/boards.gif'
import implementationScienceFrameworksFullImg from '../assets/treatments_and_services/implementation_science_frameworks_full.png'

export default function Services() {
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

      <h2 id="processes"></h2>

      <h2 id="evaluation"></h2>

      <a href="#Services-to-our-patients"><h2 id="Services-to-our-patients">Services to our patients</h2></a>
    </>
  )
}
