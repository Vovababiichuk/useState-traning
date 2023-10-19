import './Home2Style';
import { Container, TitleH1, TitleH2, Count, ContainerWrapper } from './Home2Style';
import { Divider, Button } from '@mui/material';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const Home2 = () => {
  console.log('APP RENDERING-Home222222222');

  const [counters, setCounters] = useState({
    counter1: 10,
    counter2: 20,
  });

  return (
    <>
      <ContainerWrapper>
        <Container>
          <TitleH1>useState - ОБЄКТИ</TitleH1>
          <TitleH2>Eva Morris</TitleH2>
          <Fab
            onClick={() => {
              setCounters((actual) => {
                return { ...actual, counter1: actual.counter1 + 10 };
              });
            }}
            size="small"
            color="primary"
            aria-label="add">
            <AddIcon />
          </Fab>
          <Count>{counters.counter1}</Count>
        </Container>
        <Divider />
        <Container>
          <TitleH2>Lily Wilkins</TitleH2>
          <Fab onClick={() => {
              setCounters((actual) => {
                return {
                  ...actual,
                  counter2: actual.counter2 + 1,
                };
              });
            }} size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Count>{counters.counter2}</Count>
        </Container>
        <Divider />
        <Container>
          <Fab
            onClick={() => {
              setCounters((actual) => {
                return {
                  ...actual,
                  counter1: actual.counter1 - 1,
                  counter2: actual.counter2 - 1,
                };
              });
            }}
            size="small"
            color="primary"
            aria-label="add">
            <RemoveIcon />
          </Fab>
        </Container>
        <Container>
          <Button
            variant="outlined"
            onClick={() => {
              setCounters((actual) => {
                return {
                  ...actual,
                  counter1: 0,
                  counter2: 0,
                };
              });
            }}>
            Reset
          </Button>
        </Container>
      </ContainerWrapper>
    </>
  );
};
