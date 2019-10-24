import React from 'react';
import {StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

const Informations: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>

          <Text> Informations </Text>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default Informations;
