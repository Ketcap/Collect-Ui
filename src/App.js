import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Day1 from './pages/ui-1/';
import Day2 from './pages/ui-2/';

const Navigator = createDrawerNavigator({
  Day1: {
    screen: Day1,
  },
  Day2: {
    screen: Day2
  }
}, {
    initialRouteName: 'Day2'
  });

export default createAppContainer(Navigator);