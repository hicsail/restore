import { theme } from '../theme.jsx';
import { Box, Typography } from '@mui/material';

export function SpeechBubbleRight({ text }) {
  return SpeechBubble(false, { text });
}

export function SpeechBubbleLeft({ text }) {
  return SpeechBubble(true, { text });
}

function SpeechBubble(isLeft, { text }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <svg
        style={{ position: 'absolute', zIndex: -1 }}
        width="100%"
        height="100%"
        viewBox="0 0 370 170"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isLeft ? (
          <g transform="scale(-1, 1) translate(-370,0)">
            <SpeechBubblePath />
          </g>
        ) : (
          <SpeechBubblePath />
        )}
      </svg>
      <Typography
        variant="h5"
        sx={{
          padding: isLeft ? '4em 6em 7em 5em' : '4em 5em 7em 7em',
          fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
        }}
      >
        {text}
      </Typography>
    </Box>
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
