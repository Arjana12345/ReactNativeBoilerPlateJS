import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Alert
  
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProvider, Button } from 'react-native-elements'
import theme from '../template/theme'


export default class Login extends Component {
  
  render() {
    console.log(this.props.propsData);

    const styles = StyleSheet.create({
      transparentButton: {
      marginTop: 30,
      borderColor: '#3B5699',
      borderWidth: 2
        },
        buttonBlueText: {
            fontSize: 20,
            color: '#3B5699'
        },
        buttonBigText: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        inline: {
            flexDirection: 'row',
            marginTop: 30,
            borderColor: '#3B5699',
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20
        },
        buttonWhiteText: {
          fontSize: 20,
          color: '#FFF',
        },
        buttonBlackText: {
            fontSize: 20,
            color: '#595856'
        },
        primaryButton: {
            backgroundColor: '#34A853'
        },
        footer: {
          marginTop: 100
        },
        labelContainer: {
          marginBottom: 20
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
        }, 
        textLabel: {
          fontSize: 20,
          fontWeight: 'bold',
          fontFamily: 'Verdana',
          marginBottom: 10,
          color: '#595856'
      }, 
      scroll: {
        backgroundColor: '#E1D7D8',
        padding: 30,
        flexDirection: 'column'
    },
    label: {
      color: '#0d8898',
      fontSize: 20
      },
      alignRight: {
          alignSelf: 'flex-end'
      },
      textInput: {
        height: 80,
        fontSize: 30,
        backgroundColor: '#FFF'
      },
     
      innerText: {
       color: '#0d8898',
       alignSelf: 'flex-end',
       fontSize: 20,
      }


    });

   
    return (
      <ScrollView style={styles.scroll}>
         <View style={styles.labelContainer}>

            <Text style={styles.innerText} onPress={() => console.log('Forgot Password')}>
            Forgot Password
            </Text>

         </View>
   
      

      <View style={styles.labelContainer}>
          {/* <Label text="Username or Email" /> */}
          <Text style={styles.textLabel}>Username or Email</Text>
          <TextInput
           style={styles.textInput}
          />
      
      </View> 
      <View style={styles.labelContainer}>

      {/* <Label text="Password" /> */}
          <Text style={styles.textLabel}>Password</Text>
          <TextInput
             secureTextEntry={true}
              style={styles.textInput}
          />
      </View>

      

      <View style={styles.labelContainer}>
            {/* <Button 
                styles={{button: styles.transparentButton}}
                title=""
            > */}
                <View style={styles.inline}>
                    <Icon name="facebook-official" size={30} color="#3B5699" />
                    <Text style={[styles.buttonBlueText, styles.buttonBigText]}> Connect with  Facebook </Text> 
                     {/* <Text style={styles.buttonBlueText}> with  Facebook </Text> */}
                    
                </View>
            {/* </Button> */}
        </View>


        <View style={styles.footer}>
          <View style={styles.labelContainer}>
          <ThemeProvider theme={theme.primaryButton}>
              <Button 
                  title="Sign In"
                  //styles={{button: styles.primaryButton, textLabel: styles.buttonWhiteText}} 
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