import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Whatsapp</Text>
      <View style={styles.informationContainer}>
        <Text style={styles.informationText}>Search</Text>
        <Text style={styles.informationText}>File</Text>
        <Text style={styles.informationText}>More</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#dcfce7', 
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 28,
        fontWeight: '600',
        flexGrow: 0.5,
        color: '#000000'
    },
    informationContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    informationText: {
        color: '#000000',
        fontSize: 16
    }
})