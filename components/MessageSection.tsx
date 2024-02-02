import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MessageSection() {
    const contacts = [
        {
            uid : 1,
            name : 'Jane Doe',
            message : 'Hey there! I am loving the life.',
            imageUrl: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-debout-mur-gris_231208-10760.jpg?w=1060&t=st=1706867062~exp=1706867662~hmac=975cee12990f28947dff8e3b6ee559cc901c2e9472a4d47c72981ab9b88a5771'
        },
        {
            uid : 2,
            name : 'John Doe',
            message : 'You: Will be leaving soon.',
            imageUrl: 'https://img.freepik.com/photos-gratuite/illustration-3d-adolescent-visage-drole-lunettes_1142-50955.jpg?w=740&t=st=1706867000~exp=1706867600~hmac=0824d6fb8232e2311e33ef233556db77b9f5036052522e7458bf5399fdd9d1ba'
        },
        {
            uid : 3,
            name : 'Erika Doe',
            message : 'Great! Thank a lot!',
            imageUrl: 'https://img.freepik.com/photos-gratuite/portrait-jolie-jeune-femme-foret-femme-caucasienne-aux-cheveux-noirs-aux-yeux-verts-souriant-camera-portrait-nature-concept-beaute_74855-23456.jpg?w=740&t=st=1706867036~exp=1706867636~hmac=4ce9829e054a25ee45c8e6b16c1583abae9b88c89805fb106aee0c1981f5a00e'
        },
         {
            uid : 4,
            name : 'Jene Doe',
            message : 'Hey there! I am loving the life.',
            imageUrl: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-debout-mur-gris_231208-10760.jpg?w=1060&t=st=1706867062~exp=1706867662~hmac=975cee12990f28947dff8e3b6ee559cc901c2e9472a4d47c72981ab9b88a5771'
        },
        {
            uid : 5,
            name : 'Juhn Doe',
            message : 'You: Will be leaving soon.',
            imageUrl: 'https://img.freepik.com/photos-gratuite/illustration-3d-adolescent-visage-drole-lunettes_1142-50955.jpg?w=740&t=st=1706867000~exp=1706867600~hmac=0824d6fb8232e2311e33ef233556db77b9f5036052522e7458bf5399fdd9d1ba'
        },
        {
            uid : 6,
            name : 'Eriko Doe',
            message : 'Great! Thank a lot!',
            imageUrl: 'https://img.freepik.com/photos-gratuite/portrait-jolie-jeune-femme-foret-femme-caucasienne-aux-cheveux-noirs-aux-yeux-verts-souriant-camera-portrait-nature-concept-beaute_74855-23456.jpg?w=740&t=st=1706867036~exp=1706867636~hmac=4ce9829e054a25ee45c8e6b16c1583abae9b88c89805fb106aee0c1981f5a00e'
        }
    ]
  return (
    <View>
      <ScrollView style={styles.container}>
        {contacts.map(({uid, name, message, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userMessage}>{message}</Text>
                </View>
            </View>
        ))}
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
        backgroundColor: '#FFFFFF'
    },
    userCard:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical: 8
    },
    userImage:{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16
    },
    userName:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    },
    userMessage:{
        fontSize: 16,
        color: '#000000'
    }
})