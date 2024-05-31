import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {btnInterface} from '@interface/btn.interface';
import {globalColor} from '@global/colors.global';
import {scaleSize} from '@global/oldSize.global';
import {GLOBAL_FONT_SIZES, GLOBAL_FONT_WEIGHT} from '@global/fonts.global';
import {GLOBAL_TYPOGRAPHY} from '@global/typography.global';

const Btn = ({title, isDisable, action}: btnInterface) => {
  return (
    <Pressable
      style={[
        styles.container,
        isDisable ? styles.disableBtn : styles.normalBtn,
      ]}
      onPress={action}
      disabled={isDisable}>
      <Text children={title ?? (title || '')} style={styles.txt} />
    </Pressable>
  );
};

export default Btn;

const styles = StyleSheet.create({
  container: {
    width: scaleSize(314),
    height: scaleSize(70),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scaleSize(30),
  },
  disableBtn: {
    backgroundColor: globalColor.grey,
  },
  normalBtn: {
    backgroundColor: globalColor.yellow,
  },
  txt: {
    color: globalColor.white,
    textAlign: 'center',
    fontSize: GLOBAL_FONT_SIZES.size_16,
    fontWeight: GLOBAL_FONT_WEIGHT.font4,
    fontFamily: GLOBAL_TYPOGRAPHY.fontReg,
    lineHeight: scaleSize(22.4),
  },
});
