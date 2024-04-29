import React from 'react';
import SortableList from './SortableList';
import { Container, Typography } from '@mui/material';


function App() {
  return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Extraction Activities
        </Typography>
        <SortableList />
      </Container>
  );
}

export default App;
