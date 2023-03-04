import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {green, red} from '../constantes/constantes';

const styles = StyleSheet.create({});

export default class ProfilEleme extends Component {
  render() {
    return (
      <View
        style={[
          {
            borderRadius: 10,
            marginHorizontal: 15,
            borderWidth: 1,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            marginBottom: 20,
          },
          {...this.props.styles},
        ]}>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 8,
            height: 45,
          }}
          onPress={this.props.onPress}>
          <Icon
            size={30}
            name={this.props.icon1}
            color={green}
            style={{
              paddingLeft: 5,
              borderRightColor: green,
              paddingRight: 5,
            }}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              {this.props.profile}
            </Text>
          </View>

          <Icon size={30} name={this.props.icon2} color={green} />
        </TouchableOpacity>
      </View>
    );
  }
}
