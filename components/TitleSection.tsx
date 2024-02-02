import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MessageSection() {
  return (
    <View style={styles.container}>
        <View style={styles.chatContainer}>
            <Text style={styles.chat}>Chats</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.update}>Updates</Text>
        </View>
      <View style={styles.textContainer}>
        <Text style={styles.call}>Calls</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dcfce7',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    chatContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 15,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        alignItems: 'center'
    },
    chat: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000000',
    },
    update: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000000'
    },
    call: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000000'
    }
})