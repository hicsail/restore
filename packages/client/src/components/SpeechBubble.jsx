import { theme } from '../theme.jsx';
import { Box, Typography } from '@mui/material';

export function SpeechBubbleRight() {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1, display: 'flex' }}>
        <SpeechBubbleRightSVG />
      </Box>
      <Typography variant="h4" sx={{ padding: '4em 3em 6em 4em' }}>
        This is text with a speech bubble behind it. The speech bubble should expand or contract according to the length
        of the text. It... almost works... but try h4 and up/use a shorter text and watch what happens. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...
      </Typography>
    </Box>
  );
}
export function SpeechBubbleLeft() {
  return 'To do';
}

export function SpeechBubbleRightSVG() {
  return (
    <svg viewBox="0 0 370 170" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <SpeechBubblePath />
    </svg>
  );
}
export function SpeechBubbleLeftSVG() {
  return (
    <svg viewBox="0 0 370 170" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
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
