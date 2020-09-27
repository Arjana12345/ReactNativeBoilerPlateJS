import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Alert,
  
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProvider, Button, Text, Input, } from 'react-native-elements';
import theme from '../template/theme';
import styles from '../template/styles';


export default class Login extends Component {
  
  render() {
    console.log(this.props.propsData);
    return (
      <ScrollView style={styles.scroll}>
         <View style={styles.labelContainer}>

            <Text style={styles.endText} onPress={() => console.log('Forgot Password')}>
            Forgot Password
            </Text>

         </View>
   
      

      <View style={styles.labelContainer}>
         
            <Input
                    placeholder='Username or Email'
                    errorStyle={{ color: 'red' }}
                    errorMessage='ENTER A VALID ERROR HERE'
                    leftIcon={
                        <Icon
                        name='user'
                        size={24}
                        color='blue'
                    />
                    
                    }
                />
      
      </View> 
      <View style={styles.labelContainer}>
            <Input 
                placeholder="Password"
                secureTextEntry={true} 
                leftIcon={
                    <Icon
                    name='key'
                    size={24}
                    color='blue'
                    />
                }
            
            />
      </View>

      

      <View style={styles.labelContainer}>
           
                <View style={styles.inline}>
                    <Icon name="facebook-official" size={30} color="#3B5699" />
                    <Text h2 h2Style = {styles.h2}> Connect</Text>
                    <Text h3 h3Style = {styles.h3}> with  Facebook</Text>
                   
                </View>
           
        </View>


        <View style={styles.footer}>
            <View style={styles.labelContainer}>
                <ThemeProvider theme={theme.primaryButton}>
                    <Button 
                        title="Sign In"
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </ThemeProvider>
            </View>
            <View style={styles.labelContainer}>
                <ThemeProvider theme={theme.defaultButton}>
                    <Button 
                        title="CANCEL"
                        //styles={{textLabel: styles.buttonBlackText}} 
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </ThemeProvider>
            </View>
      </View>

      </ScrollView>
    );
  }
}