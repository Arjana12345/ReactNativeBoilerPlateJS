import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
  
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProvider, Button, Text, Input, } from 'react-native-elements';
import theme from '../template/theme';
import styles from '../template/styles';
import { Field, reduxForm } from 'redux-form'



class Login extends Component {


    onFieldChange(event) {
      // for a regular input field, read field name and value from the event
      this.props.onChange(event);
  }
  handleSubmit(values){
    console.log('submitting form', values)
  }
 
  render() {
    console.log(this.props.propsData);
    const { navigate } = this.props.propsData.navigationData;
    const renderInput = ({ input: { onChange, ...restInput }}) => {
      return <TextInput  style={styles.input} onChangeText={onChange} {...restInput} />
    }
    console.log(renderInput);
    function handleClick () {
          navigate('ForgotPassword');
        
      }
      const { submit } = this.props.propsData;

    return (
   <ScrollView style={styles.scroll}>
  
         <View>
       
            <Text style={styles.endText}  onPress={handleClick} >
            Forgot Password
            </Text>

         </View>
   
      

      <View style={styles.inputView}>
         
            <Input
                label = "Enter Username or Email"
                labelStyle = {styles.label}
                containerStyle = {styles.inputContainer}
                inputStyle = {styles.inputStyle}
                placeholder='Username or Email'
                name="username"
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
                leftIcon={
                    <Icon
                    name='user'
                    size={24}
                    color='blue'
                    />
                    }
               //onChange={this.props.handleChange} 
               onChange={this.onFieldChange.bind(this)} 
                  

            />
      
      </View> 

      <View style={styles.inputView}>
            
            <Input 
                label = "Enter Password"
                labelStyle = {styles.label}
                containerStyle = {styles.inputContainer}
                placeholder="Password"
                name="password"
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
    
        <View style={styles.inline}>
            <Icon name="facebook-official" size={30} color="#3B5699" />
            <Text h2 h2Style = {styles.h2}> Connect</Text>
            <Text h3 h3Style = {styles.h3}> with  Facebook</Text>
            
        </View>
           
        <View style={styles.loginFooter}>
        <Field name="x" component={renderInput} />
                <ThemeProvider theme={theme.primaryButton}>
                <TouchableOpacity onPress={this.handleSubmit(submit)}>
                        {/* <Text style={styles.button}>Submit</Text> */}
                        <Button 
                        title="Sign In"
                        style = {{marginBottom: 20}} 
                        />

               </TouchableOpacity>
                </ThemeProvider>
            
                <ThemeProvider theme={theme.defaultButton}>
                    <Button 
                        title="CANCEL"
                        style = {{marginBottom: 20}}
                        onPress={() => alert('Simple Button pressed')}
                    />
                </ThemeProvider>
            
      </View>
   
      </ScrollView>
    );
  }
}

export default reduxForm({
  form: 'LoginForm'
})(Login)