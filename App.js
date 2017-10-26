import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import ComponentOne from './App/Components/ComponentOne/ComponentOne';


export default class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(

        <ComponentOne />
    
    )
  }
}
