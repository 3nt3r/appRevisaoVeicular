import React from 'react';
import {StyleSheet, Text, Image, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

const Items: () => React$Node = () => {
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

        <View style={{padding: 15}}>
          <Text style={styles.infoText}> Observação: todos os campos abaixo devem ser preenchidos com a quilometragem referente à: </Text>
        </View>

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Última troca de óleo do motor"
          placeholderTextColor="#999"
          style={styles.input}
          value={1}
          onChangeText={texto => {return false}}
        />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Última troca de óleo da transmissão"
          placeholderTextColor="#999"
          style={styles.input}
          value={1}
          onChangeText={texto => {return false}}
        />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Última calibragem dos pneus"
          placeholderTextColor="#999"
          style={styles.input}
          value={1}
          onChangeText={texto => {return false}}
        />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Última troca de pneus"
          placeholderTextColor="#999"
          style={styles.input}
          value={1}
          onChangeText={texto => {return false}}
        />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Última troca das pastilhas dos freios"
          placeholderTextColor="#999"
          style={styles.input}
          value={1}
          onChangeText={texto => {return false}}
        />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Última troca do fluido de freio"
          placeholderTextColor="#999"
          style={styles.input}
          value={1}
          onChangeText={texto => {return false}}
        />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Última troca do líquido de arrefecimento"
          placeholderTextColor="#999"
          style={styles.input}
          value={1}
          onChangeText={texto => {return false}}
        />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Última troca do filtro de ar"
          placeholderTextColor="#999"
          style={styles.input}
          value={1}
          onChangeText={texto => {return false}}
        />

        <TouchableOpacity onPress={() => {Actions.exchangeParts()}} style={styles.button}>
            <Text style={styles.buttonText}> Continuar </Text>
        </TouchableOpacity>

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

export default Items;
