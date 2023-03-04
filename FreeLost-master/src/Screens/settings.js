import React, { Component } from 'react';
import { View, StyleSheet,ScrollView, Text, Image, Button } from 'react-native';
import Ico from 'react-native-vector-icons/Entypo';
import ProfilEleme from '../components/settingConponent';
//import Ico from 'react-native-vector-icons/AntDesign';



class Settings extends Component {
    constructor(props) {
      super(props);
    } 
    render() {
      return (
            <ScrollView style={styles.settingPageContainer}>
              <View style={styles.settingIconContainer}>
                  <View style={styles.settingIcon}>
                  <Ico name="cog" color={"white"} size={150}  />
                  </View>                
                  <View style={styles.settingTextContainer}>
                     <Text style={styles.heading}>Settings</Text>          
                  </View>
                 
              </View>
              <View style={styles.containerContent}>
                <View style={styles.descrip}>
                      <Text style={styles.head}> personalize your account here !!!   </Text>
                </View>
                  
                
              
              <ProfilEleme
                icon1="laptop"
                profile="linked-devices"
                icon2="chevron-right"
                onPress={() => this.props.navigation.navigate('App & Profile Settings')}
              />
              <ProfilEleme
                icon1="lock"
                profile=" privacy"
                icon2="chevron-right"
                onPress={() => this.props.navigation.navigate('App & Profile Settings')}
              />
              <ProfilEleme
                icon1="fingerprint"
                profile="fingerprint"
                icon2="chevron-right"
                onPress={() => this.props.navigation.navigate('App & Profile Settings')}
              />
              <ProfilEleme
                icon1="notifications-off"
                profile=" Notifications "
                icon2="chevron-right"
                onPress={() => this.props.navigation.navigate('Notification')}
              />
             
              <ProfilEleme
                icon1="share"
                profile="FreeLost with a friend "
                icon2="chevron-right"
                onPress={() => this.props.navigation.navigate('App & Profile Settings')}
              />
              <ProfilEleme
                icon1="delete"
                profile=" Supprimer mon compte"
                icon2="chevron-right"
                onPress={() => this.props.navigation.navigate('App & Profile Settings')}
              />
              <ProfilEleme
                icon1="help"
                profile=" help & about us"
                icon2="chevron-right"
                onPress={() => this.props.navigation.navigate('App & Profile Settings')}
              />
              

              </View>

            </ScrollView>
        );
    }
}
const styles =StyleSheet.create({
  descrip:{
    height:50,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
  },
  head:{
    fontWeight: '900',
    fontSize: 20,
    color:'#000000',
  },
  heading: {
    fontWeight: '900',
    fontSize: 35,
    color:'white',
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  containerContent:{
    marginTop:10,
   
  
  },
  settingPageContainer:{
        marginTop:10,
        padding:10
  },
  //reglage de l'icon
settingIcon:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  

},
// contenaire de reglage de l'icon et du text
settingIconContainer:{
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  backgroundColor:'green',
  borderBottomLeftRadius:100,
  
},
// reglage du text setting
settingTextContainer:{
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
},

containerPub: {
  marginTop: 5,
  width: '98%',
  height: 150,
  flexDirection: 'row',
  alignItems: 'center',
  //borderWidth:2,
  marginLeft: '1%',
  marginRight: '1%',
},
img: {
  width: '100%',
  height: '80%',
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
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


});
export default Settings;