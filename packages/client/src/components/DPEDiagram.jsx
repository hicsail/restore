/*
 * Functions for the generation of parts or whole of the Implementation Frameworks
 * ('Determinants/Processes/Evaluation') diagram in SVG format.
 *
 * The diagram is split into parts/functions by column, because it will need to be
 * displayed both as a whole diagram and as individual columns; additionally
 * sometimes the individual columns will need to have event listeners attached.
 */


export function DPEDiagramSVG() {
    return (
        <svg width="900" height="450" viewBox="0 0 900 450" xmlns="http://www.w3.org/2000/svg">
          <DeterminantsColumn /><ProcessesColumn /><EvaluationColumn />
        </svg>
    )
}
export function DeterminantsColumnSVG() {
    return (<svg width="300" height="450" viewBox="0 0 300 450" xmlns="http://www.w3.org/2000/svg"><DeterminantsColumn /></svg>)
}
export function ProcessesColumnSVG() {
    return (<svg width="300" height="450" viewBox="300 0 300 450" xmlns="http://www.w3.org/2000/svg"><ProcessesColumn /></svg>)
}
export function EvaluationColumnSVG() {
    return (<svg width="300" height="450" viewBox="600 0 300 450" xmlns="http://www.w3.org/2000/svg"><EvaluationColumn /></svg>)
}


export function DeterminantsColumn() {
  return (
    <g id="DeterminantsColumn">
      <g stroke="black" strokeWidth="2">
        <rect x=" 14" y="50" width="260" height="320" rx="12" ry="12" fill="white" />
        <rect x="  1" y="1" width="258" height="78" rx="40" ry="40" fill="#A888C7" />
        <circle cx=" 50" cy="160" r="10" fill="#A888C7" />
        <circle cx=" 50" cy="250" r="10" fill="#A888C7" />
        <path d="M   1 357 h 258 l 40 32 v 28 l -40 32 h -258 v -8 l 30 -24 v -28 l -30 -24 v -8 z" fill="#A888C7" />
      </g>
      <g textAnchor="start" fontFamily="sans-serif" fontSize="20">
        <text x=" 30" y="50" fontSize="26" fontWeight="bold">Determinants</text>
        <text x=" 75" y="168">Barriers</text>
        <text x=" 75" y="258">Facilitators</text>
        <text x=" 55" y="385">Health Equity</text>
        <text x=" 55" y="410">Implementation</text>
        <text x=" 55" y="435">Framework</text>
      </g>
    </g>
  )
}
export function ProcessesColumn() {
  return (
    <g id="ProcessesColumn">
      <g stroke="black" strokeWidth="2">
        <rect x="314" y="50" width="260" height="320" rx="12" ry="12" fill="white" />
        <rect x="301" y="1" width="258" height="78" rx="40" ry="40" fill="#FFD884" />
        <circle cx="350" cy="160" r="10" fill="#FFD884" />
        <circle cx="350" cy="250" r="10" fill="#FFD884" />
        <path d="M 301 357 h 258 l 40 32 v 28 l -40 32 h -258 v -8 l 30 -24 v -28 l -30 -24 v -8 z" fill="#FFD884" />
      </g>
      <g textAnchor="start" fontFamily="sans-serif" fontSize="20">
        <text x="330" y="50" fontSize="26" fontWeight="bold">Processes</text>
        <text x="375" y="160">Ways to enhance</text>
        <text x="375" y="185">implementation</text>
        <text x="375" y="250">Ways to enhance</text>
        <text x="375" y="275">equity</text>
        <text x="355" y="395">Implementation</text>
        <text x="355" y="420">Facilitation</text>
      </g>
    </g>
  )
}
export function EvaluationColumn() {
  return (
    <g id="EvaluationColumn">
      <g stroke="black" strokeWidth="2">
        <rect x="614" y="50" width="260" height="320" rx="12" ry="12" fill="white" />
        <rect x="601" y="1" width="258" height="78" rx="40" ry="40" fill="#78CEE9" />
        <circle cx="650" cy="160" r="10" fill="#78CEE9" />
        <circle cx="650" cy="250" r="10" fill="#78CEE9" />
        <path d="M 601 357 h 258 l 40 32 v 28 l -40 32 h -258 v -8 l 30 -24 v -28 l -30 -24 v -8 z" fill="#78CEE9" />
      </g>
      <g textAnchor="start" fontFamily="sans-serif" fontSize="20">
        <text x="630" y="50" fontSize="26" fontWeight="bold">Evaluation</text>
        <text x="675" y="155">Assessment of</text>
        <text x="675" y="180">implementation</text>
        <text x="675" y="205">success</text>
        <text x="675" y="245">Assessment of</text>
        <text x="675" y="270">health equity (e.g.,</text>
        <text x="675" y="295">reach, retention)</text>
        <text x="655" y="395">Proctor's Taxonomy</text>
        <text x="655" y="420">of Outcomes</text>
      </g>
    </g>
  )
}
