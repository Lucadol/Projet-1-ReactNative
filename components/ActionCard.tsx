import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink :string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatesCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21 - ES12
            </Text>
        </View>
        <Image
        source={{
            uri:'https://cdn.hashnode.com/res/hashnode/image/upload/v1704984624187/5c7ceb07-9d58-4619-945d-9cee35dbc84f.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3} style={styles.bodyText}>
            Higher-order functions are functions that take other functions as arguments or return functions as their results. This is possible because JavaScript supports first-class functions.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://deevyne-dev.hashnode.dev/a-beginners-guide-to-higher-order-function-hof-in-javascript')}
            >
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://www.instagram.com/luucadol/')}
            >
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    card: {
        width: 380,
        height: 380,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatesCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    },
    headerText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4
    },
    cardImage: {
        height: 200,
        marginBottom: 8
    },
    bodyContainer: {
        padding: 10
    },
    bodyText: {
        color: '#2C3335',
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
    }
})