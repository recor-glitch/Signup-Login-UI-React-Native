import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import getGoogleOAuthUrl from '../../../../Infrastructure/google/google';
import {SafeAreaView} from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('window');
type props = NativeStackScreenProps<any>;

const Welcome = ({navigation}: props) => {
  const [islogin, setIsLogin] = useState(false);

  const handleRegisterClick = (): void => {
    setIsLogin(false);
    setTimeout(() => {
      navigation.navigate('register');
    }, 1000);
  };
  const handleLoginClick = (): void => {
    setIsLogin(true);
    setTimeout(() => {
      navigation.navigate('login');
    }, 500);
  };

  return (
    <View style={styles.main}>
      <SafeAreaView>
        <ScrollView>
          <Image
            source={require('../../../../assets/welcome.png')}
            resizeMode="contain"
            style={{height: height * 0.5, width: '100%', marginVertical: 20}}
          />
          <View style={styles.second_container}>
            <View style={styles.text_container}>
              <Text style={styles.heading}>Discover your</Text>
              <Text style={styles.heading}>Dream job Here</Text>
              <Text
                style={[
                  styles.subheading,
                  {width: 300, textAlign: 'center', marginTop: 30},
                ]}>
                Explore all the most exiting jobs roles based on your interest
                and study major
              </Text>
            </View>
            <View style={styles.button_container}>
              <View
                style={[
                  styles.button,
                  islogin
                    ? {}
                    : {
                        backgroundColor: 'rgba(178,216,216,1)',
                        borderTopRightRadius: 15,
                        borderBottomRightRadius: 15,
                      },
                ]}>
                <TouchableOpacity onPress={handleRegisterClick}>
                  <Text
                    style={[
                      styles.button_text,
                      islogin
                        ? {}
                        : {
                            color: '#4d4d43',
                          },
                    ]}>
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.button,
                  islogin
                    ? {
                        backgroundColor: 'rgba(178,216,216,1)',
                        borderBottomLeftRadius: 15,
                        borderTopLeftRadius: 15,
                      }
                    : {},
                ]}>
                <TouchableOpacity onPress={handleLoginClick}>
                  <Text
                    style={[
                      styles.button_text,
                      islogin
                        ? {
                            color: '#4d4d43',
                          }
                        : {},
                    ]}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(178,216,216,0.5)',
  },
  image_container: {
    flex: 0.7,
    borderRadius: 10,
  },
  second_container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'rgba(14,17,17,1)',
  },
  subheading: {
    fontSize: 14,
    fontWeight: '400',
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 50,
    borderColor: '#fff',
    backgroundColor: 'rgba(224,48,30,1)',
    borderWidth: 3,
    borderRadius: 15,
    overflow: 'hidden',
    margin: 10,
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    marginVertical: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
