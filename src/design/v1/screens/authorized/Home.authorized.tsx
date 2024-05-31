import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '@hook/redux.hook';

const Home = () => {
  const _user = useAppSelector(state => state?.userInfo);
  console.log(_user);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
