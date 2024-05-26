import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Border, FontFamily, Color, FontSize } from '../GlobalStyles'; // Assuming these styles are defined elsewhere

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/4adaee0ecdde0cd3ef4995fb04dfda7d-1.png')}
      />
      <View style={styles.overlay} />
      <Text style={styles.title}>Smart scan</Text>
      <Text style={styles.description}>
        Capturez, convertissez et gérez facilement vos factures avec Smart Scan.
        Prenez une photo, convertissez-la au format PDF et organisez tout en
        toute sécurité au même endroit.
      </Text>
      <Text style={styles.help}>Help</Text>
      <Image
        style={styles.cameraIcon}
        source={require('../assets/camera-light.png')}
      />
      <Text style={styles.takePhoto}>Prendre une photo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.shadesWhite,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 65,
    marginBottom: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: FontSize.size_13xl,
    color: '#ff9900',
    marginBottom: 10,
    fontFamily: FontFamily.jostRegular,
  },
  description: {
    fontSize: FontSize.size_lg,
    textAlign: 'center',
    fontFamily: FontFamily.jostRegular,
    marginBottom: 20,
  },
  help: {
    fontSize: FontSize.size_xl,
    color: Color.shadesWhite,
    marginBottom: 10,
    fontFamily: FontFamily.montserratRegular,
  },
  cameraIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  takePhoto: {
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
  },
});

export default HomeScreen;
