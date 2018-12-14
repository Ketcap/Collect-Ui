import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Day1 from './pages/ui-1/';
import Day2 from './pages/ui-2/';
import Day4 from './pages/ui-4';
import Day6 from './pages/ui-6';
import Day9 from './pages/ui-9';

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
  Day6: {
    screen: Day6
  },
  Day9: {
    screen: Day9
  }
}, {
    initialRouteName: 'Day9'
  });

export default createAppContainer(Navigator);