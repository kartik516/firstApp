import {View, StyleSheet, Text, SafeAreaView, useColorScheme} from 'react-native';
import React from 'react';

export default function FlatCards() {

  const theme = useColorScheme(); // Use the hook inside the component
  const isDarkMode = theme === 'dark';
  const textColor = isDarkMode ? 'white' : 'black'; // Set text color based on theme

  return (
    <View>
      <View style={styles.View}>
        <Text style={[styles.headingText, {color: textColor}]}>Flat Cards</Text>
      </View>
        
        <View style={styles.container}>
          <View style={[styles.card, styles.cardone]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.cardtwo]}>
            <Text>blue</Text>
          </View>
          <View style={[styles.card, styles.cardthree]}>
            <Text>green</Text>
          </View>
          <View style={[styles.card, styles.cardone]}>
            <Text>Red</Text>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({

  container : {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
  },

  headingText: {
    color: '',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    paddingHorizontal: 8,
  },

  View:{
    alignItems: 'center',

  },

  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin:8,
    borderRadius: 5,
  },

  cardone: {
    backgroundColor: '#EF5354',
  },

  cardtwo: {
    backgroundColor: 'blue',
  },

  cardthree: {
    backgroundColor: 'green',
  },

});
