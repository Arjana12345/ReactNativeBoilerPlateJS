import React, { Component } from "react";
import { connect } from 'react-redux';
import { View } from 'react-native';

import { test } from '../actions/indexAction';
import Login from '../components/login';


class LoginContainer extends React.Component{

   constructor(props) {
      super(props);
      
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
            <Login propsData = {propsData}/>
         </View>
         );
      }
      

} 


const mapStateToProps = state => ({
  testData: state
});


const mapDispatchToProps = (dispatch) => ({
  
   //handleClick: (payload) => dispatch(test(payload))
   
 })

export default connect(
   mapStateToProps , 
   mapDispatchToProps
   )(LoginContainer);
