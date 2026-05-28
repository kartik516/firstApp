import { StyleSheet, Text, View,ScrollView, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts =[
        {
            uid: 1,
            name: 'Kartik Kumar',
            status: 'A good learnar',
            imageUrl: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
        },
        {
            uid: 2,
            name: 'Kartik Kumar',
            status: 'A good learnar',
            imageUrl: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
        },
        {
            uid: 3,
            name: 'Kartik Kumar',
            status: 'A good learnar',
            imageUrl: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
        },
        {
            uid: 4,
            name: 'Kartik Kumar',
            status: 'A good learnar',
            imageUrl: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
        },
        
    ];
  return (
    <View>
      <Text style={styles.headingText}>contact List</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={true}
      >
        {contacts.map(({uid, name , status, imageUrl }) => (
            <View key={uid} style={styles.usercard}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style={styles.userimg}
                />
                <View >
                    <Text style={styles.username}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
                
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    usercard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        // borderTopLeftRadius: 28,
        // borderBottomLeftRadius: 28,
        borderRadius: 12,
        shadowOffset: {
            width: 24,
            height: 24
        },
        padding: 10,
    },
    userStatus: {},
    username: {},
    userimg: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14

    },
})