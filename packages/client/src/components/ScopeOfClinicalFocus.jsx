import { Box } from '@mui/material';

export function ScopeOfClinicalFocus() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <svg width="900" height="450" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="900" height="450" fill="transparent" stroke="black" />

          <ellipse cx="300" cy="161" rx="270" ry="160" fill="#78cee944" stroke="#00556f" strokeWidth="1" />
          <ellipse cx="600" cy="161" rx="270" ry="160" fill="#78cee944" stroke="#00556f" strokeWidth="1" />

          <text textAnchor="middle" x="220" y="80" fontSize="16">
            Posttraumatic Stress Disorder
          </text>
          <text textAnchor="middle" x="220" y="100" fontSize="16">
            (PTSD)
          </text>

          <text textAnchor="middle" x="200" y="160" fontSize="16">
            Signs and Symptoms
          </text>
          <text textAnchor="middle" x="200" y="200" fontSize="16">
            Techniques
          </text>

          <text textAnchor="middle" x="450" y="150" fontSize="24">
            Dual Focus
          </text>

          <text textAnchor="middle" x="660" y="80" fontSize="16">
            Oppression-based Stress
          </text>
          <text textAnchor="middle" x="660" y="100" fontSize="16">
            (OBS)
          </text>

          <text textAnchor="middle" x="660" y="160" fontSize="16">
            Signs and Symptoms
          </text>
          <text textAnchor="middle" x="660" y="200" fontSize="16">
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
        </svg>
      </Box>
    </Box>
  );
}
