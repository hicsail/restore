import { theme } from '../theme.jsx';

export function SpeechBubble() {
  return (
    <svg width="370" height="170" xmlns="http://www.w3.org/2000/svg">
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
    </svg>
  );
}
