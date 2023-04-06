import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import SocialCard from '../components/SocialCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import getGoogleOAuth from '../../../Infrastructure/google/google';
import {loginUser} from '../../../Infrastructure/demo/Demo';

const {height, width} = Dimensions.get('window');
type props = NativeStackScreenProps<any>;

const Login = ({navigation}: props) => {
  const [visible, setVisible] = useState<Boolean>(false);
  const [pass, setPass] = useState<String>('');
  const [name, setName] = useState<String>('');

  const handleEyeClick = (): void => {
    setVisible(prev => !prev);
  };

  const handleUsername = (text: String): void => {
    setName(text);
  };
  const handlePassword = (text: String): void => {
    setPass(text);
  };

  const handleSubmit = async (): Promise<void> => {
    try {
      const res = await loginUser({name: name, pass: pass});
      navigation.replace('profile');
    } catch (e) {
      console.log('My error: ', e);
    }
    // navigation.replace('splash');
  };

  const handleRegisterClick = (): void => {
    navigation.push('register');
  };

  const handleGoogle = async () => {
    const user = await getGoogleOAuth();
    console.log(user);
  };

  const handleApple = (): void => {};
  const handleFacebook = (): void => {};

  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={[
            styles.container,
            {backgroundColor: 'rgba(178,216,216,0.5)'},
          ]}>
          <ScrollView>
            <View style={styles.welcomeTextAlignment}>
              <Text style={[styles.heading, {marginBottom: 15}]}>
                Hello Again!
              </Text>
              <Text style={styles.subheading}>Welcome back you've</Text>
              <Text style={[styles.subheading, {marginBottom: 20}]}>
                {' '}
                been missed!
              </Text>
            </View>
            <TextInput
              mode="outlined"
              outlineColor="#DDDDDD"
              placeholder="Enter username"
              style={styles.TextField}
              underlineColor="rgba(255,255,255,0)"
              onChange={event => {
                handleUsername(event.nativeEvent.text);
              }}
              // activeUnderlineColor="rgba(255,255,255,0)"
            />
            <TextInput
              onChange={event => {
                handlePassword(event.nativeEvent.text);
              }}
              mode="outlined"
              outlineColor="#DDDDDD"
              right={
                <TextInput.Icon
                  icon={visible ? 'eye-off' : 'eye'}
                  onPress={handleEyeClick}
                />
              }
              secureTextEntry={visible ? false : true}
              placeholder="password"
              style={styles.TextField}
              underlineColor="rgba(255,255,255,0)"
              // activeUnderlineColor="rgba(255,255,255,0)"
            />
            <View style={styles.forgetPass}>
              <Text style={{fontWeight: 'bold', color: '#4d4d43'}}>
                Forget password?
              </Text>
            </View>
            <View style={{flexGrow: 1}}>
              <Button
                style={styles.button}
                onPress={handleSubmit}
                mode="elevated">
                <Text
                  style={{
                    color: 'rgba(255,255,255,1)',
                    fontSize: 18,
                  }}>
                  Sign in
                </Text>
              </Button>
            </View>
            <View style={styles.divider_container}>
              <LinearGradient
                style={{
                  flexGrow: 1,
                  flexDirection: 'row',
                  borderRadius: 1,
                  marginHorizontal: 10,
                }}
                colors={['rgba(178,216,216,0.5)', 'rgba(119,119,119,0.6)']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <View style={styles.divider} />
              </LinearGradient>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#4d4d43',
                }}>
                Or continue with
              </Text>
              <LinearGradient
                style={{
                  flexGrow: 1,
                  flexDirection: 'row',
                  borderRadius: 1,
                  marginHorizontal: 10,
                }}
                colors={['rgba(119,119,119,0.6)', 'rgba(178,216,216,0.5)']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <View style={styles.divider} />
              </LinearGradient>
            </View>
            <View style={styles.social_list}>
              <SocialCard
                icon={
                  <Image
                    source={{
                      uri: 'https://www.pngrepo.com/png/355037/180/google.png',
                      height: 40,
                      width: 40,
                    }}
                  />
                }
                onclick={handleGoogle}
              />
              <SocialCard
                icon={
                  <Image
                    source={{
                      uri: 'https://www.pngrepo.com/png/7385/180/apple.png',
                      height: 40,
                      width: 40,
                    }}
                  />
                }
                onclick={handleApple}
              />
              <SocialCard
                icon={
                  <Image
                    source={{
                      uri: 'https://www.pngrepo.com/png/183607/180/facebook.png',
                      height: 40,
                      width: 40,
                    }}
                  />
                }
                onclick={handleFacebook}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginVertical: 20,
              }}>
              <Text style={{fontWeight: '500'}}>Not a member?</Text>
              <TouchableOpacity onPress={handleRegisterClick}>
                <Text style={{color: 'rgba(114,137,218,1)', fontWeight: '500'}}>
                  Register now
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  progressbar: {
    width: '100%',
    height: 3,
    backgroundColor: '#DDDDDD',
  },
  container: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    width: width,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  welcomeTextAlignment: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'rgba(14,17,17,1)',
  },
  subheading: {
    fontSize: 18,
    fontWeight: '500',
  },
  TextField: {
    width: '100%',
    marginVertical: 12,
    backgroundColor: 'rgba(255,255,255,1)',
    color: 'white',
  },
  forgetPass: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 20,
  },
  button: {
    backgroundColor: 'rgba(224,48,30,1)',
    paddingVertical: 10,
    marginVertical: 30,
    elevation: 5,
  },
  divider_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },
  divider: {
    height: 3,
  },
  social_list: {
    marginVertical: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
