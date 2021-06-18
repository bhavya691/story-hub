import React from 'react';
import { Text, View, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStory from './screens/WriteStory';
import ReadStory from './screens/ReadStory';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component{
  render(){
    return (
        <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStory},
  Read: {screen: ReadStory}
},
{
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({}) => {
      const routeName = navigation.state.routeName;
      if(routeName === 'Write'){
        return(
          <Image source={require('./assets/write.png')} style={{width: 30, height:30}}/>
        )
      }else if(routeName === 'Read'){
        return(
          <Image source={require('./assets/read.png')} style={{width: 30, height:30}}/>
        )
      }
    }
  })
}
)

const switchNavigator = createSwitchNavigator({
  LoginScreen: {screen: LoginScreen},
  TabNavigator: {screen: TabNavigator}
})

const AppContainer = createAppContainer(switchNavigator)