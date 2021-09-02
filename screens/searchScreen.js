import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Search extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>search</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfdbe8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
