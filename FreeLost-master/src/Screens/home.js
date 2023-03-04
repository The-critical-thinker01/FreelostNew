import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import Article from '../components/article';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ico from 'react-native-vector-icons/Entypo';
import {TextInput} from 'react-native-gesture-handler';
import {freelost, green, red} from '../constantes/constantes';
import Center from '../librairies/center';
import {Button} from 'react-native-elements';
import Row from '../librairies/row';
import Padding from '../librairies/padding';
import Column from '../librairies/column';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from '../redux/redux';
import {connect} from 'react-redux';
import {setLightAndDarkMode} from '../redux/darkMode';
import axios from 'axios';

//****** *debut du composant mere*******
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newOnApp: false,
      mode: 'DARK_MODE',
      object_list: [],
      temps_object_list: [],
      isLoading: true,
    };
  }

  handleRecherche = e => {
    if (e == '') {
      this.setState({...this.state, object_list: this.state.temps_object_list});
    } else {
      let a = [];
      this.state.object_list.forEach(ele => {
        if (
          ele.Categorie &&
          ele.Categorie.toLowerCase().indexOf(e.toLowerCase()) != -1
        ) {
          a.push(ele);
        }
        if (
          ele.Description &&
          ele.Description.toLowerCase().indexOf(e.toLowerCase()) != -1
        ) {
          let cpt = 0;
          for (let index = 0; index < a.length; index++) {
            if (ele._id != a[index]._id) {
              cpt++;
            }
          }
          if (cpt == a.length) {
            a.push(ele);
          }
        }
      });
      this.setState({...this.state, object_list: a});
    }
  };

  componentDidMount = async () => {
    this.firstTimeToUse();
    try {
      this.setState({
        ...this.state,
        mode: await AsyncStorage.getItem('change_mode'),
      });
    } catch (err) {
      console.log(err);
    }
    this.getObjects();
  };

  getObjects = async () => {
    this.setState({...this.state, isLoading: true});
    await axios
      .get(freelost + '/object/all')
      .then(async e => {
        this.setState({...this.state, object_list: e.data.objects});
        this.setState({...this.state, temps_object_list: e.data.objects});
        console.log(e.data.objects[1]);
      })
      .then(() => {
        this.setState({...this.state, isLoading: false});
      })
      .catch(err => console.log(err));
  };

  handleMode = async () => {
    if (this.state.mode == 'DARK_MODE') {
      this.setState({...this.state, mode: 'LIGTH_MODE'});
      await AsyncStorage.setItem('change_mode', 'LIGTH_MODE');
      this.props.setLightAndDarkMode('LIGTH_MODE');
    } else {
      this.setState({...this.state, mode: 'DARK_MODE'});
      await AsyncStorage.setItem('change_mode', 'DARK_MODE');
      this.props.setLightAndDarkMode('DARK_MODE');
    }
  };

  firstTimeToUse = async () => {
    try {
      const value = JSON.parse(await AsyncStorage.getItem('newOnApp'));
      // console.log('newOnApp raoul', value);
      if (value) this.setState({newOnApp: value});
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          {backgroundColor: this.props.mode.white_To_black},
        ]}>
        <View style={styles.containerLogoRe}>
          <View style={styles.containerLogoNot}>
            <Image
              source={require('./../assets/images/logo.png')}
              style={[
                styles.imageLogo,
                {backgroundColor: this.props.mode.white_To_black},
              ]}
            />
            <Ico
              onPress={() => this.props.navigation.navigate('Notification')}
              name="bell"
              size={30}
              color="#fff"
              style={{marginTop: 25}}
            />
            {this.state.mode == 'DARK_MODE' ? (
              <MaterialCommunityIcons
                onPress={this.handleMode}
                name="moon-full"
                size={30}
                color="yellow"
                style={{marginTop: 25, marginRight: 15}}
              />
            ) : (
              <Ico
                onPress={this.handleMode}
                name="moon"
                size={30}
                color="#fff"
                style={{marginTop: 25, marginRight: 15}}
              />
            )}
          </View>
          <View
            style={{
              borderRadius: 10,
              marginLeft: 10,
              marginRight: 10,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              height: 50,
              marginBottom: 25,
              overflow: 'hidden',
              backgroundColor: this.props.mode.white_To_black,
            }}>
            <Icon
              name="search"
              size={30}
              color={this.props.mode.black_To_White}
              style={{marginTop: 9, marginLeft: 10}}
            />
            <TextInput
              placeholder="Recherche ..."
              placeholderTextColor={this.props.mode.sblack_To_sWhite}
              style={{
                fontSize: 20,
                width: '90%',
                color: this.props.mode.black_To_White,
              }}
              onChangeText={e => this.handleRecherche(e)}
            />
          </View>
        </View>
        <ScrollView>
          {this.state.newOnApp && (
            <Padding all={8}>
              <Column
                width={'100%'}
                style={{
                  borderWidth: 2,
                  borderColor: green,
                  borderRadius: 5,
                  backgroundColor: this.props.mode.white_To_black,
                }}>
                <Padding pHorizontal={15} pVertical={7}>
                  <Row
                    justify={'space-between'}
                    alignI={'center'}
                    width={'100%'}>
                    <Text style={{fontSize: 20}}>⚠️</Text>
                    <Text
                      onPress={async () => {
                        this.setState({...this.state, newOnApp: false});
                        await AsyncStorage.setItem(
                          'newOnApp',
                          JSON.stringify(false),
                        );
                      }}
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: this.props.mode.black_to_yellow,
                      }}>
                      X
                    </Text>
                  </Row>
                </Padding>
                <Text
                  style={StyleSheet.flatten([
                    styles.textAcceuil,
                    {color: this.props.mode.sblack_To_sWhite},
                  ])}>
                  Bienvenue sur FreeLost
                </Text>

                <Text
                  style={[
                    styles.butApp,
                    {color: this.props.mode.sblack_To_sWhite},
                  ]}>
                  L'application qui vous permet rapidement de retrouver tout vos
                  objets perdus.
                </Text>
              </Column>
            </Padding>
          )}

          <Padding pVertical={5}>
            <Center width={'100%'}>
              <Row width={'85%'} justify={'space-between'} alignI={'center'}>
                <Button
                  onPress={() =>
                    this.props.navigation.navigate(
                      "Déclaration d'objet trouvé ",
                    )
                  }
                  title={"J'ai Trouvé"}
                  buttonStyle={{
                    borderBottomLeftRadius: 30,
                    borderTopLeftRadius: 30,
                    backgroundColor: green,
                    paddingHorizontal: 25,
                  }}
                  titleStyle={{fontSize: 19, fontWeight: 'bold'}}
                />
                <Button
                  onPress={() =>
                    this.props.navigation.navigate('Déclaration de perte')
                  }
                  title={"J'ai Perdu  "}
                  buttonStyle={{
                    borderBottomRightRadius: 30,
                    borderTopRightRadius: 30,
                    paddingHorizontal: 25,
                    backgroundColor: red,
                  }}
                  titleStyle={{fontSize: 19, fontWeight: 'bold'}}
                />
              </Row>
            </Center>
          </Padding>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
              paddingVertical: 5,
            }}>
            <View style={styles.bar}></View>
          </View>

          <Text
            style={{
              width: '100%',
              textAlign: 'center',
              marginTop: 0,
              color: this.props.mode.green_To_white,
              fontSize: 25,
              fontStyle: 'italic',
            }}
            onPress={this.getObjects}
            >
            Recemment Perdu...*
          </Text>

          <Article
            navigation={this.props.navigation}
            isLoading={this.state.isLoading}
            object_list={this.state.object_list.reverse()}
            getObjects={this.getObjects}
          />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = () => ({
  mode: store.getState().mode,
});
const mapDispatchToProps = dispatch => {
  return {
    setLightAndDarkMode: mode => dispatch(setLightAndDarkMode(mode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  search: {
    margin: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 0,
    borderWidth: 4,
  },

  btnT: {
    width: '45%',
    justifyContent: 'center',
    backgroundColor: green,
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 40,
    overflow: 'hidden',
  },
  btnP: {
    width: '45%',
    justifyContent: 'center',
    backgroundColor: green,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
    justifyContent: 'center',
  },

  btnPT: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: '3%',
    justifyContent: 'space-around',
    borderRadius: 40,
  },
  bar: {
    marginTop: 10,
    height: 5,
    width: '60%',
    backgroundColor: green,
  },
  textAcceuil: {
    width: '100%',
    textAlign: 'center',
    marginTop: 0,
    color: green,
    fontSize: 30,
    fontStyle: 'italic',
  },
  imageR8: {
    width: '100%',
    height: 180,
    backgroundColor: '#228b22',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  imageLogo: {
    width: '68%',
    height: 60,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 30,
  },

  container: {
    height: '100%',
    overflow: 'scroll',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // backgroundColor: '#f5fffa',
  },
  butApp: {
    textAlign: 'center',
    color: '#333',
    fontSize: 18,
    margin: 10,
  },
  containerLogoRe: {
    width: '100%',
    height: 160,
    backgroundColor: green,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    position: 'relative',
    flexDirection: 'column',
  },
  containerRe: {
    width: '100%',
    height: 50,
    marginLeft: 30,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 0,
    flex: 1,
  },
  containerLogoNot: {
    width: '100%',
    height: 85,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text6D: {
    paddingLeft: 4,
    flexGrow: 1,
    textAlign: 'auto',
  },

  cardContainerJo: {
    width: 167,
    height: 172,
  },
});
