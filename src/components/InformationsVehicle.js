import React from 'react';
import {StyleSheet, Text, Image, View, TextInput, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

const Informations: () => React$Node = () => {
  return (
    <>
    <View style={styles.container}>

      <View style={{paddingBottom: 25}}>
        <Image
          style={{width: 182, height: 82}}
          source={require('../images/logo.png')}
        />
      </View>

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Insira a marca do seu veículo"
        placeholderTextColor="#999"
        style={styles.input}
        value={1}
        onChangeText={texto => {return false}}
      />

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Insira o modelo do seu veículo"
        placeholderTextColor="#999"
        style={styles.input}
        value={1}
        onChangeText={texto => {return false}}
      />

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="KM atual do veículo"
        placeholderTextColor="#999"
        style={styles.input}
        value={1}
        onChangeText={texto => {return false}}
      />

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Média de KM rodados por mês"
        placeholderTextColor="#999"
        style={styles.input}
        value={1}
        onChangeText={texto => {return false}}
      />

      <TouchableOpacity onPress={() => {Actions.items()}} style={styles.button}>
          <Text style={styles.buttonText}> Continuar </Text>
      </TouchableOpacity>

    </View>
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
    height: 46,
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
  }
});

export default Informations;
