import React, {Component} from 'react';

import Home from '../Screens/home';
import AddButton from '../components/addButton';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {green} from '../constantes/constantes';
import Profile from '../Screens/profile';
import Collectorcenter from '../Screens/collectorCenter';
import Annonces from '../Screens/annonces';
import Trouver from '../Screens/findForm';
import {Text, View} from 'react-native';
import Ico from 'react-native-vector-icons/Entypo';
import Notification from '../Screens/notification';

const Tabs = createBottomTabNavigator();

export default class BottomNavigation extends Component {
  render() {
    return (
      <Tabs.Navigator
        screenOptions={{
          tabBarVisible: false,
          tabBarStyle: {backgroundColor: green},
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tabs.Screen
          name={'Home'}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome5Icon
                name="home"
                size={20}
                color="#FFF"
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: focused ? '#fff' : green,
                  paddingBottom: 7,
                  paddingHorizontal: 7,
                }}
              />
            ),
          }}>
          {() => <Home navigation={this.props.navigation} />}
        </Tabs.Screen>

        <Tabs.Screen
          name={'Notification'}
          component={Notification}
          options={{
            tabBarIcon: ({focused}) => {
              // console.log(focused);
              return (
                <Ico
                  name="bell"
                  size={30}
                  color="#fff"
                  style={{
                    borderBottomWidth: 2,
                    borderBottomColor: focused ? '#fff' : green,
                    paddingBottom: 7,
                    paddingHorizontal: 7,
                  }}
                />
              );
            },
            headerShown: true,
          }}
        />
        <Tabs.Screen
          name={'addButton'}
          component={B}
          options={{
            //   tabBarIcon: () => <AddButton />,
            tabBarIcon: () => {
              return <AddButton navigation={this.props.navigation} />;
            },
            tabBarIconStyle: {top: -42},
          }}
        />
        <Tabs.Screen
          name={'Annonces'}
          component={Annonces}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome5Icon
                name="file"
                size={20}
                color="#fff"
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: focused ? '#fff' : green,
                  paddingBottom: 7,
                  paddingHorizontal: 7,
                }}
              />
            ),
            headerShown: true,
          }}
        />

        <Tabs.Screen
          name={'profile'}
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome5Icon
                name="user"
                size={20}
                color="#FFF"
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: focused ? '#fff' : green,
                  paddingBottom: 7,
                  paddingHorizontal: 7,
                }}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    );
  }
}

// export default function BottomNavigation({navigation}) {
//   return (

//   );
class B extends Component {
  render() {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
}
