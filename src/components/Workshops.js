import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

const Workshops: () => React$Node = () => {
  return (
    <>
    <ScrollView>
      <View style={styles.container}>

        <View style={{paddingBottom: 25}}>
          <Image
            style={{width: 182, height: 82}}
            source={require('../images/logo.png')}
          />
        </View>

        <View>
          <View style={{paddingBottom: 25}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  style={{width: 160, height: 106}}
                  source={require('../images/workshop1.jpg')}
                />
              </View>
              <View style={{paddingLeft: 2}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#FF4500'}}> Oficina do João </Text>
                <Text style={{fontWeight: 'bold', fontSize: 12, color: '#FF4500'}}> Serviços disponíveis </Text>
                <Text style={{fontSize: 12}}> Troca de óleo </Text>
                <Text style={{fontSize: 12}}> Troca de pneus </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => {return false}} style={styles.button}>
                  <Text style={styles.buttonText}> Contactar </Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={{paddingBottom: 25}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  style={{width: 160, height: 106}}
                  source={require('../images/workshop2.jpg')}
                />
              </View>
              <View style={{paddingLeft: 2}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#FF4500'}}> Oficina do Francisco </Text>
                <Text style={{fontWeight: 'bold', fontSize: 12, color: '#FF4500'}}> Serviços disponíveis </Text>
                <Text style={{fontSize: 12}}> Troca de óleo </Text>
                <Text style={{fontSize: 12}}> Troca de pneus </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => {return false}} style={styles.button}>
                  <Text style={styles.buttonText}> Contactar </Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={{paddingBottom: 25}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  style={{width: 160, height: 106}}
                  source={require('../images/workshop3.jpg')}
                />
              </View>
              <View style={{paddingLeft: 2}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#FF4500'}}> Oficina do Joaquim </Text>
                <Text style={{fontWeight: 'bold', fontSize: 12, color: '#FF4500'}}> Serviços disponíveis </Text>
                <Text style={{fontSize: 12}}> Troca de óleo </Text>
                <Text style={{fontSize: 12}}> Troca de pneus </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => {return false}} style={styles.button}>
                  <Text style={styles.buttonText}> Contactar </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#E8E8E8',
    padding: 30
  },
  input: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FF4500',
    borderRadius: 4,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 16
  },
  infoText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default Workshops;
