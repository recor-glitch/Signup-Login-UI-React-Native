import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Provider as PaperProvider} from 'react-native-paper';
import {logoutUser} from '../../Infrastructure/demo/Demo';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type props = NativeStackScreenProps<any>;

const Splash = ({navigation}: props) => {
  const handleLogout = async (): Promise<void> => {
    const res = await logoutUser();
    // console.log(res);
    if (res.status === 200) {
      navigation.navigate('login');
    }
  };
  return (
    <PaperProvider>
      <View style={styles.main}>
        <Text>Splash</Text>
        <Button onPress={handleLogout}>Log out</Button>
      </View>
    </PaperProvider>
  );
};

export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
