import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Main from './src/components/Main.js';
import InformationsVehicle from './src/components/InformationsVehicle.js';
import Items from './src/components/Items.js';
import ExchangeParts from './src/components/ExchangeParts.js';
import Workshops from './src/components/Workshops.js';

const App: () => React$Node = () => {
  return (
    <>
    <Router>
      <Stack key="root">
        <Scene key="main" component={Main} hideNavBar={true} />
        <Scene key="informationsVehicle" component={InformationsVehicle} hideNavBar={true} />
        <Scene key="items" component={Items} hideNavBar={true} />
        <Scene key="exchangeParts" component={ExchangeParts} hideNavBar={true} />
        <Scene key="workshops" component={Workshops} hideNavBar={true} />
      </Stack>
    </Router>
    </>
  );
};

export default App;
