import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './header'

export default class Profile extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {character} = this.props.navigation.state.params
    return(
      <View style={{flex: 1}}>
        <Header />
        <View style={styles.container}>
        <Text style={ styles.name }>{character.name}</Text>
          <View style={ styles.listContainer}>
            <View style={styles.labelColumn}>
              <Text style={styles.label}>Height</Text>
              <Text style={styles.label}>Mass</Text>
              <Text style={styles.label}>Hair Color</Text>
              <Text style={styles.label}>Eye Color</Text>
              <Text style={styles.label}>Skin Color</Text>
              <Text style={styles.label}>Birth Year</Text>
              <Text style={styles.label}>Gender</Text>
            </View>
            <View style={styles.dataColumn}>
              <Text style={styles.character}>{character.height}</Text>
              <Text style={styles.character}>{character.mass}</Text>
              <Text style={styles.character}>{character.hair_color}</Text>
              <Text style={styles.character}>{character.eye_color}</Text>
              <Text style={styles.character}>{character.skin_color}</Text>
              <Text style={styles.character}>{character.birth_year}</Text>
              <Text style={styles.character}>{character.gender}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 8,
   paddingTop: 22,
   backgroundColor: '#272b30'
  },
  listContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FFE300'
  },
  labelColumn: {
    flex: 3,
    borderWidth: 1,
    borderColor: '#FFE300'
  },
  dataColumn: {
    flex: 7
  },
  name: {
    color: '#FFE300',
    fontSize: 24
  },
  label: {
    color: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFE300',
    height: 50,
    textAlign: 'center'
  },
  character: {
    color: '#FFE300',
    borderWidth: 1,
    borderColor: '#FFE300',
    height: 50,
    textAlign: 'center',
    alignItems: 'center'
  }
})
