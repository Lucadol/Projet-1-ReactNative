import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid : 1,
            name : 'Jane Doe',
            status : 'Hey there! I am loving the life.',
            imageUrl: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-debout-mur-gris_231208-10760.jpg?w=1060&t=st=1706867062~exp=1706867662~hmac=975cee12990f28947dff8e3b6ee559cc901c2e9472a4d47c72981ab9b88a5771'
        },
        {
            uid : 2,
            name : 'John Doe',
            status : 'Hello everybody !',
            imageUrl: 'https://img.freepik.com/photos-gratuite/illustration-3d-adolescent-visage-drole-lunettes_1142-50955.jpg?w=740&t=st=1706867000~exp=1706867600~hmac=0824d6fb8232e2311e33ef233556db77b9f5036052522e7458bf5399fdd9d1ba'
        },
        {
            uid : 3,
            name : 'Erika Doe',
            status : 'Hey there! I am using this new app.',
            imageUrl: 'https://img.freepik.com/photos-gratuite/portrait-jolie-jeune-femme-foret-femme-caucasienne-aux-cheveux-noirs-aux-yeux-verts-souriant-camera-portrait-nature-concept-beaute_74855-23456.jpg?w=740&t=st=1706867036~exp=1706867636~hmac=4ce9829e054a25ee45c8e6b16c1583abae9b88c89805fb106aee0c1981f5a00e'
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>{name}</Text>
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
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 4,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12
    }
})