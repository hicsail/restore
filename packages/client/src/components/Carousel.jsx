import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Carousel = ({ logos, displayCount }) => {
  const logoWidth = 200;
  const logoMargin = 20;
  const initialOffset = -logoMargin;
  const totalWidth = logos.length * (logoWidth + logoMargin * 2);
  const maxMarginLeft = -(totalWidth - displayCount * (logoWidth + logoMargin * 2));

  const [marginLeft, setMarginLeft] = useState(initialOffset);

  const handleNext = () => {
    setMarginLeft((currentMargin) => currentMargin - logoWidth - logoMargin * 2);
  };

  const handlePrev = () => {
    setMarginLeft((currentMargin) => currentMargin + logoWidth + logoMargin * 2);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" alignItems="center" height={200}>
        <IconButton onClick={handlePrev} disabled={marginLeft === initialOffset}>
          <ArrowBackIosIcon />
        </IconButton>
        <Box width={`${displayCount * logoWidth + displayCount * logoMargin * 2}px`} overflow="hidden">
          <Box
            display="flex"
            alignItems="center"
            height={200}
            style={{ marginLeft: `${marginLeft}px`, transition: 'margin-left 0.5s' }}
          >
            {logos.map((logo, index) => (
              <Link key={index} to={logo.url}>
                <Box
                  component="img"
                  src={logo.src}
                  alt={`logo-${index}`}
                  sx={{ width: `${logoWidth}px`, marginX: `${logoMargin}px` }}
                />
              </Link>
            ))}
          </Box>
        </Box>
        <IconButton onClick={handleNext} disabled={marginLeft <= maxMarginLeft}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
