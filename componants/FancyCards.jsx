import {StyleSheet, Text, View, Image, useColorScheme} from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function FancyCards() {

    const theme = useColorScheme();
    const isDarkMode = theme === 'dark';
    const textColor = isDarkMode ? 'white':'black';
  return (
    <View>
      <View style={styles.view}>
        <Text style={[styles.headingtext,{color: textColor}]}>Facy Cards</Text>
      </View>
      <View style={[styles.card, styles.cardEv]}>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/ULWZ5_9kr4kGZeVW9czDtogBxK3A9ZyVbWTQKPtm72k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E1Lzhi/LzNhL2E1OGIzYWUz/YjczZDE4ZjIxZTcz/Y2IyZmRmZmE5ZGZj/LmpwZw',
          }}
          style={styles.cardimg}
        />
        <View style={styles.cardbody}>
          <Text style={styles.cardTitle}>IIT Roorkee</Text>
          <Text style={styles.cardlabl}>Timeless Center of Excellence in Roorkee's Scenic and Historic Landscape
          </Text>
          <Text style={styles.cardDescripsion}>
            
             IIT Roorkee, Asia's oldest technical institute, combines rich history, innovation, and a scenic Himalayan location to nurture global leaders in education and research
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,

  },
  cardEv:{
    backgroundColor: 'white',
    elevation: 6,
    shadowOffset :{
      width: 1,
      height: 1,
    },
  },
  cardimg: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardbody:{
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle:{
    color:'#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardlabl:{
    color:'#000000',
    fontSize: 14,
    marginBottom: 4,
  },
  cardDescripsion:{
    color:'#000000',
    fontSize: 12,
    marginTop: 6,
    flexShrink: 1,
  },
});
