import React, {Component} from 'react';
import {Text, View, TextInput, Button, StyleSheet, FlatList} from 'react-native';



export default class ComponentOne extends Component{
  constructor(props){
    super(props);


  }

  componentWillReceiveProps(nextProps){

  }

  render(){
    const { navigate } = this.props.navigation;
    if(this.props.people.length > 0){
      const peopleData = this.props.people.map((person, idx) => {
        return (
          {
            key: person.name,
            id: idx + 1
          }
        )
      })
      return(
        <View style={styles.container}>
          <FlatList
            data={peopleData}
            renderItem={({item}) => <Button onPress={() => this.props.goToProfile(item.id)} style={styles.item} title={item.key} color='#fff' />}/>
        </View>
      )
    }
    return(
      <View style={styles.spinner}>
        <Text style={styles.spinnerText}>Loading...</Text>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  spinner: {
    flex: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272b30'
  },
  spinnerText: {
    fontSize: 24,
    color: '#FFE300'
  },
  container: {
   flex: 8,
   paddingTop: 22,
   backgroundColor: '#272b30'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#fff',
    borderWidth: 0.5,
    borderColor: '#fff'
  }
})
