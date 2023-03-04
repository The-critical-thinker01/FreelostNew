import axios from 'axios';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Alert,
  ToastAndroid,
} from 'react-native';
import {Image, Icon, Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {green, grey} from '../constantes/constantes';
import {addUserToReduxStore} from '../redux/userSlice';
import {freelost} from '../constantes/constantes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Row from '../librairies/row';
import Center from '../librairies/center';
import SeparateLine from '../librairies/saparatedLine';
import PhoneInput from 'react-native-phone-number-input';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from '../redux/redux';

class EditProfile extends Component {
  state = {
    isFormSubmited: false,
    fullName: '',
    email: '',
    errorSubmitedForm: '',
    phoneNumber: '',
    number: '',
    ref: null,
    secureTextEntry: true,
    avatar: '',
    imagePick: null,
    image: '',
  };

  constructor(props) {
    super(props);
    this.state.ref = React.createRef();
  }

  componentDidMount = () => {
    this.getUser();
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
  //fonction pour envoyer l'image sur mon serveur
  uploadImage = async image => {
    const data = new FormData();
    data.append('avatar', {
      uri: image.uri,
      name: image.fileName,
      type: image.type,
    });

    await axios
      .post(freelost + '/users/update/avatar', data, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(rps => {
        console.log('image path', rps.data.path);
        this.setState({image: rps.data.path});
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount = () => {
    this.getUser();
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

  selectImage = async () => {
    await launchImageLibrary({
      mediaType: 'photo',
    }).then(rsp => {
      this.setState({avatar: rsp.assets[0].uri});
      this.setState({imagePick: rsp.assets[0]});
      // this.uploadImage(rsp.assets[0]);
    });
  };

  takePic = async () => {
    await launchCamera({
      mediaType: 'photo',
    })
      .then(rsp => {
        this.setState({avatar: rsp.assets[0].uri});
      })
      .catch(err => console.log(err));
  };

  submitForm = async () => {
    this.setState({isFormSubmited: true});
    const {fullName, email, phoneNumber, number, avatar} = this.state;
    const userUpdate = {};
    if (fullName !== '' && this.props.user.username !== fullName) {
      userUpdate.username = fullName;
    }
    if (email !== '' && this.props.user.email !== email) {
      userUpdate.email = email;
    }
    if (phoneNumber !== '') {
      userUpdate.numero = '' + number + phoneNumber;
    }
    if (avatar !== '') {
      await this.uploadImage(this.state.imagePick);
      userUpdate.avatar = this.state.image;
    }
    if (Object.keys(userUpdate).length === 0) {
      Alert.alert('erreur', "Vous n'avez rien modifié");
    } else {
      console.log('userUpdate', userUpdate);

      axios
        .post(
          freelost + `/users/update/${this.props.user._id}`,
          userUpdate,
        )
        .then(async rps => {
          console.log('rps', rps.data);
          this.props.addUserToReduxStore(rps.data);
          ToastAndroid.show(
            'Votre profil a été mis à jour',
            ToastAndroid.SHORT,
          );
          await AsyncStorage.setItem('user', JSON.stringify(rps.data));
          this.props.navigation.navigate('profile');
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => this.setState({isFormSubmited: false}));
    }

    console.log('userUpdate', userUpdate);
    this.setState({isFormSubmited: false});
  };
  render = () => {
    console.log(this.props.user, ' ici ');
    return (
      <ScrollView>
        <Center style={{marginTop: 40, marginBottom: 40}}>
          <Row>
            <Image
              source={{
                uri:
                  this.state.avatar != ''
                    ? this.state.avatar
                    : freelost + this.props.user.user.avatar,
              }}
              style={[styles.image]}
              PlaceholderContent={<ActivityIndicator />}
            />
            <View style={{marginLeft: 10}}>
              <TouchableOpacity
                onPress={this.takePic}
                style={[styles.pic]}
                disabled={this.state.isFormSubmited}>
                <Text>prendre une photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.selectImage}
                style={[styles.pic]}
                disabled={this.state.isFormSubmited}>
                <Text>Galerie</Text>
              </TouchableOpacity>
            </View>
          </Row>
        </Center>
        <View
          style={{
            width: '100%',
            marginTop: 10,
          }}>
          <SeparateLine width={'100%'} bgColor={grey} height={1.5} />
        </View>
        <Input
          onChangeText={text => this.setState({...this.state, fullName: text})}
          leftIcon={<Icon name="home" size={25} color={green} />}
          leftIconContainerStyle={{
            borderRightWidth: 0.9,
            borderColor: grey,
          }}
          inputContainerStyle={{marginTop: 40}}
          placeholder="User Name"
          placeholderTextColor={green}
          disabled={this.state.isFormSubmited}
          defaultValue={this.props.user.username}
        />
        <Input
          dataDetectorTypes={'address'}
          onChangeText={text => this.setState({...this.state, email: text})}
          leftIcon={<Icon name="email" size={22} color={green} />}
          leftIconContainerStyle={{
            borderRightWidth: 0.9,
            borderColor: grey,
          }}
          placeholder="Email Adress"
          placeholderTextColor={green}
          disabled={this.state.isFormSubmited}
          defaultValue={this.props.user.email}
        />
        <PhoneInput
          defaultCode="CM"
          layout="first"
          value={('' + this.props.user.numero).substring(3)}
          onChangeText={number => {
            this.setState({...this.state, number: number});
          }}
          onChangeFormattedText={phoneNumber => {
            this.setState({...this.state, phoneNumber: phoneNumber});
          }}
          codeTextStyle={{color: green}}
          textContainerStyle={{backgroundColor: 'transparent'}}
          textInputStyle={{color: green, height: 50}}
          placeholder={'Phone Number'}
          containerStyle={{
            padding: 0,
            elevation: 0,
            borderBottomColor: '#0009',
            borderBottomWidth: 1,
            height: 50,
            width: '96%',
            paddingTop: 0,
            backgroundColor: 'transparent',
          }}
        />
        <Center style={{paddingTop: 35}}>
          <Button
            disabled={this.state.isFormSubmited}
            icon={
              this.state.isFormSubmited && (
                <ActivityIndicator size="large" color={green} />
              )
            }
            onPress={() => {
              this.submitForm();
            }}
            buttonStyle={{
              backgroundColor: green,
              width: 200,
              marginTop: 8,
            }}
            titleStyle={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 25,
            }}
            title={!this.state.isFormSubmited && 'Enregistrer'}
          />
        </Center>
      </ScrollView>
    );
  };
}
const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: green,
  },
  text: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  pic: {
    borderWidth: 1,
    borderColor: green,
    width: 150,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
});

const mapStateToProps = state => ({
  user: store.getState().user.user,
});
const mapDispatchToProps = dispatch => ({
  addUserToReduxStore: user => dispatch(addUserToReduxStore(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
