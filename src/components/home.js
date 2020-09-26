import React, { Component } from 'react';
import { View, } from 'react-native';
import { Text } from 'react-native-elements'
//import theme from '../template/theme'
import styles from '../template/styles'




export default class Home extends Component {



  render() {
  console.log(this.props.propsData);
  return (
      <View>
          <View style = {styles.container}>
              <Text h1>Without css</Text>
              <Text h1 h1Style = {styles.h1}>External css</Text>
              <Text h1 h1Style = {{ color: "green" }}>Internal css</Text>
          </View>
         
          <View style = {styles.lineStyle} />

          <View>
              <Text h1>Without css</Text>
              <Text h1 h1Style = {styles.h1}>External css</Text>
              <Text h1 h1Style = {{ color: "green" }}>Internal css</Text>
          </View>
      </View>
 


    );
  
  
  
  }//render


}//class