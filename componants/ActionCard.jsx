import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
  useColorScheme,
  _View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
        const theme = useColorScheme();
        const isDarkMode = theme === 'dark';
        const textColor = isDarkMode ? 'white':'black'  ;
  function openWebsite(websiteLink) {
    Linking.openURL(websiteLink);
  }
  return (
    <View style={styles.View}>
      <Text style={[styles.headingText,{color: textColor}]}>Blog Card</Text>
      <View style={[styles.card, styles.cardEV]}>
        <View style={styles.headingcontainer}>
          <Text style={styles.headingText}>
            hay ,whatsapp scrolling App user
          </Text>
        </View>
        <Image
          source={require('./Kartik.png')}
          style={styles.cardimg}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Hey, WhatsApp users! Scrolling through chats feels endless, right?
            Stay connected, organized, and efficient. Your conversations,
            memories, and updates— All in one seamless app. Keep scrolling,
            sharing, and staying close. WhatsApp: your world, one chat at a
            time.
          </Text>
        </View>
        <View style={styles.bodyfooter}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit',
              )
            }>
            <Text style ={styles.socialLinks}> Read More </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.instagram.com/?hl=en')}
            >
            <Text style ={styles.socialLinks}> Open instagram </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  View: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 370,
    borderRadius: 6,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  cardEV: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingcontainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardimg: {
    height: 200,
    width: '99%',
    marginHorizontal: 'auto'
  },
  bodyContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8 
  },
  bodyfooter: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 4,
  }
});
