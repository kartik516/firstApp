import {SafeAreaView, ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import FlatCards from './componants/FlatCards';
import ElevatedCards from './componants/ElevatedCards';
import FancyCards from './componants/FancyCards';
import Imagebg from "./componants/Imagebg";
import ActionCard from './componants/ActionCard';
import ContactList from './componants/ContactList';


const App = () => {
  const theme =useColorScheme()
  const isDarkMode =theme ==='dark';
  const textColor = isDarkMode ? 'black' : 'white'

  const fancycards = [];

  for (let i = 0; i < 1; i++){
    fancycards.push(<FancyCards key={i} />);
  }
  return (
    <SafeAreaView style ={[styles.container,{backgroundColor:textColor}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatCards />
        <ElevatedCards />
        {fancycards}
        <ContactList/>
        <ActionCard/>
        <Imagebg/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
