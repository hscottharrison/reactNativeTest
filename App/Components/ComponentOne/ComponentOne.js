import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, Button, StyleSheet} from 'react-native';
import * as Actions from '../../actions/profileActions';

import PeopleList from './peopleList';
import Header from '../header';


export default class ComponentOne extends Component{
  constructor(props){
    super(props);

    this.state = {
      people: []
    }

    this.goToProfile = this.goToProfile.bind(this);
  }

  componentWillMount(){
    fetch('https://swapi.co/api/people/').then(response => response.json())
    .then(response => {
      this.setState({people: response.results})
    })
  }

  goToProfile(character){
    const {navigate} = this.props.navigation
    Actions.getPerson(character).then(response => response.json())
    .then(response => {
      navigate('Profile', {character: response})
    })
  }

  render(){
    return (
      <View style={styles.container}>

        <Header />

        <PeopleList
          goToProfile={this.goToProfile}
          navigation={this.props.navigation}
          style={styles.peopleList}
          people={this.state.people}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
