import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Day1 from './pages/ui-1';

const Navigator = createDrawerNavigator({
  Day1: {
    screen: Day1,
  }
});

export default createAppContainer(Navigator);