import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useFade} from '../hooks/useFade';

export const Fade = () => {
  const {opacity, fadeIn, fadeOut} = useFade();

  return (
    <View style={styles.fadeContainer}>
      <Animated.View style={{...styles.fade, opacity}}></Animated.View>
      <Button title="Fade In" onPress={fadeIn} />
      <Button title="Fade Out" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  fadeContainer: {
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fade: {
    backgroundColor: '#084f6a',
    width: 150,
    height: 150,
    borderColor: 'white',
    borderWidth: 10,
  },
});
