import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {green, red} from '../constantes/constantes';
import Center from '../librairies/center';
import Column from '../librairies/column';
import Padding from '../librairies/padding';
import Row from '../librairies/row';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { addUserToReduxStore } from '../redux/userSlice';
import { setUserIsConnected } from '../redux/connectionSlice';

class Conseils extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conseil: 1,
    };
  }

  conseilSuivant = () => {
    this.setState({...this.state, conseil: this.state.conseil + 1});
  };
  conseilPrecedent = () => {
    this.setState({...this.state, conseil: this.state.conseil - 1});
  };

  render() {
    console.log(this.props.params.user);
    let a;
    if (this.state.conseil == 1) {
      a = <Conseils_A />;
    } else if (this.state.conseil == 2) {
      a = <Conseils_B />;
    } else {
      a = <Conseils_C />;
    }
    return (
      <SafeAreaView>
        <Center height={'100%'} style={{backgroundColor: green}}>
          <Center
            height={'90%'}
            bdRadius={20}
            style={{backgroundColor: 'white', overflow: 'hidden'}}>
            <Padding pHorizontal={10} height={'100%'}>
              <Center
                height={'100%'}
                style={{borderWidth: 1, borderColor: '#000'}}>
                <Column>
                  <Center style={{marginBottom: 100}}>{a}</Center>
                  <Center>
                    <Row justify={'space-between'} alignI={'center'}>
                      <Center width={'50%'}>
                        {this.state.conseil > 1 && (
                          <Button
                            onPress={this.conseilPrecedent}
                            buttonStyle={{
                              backgroundColor: red,
                              width: 100,
                              marginTop: 8,
                            }}
                            titleStyle={{
                              textAlign: 'center',
                              fontWeight: 'bold',
                              fontSize: 19,
                            }}
                            icon={
                              <Ionicons
                                name={'arrow-back'}
                                size={25}
                                color={'#fff'}
                              />
                            }
                          />
                        )}
                      </Center>

                      <Center width={'50%'}>
                        {this.state.conseil < 3 && (
                          <Button
                            onPress={this.conseilSuivant}
                            buttonStyle={{
                              backgroundColor: green,
                              width: 100,
                              marginTop: 8,
                            }}
                            titleStyle={{
                              textAlign: 'center',
                              fontWeight: 'bold',
                              fontSize: 19,
                            }}
                            icon={
                              <Ionicons
                                name={'arrow-forward'}
                                size={25}
                                color={'#fff'}
                              />
                            }
                          />
                        )}
                        {this.state.conseil == 3 && (
                          <Button
                            onPress={() => {
                              this.props.addUserToReduxStore(this.props.params.user);
                              this.props.setUserIsConnected();
                            }}
                            buttonStyle={{
                              backgroundColor: green,
                              width: 100,
                              marginTop: 8,
                            }}
                            titleStyle={{
                              textAlign: 'center',
                              fontWeight: 'bold',
                              fontSize: 19,
                            }}
                            title={'Termine'}
                          />
                        )}
                      </Center>
                    </Row>
                  </Center>
                </Column>
              </Center>
            </Padding>
          </Center>
        </Center>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUserToReduxStore: a => dispatch(addUserToReduxStore(a)),
    setUserIsConnected: () => dispatch(setUserIsConnected(true)),
  };
};
export default connect(null, mapDispatchToProps)(Conseils);

class Conseils_A extends Component {
  render() {
    return (
      <Column>
        <Image
          source={require('./../assets/images/idee-entreprise-gens_52683-28609.jpg')}
          style={{width: 350, height: 180}}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={{color: green, fontSize: 21}}>Bonnes Pratiques</Text>
        <Text
          style={{
            color: '#000a',
            fontSize: 17,
            fontWeight: '800',
            width: 300,
            textAlign: 'center',
          }}>
          Ne rencontrez jamais une personne dans un lieu qui n'est pas publique,
          ceci dans le but d'eviter tout desagrement ou toute arnaque
        </Text>
      </Column>
    );
  }
}

class Conseils_B extends Component {
  render() {
    return (
      <Column>
        <Image
          source={require('./../assets/images/idee-entreprise-gens_52683-28609.jpg')}
          style={{width: 350, height: 180}}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={{color: green, fontSize: 21}}>Bonnes Pratiques</Text>
        <Text
          style={{
            color: '#000a',
            fontSize: 17,
            fontWeight: '800',
            width: 300,
            textAlign: 'center',
          }}>
          Afin de nous faciliter la tache lors de la fouille de votre objet
          egare, veuillez prendre soin d'entrer correctement les informations
          sur votre objet
        </Text>
      </Column>
    );
  }
}

class Conseils_C extends Component {
  render() {
    return (
      <Column>
        <Image
          source={require('./../assets/images/idee-entreprise-gens_52683-28609.jpg')}
          style={{width: 350, height: 180}}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={{color: green, fontSize: 21}}>Bonnes Pratiques</Text>
        <Text
          style={{
            color: '#000a',
            fontSize: 17,
            fontWeight: '800',
            width: 300,
            textAlign: 'center',
          }}>
          Rassurez-vous, si vous trouvez un objet et vous gardez votre anonymat,
          vous pouvez vous rendre dans un centre de collecte pour y deposer
          l'objet
        </Text>
      </Column>
    );
  }
}
