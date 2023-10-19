import { Container, TitleH1, TitleH2, Count, ContainerWrapper } from './HomeStyle';
import { Divider, Button } from '@mui/material';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function findMax(users: number[][]) {
  console.log('findUsers');

  let maxPair = null
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].length; j++) {
      if (maxPair === null || users[i][j] > maxPair[1]) {
        maxPair = [i, j]
      }
    }
  }
  return maxPair
}

const Home = ({users}: {users: number[][]})  => {
  console.log('APP RENDERING-Home');

  const [add, setAdd] = useState(() => {

  let pair = findMax(users);
  if (pair === null) {
    return 10;
  }
  return pair[0];
  });

  const [add2, setAdd2] = useState(() => {
    let pair = findMax(users);
  if (pair === null) {
    return 10;
  }
  return pair[1];
  });

  return (
    <>
      <ContainerWrapper>
        <Container>
          <TitleH1>useState - ПРИМІТИВИ</TitleH1>
          <TitleH2>Eva Morris</TitleH2>
          <Fab
            onClick={() => {
              setAdd((actual) => actual + 1);
            }}
            size="small"
            color="primary"
            aria-label="add">
            <AddIcon />
          </Fab>
          <Count>{add}</Count>
        </Container>
        <Divider />
        <Container>
          <TitleH2>Lily Wilkins</TitleH2>
          <Fab
            onClick={() => {
              setAdd2((actual) => actual + 2);
            }}
            size="small"
            color="primary"
            aria-label="add">
            <AddIcon />
          </Fab>
          <Count>{add2}</Count>
        </Container>
        <Divider />
        <Container>
          <Fab
            onClick={() => {
              setAdd((actual) => actual - 1);
              setAdd2((actual) => actual - 1);
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
              setAdd(0);
              setAdd2(0);
            }}>
            Reset
          </Button>
        </Container>
      </ContainerWrapper>
    </>
  );
};

export default Home;
