import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Provider as PaperProvider, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createUserWithEmailAndPass} from '../../../Infrastructure/demo/Demo';

const {height, width} = Dimensions.get('window');
type props = NativeStackScreenProps<any>;

const Register = ({navigation, route}: props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const handleLoginClick = () => {
    navigation.navigate('login');
  };

  const handleEmail = (email: string): void => {
    setEmail(email);
  };

  const handlePassword = (password: string): void => {
    setPass(password);
  };

  const handleName = (username: string): void => {
    setName(username);
  };

  const handleVisibility = () => {
    setVisible(prev => !prev);
  };

  const handleSubmit = async (): Promise<void> => {
    if (name != '' && pass != '' && email != '') {
      const res = await createUserWithEmailAndPass({
        name: name,
        password: pass,
        email: email,
      });
      if (res.status === 200) navigation.navigate('splash');
      else console.log('Something went wrong.');
    }
  };

  return (
    <PaperProvider>
      <View style={styles.main}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.content}>
              <Image
                source={require('../../../assets/3d.png')}
                resizeMode="contain"
                style={{height: height * 0.4, width: width, marginVertical: 20}}
              />
              <Text style={styles.text_heading}>Sign Up</Text>
              <TextInput
                left={<TextInput.Icon icon={'email'} />}
                onChange={event => {
                  handleEmail(event.nativeEvent.text);
                }}
                outlineColor="#DDDDDD"
                placeholder="example@gmail.com"
                style={styles.textField}
                underlineColor="rgba(255,255,255,0)"
                activeUnderlineColor="rgba(255,255,255,1)"
              />
              <TextInput
                left={<TextInput.Icon icon={'account'} />}
                onChange={event => {
                  handleName(event.nativeEvent.text);
                }}
                outlineColor="#DDDDDD"
                placeholder="user name"
                style={styles.textField}
                underlineColor="rgba(255,255,255,0)"
                activeUnderlineColor="rgba(255,255,255,1)"
              />
              <TextInput
                right={
                  <TextInput.Icon
                    icon={visible ? 'eye-off' : 'eye'}
                    onPress={handleVisibility}
                  />
                }
                onChange={event => {
                  handlePassword(event.nativeEvent.text);
                }}
                outlineColor="#DDDDDD"
                placeholder="password"
                secureTextEntry={visible ? false : true}
                style={styles.textField}
                underlineColor="rgba(255,255,255,0)"
                activeUnderlineColor="rgba(255,255,255,1)"
              />
              <Text style={styles.terms}>
                By signing in up, you're agree to our Terms & Conditions and
                Privacy Policy
              </Text>
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
                    Continue
                  </Text>
                </Button>
              </View>
              <View style={styles.text_container}>
                <Text style={styles.simple_text}>Joined us before?</Text>
                <TouchableOpacity onPress={handleLoginClick}>
                  <Text style={styles.hyper_text}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </PaperProvider>
  );
};

export default Register;

const styles = StyleSheet.create({
  text_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  simple_text: {},
  hyper_text: {
    color: 'rgba(0,0,255,1)',
  },
  main: {
    flex: 1,
    backgroundColor: 'rgba(178,216,216,0.5)',
  },
  image_container: {
    minHeight: 400,
    width: width,
  },
  text_heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4d4d43',
    marginVertical: 10,
  },
  content: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  textField: {
    backgroundColor: 'rgba(178,216,216,0.6)',
    marginVertical: 10,
  },
  terms: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 30,
  },
  button: {
    backgroundColor: 'rgba(224,48,30,1)',
    paddingVertical: 10,
    marginVertical: 30,
  },
});
