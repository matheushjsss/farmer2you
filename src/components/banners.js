import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const Banners = () => {
  const banners = [
    { id: '1', image: require('../../assets/publis/baners/banner1.png') },
    { id: '2', image: require('../../assets/publis/baners/banner2.png') },
    { id: '3', image: require('../../assets/publis/baners/banner3.png') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ofertas e Promoções</Text>

      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        loop={true}
        autoplay={false}
        showsPagination={true}
        dotColor="rgba(255, 255, 255, 0.6)"
        activeDotColor="#FFF"
        nextButton={<Text style={styles.buttonText}>›</Text>}
        prevButton={<Text style={styles.buttonText}>‹</Text>}
      >
        {banners.map((banner) => (
          <View key={banner.id} style={styles.banner}>
            <ImageBackground
              source={banner.image}
              style={styles.image}
              imageStyle={{ borderRadius: 10 }}
            >
              {/* Aqui você pode adicionar outros conteúdos dentro do banner, se necessário */}
            </ImageBackground>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    height: 250, // Ajuste a altura do carrossel conforme necessário
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden', // Para bordas arredondadas
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Para cobrir a área do banner sem distorcer
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0,0,0,0.5)', // Fundo semitransparente para o botão
    borderRadius: 20,
  },
});

export default Banners;
