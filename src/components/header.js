import React from 'react';
import { StyleSheet, Text, View, Platform, Dimensions  } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="bars" size={30} color="rgb(128, 166, 46)" />
      <Text style={styles.title}>Farmer2You</Text>
      <FontAwesome name="bell" size={30} color="rgb(128, 166, 46)" />
    </View>
  );
 };
 
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'web' ? 0 : 30, // Ajusta a margem para Web e Mobile
    marginLeft: Platform.OS === 'web' ? 0 : 5, // Ajusta a margem lateral
    flexDirection: 'row', // Alinha os elementos horizontalmente
    alignItems: 'center', // Alinha verticalmente no centro
    justifyContent: 'space-between', // Ícones nas pontas e espaço no meio
    paddingHorizontal: 20, // Espaço lateral
    paddingVertical: 10, // Espaço superior/inferior
    backgroundColor: '#f8f8f8', // Cor de fundo
  },
  title: {
    position: 'absolute', // Mantém centralizado independente do tamanho dos ícones
    left: Dimensions.get('window').width / 2 - 55, // Centraliza horizontalmente
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(55, 78, 49)'
  },
 });
 export default Header;