import { Box, Typography } from '@mui/material';

export function SectionedHeader({ title, suptitle, text }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: 'space-between',
        margin: '0 0 1em 0'
      }}
    >
      <Box
        width={{ lg: '50%', xs: 'auto' }}
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
      >
        {suptitle && (
          <Typography variant="sectionedHeaderSuptitle" gutterBottom>
            {suptitle}
          </Typography>
        )}
        <Typography variant="sectionedHeaderTitle">{title}</Typography>
      </Box>
      {/* I would prefer to align the bottom of this Box with the baseline of the title text, but
       * short of making this an inline element, there seems to be no dignified way to do it */}
      <Box
        width={{ lg: '50%', xs: 'auto' }}
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        {text && <Typography variant="sectionedHeaderText">{text}</Typography>}
      </Box>
    </Box>
  );
}
