import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Text>Iniciando Mines!</Text>
        <Text>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  
});

