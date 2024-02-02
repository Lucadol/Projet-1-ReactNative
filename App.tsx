import { View, Text, SafeAreaView, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'
import Header from './components/Header'
import TitleSection from './components/TitleSection'
import MessageSection from './components/MessageSection'

const App = () => {
  const [currentPage, setCurrentPage] = useState('Page1')

  // Fonction pour changer de page
  const goToPage2 = () => {
    setCurrentPage('Page2')
  }

  const goToPage1 = () => {
    setCurrentPage('Page1')
  }

  return (
    <SafeAreaView>
      <ScrollView>
      {currentPage === 'Page1' ? (
          <View>
            <FlatCards />
            <ElevatedCards />
            <FancyCard />
            <ContactList />
            <ActionCard />
            <Button title="Go to Page 2" onPress={goToPage2} />
          </View>
        ) : (
          <View style={styles.secondPage}>
             <Header />
             <TitleSection />
             <MessageSection />
             <Button title="Go to Page 1" onPress={goToPage1} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = {
  secondPage: {
    // backgroundColor: '#F0F0F0'
  }
}

export default App