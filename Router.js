import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import List from './components/List';
import Question from './components/Question';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
    <Stack key="root" title="WR->ENEM">
      <Scene key="list" component={List} title="AVALIAPP (EEM WR)" initial />
      <Scene key="question" component={Question} title="RESPONDA" />
    </Stack>
    </Router>
  );
};

export default RouterComponent;
