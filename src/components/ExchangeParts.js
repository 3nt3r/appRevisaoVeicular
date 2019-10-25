import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

const ExchangeParts: () => React$Node = () => {
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
          <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Icon name="build" size={30} color="#FF4500" style={styles.icons} />
            <Text> Óleo do motor </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Icon name="done" size={30} color="#FF4500" style={styles.icons} />
            <Text> Óleo da transmissão </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Icon name="done" size={30} color="#FF4500" style={styles.icons} />
            <Text> Pressão dos pneus </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Icon name="build" size={30} color="#FF4500" style={styles.icons} />
            <Text> Troca dos pneus </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Icon name="done" size={30} color="#FF4500" style={styles.icons} />
            <Text> Pastilhas de freio </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Icon name="build" size={30} color="#FF4500" style={styles.icons} />
            <Text> Fluido de freio </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Icon name="done" size={30} color="#FF4500" style={styles.icons} />
            <Text> Líquido de arrefecimento </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Icon name="done" size={30} color="#FF4500" style={styles.icons} />
            <Text> Filtro de ar </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => {return false}} style={styles.button}>
            <Text style={styles.buttonText}> Oficinas </Text>
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

export default ExchangeParts;
