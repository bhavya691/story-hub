import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Header extends React.Component{
    render(){
      return (
        <View>
          <TouchableOpacity style={styles.header}>
            <Text style={styles.headText}>Bed Time Stories</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    header:{
      backgroundColor: 'lightgreen',
      padding: 15,
      textAlign: 'center',
      cursor: 'default'
    },
    headText:{
        fontSize: 40,
        fontWeight: 500,
        wordSpacing: 10
    }
  })