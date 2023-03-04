import React, { Component } from 'react';
import { View, StyleSheet,ScrollView, Text, Image, Button } from 'react-native';
import Ico from 'react-native-vector-icons/Entypo';

class Notifi extends Component {
    constructor(props) {
      super(props);
    } 

    render() {
      return (
       <View>  
            <View style={styles.containerNotif}>
                <Image
                style={styles.img}
                source={`${this.props.img}`}
                />
                <View style={styles.textContent}>
                    <View style={styles.titleDesign}>
                        <Text style={styles.textTitle}> 
                              {this.props.titre} a eté Trouvé
                        </Text>
                    </View>
                    
                    <Text style={styles.textDescription}> 
                            {this.props.children} 
                    </Text>
                </View>
                <Ico name="dots-three-horizontal" size={30} color="#000" style={styles.Icon}  />    
                </View>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
  containerNotif:{
        width:'96%',
        height:90,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#d3d3d3',
        marginBottom:10,  
        borderRadius:15,
        marginLeft:'2%',
        marginRight:'2%',
  },
  img:{
    width:80,
    height:80,
    borderRadius:80,
    marginLeft:10,
  },
  textContent:{
    flexDirection:'column',
    alignItems:'center',
    width:'60%',
    marginLeft:8,
    height:80,
  },
  textTitle:{
    width:'100%',
    height:'80%',
    fontWeight: '800', 
    fontSize: 18, 
    color:'black',
    backgroundColor:'#d3d3d3',

    
    
  },
  titleDesign:{
     width:'100%',
     height:30,
    backgroundColor:'#228b22'
  },
  textDescription:{
         width:'100%',
        fontSize: 15, 
        color:'black',
        flexDirection:'column',
        alignItems:'center',
  },
  Icon:{
    width:'8%',
    marginRight:10,
  }

  });
  
 export default Notifi;
  