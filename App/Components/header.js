import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';



export default class Header extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.header}>
        <Text style={styles.logo}>SWAPI Lookup</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1C1E22',
  },
  logo: {
    color: '#FFE300',
    fontSize: 30
  }
})
