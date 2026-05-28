import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function Imagebg() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{uri: 'https://images.pexels.com/photos/11623638/pexels-photo-11623638.jpeg?auto=compress&cs=tinysrgb&w=400'}} 
        style={styles.imageBackground}
        blurRadius={5}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBlockStart: 50,
        marginBlockEnd: 30, 
      },
      imageBackground: {
        width: '100%',
        height: 200, // Adjust height as needed
        justifyContent: 'center', // Align content vertically
        alignItems: 'center', // Align content horizontally
      },
      text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for text
        padding: 10,
        borderRadius: 5,
      },
})