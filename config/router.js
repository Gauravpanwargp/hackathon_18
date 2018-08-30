import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import MainPage from '../components/MainPage'
import ExecrisePage from '../components/ExecrisePage'
import ChatPage from '../components/ChatPage'
import ProfilePage from '../components/ProfilePage'


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
      tabBarLabel: 'Activities',
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
      tabBarLabel: 'Connect',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='chat'
          size={30}
        />
      )
    }
  },
  Profile: {
    screen: ProfilePage,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='person'
          size={30}
        />
      )
    }
  },

})
