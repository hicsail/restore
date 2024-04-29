import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import { HowToBecomeARestorePatient, MeasurementBasedCare } from '../TreatmentsServices.jsx';
import { SectionedHeader } from '../../components/SectionedHeader.jsx';
import { ScopeOfClinicalFocus } from '../../components/ScopeOfClinicalFocus.jsx';
import ptsdCurveImg from '../../assets/treatments_and_services/ptsd-curve.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router-dom';

export const Patients = () => (
  <Container sx={{ mt: 3 }}>
    <Typography variant="h3">Treatment & Services</Typography>
    <Typography variant="h4" color="primary">
      For Patients
    </Typography>
    <Stack gap={3} sx={{ mt: 3 }}>
      <Typography variant="infoPanelBBody">
        RESTORE provides evidence-based treatments for posttraumatic stress disorder (PTSD) as well as programs focused
        on resisting oppression-based stress and trauma.
      </Typography>
      <Typography variant="infoPanelBBody">
        Decisions about ending treatment are based on patient progress, symptom reduction, and clinician expertise. See
        more information on our use of measurement-based care.
      </Typography>
      <Typography variant="infoPanelBBody">
        Patients will work with their provider to select the treatment option that best fits their needs. This may
        include selecting low-intensity, high-intensity, or a series of PTSD treatments.
      </Typography>
      <Box>
        <Button variant="contained" component={NavLink} to="/patients#how-to-become-a-restore-patient">
          See more information on how to become a patient.
        </Button>
      </Box>
    </Stack>
    <SectionedHeader id="scope-of-clinical-focus" title="Scope of Clinical Focus" />
    <Box sx={{ margin: '3rem 0' }}>
      <ScopeOfClinicalFocus />
    </Box>
    <Typography variant="h5">What is PTDS?</Typography>
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <Stack
          gap={3}
          sx={{ height: '100%' }}
          display="flex"
          alignItems="start"
          justifyContent="center"
          flexDirection="column"
        >
          <Box m={4}>
            <Typography variant="infoPanelBBody">
              Many people who experience a traumatic events go on to have natural recovery.
            </Typography>
          </Box>
          <Box m={4}>
            <Typography variant="infoPanelBBody">
              Those whose recovery gets interrupted go on to devlop PTDS{' '}
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid item sm={12} md={6}>
        <img src={ptsdCurveImg} height="200px" width="auto" />
      </Grid>
    </Grid>
    <Stack gap={3}>
      <Typography variant="h5">Selected PTSD Treatments for Adults</Typography>
      <Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Cognitive processing therapy (CPT) for PTSD</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Cognitive processing therapy (CPT) for PTSD is a specific type of cognitive (thoughts) behavioral (actions)
            therapy that is effective in reducing symptoms of PTSD. CPT helps patients learn how to challenge and modify
            unhelpful thoughts related to trauma. Patients create a new understanding of the traumatic event so that it
            reduces its ongoing negative effects on current life. CPT is strongly recommended for the treatment of PTSD
            and is generally 12 appointments
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Written Exposure Therapy (WET) for PTSD</Typography>
          </AccordionSummary>
          <AccordionDetails>
            WET is a brief treatment in which patients write continuously about their target trauma for a portion of
            each session. Patients write about the same trauma for all appointments. Patients process the emotions
            related to the trauma through writing and create meaning of the event. Research supports that WET can help
            you get relief from PTSD symptoms. WET is generally 5 appointments.{' '}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              Brief Skills Training in Affective & Interpersonal Regulation (STAIR) for PTSD.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Brief Skills Training in Affective & Interpersonal Regulation (STAIR) for PTSD. STAIR is a coping
            skill-based treatment tailored to the needs of each patient. This treatment can improve trauma related
            issues in emotion management and social and relationship effectiveness. A person receiving the treatment can
            (1) develop effective coping skills for distressing feelings; (2) learn how to become more aware and
            comfortable with their emotions; (3) identify unhealthy relationship patterns; and (4) strengthen skills to
            improve relationships. Brief STAIR is generally 5 appointments.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Web-administered STAIR for PTSD.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Web-STAIR is a web-administered self-help version of Brief STAIR that will be available in English and
            Spanish. WebSTAIR consists of 10 online modules that teach skills to improve coping with emotions and
            improve relationships. Modules are completed at patients’ own pace and utilize interactive exercises,
            worksheets, or audio and video components to deliver the treatment. Our team provides coaching support to
            help patients’ progress through this program. Patients will (1) develop effective coping skills for
            distressing feelings; (2) learn how to become more aware and comfortable with their emotions; (3) identify
            unhealthy relationship patterns; and (4) strengthen skills to improve relationships. Brief Stair is
            generally 5 appointments.
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box>
        <Typography variant="h5">PTSD Treatments for Children, Adolescents, and Their Families</Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Trauma Systems Therapy for Refugees (TST-R, Ages 10-18, CAP).</Typography>
          </AccordionSummary>
          <AccordionDetails>
            TST-R is a trauma-based therapy. TST-R helps individuals and families learn skills in self-regulation,
            increasing their social support networks, minimizing stress related to cultural changes, and fostering trust
            between the helping community and the family. Treatment length varies.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Trauma-Focused Cognitive Behavioral Therapy (TF-CBT, Ages 3-18, CAP)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            TF-CBT is a cognitive-based intervention for children, adolescents and their caregivers. TF-CBT utilizes a
            multitude of different skills such as psychoeducation, fostering parenting skill acquisition and efficacy,
            relaxation techniques, affective modulation skills, cognitive coping around thoughts, feelings, and
            behaviors, processing of the trauma narrative, and increase the occurrence of safety practices. Sessions can
            be done individually as well as in conjunction with individual and family sessions; treatment ranges between
            12-25 sessions.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              Primary Care Intervention for PTSD (Ages 6-11, 11-17) and Other Evidence Based Approaches to Trauma
              Treatment.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            PCIP integrates PTSD treatment in a Primary Care setting. PCIP focuses on four main ideas: developing
            breathing retraining, coping skills, psychoeducation for the child/adolescent and their family around trauma
            symptoms and reactions, and administers homework for furthered skill development outside of and in between
            sessions. PCIP is delivered in three sessions over the course of three weeks.
          </AccordionDetails>
        </Accordion>
      </Box>
      <Typography variant="h5">Other PTSD Treatments</Typography>
      <Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Eye Movement Desensitization and Reprocessing (EMDR).</Typography>
          </AccordionSummary>
          <AccordionDetails>
            EMDR is a structured therapy that encourages the patient to focus briefly on the trauma memory while
            simultaneously experiencing bilateral stimulation (typically eye movements), which is associated with a
            reduction in the intensity of emotion associated with the trauma memories. EMDR therapy is an extensively
            researched, effective psychotherapy method proven to help people recover from trauma and PTSD symptoms.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Prolonged Exposure (PE)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Prolonged Exposure is an intervention strategy commonly used in cognitive behavioral therapy to help
            individuals confront fears. Prolonged exposure is a specific type of cognitive behavioral therapy that
            teaches individuals to gradually approach trauma-related memories, feelings and cues (e.g., places,
            situations). Patients reduce the emotional intensity associated with these cues and are able to experiences
            these cues with less distress leading to more choice in how they live their lives (e.g., no longer needing
            to avoiding places, situations). PE is strongly recommended for the treatment of PTSD
          </AccordionDetails>
        </Accordion>
      </Box>
      <Typography variant="h5">Oppression-Based Stress Supports</Typography>
      <Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Oppression-Based Stress Group</Typography>
          </AccordionSummary>
          <AccordionDetails>
            OBS is an 8-session education and skill-building group. Topics discussed in this group include validating
            the emotional impact of race-based stress/trauma, common emotional responses to racism, microaggressions,
            stress and mental health, challenges addressing the emotional impact of racism, and racial identity. Group
            members will learn coping skills for managing the mental and physical impact of race-based stress/trauma and
            fostering empowerment.{' '}
          </AccordionDetails>
        </Accordion>
      </Box>
    </Stack>
    <MeasurementBasedCare />
    <HowToBecomeARestorePatient />
  </Container>
);
