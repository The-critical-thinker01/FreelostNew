import React, { Component } from 'react';
import { View, StyleSheet,ScrollView, Text, Image, Button } from 'react-native';
import Ico from 'react-native-vector-icons/Entypo';
import Publi from '../components/publiComponnent';

const tab=[
  {
      im:require('./../assets/images/lost_wallet1.jpg'),
      title:"porte feuille ",
      description:" suite a votre declaration nous avons les objets semblabe"
  },
  {
      im:require('./../assets/images/cle3.jpg'),
      title:"Une Cle ",
      description:" suite a votre declaration nous avons les objets semblabe"
  },
  {
      im:require('./../assets/images/bagages.jpg'),
      title:"porte feuille ",
      description:" suite a votre declaration nous avons les objets semblabe"
  },
  {
      im:require('./../assets/images/animals.jpg'),
      title:"porte feuille ",
      description:" suite a votre declaration nous avons les objets semblabe"
  },
  {
      im:require('./../assets/images/cls2.jpg'),
      title:"Une Cle ",
      description:" suite a votre declaration nous avons les objets semblabe"
  },
  {
      im:require('./../assets/images/cloth2.jpg'),
      title:"porte feuille ",
      description:" suite a votre declaration nous avons les objets semblabe"
  },
  {
      im:require('./../assets/images/lost_wallet1.jpg'),
      title:"porte feuille ",
      description:" suite a votre declaration nous avons les objets semblabe"
  },
  {
      im:require('./../assets/images/cle3.jpg'),
      title:"Une Cle ",
      description:" suite a votre declaration nous avons les objets semblabe"
  },
  {
      im:require('./../assets/images/bagages.jpg'),
      title:"porte feuille ",
      description:" suite a votre declaration nous avons les objets semblabe"
  },

];


class MesPublications extends Component {
    constructor(props) {
      super(props);
    } 

    render() {
      return (
       
        <ScrollView style={styles.publipage}>
            <Publi />
        </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
  publipage:{
    paddingTop:20,
    backgroundColor:"#eee"
}
  });
  
 export default MesPublications;
  