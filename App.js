import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './src/components/header';
import Footer from './src/components/footer';
import Banners from './src/components/banners'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        
        <ScrollView contentContainerStyle={styles.content}>
          <Banners></Banners>
          <Text style={styles.text}>Conte�do da tela...</Text>
        </ScrollView>

        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
  },
  content: {
    flexGrow: 1, // Faz o conte�do rolar corretamente
    paddingBottom: 60, // Espa�o para n�o cobrir o conte�do com o Footer
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

