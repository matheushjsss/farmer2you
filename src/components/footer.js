import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
   return (
      <View style={styles.container}>
         <FontAwesome name="home" style={styles.icon} />
         <FontAwesome name="search" style={styles.icon} />
         <FontAwesome name="shopping-cart" style={styles.icon} />
         <FontAwesome name="heart" style={styles.icon} />
         <FontAwesome name="user" style={styles.icon} />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      position: 'absolute', // Mant�m fixo na tela
      bottom: 0, // Sempre no final da tela
      width: '100%', // Ocupa toda a largura
      flexDirection: 'row', // �cones lado a lado
      justifyContent: 'space-around', // Espa�o igual entre os �cones
      alignItems: 'center', // Alinha verticalmente
      backgroundColor: '#f8f8f8', // Cor de fundo
      paddingVertical: 10, // Espa�amento interno
   },
   icon: {
      color: "rgb(55, 78, 49)",
      fontSize: 30,
   }
});
export default Footer;