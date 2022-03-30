import React from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import suma from './components/suma';

const Stack = createNativeStackNavigator();

function menu({ navigation }) {

  const handleClick = (typeOperation)=>{
    switch(typeOperation){
      case 'suma':{
        navigation.navigate('suma');
        break;
      }
      case 'resta':{
        navigation.navigate('resta');
        break;
      }
    }
  }

  return(
    <View>
      <Text>Calculadora practica 4</Text>
      <View>
        <Button title="Suma" onPress={()=>handleClick('suma')}/>
        <Button title="Resta" onPress={()=>handleClick('resta')}/>
      </View>
    </View>
  );
}

export default function main(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='menu'>
        <Stack.Screen name = 'menu' component = {menu}/>
        <Stack.Screen name = 'suma' component = {suma}/>
        <Stack.Screen name = 'resta' component = {suma}/>
        <Stack.Screen name = 'multiplicacion' component = {suma}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}