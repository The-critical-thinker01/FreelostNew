import React from 'react';
import { View,Text,StyleSheet } from "react-native";
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { green, red } from '../constantes/constantes';

export default ProfilElem = (props) => {
    return (
        <View style={[{borderRadius:10,marginHorizontal:15,borderWidth:1,marginBottom:20},{...props.styles}]}>
                <TouchableOpacity style={{display:'flex',flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        paddingHorizontal:8,height:45}} onPress={props.onPress}>
                        <Icon size={30}
                            name={props.icon1}
                            color={green} style={{borderRightWidth:2,borderRightColor:green,paddingRight:5 }}/>
                        <View >
                            <Text style={{fontSize:20,fontWeight:'bold',color:"black"}}>{props.profile}</Text>
                        </View>

                        <Icon  size={30} name={props.icon2} color={green} />
                </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({

});