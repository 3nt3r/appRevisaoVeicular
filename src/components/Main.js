import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

const Main: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>

        <StatusBar backgroundColor="#FF4500" />

        <View style={{paddingBottom: 25}}>
          <Image
            style={{width: 182, height: 82}}
            source={require('../images/logo.png')}
          />
        </View>

        <View style={{padding: 15}}>
          <Text style={styles.infoText}> Qual é o tipo do seu veículo? </Text>
        </View>

        <View style={{padding: 15, alignSelf: 'stretch',}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {Actions.informationsVehicle()}}
          >
            <View style={styles.containerOptions}>
              <Icon name="local-shipping" size={30} color="#FF4500" style={styles.icons} />
              <Text style={{fontWeight: 'bold'}}> Caminhão </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{padding: 15, alignSelf: 'stretch',}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {Actions.informationsVehicle()}}
          >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="directions-car" size={30} color="#FF4500" style={styles.icons} />
              <Text style={{fontWeight: 'bold'}}> Carro </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{padding: 15, alignSelf: 'stretch',}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {Actions.informationsVehicle()}}
          >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="motorcycle" size={30} color="#FF4500" style={styles.icons} />
              <Text style={{fontWeight: 'bold'}}> Moto </Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#E8E8E8'
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  containerOptions: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icons: {
    paddingBottom: 8,
    paddingTop: 10
  },
});

export default Main;
