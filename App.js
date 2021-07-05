import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
import Aboutme from './components/Aboutme'

export default function App() {
  return (
    <View style={mystyle.ViewStyle}>
    <Text style={{marginTop:50,textAlign:'center',fontWeight:'bold',fontSize:25}}> React Props</Text>
      <Card style={[mystyle.cardStyle,{marginTop:15}]}>
      <Aboutme name='Manish' pic='https://i.imgur.com/1g0KaZZ.png'/>
        </Card>
        <Card style={mystyle.cardStyle}>
      <Aboutme name='Avikesh' pic='https://i.imgur.com/1g0KaZZ.png'/>
        </Card>
        <Card style={mystyle.cardStyle}>
      <Aboutme name='Chittra' pic='https://i.imgur.com/g6pdlmJ.png'/>
        </Card>
        
      
    </View>
  );
}

const mystyle = StyleSheet.create({
  cardStyle: {
    
    padding: 2,
    marginLeft: 15,
    marginRight: 15,
  backgroundColor: 'white',
    marginBottom:10,    
    justifyContent:'center',

  },
  ViewStyle :{
      backgroundColor: '#ecf0f1',
      justifyContent:'center',
     
  },
});
