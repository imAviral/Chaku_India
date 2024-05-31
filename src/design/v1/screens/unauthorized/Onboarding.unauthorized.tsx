import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {unAuth_Global_Style} from '@global/styles.global';
import Background from '@component/atom/Background.atom';
import {globalColor} from '@global/colors.global';
import {scaleSize} from '@global/oldSize.global';
import {GLOBAL_FONT_SIZES, GLOBAL_FONT_WEIGHT} from '@global/fonts.global';
import {GLOBAL_TYPOGRAPHY} from '@global/typography.global';
import Btn from '@component/atom/Btn.atom';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '@hook/redux.hook';
import {completeOnBoarding} from '@db/features/app.feature';

const Onboarding = () => {
  const dispatch = useAppDispatch();
  const navigation: any = useNavigation();
  const handleStatus = () => {
    dispatch(completeOnBoarding(true));
    navigation.replace('login');
  };
  return (
    <View style={unAuth_Global_Style.mainContainer}>
      <Background source={require('../../../../assets/images/main.png')}>
        <Background
          source={require('../../../../assets/images/Slice-Unback.png')}>
          <View style={unAuth_Global_Style.overlay}>
            <Text children={'Let’s\nSharpen'} style={styles.headingText} />
            <Text
              children="Best Knife Sharpening Service"
              style={styles.subHeadingText}
            />
            <Btn action={handleStatus} title="Start Now" />
          </View>
        </Background>
      </Background>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  headingText: {
    color: globalColor.white,
    textAlign: 'center',
    fontSize: GLOBAL_FONT_SIZES.size_56,
    fontWeight: GLOBAL_FONT_WEIGHT.weight_9,
    fontFamily: GLOBAL_TYPOGRAPHY.fontReg,
    lineHeight: scaleSize(67.2),
  },
  subHeadingText: {
    color: globalColor.white,
    textAlign: 'center',
    fontSize: GLOBAL_FONT_SIZES.size_16,
    fontWeight: GLOBAL_FONT_WEIGHT.weight_4,
    fontFamily: GLOBAL_TYPOGRAPHY.fontReg,
    lineHeight: scaleSize(22.4),
    paddingVertical: scaleSize(28),
  },
});
