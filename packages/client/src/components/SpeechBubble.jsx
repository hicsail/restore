import { theme } from '../theme.jsx';

export function SpeechBubbleRight() {
  return (
    <svg width="370" height="170" xmlns="http://www.w3.org/2000/svg">
      <SpeechBubblePath />
    </svg>
  );
}
export function SpeechBubbleLeft() {
  return (
    <svg width="370" height="170" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(-1, 1) translate(-370,0)">
        <SpeechBubblePath />
      </g>
    </svg>
  );
}
function SpeechBubblePath() {
  // viewbox is 0 0 370 170.
  return (
    <path
      d="M 40 30
         c 30 -30, 270 -30, 300 0
         s 20 80, -10 100
         s -250 -8, -300 20
         s 6 -2, 0 -20
         s -20 -80, 10 -100
         z
        "
      fill={theme.palette.yellow.main}
      stroke="black"
      strokeWidth="2"
    />
  );
}
