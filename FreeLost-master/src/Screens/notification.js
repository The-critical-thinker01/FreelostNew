import React, { Component } from 'react';
import { View, StyleSheet,ScrollView, Text, Image, Button } from 'react-native';
import Ico from 'react-native-vector-icons/Entypo';
import Notifi from '../components/notificationComponent';

const tab=[
    {
        img:require('./../assets/images/lost_wallet1.jpg'),
        titre:"porte feuille ",
        description:" suite a votre declaration nous avons les objets semblabe"
    },
    {
        img:require('./../assets/images/cle3.jpg'),
        titre:"Une Cle ",
        description:" suite a votre declaration nous avons les objets semblabe"
    },
    {
        img:require('./../assets/images/bagages.jpg'),
        titre:"porte feuille ",
        description:" suite a votre declaration nous avons les objets semblabe"
    },
    {
        img:require('./../assets/images/animals.jpg'),
        titre:"porte feuille ",
        description:" suite a votre declaration nous avons les objets semblabe"
    },
    {
        img:require('./../assets/images/cls2.jpg'),
        titre:"Une Cle ",
        description:" suite a votre declaration nous avons les objets semblabe"
    },
    {
        img:require('./../assets/images/cloth2.jpg'),
        titre:"porte feuille ",
        description:" suite a votre declaration nous avons les objets semblabe"
    },
    {
        img:require('./../assets/images/lost_wallet1.jpg'),
        titre:"porte feuille ",
        description:" suite a votre declaration nous avons les objets semblabe"
    },
    {
        img:require('./../assets/images/cle3.jpg'),
        titre:"Une Cle ",
        description:" suite a votre declaration nous avons les objets semblabe"
    },
    {
        img:require('./../assets/images/bagages.jpg'),
        titre:"porte feuille ",
        description:" suite a votre declaration nous avons les objets semblabe"
    },

];

class Notification extends Component {
    constructor(props) {
      super(props);
    } 
    render() {
      return (
        // <Notifi img={require('./../assets/images/cle3.jpg')}  titre="Porte feuille perdu">
        //     suite a votre declaration
        // </Notifi>
        <ScrollView style={styles.notipage}>
            {tab.map((elem,index)=>{
                return(
                    <Notifi key={index} img={elem.img} titre={elem.titre}>
                        {elem.description}
                    </Notifi>
                )
            })}
        </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    notipage:{
        paddingTop:20,
        backgroundColor:"#eee"
    }

    });

 export default Notification; 
  