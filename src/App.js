import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Day1 from './pages/ui-1/';
import Day2 from './pages/ui-2/';

import Day4 from './pages/ui-4';
import Day5 from './pages/ui-5';

const Navigator = createDrawerNavigator({
  Day1: {
    screen: Day1,
  },
  Day2: {
    screen: Day2
  },
  Day4: {
    screen: Day4
  },
  Day5: {
    screen: Day5
  }
}, {
    initialRouteName: 'Day1'
  });

export default createAppContainer(Navigator);