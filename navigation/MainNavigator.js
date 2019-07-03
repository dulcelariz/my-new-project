import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DashboardScreen from '../screens/DashboardScreen';
import OrdersScreen from '../screens/OrdersScreen';
import DetailScreen from '../screens/DetailScreen';
import InProgressScreen from '../screens/InProgressScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const DashboardStack = createStackNavigator(
  {
    Dashboard: DashboardScreen,
  },
  config
);

DashboardStack.path = '';

const AllOrdersStack = createStackNavigator(
  {
    Orders: OrdersScreen,
    Detail: DetailScreen,
    InProgress: InProgressScreen
  },
  config
);

AllOrdersStack.path = '';

const drawerNavigator = createDrawerNavigator({
  DashboardStack,
  AllOrdersStack,
});

export default drawerNavigator;
