import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, Button } from 'react-native';
import Ico from 'react-native-vector-icons/Entypo';

class Publi extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.containerPub} >
          <View style={styles.imglocation}>
            <Image
              style={styles.img}
              source={require('./../assets/images/lost_wallet1.jpg')}
            />
            <View style={styles.location}>
              <Ico name="location" size={25} style={styles.Icon} />
              <Text style={styles.textLocation}>
             Dschang
              </Text>
            </View>
          </View>
          <View style={styles.descButtonContent}>
            <View style={styles.textButton}>
              <Text style={styles.heading}> 
                 porte feuille perdu 
               </Text>
              <Text style={styles.textInfo}>
              un objet perdu depuis Ouest-cameroun   
              </Text>
            </View>

            <View style={styles.ButtonContent}>
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="edit" color={"green"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="trash" color={"red"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="forward" color={`#f0e68c`} size={30} marginLeft={10} />
              </View >

            </View>
          </View>
        </View>

        <View style={styles.containerPub} >
          <View style={styles.imglocation}>
            <Image
              style={styles.img}
              source={require('./../assets/images/cle3.jpg')}
            />
            <View style={styles.location}>
              <Ico name="location" size={25} style={styles.Icon} />
              <Text style={styles.textLocation}>
                Baffousam
              </Text>
            </View>
          </View>
          <View style={styles.descButtonContent}>
            <View style={styles.textButton}>
              <Text style={styles.heading}> 
                cle perdu 
               </Text>
              <Text style={styles.textInfo}>
              un objet perdu depuis le Ourst-cameroun  
              </Text>
            </View>

            <View style={styles.ButtonContent}>
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="edit" color={"green"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="trash" color={"red"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="forward" color={`#f0e68c`} size={30} marginLeft={10} />
              </View >

            </View>
          </View>
        </View>

        <View style={styles.containerPub} >
          <View style={styles.imglocation}>
            <Image
              style={styles.img}
              source={require('./../assets/images/cls2.jpg')}
            />
            <View style={styles.location}>
              <Ico name="location" size={25} style={styles.Icon} />
              <Text style={styles.textLocation}>
                 Buea
              </Text>
            </View>
          </View>
          <View style={styles.descButtonContent}>
            <View style={styles.textButton}>
              <Text style={styles.heading}> 
                cle de maison perdu 
               </Text>
              <Text style={styles.textInfo}>
              un objet perdu depuis sud-Ouest cameroun  
              </Text>
            </View>

            <View style={styles.ButtonContent}>
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="edit" color={"green"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="trash" color={"red"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="forward" color={`#f0e68c`} size={30} marginLeft={10} />
              </View >

            </View>
          </View>
        </View>








        <View style={styles.containerPub} >
          <View style={styles.imglocation}>
            <Image
              style={styles.img}
              source={require('./../assets/images/lost_wallet1.jpg')}
            />
            <View style={styles.location}>
              <Ico name="location" size={25} style={styles.Icon} />
              <Text style={styles.textLocation}>
             Dschang
              </Text>
            </View>
          </View>
          <View style={styles.descButtonContent}>
            <View style={styles.textButton}>
              <Text style={styles.heading}> 
                 porte feuille perdu 
               </Text>
              <Text style={styles.textInfo}>
              un objet perdu depuis Ouest-cameroun   
              </Text>
            </View>

            <View style={styles.ButtonContent}>
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="edit" color={"green"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="trash" color={"red"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="forward" color={`#f0e68c`} size={30} marginLeft={10} />
              </View >

            </View>
          </View>
        </View>

        <View style={styles.containerPub} >
          <View style={styles.imglocation}>
            <Image
              style={styles.img}
              source={require('./../assets/images/cle3.jpg')}
            />
            <View style={styles.location}>
              <Ico name="location" size={25} style={styles.Icon} />
              <Text style={styles.textLocation}>
                Baffousam
              </Text>
            </View>
          </View>
          <View style={styles.descButtonContent}>
            <View style={styles.textButton}>
              <Text style={styles.heading}> 
                cle perdu 
               </Text>
              <Text style={styles.textInfo}>
              un objet perdu depuis le Ourst-cameroun  
              </Text>
            </View>

            <View style={styles.ButtonContent}>
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="edit" color={"green"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="trash" color={"red"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="forward" color={`#f0e68c`} size={30} marginLeft={10} />
              </View >

            </View>
          </View>
        </View>

        <View style={styles.containerPub} >
          <View style={styles.imglocation}>
            <Image
              style={styles.img}
              source={require('./../assets/images/cls2.jpg')}
            />
            <View style={styles.location}>
              <Ico name="location" size={25} style={styles.Icon} />
              <Text style={styles.textLocation}>
                 Buea
              </Text>
            </View>
          </View>
          <View style={styles.descButtonContent}>
            <View style={styles.textButton}>
              <Text style={styles.heading}> 
                cle de maison perdu 
               </Text>
              <Text style={styles.textInfo}>
              un objet perdu depuis sud-Ouest cameroun  
              </Text>
            </View>

            <View style={styles.ButtonContent}>
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="edit" color={"green"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="trash" color={"red"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="forward" color={`#f0e68c`} size={30} marginLeft={10} />
              </View >

            </View>
          </View>
        </View>
        







        <View style={styles.containerPub} >
          <View style={styles.imglocation}>
            <Image
              style={styles.img}
              source={require('./../assets/images/lost_wallet1.jpg')}
            />
            <View style={styles.location}>
              <Ico name="location" size={25} style={styles.Icon} />
              <Text style={styles.textLocation}>
             Dschang
              </Text>
            </View>
          </View>
          <View style={styles.descButtonContent}>
            <View style={styles.textButton}>
              <Text style={styles.heading}> 
                 porte feuille perdu 
               </Text>
              <Text style={styles.textInfo}>
              un objet perdu depuis Ouest-cameroun   
              </Text>
            </View>

            <View style={styles.ButtonContent}>
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="edit" color={"green"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="trash" color={"red"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="forward" color={`#f0e68c`} size={30} marginLeft={10} />
              </View >

            </View>
          </View>
        </View>

        <View style={styles.containerPub} >
          <View style={styles.imglocation}>
            <Image
              style={styles.img}
              source={require('./../assets/images/cle3.jpg')}
            />
            <View style={styles.location}>
              <Ico name="location" size={25} style={styles.Icon} />
              <Text style={styles.textLocation}>
                Baffousam
              </Text>
            </View>
          </View>
          <View style={styles.descButtonContent}>
            <View style={styles.textButton}>
              <Text style={styles.heading}> 
                cle perdu 
               </Text>
              <Text style={styles.textInfo}>
              un objet perdu depuis le Ourst-cameroun  
              </Text>
            </View>

            <View style={styles.ButtonContent}>
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="edit" color={"green"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="trash" color={"red"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="forward" color={`#f0e68c`} size={30} marginLeft={10} />
              </View >

            </View>
          </View>
        </View>

        <View style={styles.containerPub} >
          <View style={styles.imglocation}>
            <Image
              style={styles.img}
              source={require('./../assets/images/cls2.jpg')}
            />
            <View style={styles.location}>
              <Ico name="location" size={25} style={styles.Icon} />
              <Text style={styles.textLocation}>
                 Buea
              </Text>
            </View>
          </View>
          <View style={styles.descButtonContent}>
            <View style={styles.textButton}>
              <Text style={styles.heading}> 
                cle de maison perdu 
               </Text>
              <Text style={styles.textInfo}>
              un objet perdu depuis sud-Ouest cameroun  
              </Text>
            </View>

            <View style={styles.ButtonContent}>
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="edit" color={"green"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="trash" color={"red"} size={30} marginLeft={10} />
              </View >
              <View style={[styles.icon_bu, styles.elevation]}>
                <Ico name="forward" color={`#f0e68c`} size={30} marginLeft={10} />
              </View >

            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
  },
  //  {this.props.lieu}
  containerPub: {
    marginTop: 15,
    width: '98%',
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    //borderWidth:2,
    marginLeft: '1%',
    marginRight: '1%',
    backgroundColor:'#ffefd5'
  },
  img: {
    width: '100%',
    height: '80%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imglocation: {
    marginBottom: '1%',
    marginTop: '2%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '39%',
    height: '100%',
    //backgroundColor:'#fafad2'

  },
  location: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
    width: '100%',
    height: '20%',
    fontWeight: '800',
    fontSize: 18,
    color: 'black',

  },
  textLocation: {
    width: '80%',
    height: '100%',
    marginLeft: 10,
    marginTop: 10,

  },
  Icon: {
    width: '20%',
    height: '100%',
    color: 'green',
  },
  descButtonContent: {
    height: '100%',
    width: '59%',
    marginLeft: 5,
    marginRight: 10,

  },
  textButton: {
    height: '50%',

  },
  heading: {
    height: '50%',
    flexDirection: 'column',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '900',
    fontSize: 25,
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: '#008000',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  textInfo: {
    //backgroundColor:'red',
    height: '50%',
    paddingHorizontal: 10
  },
  ButtonContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '50%',
    paddingLeft: 10,
    //backgroundColor:'wheat'

  },
  icon_bu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    marginRight: 10,
    height: 60,
    width: 60,
    paddingVertical: 15,
    paddingRight: 5,
    borderRadius: 60,
    backgroundColor: `#f5f5f5`
    // backgroundColor:'grey'

  },

  elevation: {
    elevation: 20,
    //shadowColor: '#676',
    shadowColor: '#000000',
    shadowOpacity: 'red',
    shadowOffset: '#f5fffa',
    shadowRadius: 20,
    textShadowRadius: 20,
  },

  //un objet perdu depuis le cameroun  dans la region de l'ouest 


});

export default Publi;
