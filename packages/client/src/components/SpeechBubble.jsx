import { theme } from '../theme.jsx';

export function SpeechBubble() {
  return (
    <svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 50 50
           c 20 -20, 270 -30, 300 0
           s 20 80, -10 100
           s -280 20, -300 0
           s -20 -80, 10 -100
           z
          "
        fill={theme.palette.yellow.main}
        stroke="black"
      />
    </svg>
  );
}
