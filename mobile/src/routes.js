import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationContainer, NavigationContainer } from '@react-navigation/native';
import Detail from './pages/Detail/';
import Incidents from './pages/Incidents';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen component={Incidents} name="Incidents"/>
                <AppStack.Screen component={Detail} name = "Detail"/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
