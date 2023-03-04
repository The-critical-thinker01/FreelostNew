import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Center from '../librairies/center';

class Collectorcenter extends Component {
  render() {
    return (
      <Center height={'100%'}>
        <View>
          <Text style={{color: '#000'}}>Centre de collecte</Text>
          <Text style={{color: '#000'}}>Leo doit Travailler ici !!!</Text>
        </View>
      </Center>
    );
  }
}

const styles = StyleSheet.create({});

export default Collectorcenter;
