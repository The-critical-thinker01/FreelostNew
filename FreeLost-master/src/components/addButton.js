import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Animated,
  Text,
} from 'react-native';
import {Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {green, red} from '../constantes/constantes';

export default class AddButton extends React.Component {
  mode = new Animated.Value(0);
  buttonSize = new Animated.Value(1);

  handlePress = () => {
    Animated.sequence([
      Animated.timing(this.buttonSize, {
        toValue: 0.95,
        duration: 40,
        useNativeDriver: false,
      }),
      Animated.timing(this.buttonSize, {
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.timing(this.mode, {
        duration: 150,
        toValue: this.mode._value === 0 ? 1 : 0,
        useNativeDriver: false,
      }),
    ]).start();
  };

  render() {
    const trouverLeft = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -150],
    });

    const trouverTop = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [10, -60],
    });

    const perduRight = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -160],
    });

    const width = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 150],
    });

    const height = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 48],
    });

    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'],
    });

    const sizeStyle = {
      transform: [{scale: this.buttonSize}],
    };

    return (
      <View style={{position: 'absolute', alignItems: 'center'}}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              left: trouverLeft,
              top: trouverTop,
              width: width,
              height: height,
              backgroundColor: green,
              elevation: 7,
            },
            styles.secondaryButton,
          ]}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() =>
              this.props.navigation.navigate("Déclaration d'objet trouvé ")
            }>
            <View>
              <Text style={[styles.text]}>J'ai trouvé</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[
            {
              position: 'absolute',
              right: perduRight,
              top: trouverTop,
              width: width,
              height: height,
              backgroundColor: red,
              elevation: 7,
            },
            styles.secondaryButton,
          ]}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() =>
              this.props.navigation.navigate('Déclaration de perte')
            }>
            <View>
              <Text style={[styles.text]}>J'ai Perdu</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[
            styles.button,
            sizeStyle,
            // {borderColor: '#fff', borderWidth: 1, backgroundColor: '#fff'},
          ]}>
          <TouchableHighlight
            onPress={this.handlePress}
            underlayColor={green}
            style={[styles.buttonI]}>
            <Animated.View style={{transform: [{rotate: rotation}]}}>
              <FontAwesome5Icon name="plus" size={24} color="#FFF" />
            </Animated.View>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  buttonI: {
    zIndex: 1000,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    backgroundColor: green,
  },
  secondaryButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
