import { useEffect, useRef, useState } from 'react';
import { Box, Paper, Popper } from '@mui/material';

export function ScopeOfClinicalFocus() {
  // The interactive venn diagram as currently designed/requested
  // does not make it very obvious that one can hover over the diagram text
  // to get more info. So this "initial Popper" logic makes it so that
  // when the user first sees the diagram, the popper is already open
  // on one of the four locations.
  const [showedInitialPopper, setShowedInitialPopper] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [popperText, setPopperText] = useState(null);

  const ptsdSignsSymptomsRef = useRef(null);
  const ptsdTechniquesRef = useRef(null);
  const obsSignsSymptomsRef = useRef(null);
  const obsTechniquesRef = useRef(null);

  useEffect(() => {
    if (!showedInitialPopper) {
      setAnchorEl(ptsdSignsSymptomsRef.current);
      setPopperText(ptsdSignsSymptomsText);
      setShowedInitialPopper(true);
    }
  });

  const handleMouseOver = (text) => (event) => {
    setPopperText(text);
    setAnchorEl(event.currentTarget);
  };
  const handleMouseOut = () => {
    setAnchorEl(null);
  };

  const ptsdSignsSymptomsText = (
    <ul>
      <li>Re-experiencing of the trauma event</li>
      <li>Avoidance of trauma memory, reminders, and emotions</li>
      <li>Depressive symptoms</li>
      <li>Feeling isolated or disconnected from others</li>
      <li>Feeling on guard and easily startles</li>
    </ul>
  );
  const ptsdTechniquesText = (
    <ul>
      <li>Relaxation</li>
      <li>Cognitive Reappraisal</li>
      <li>Emotional Processing (Exposures)</li>
      <li>Approach coping Skills Training</li>
    </ul>
  );
  const obsSignsSymptomsText = (
    <ul>
      <li>Uncontrollable stress....</li>
    </ul>
  );
  const obsTechniquesText = (
    <ul>
      <li>Validation</li>
      <li>Psychoeducation</li>
      <li>Consciousness Raising</li>
      <li>Emotional Processing</li>
      <li>Committing to action</li>
      <li>Storytelling</li>
      <li>Self Esteem</li>
      <li>Celebrating Cultural and Familial History</li>
      <li>Resistance through Joy</li>
      <li>Coping Skills Training</li>
    </ul>
  );
  const culturallyResponsiveText = <p>Placeholder text for culturally responsive treatments</p>;
  const culturallyAdaptedText = <p>Placeholder text for culturally adapted treatments</p>;
  const culturallySpecificText = <p>Placeholder text for culturally specific and emergent supports</p>;

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <svg width="900" height="450" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="300" cy="161" rx="270" ry="160" fill="#78cee944" stroke="#00556f" strokeWidth="1" />
          <ellipse cx="600" cy="161" rx="270" ry="160" fill="#78cee944" stroke="#00556f" strokeWidth="1" />

          <text textAnchor="middle" x="220" y="80" fontSize="18" fontWeight="bold">
            Posttraumatic Stress Disorder
          </text>
          <text textAnchor="middle" x="220" y="100" fontSize="18" fontWeight="bold">
            (PTSD)
          </text>

          <text
            ref={ptsdSignsSymptomsRef}
            onMouseOver={handleMouseOver(ptsdSignsSymptomsText)}
            onMouseOut={handleMouseOut}
            textAnchor="middle"
            x="200"
            y="160"
            fontSize={anchorEl == ptsdSignsSymptomsRef.current ? 22 : 16}
          >
            Signs and Symptoms
          </text>
          <text
            ref={ptsdTechniquesRef}
            onMouseOver={handleMouseOver(ptsdTechniquesText)}
            onMouseOut={handleMouseOut}
            textAnchor="middle"
            x="200"
            y="200"
            fontSize={anchorEl == ptsdTechniquesRef.current ? 22 : 16}
          >
            Techniques
          </text>

          <text textAnchor="middle" x="450" y="150" fontSize="24">
            Dual Focus
          </text>

          <text textAnchor="middle" x="660" y="80" fontSize="18" fontWeight="bold">
            Oppression-based Stress
          </text>
          <text textAnchor="middle" x="660" y="100" fontSize="18" fontWeight="bold">
            (OBS)
          </text>

          <text
            ref={obsSignsSymptomsRef}
            onMouseOver={handleMouseOver(obsSignsSymptomsText)}
            onMouseOut={handleMouseOut}
            textAnchor="middle"
            x="700"
            y="160"
            fontSize={anchorEl == obsSignsSymptomsRef.current ? 22 : 16}
          >
            Signs and Symptoms
          </text>
          <text
            ref={obsTechniquesRef}
            onMouseOver={handleMouseOver(obsTechniquesText)}
            onMouseOut={handleMouseOut}
            textAnchor="middle"
            x="700"
            y="200"
            fontSize={anchorEl == obsTechniquesRef.current ? 22 : 16}
          >
            Techniques
          </text>

          <path d="M  30 340 h 255 l 50 50 l -50 50 h -255 l 50 -50 l -50 -50 z" fill="#78cee9ff" />
          <path d="M 300 340 h 255 l 50 50 l -50 50 h -255 l 50 -50 l -50 -50 z" fill="#78cee9ff" />
          <path d="M 570 340 h 255 l 50 50 l -50 50 h -255 l 50 -50 l -50 -50 z" fill="#78cee9ff" />

          <text textAnchor="middle" x="180" y="380" fontSize="18">
            Culturally Responsive
          </text>
          <text textAnchor="middle" x="180" y="410" fontSize="18">
            Treatments
          </text>

          <text textAnchor="middle" x="450" y="380" fontSize="18">
            Culturally Adapted
          </text>
          <text textAnchor="middle" x="450" y="410" fontSize="18">
            Treatments
          </text>

          <text textAnchor="middle" x="720" y="380" fontSize="18">
            Culturally Specific and
          </text>
          <text textAnchor="middle" x="720" y="410" fontSize="18">
            Emergent Supports
          </text>

          {/* For the mouseover/mouseout on the bottom arrows, use transparent overlays,
              bc otherwise moving cursor over the text triggers a mouseOut*/}
          <path
            d="M  30 340 h 255 l 50 50 l -50 50 h -255 l 50 -50 l -50 -50 z"
            fill="transparent"
            onMouseOver={handleMouseOver(culturallyResponsiveText)}
            onMouseOut={handleMouseOut}
          />
          <path
            d="M 300 340 h 255 l 50 50 l -50 50 h -255 l 50 -50 l -50 -50 z"
            fill="transparent"
            onMouseOver={handleMouseOver(culturallyAdaptedText)}
            onMouseOut={handleMouseOut}
          />
          <path
            d="M 570 340 h 255 l 50 50 l -50 50 h -255 l 50 -50 l -50 -50 z"
            fill="transparent"
            onMouseOver={handleMouseOver(culturallySpecificText)}
            onMouseOut={handleMouseOut}
          />
        </svg>
        <Popper id="venn-popper" open={Boolean(anchorEl)} anchorEl={anchorEl}>
          <Paper>{popperText}</Paper>
        </Popper>
      </Box>
    </Box>
  );
}
