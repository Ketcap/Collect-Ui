import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Day1 from './pages/ui-1/';
import Day2 from './pages/ui-2/';

import Day4 from './pages/ui-4';

const Navigator = createDrawerNavigator({
  Day1: {
    screen: Day1,
  },
  Day2: {
    screen: Day2
  },
  Day4: {
    screen: Day4
  }
}, {
    initialRouteName: 'Day4'
  });

export default createAppContainer(Navigator);