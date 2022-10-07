import React, {Component} from 'react';

import IntroScreenReduxClass from './screens/IntroNameScreenReduxClass';

import IntroAgeScreen_3 from './screens/IntroAgeScreenRedux';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import configureStore from './store/store';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <NavigationContainer>
          <Stack.Navigator>


          <Stack.Screen
              name="IntroNameScreenReduxClass"
              component={IntroScreenReduxClass}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="IntroAgeScreen_3"
              component={IntroAgeScreen_3}
              options={{
                headerShown: false,
              }}
            />
             
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
