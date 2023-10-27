import { useState } from 'react';
import { Box } from '@mui/material';

export function ScopeOfClinicalFocus() {
  const [tabValue, setTabValue] = useState('PTSD');

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <svg width="900" height="350" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* For mouse-over purposes, the center part of the diagram should be split down the middle */}
            <clipPath id="left-half">
              <rect x="0" y="0" width="450" height="240" />
            </clipPath>
            <clipPath id="right-half">
              <rect x="450" y="0" width="450" height="240" />
            </clipPath>
          </defs>

          <ellipse cx="350" cy="121" rx="270" ry="120" fill="#7fc2bdff" stroke="#7fc2bd" strokeWidth="1" />
          <ellipse cx="550" cy="121" rx="270" ry="120" fill="#206d85b2" stroke="#00556f" strokeWidth="1" />
          <text textAnchor="start" x="120" y="125" fontSize="24">
            PTSD
          </text>
          <text textAnchor="middle" x="450" y="125" fontSize="24">
            Dual Focus
          </text>
          <text textAnchor="end" x="780" y="115" fontSize="24">
            Oppression-
          </text>
          <text textAnchor="end" x="780" y="145" fontSize="24">
            Based Stress
          </text>

          {/* Overlay transparent ellipses for mouse-over areas */}
          <ellipse
            cx="350"
            cy="121"
            rx="270"
            ry="120"
            fill="transparent"
            clipPath="url(#left-half)"
            onMouseOver={() => {
              setTabValue('PTSD');
            }}
          />
          <ellipse
            cx="550"
            cy="121"
            rx="270"
            ry="120"
            fill="transparent"
            clipPath="url(#right-half)"
            onMouseOver={() => {
              setTabValue('OBS');
            }}
          />

          <path
            d="M 30 300 l 30 -30 v 15 h 780 v -15 l 30 30 l -30 30 v -15 h -780 v 15 l -30 -30 z"
            fill="#ffff00"
            stroke="#003c50"
          />
          <rect x="80" y="248" width="200" height="100" fill="#e4dff5" stroke="black" strokeWidth="1" />
          <rect x="350" y="248" width="200" height="100" fill="#e4dff5" stroke="black" strokeWidth="2" />
          <rect x="620" y="248" width="200" height="100" fill="#e4dff5" stroke="black" strokeWidth="1" />
          <text textAnchor="start" x="100" y="290" fontSize="24">
            Culturally
          </text>
          <text textAnchor="start" x="100" y="320" fontSize="24">
            Responsive
          </text>
          <text textAnchor="start" x="370" y="290" fontSize="24">
            Culturally
          </text>
          <text textAnchor="start" x="370" y="320" fontSize="24">
            Adapted
          </text>
          <text textAnchor="start" x="650" y="290" fontSize="24">
            OBS-specific
          </text>
          <text textAnchor="start" x="650" y="320" fontSize="24">
            support
          </text>
        </svg>
      </Box>
      <Box sx={{ height: '600px' }}>
        {tabValue === 'PTSD' && <h2 id="PTSD">Placeholder for PTSD content</h2>}

        {tabValue === 'OBS' && (
          <>
            <h2 id="OBS"></h2>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <RaceBasedStressDiagram />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

function RaceBasedStressDiagram() {
  return (
    <svg width="600" height="600" xmlns="http://www.w3.org/2000/svg">
      <g id="lines" stroke="#4d78c6" strokeWidth="2">
        <line x1="300" y1="71" x2="300" y2="90" />
        <line x1="145" y1="90" x2="445" y2="90" />
        <line x1="145" y1="90" x2="145" y2="200" />
        <line x1="445" y1="90" x2="445" y2="200" />
      </g>
      <g id="boxes">
        <rect x="180" y="1" width="190" height="70" rx="2%" ry="2%" />
        <rect x="60" y="100" width="170" height="70" rx="2%" ry="2%" />
        <rect x="320" y="100" width="240" height="70" rx="2%" ry="2%" />
        <rect x="10" y="200" width="270" height="195" rx="2%" ry="2%" />
        <rect x="310" y="200" width="270" height="380" rx="2%" ry="2%" />
      </g>
      <use href="#boxes" x="0" y="0" fill="#9cacda" stroke="#00000055" />
      <use href="#boxes" x="10" y="10" fill="#ffffffdd" stroke="#4d78c6" />
      <g id="title-text" fontSize="22" textAnchor="middle">
        <text x="280" y="35">
          Race-Based
        </text>
        <text x="280" y="65">
          Stress
        </text>
        <text x="150" y="150">
          Symptoms
        </text>
        <text x="450" y="150">
          Treatment Techniques
        </text>
      </g>
      <g id="text" fontSize="16" fontStyle="italic" textAnchor="middle">
        <text x="150" y="250">
          Uncontrollable distress
        </text>
        <text x="150" y="287">
          Alienation from others
        </text>
        <text x="150" y="324">
          Worry about safety and future
        </text>
        <text x="150" y="361">
          Keyed up/on guard
        </text>
        <text x="450" y="250">
          Validation
        </text>
        <text x="450" y="287">
          Psychoeducation
        </text>
        <text x="450" y="324">
          Consciousness raising
        </text>
        <text x="450" y="361">
          Processing grief/loss
        </text>
        <text x="450" y="398">
          Committing to action
        </text>
        <text x="450" y="435">
          Story-telling
        </text>
        <text x="450" y="472">
          Bolstering self-esteem
        </text>
        <text x="450" y="509">
          Celebrating culture, family, history
        </text>
        <text x="450" y="546">
          Resistance through joy
        </text>
      </g>
    </svg>
  );
}
