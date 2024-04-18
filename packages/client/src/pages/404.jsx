import { Container, Typography } from '@mui/material';

export default function NotFound() {
  return (
    <>
      <Container sx={{ margin: '1rem auto' }}>
        <Typography variant="h1">404: Page Not Found</Typography>
      </Container>
    </>
  );
}
