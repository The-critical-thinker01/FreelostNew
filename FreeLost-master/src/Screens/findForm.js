import React, {Component, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Switch,
  ToastAndroid,
  Alert,
} from 'react-native';

import {
  Form,
  FormItem,
  Label,
  Modal,
  Picker,
  submitForm,
} from 'react-native-form-component';
import {Avatar, Image, Button, Input} from 'react-native-elements';
import {
  black,
  green,
  grey,
  red,
  white,
  freelost,
} from '../constantes/constantes';
import {pays} from '../constantes/pays';
import {color} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker';
import {TextInput} from 'react-native-gesture-handler';
import {Divider} from '@rneui/themed';
import Center from '../librairies/center';
import {launchImageLibrary} from 'react-native-image-picker';
import * as Yup from 'yup';
import Column from '../librairies/column';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native-paper';
import {docTypes} from '../constantes/documentTypes';
import {electroTypes} from '../constantes/electroniqueTypes';
import {sacTypes} from '../constantes/sacBagesTypes';

//const PicTitle= require("./../assets/images/add.png");

export default function Findform({navigation}) {
  const currentuser = useSelector(state => state.user);
  const [formData, setFormData] = useState({
    nomObjet: '',
    Lieu: '',
    DatePerteObjet: '',
    Photo: '',
    Description: '',
    Categorie: '',
    TypeDoc: '',
    Marque: '',
    Modele: '',
    UserNom: '',
    UserPrenom: '',
    Nationalite: 'Cameroun',
    DateNaissance: '',
    UserPhone: '',
    idUtilisateur: currentuser.user._id,
    statut: 'trouver',
    valider: 'non',
    dateCreationObject: new Date(),
  });
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateNaiss, setDateNaiss] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [title, setTitle] = useState('Choisissez une date');
  const [TitleDate, setTitleDate] = useState(
    'Date de naissance sur le document...',
  );
  const day = [
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi',
    'dimanche',
  ];
  const [number, setNumber] = useState(1);
  const [countryNumber, setCountryNumber] = useState(37);
  const [docTypeNumber, setDocTypeNumber] = useState(1);
  const [elecTypeNumber, setElecTypeNumber] = useState(1);
  const [sacTypeNumber, setSacTypeNumber] = useState(1);
  const [isEnabled, setIsEnabled] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const togglePhoneNumber = () =>
    setPhoneNumber(previousState => !previousState);
  const [image, setImage] = useState(false);
  const toggleImage = () => {
    setImage(previousState => !previousState);
  };
  const [Pic, SetPic] = useState('');
  const [PicTitle, setPicTitle] = useState('');
  const [adress, setAdress] = useState('');
  const [Error, setError] = useState(false);
  const sendForm = () => {
    if (formData.Lieu == '') {
      alert('Veuillez entrer un Lieu');
      return;
    } else if (formData.DatePerteObjet == '') {
      alert('Veuillez choisir la date ');
      return;
    } else if (formData.Categorie == 'Selectionnez la categorie') {
      alert('Veuillez choisir une categorie');
      return;
    } else if (formData.Categorie == 'Papiers et documents officiels') {
      if (formData.TypeDoc == '') {
        alert('Veuillez choisir un type');
        return;
      } else if (formData.Nationalite == '') {
        alert('Choisissez une nationalité');
        return;
      } else if (formData.DateNaissance == '') {
        alert('Veuillez entrer la date de naissance ');
        return;
      } else if (formData.UserNom == '') {
        alert('Veuiller entrer  un nom');
        return;
      } else if (formData.UserPrenom == '') {
        alert("Veuillez décrivre l'objet");
        return;
      }
    }
    //console.log(formData);
    handleSubmit(formData.Photo, formData);
  };

  const handleSubmit = async (photo, objet) => {
    setIsFormSubmited(true);
    //sil ya une photo
    let imagePath = '';
    if (photo !== null) {
      const dataImage = new FormData();
      dataImage.append('object', {
        uri: photo.uri,
        name: photo.fileName,
        type: photo.type,
      });
      await axios
        .post(freelost + '/object/uploadImageObjet', dataImage, {
          headers: {'Content-Type': 'multipart/form-data'},
        })
        .then(async res => {
          imagePath = res.data.path;
          console.log('path de limage dans la bd', imagePath);
          objet.Photo = imagePath;
          await axios
            .post(freelost + '/object/create', objet)
            .then(res => {
              console.log('object ajouter', res.data);
              setToastMsg('publication ajoutée avec succès');
              navigation.goBack(); //naviguer vers la page d'accueil, sa ne donne pas encore
            })
            .catch(err => {
              console.log(err.response);
            });
        })
        .catch(err => {
          console.log(err.response);
        })
        .finally(() => {
          setIsFormSubmited(false);
        });
    } else {
      await axios
        .post(freelost + '/object/create', objet)
        .then(res => {
          console.log('object ajouter', res.data);
          setToastMsg('publication ajoutée avec succès');
          navigation.goBack(); //naviguer vers la page d'accueil, sa ne donne pas encore
        })
        .catch(err => {
          console.log(err.response);
        })
        .finally(() => {
          setIsFormSubmited(false);
        });
    }
    setIsFormSubmited(false);
  };
  const setToastMsg = msg => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };
  const uploadImage = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1,
      saveToPhotos: true,
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        setToastMsg('Aucune image selectionnée');
      } else if (response.errorCode == 'permission') {
        setToastMsg('Permission non autorisée');
      } else if (response.errorCode == 'others') {
        setToastMsg(reponse.errorMessage);
      } else {
        setPicTitle(response.assets[0].uri);
        setFormData({...formData, Photo: response.assets[0]});
      }
    });
  };

  return (
    <View>
      <Modal
        show={isFormSubmited}
        animationType="slide"
        visible={isFormSubmited}>
        <View
          style={{
            backgroundColor: '#fff',
            opacity: 0.9,
            height: '80%',
            marginTop: '28%',
            marginHorizontal: '2%',
            borderColor: green,
            borderWidth: 1,
            borderRadius: 30,
          }}>
          <Center
            style={{
              height: '90%',
            }}>
            <ActivityIndicator size={'large'} color={green} />
            <Text
              style={{
                color: green,
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Publication...
            </Text>
          </Center>
        </View>
      </Modal>
      <ScrollView style={{paddingTop: 10, paddingHorizontal: 10}}>
        {/* <Text   style={}></Text> */}
        {/* <Divider width={3} color={grey} style={{paddingTop:5}}/> */}

        <Form
          buttonText="Envoyer ma déclaration"
          buttonStyle={{backgroundColor: green}}
          onButtonPress={() => sendForm()}>
          <Text
            style={{
              color: grey,
              fontSize: 16,
              fontWeight: 'bold',
              paddingTop: 10,
            }}>
            Où avez vous trouvé l'objet?
          </Text>

          <FormItem
            placeholder="Dschang"
            value={formData.Lieu}
            onChangeText={e => {
              setFormData({...formData, Lieu: e});
            }}
          />
          <Label text="Quand?" isRequired />
          <Button
            onChangeText={title}
            title={title}
            buttonStyle={{
              backgroundColor: white,
              justifyContent: 'flex-start',
              borderBottomColor: Error ? red : green,
            }}
            onPress={() => {
              setOpen(true);
            }}
            titleStyle={{color: grey}}
          />
          <DatePicker
            isRequired
            theme="dark"
            mode="date"
            modal={true}
            date={date}
            open={open}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              setTitle(date.toDateString());
              setFormData({...formData, DatePerteObjet: date.toDateString()});
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

          <Picker
            items={[
              {label: 'Selectionnez la categorie', value: 1},
              {label: 'Papiers et documents officiels', value: 2},
              {label: 'Electronique', value: 3},
              {label: 'Sacs et Bagages', value: 4},
              {label: 'Bijoux,montres', value: 5},
              {label: 'Vêtement et accessoires', value: 6},
              {label: "Affaires d'enfants", value: 7},
              {label: 'Annimaux', value: 8},
              {label: 'Effets personnel', value: 9},
              {label: 'Divers', value: 10},
            ]}
            label="Choisir la catégorie"
            selectedValue={number}
            onSelection={item => {
              setNumber(item.value);
              setFormData({...formData, Categorie: item.label});
            }}
          />

          <View>
            {/* //Gestion de la categorie Electronique */}

            {number == 3 && (
              <>
                <Picker
                  items={electroTypes.map((e, index) => {
                    return {label: e, value: index};
                  })}
                  label="Type d'apareil *"
                  selectedValue={elecTypeNumber}
                  onSelection={item => {
                    setElecTypeNumber(item.value);
                    setFormData({...formData, TypeDoc: item.label});
                  }}
                />

                <Text
                  style={{
                    color: grey,
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingTop: 10,
                  }}>
                  Avez-vous une photo de l'objet?
                </Text>
                <Switch
                  trackColor={grey}
                  onValueChange={toggleImage}
                  value={image}
                />
                {image && (
                  <>
                    <Text
                      style={{color: grey, fontSize: 16, fontWeight: 'bold'}}>
                      <Button
                        title="Choisir une image..."
                        onPress={() => {
                          uploadImage();
                        }}
                        buttonStyle={{
                          backgroundColor: white,
                          justifyContent: 'flex-start',
                        }}
                        titleStyle={{color: grey}}
                      />
                    </Text>
                    <Image
                      style={{width: 65, height: 65, paddingTop: 10}}
                      source={{uri: PicTitle}}
                    />
                  </>
                )}
                <Label text="Marque" isRequired />
                <FormItem
                  placeholder="Saisissez  la marque  de l'appareil"
                  value={formData.Marque}
                  onChangeText={e => {
                    setFormData({...formData, Marque: e});
                  }}
                />
                <Label text="Modèle" isRequired />
                <FormItem
                  placeholder="Précisez  le modèle  de l'appareil"
                  value={formData.Modele}
                  onChangeText={e => {
                    setFormData({...formData, Modele: e});
                  }}
                />
                <Label text="Votre Nom" isRequired />
                <FormItem
                  placeholder="Entrez votre nom"
                  value={formData.UserNom}
                  onChangeText={e => {
                    setFormData({...formData, UserNom: e});
                  }}
                />
                <Label text="Votre prenom" isRequired />
                <FormItem
                  placeholder="Entrez votre prenom"
                  value={formData.UserPrenom}
                  onChangeText={e => {
                    setFormData({...formData, UserPrenom: e});
                  }}
                />
                <Text style={{color: grey, fontSize: 16, fontWeight: 'bold'}}>
                  Détail
                </Text>
                <TextInput
                  multiline={true}
                  numberOfLines={3}
                  placeholder="Une bonne description facilitera de retrouver le proprietaire du document "
                  value={formData.Description}
                  onChangeText={e => {
                    setFormData({...formData, Description: e});
                  }}
                  style={{backgroundColor: white}}
                />
                <Text
                  style={{
                    color: grey,
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingTop: 10,
                  }}>
                  Voulez-vous être contacté ?
                </Text>
                <Switch
                  trackColor={grey}
                  onValueChange={togglePhoneNumber}
                  value={phoneNumber}
                />
                {phoneNumber && (
                  <>
                    <FormItem
                      keyboardType="numeric"
                      placeholder="Votre numéro de téléphone..."
                      value={formData.UserPhone}
                      onChangeText={e => {
                        setFormData({...formData, UserPhone: e});
                      }}
                    />
                  </>
                )}
              </>
            )}

            {/*Gestion de la categorie Documents*/}

            {number == 2 && (
              <>
                <Text
                  style={{
                    color: grey,
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingTop: 10,
                  }}>
                  Avez-vous une photo de l'objet?
                </Text>
                <Switch
                  trackColor={grey}
                  onValueChange={toggleImage}
                  value={image}
                />
                {image && (
                  <>
                    <Text
                      style={{color: grey, fontSize: 16, fontWeight: 'bold'}}>
                      <Button
                        title="Choisir une image..."
                        onPress={() => {
                          uploadImage();
                        }}
                        buttonStyle={{
                          backgroundColor: white,
                          justifyContent: 'flex-start',
                        }}
                        titleStyle={{color: grey}}
                      />
                      <Text
                        style={{
                          color: red,
                          fontSize: 10,
                          paddingTop: 10,
                        }}>
                        Prenez la peine de cahcher les informations sensibles
                        sur l'image avant de la poster...
                      </Text>
                    </Text>
                    <Image
                      style={{width: 65, height: 65, paddingTop: 10}}
                      source={{uri: PicTitle}}
                    />
                  </>
                )}

                <Picker
                  items={docTypes.map((e, index) => {
                    return {label: e, value: index};
                  })}
                  label="Type de document *"
                  selectedValue={docTypeNumber}
                  onSelection={item => {
                    setDocTypeNumber(item.value);
                    setFormData({...formData, TypeDoc: item.label});
                  }}
                />

                <Picker
                  items={pays.map((e, index) => {
                    return {label: e, value: index};
                  })}
                  label="Nationalité *"
                  selectedValue={countryNumber}
                  onSelection={item => {
                    setCountryNumber(item.value);
                    setFormData({...formData, Nationalite: item.label});
                  }}
                />

                <Label text="Date de naissance sur le document *" isRequired />
                <Button
                  onChangeText={TitleDate}
                  title={TitleDate}
                  buttonStyle={{
                    backgroundColor: white,
                    justifyContent: 'flex-start',
                    borderBottomColor: Error ? red : green,
                  }}
                  onPress={() => {
                    setDateOpen(true);
                  }}
                  titleStyle={{color: grey}}
                />
                <DatePicker
                  isRequired
                  theme="dark"
                  mode="date"
                  modal={true}
                  date={dateNaiss}
                  open={dateOpen}
                  onConfirm={e => {
                    setDateOpen(false);
                    setDateNaiss(e);
                    setTitleDate(e.toDateString());
                    setFormData({
                      ...formData,
                      DateNaissance: e.toDateString(),
                    });
                  }}
                  onCancel={() => {
                    setDateOpen(false);
                  }}
                />
                <Label text="Nom *" isRequired />
                <FormItem
                  placeholder="Entrez le nom sur le document"
                  value={formData.UserNom}
                  onChangeText={e => {
                    setFormData({...formData, UserNom: e});
                  }}
                />
                <Label text="Prenom *" isRequired />
                <FormItem
                  placeholder="Entrez le prenom sur le document "
                  value={formData.UserPrenom}
                  onChangeText={e => {
                    setFormData({...formData, UserPrenom: e});
                  }}
                />
                <Text style={{color: grey, fontSize: 16, fontWeight: 'bold'}}>
                  Détail
                </Text>

                <TextInput
                  multiline={true}
                  numberOfLines={3}
                  placeholder="Une bonne description facilitera de retrouver le proprietaire du document "
                  value={formData.Description}
                  onChangeText={e => {
                    setFormData({...formData, Description: e});
                  }}
                  style={{backgroundColor: white}}
                />

                <Text
                  style={{
                    color: grey,
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingTop: 10,
                  }}>
                  Voulez-vous être contacté ?
                </Text>
                <Switch
                  trackColor={grey}
                  onValueChange={togglePhoneNumber}
                  value={phoneNumber}
                />
                {phoneNumber && (
                  <>
                    <FormItem
                      keyboardType="numeric"
                      placeholder="Votre numéro de téléphone..."
                      value={formData.UserPhone}
                      onChangeText={e => {
                        setFormData({...formData, UserPhone: e});
                      }}
                    />
                  </>
                )}
              </>
            )}

            {/*Gestion de la categorie Sacs et Bagages*/}
            {number == 4 && (
              <>
                <Text
                  style={{
                    color: grey,
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingTop: 10,
                  }}>
                  Avez-vous une photo de l'objet?
                </Text>
                <Switch
                  trackColor={grey}
                  onValueChange={toggleImage}
                  value={image}
                />
                {image && (
                  <>
                    <Text
                      style={{color: grey, fontSize: 16, fontWeight: 'bold'}}>
                      <Button
                        title="Choisir une image..."
                        onPress={() => {
                          uploadImage();
                        }}
                        buttonStyle={{
                          backgroundColor: white,
                          justifyContent: 'flex-start',
                        }}
                        titleStyle={{color: grey}}
                      />
                    </Text>
                    <Image
                      style={{width: 65, height: 65, paddingTop: 10}}
                      source={{uri: PicTitle}}
                    />
                  </>
                )}
                <Picker
                  items={sacTypes.map((e, index) => {
                    return {label: e, value: index};
                  })}
                  label="Type de Sac/Bagage *"
                  selectedValue={sacTypeNumber}
                  onSelection={item => {
                    setSacTypeNumber(item.value);
                    setFormData({...formData, TypeDoc: item.label});
                  }}
                />
                <Label text="Marque *" isRequired />
                <FormItem
                  placeholder="Saisissez le nom du sac/Bagage "
                  value={formData.Marque}
                  onChangeText={e => {
                    setFormData({...formData, Marque: e});
                  }}
                />
                <Label text="Modèle *" isRequired />
                <FormItem
                  placeholder="Saisissez  le modèle du sac"
                  value={formData.Modele}
                  onChangeText={e => {
                    setFormData({...formData, Modele: e});
                  }}
                />

                <Label text="Votre Nom" isRequired />
                <FormItem
                  placeholder="Entrez votre nom"
                  value={formData.UserNom}
                  onChangeText={e => {
                    setFormData({...formData, UserNom: e});
                  }}
                />
                <Label text="Votre prenom" isRequired />
                <FormItem
                  placeholder="Entrez votre prenom"
                  value={formData.UserPrenom}
                  onChangeText={e => {
                    setFormData({...formData, UserPrenom: e});
                  }}
                />
                <Text style={{color: grey, fontSize: 16, fontWeight: 'bold'}}>
                  Détail
                </Text>
                <TextInput
                  multiline={true}
                  numberOfLines={3}
                  placeholder="Une bonne description facilitera de retrouver le proprietaire de objet "
                  value={formData.Description}
                  onChangeText={e => {
                    setFormData({...formData, Description: e});
                  }}
                  style={{backgroundColor: white}}
                />
                <Text
                  style={{
                    color: grey,
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingTop: 10,
                  }}>
                  Voulez-vous être contacté ?
                </Text>
                <Switch
                  trackColor={grey}
                  onValueChange={togglePhoneNumber}
                  value={phoneNumber}
                />
                {phoneNumber && (
                  <>
                    <FormItem
                      keyboardType="numeric"
                      placeholder="Votre numéro de téléphone..."
                      value={formData.UserPhone}
                      onChangeText={e => {
                        setFormData({...formData, UserPhone: e});
                      }}
                    />
                  </>
                )}
              </>
            )}
          </View>
          <Text
            style={{
              color: red,
              fontSize: 12,
            }}>
            Note*: Prenez la peine de bien remplire tout les champs, décrivez
            correctement l'objet et n'utilisez pas d'abréviation dans le
            remplissage des champs.
          </Text>
        </Form>
      </ScrollView>
    </View>
  );
}
