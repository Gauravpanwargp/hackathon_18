import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import MainPage from '../components/MainPage'
import ExecrisePage from '../components/ExecrisePage'
import ChatPage from '../components/ExecrisePage'

export const Tabs = createBottomTabNavigator({
  Home: {
    screen: MainPage,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='home'
          size={30}
        />
      )
    }
  },
  Execrise: {
    screen: ExecrisePage,
    navigationOptions: {
      tabBarLabel: 'Activity',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='fitness-center'
          size={30}
        />
      )
    }
  },
  Chat: {
    screen: ChatPage,
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='chat'
          size={30}
        />
      )
    }
  },

})
