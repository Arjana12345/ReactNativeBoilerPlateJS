import React, { Component } from "react";
import { connect } from 'react-redux';
import { View } from 'react-native';

import { test } from '../actions/loginAction';
import Login from '../components/login';


class LoginContainer extends React.Component{

   constructor(props) {
      super(props);
   
      
   }
  
 
      handleChange = e => {
         e.preventDefault();
      
      console.log(e.target.name);
      console.log(e.target.value);
      console.log(e.target.type);
      console.log('handleOnChange Called');
      let payload = {fieldName: e.target.name,
                     fieldValue: e.target.value
                   };
      this.props.handleChange(payload);

  }
  
   render() {

        console.log(this.props.testData);
        console.log(this.props.navigation);
        let propsData = {
            stateData : this.props.testData,
            navigationData : this.props.navigation
        }
         return (
         <View>
            <Login propsData = {propsData} onChange={this.handleChange.bind(this)} />
         </View>
         );
      }
      

} 


const mapStateToProps = state => ({
  testData: state
});


const mapDispatchToProps = (dispatch) => ({
  
   handleChange: (payload) => dispatch(test(payload))
   
 })

export default connect(
   mapStateToProps , 
   mapDispatchToProps
   )(LoginContainer);
