import React, {Component} from 'react';
import {Alert, ScrollView} from 'react-native';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements';
import {connect} from 'react-redux';
import ProfilElem from '../components/profilElem';
import {freelost, green, red} from '../constantes/constantes';
import Center from '../librairies/center';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from '../redux/redux';
import {setUserIsConnected} from '../redux/connectionSlice';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount = () => {
    this.getUser();
    console.log(store.getState());
  };

  async getUser() {
    try {
      const value = JSON.parse(await AsyncStorage.getItem('user'));
      if (value) {
        this.setState({user: value});
      }
    } catch (e) {
      console.log(e);
    }
  }

  deconnexion = () => {
    Alert.alert(
      'Deconnexion',
      'Voulez-vous vraiment vous déconnecter ?',
      [
        {
          text: 'non',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'oui',
          onPress: async () => {
            await AsyncStorage.removeItem('user');
            this.props.setUserIsConnected();
          },
        },
      ],
      {cancelable: true},
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={{height: 350}}>
          <View style={[styles.first]}>
            <Center>
              <Text
                style={{
                  color: 'white',
                  opacity: 0.8,
                  fontSize: 25,
                  paddingBottom: 10,
                }}>
                profile
              </Text>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: 'white',
                  paddingBottom: 80,
                }}>
                {this.props.user.username}
              </Text>
            </Center>
          </View>

          <Center style={{position: 'relative', top: -70}}>
            <Image
              source={{uri: freelost + this.props.user.avatar}}
              style={[styles.image]}
              PlaceholderContent={<ActivityIndicator />}
            />
          </Center>
        </View>
        <View style={{}}>
          <ProfilElem
            icon1="person"
            profile="Edit profile"
            icon2="chevron-right"
            onPress={() => this.props.navigation.navigate('Edit Profile')}
          />
          <ProfilElem
            icon1="notifications"
            profile="Notifications"
            icon2="chevron-right"
          />
          <ProfilElem
            icon1="layers"
            profile="Mes Publications"
            icon2="chevron-right"
            onPress={() => this.props.navigation.navigate('MesPublications')}
          />
          <ProfilElem
            icon1="settings"
            profile="Settings"
            icon2="chevron-right"
            onPress={() => this.props.navigation.navigate('Settings')}
          />
          <ProfilElem
            icon1="logout"
            profile="Deconnexion"
            icon2="chevron-right"
            styles={{borderColor: red}}
            onPress={this.deconnexion}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserIsConnected: () => dispatch(setUserIsConnected(false)),
  };
};

const mapStateToProps = state => ({
  user: store.getState().user.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  first: {
    height: 200,
    backgroundColor: green,
    borderBottomStartRadius: 100,
    borderBottomEndRadius: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 100,
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: green,
  },
});
