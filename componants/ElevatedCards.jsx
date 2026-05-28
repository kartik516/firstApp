import { StyleSheet, Text, View, ScrollView, useColorScheme} from 'react-native'
import React from 'react'

export default function ElevatedCards() {
      const theme = useColorScheme();
      const isDarkMode = theme === 'dark';
      const textColor = isDarkMode ? 'white':'black'  ;
  return (
    <View>
      <View style={styles.View}>
        <Text style={[styles.headingText,{color: textColor}]}>Elevated Cards</Text>
      </View>
      <ScrollView horizontal style={styles.container}
      // showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
        <View style={[styles.card, styles.cardone]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardone]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardone]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardone]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardone]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardone, styles.Cardd]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8,
  },
  View:{
    flex :1,
    alignItems: 'center'
  },
  container:{
    padding:8,
    flexDirection: 'row'

  },

  card: {
    flex:1,
    alignItems: 'center',
    justifyContent:"center",
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 5,
    color: '#000000',
    
  },
  Cardd:{
    marginHorizontal: 20,
  },
  cardone: {
    backgroundColor: '#CAD5E2',
    elevation: 4
  },
})