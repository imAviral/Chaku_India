import {StyleSheet} from 'react-native';
import React from 'react';
import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

// DrawerWrapper component
const DrawerWrapper = ({children}: any) => {
  // Get the drawer progress value
  const progress = useDrawerProgress();

  // Create an animated style based on the drawer progress
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8], 'clamp');
    const rotateY = `${interpolate(
      progress.value,
      [0, 1],
      [0, 2],
      'clamp',
    )}deg`;
    const translateX = interpolate(progress.value, [0, 1], [0, 2], 'clamp');
    const borderRadius = interpolate(progress.value, [0, 1], [0, 20], 'clamp');

    return {
      transform: [{perspective: 1000}, {scale}, {rotateY}, {translateX}],
      borderRadius,
      overflow: 'hidden',
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DrawerWrapper;
