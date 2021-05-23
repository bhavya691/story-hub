import React from 'react';
import { Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStory from './screens/WriteStory';
import ReadStory from './screens/ReadStory';

export default class App extends React.Component{
  render(){
    return (
        <AppContainer />
    );
  }
}

const tabNavigator = createBottomTabNavigator({
  Write_Story: {screen: WriteStory},
  Read_Story: {screen: ReadStory}
},
{
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({}) => {
      const routeName = navigation.state.routeName;
      if(routeName === 'Write_Story'){
        return(
          <Image source={require('./assets/write.png')} style={{width: 30, height:30}}/>
        )
      }else if(routeName === 'Read_Story'){
        return(
          <Image source={require('./assets/read.png')} style={{width: 30, height:30}}/>
        )
      }
    }
  })
}
)

const AppContainer = createAppContainer(tabNavigator)