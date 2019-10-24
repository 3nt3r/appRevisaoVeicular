import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Main from './src/components/Main.js';
import Informations from './src/components/Informations.js';

const App: () => React$Node = () => {
  return (
    <>
    <Router>
      <Stack key="root">
        <Scene key="main" component={Main} hideNavBar={true} />
        <Scene key="informations" component={Informations} hideNavBar={true} />
      </Stack>
    </Router>
    </>
  );
};

export default App;
