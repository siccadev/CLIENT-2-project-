import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Border, Color, FontSize, FontFamily } from '../GlobalStyles'; // Assuming these styles are defined elsewhere

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.rectangle} />
      </View>
      <Image
        style={styles.image}
        source={require('../assets/57faa2946ebd7b68913d9f350b81991d-1.png')}
      />
      <Text style={styles.welcomeText}>
        Bienvenue sur notre application ! Scannez facilement vos documents avec
        la caméra de votre smartphone et convertissez-les instantanément en PDF
        de haute qualité
      </Text>
      <View style={styles.lifeContainer}>
        <Text style={styles.lifeText}>
          Life is short and the world is{' '}
          <Text style={styles.wideText}>wide</Text>
        </Text>
        <Image
          style={styles.lifeImage}
          source={require('../assets/vector-2524.png')}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Commencer pressed')}>
        <Text style={styles.buttonText}>Commencer</Text>
      </TouchableOpacity>
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
  innerContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 335,
    height: 56,
    backgroundColor: Color.colorDarkgoldenrod,
    borderRadius: Border.br_base,
  },
  rectangle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 335,
    height: 56,
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 20,
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    fontFamily: FontFamily.amikoRegular,
    color: Color.colorBlack,
    textAlign: 'center',
    marginBottom: 20,
  },
  lifeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  lifeText: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '900',
    fontFamily: FontFamily.geometr415BlkBT,
    color: Color.colorBlack,
  },
  wideText: {
    color: Color.colorDarkorange,
  },
  lifeImage: {
    width: 63,
    height: 11,
    marginLeft: 10,
  },
  button: {
    backgroundColor: Color.colorDarkorange,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    color: Color.shadesWhite,
    textAlign: 'center',
  },
});

export default OnboardingScreen;
