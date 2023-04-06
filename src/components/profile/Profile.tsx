import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomListTile from './component/CustomListTile';

const {height, width} = Dimensions.get('window');

const Profile = () => {
  return (
    <View style={styles.main}>
      <SafeAreaView>
        <ScrollView>
          <LinearGradient
            colors={['orange', 'yellow', 'orange']}
            start={{x: 0, y: 0}}
            end={{x: width, y: width}}>
            <View style={styles.header_container}>
              <View style={styles.profile_container}>
                <ImageBackground
                  source={require('../../assets/person.png')}
                  style={{
                    minHeight: '45%',
                    minWidth: '40%',
                  }}
                />
              </View>
              <Text style={styles.profile_header}>@appindevmode</Text>
              <Text style={styles.profile_subtitle}>
                developer.appindevmode.com
              </Text>
            </View>
          </LinearGradient>
          <View
            style={[
              styles.floating_container,
              {transform: [{translateY: -30}]},
            ]}>
            <View style={styles.back_arrow}>
              <Icon name="arrow-back" size={30} />
            </View>
            <Text style={styles.profile_subtitle}>Go back to Home</Text>
            <View />
          </View>
          <View style={styles.attribute_container}>
            <Text
              style={[
                styles.profile_header,
                {
                  color: '#2c2f33',
                  fontWeight: '600',
                  fontSize: 24,
                  marginBottom: 10,
                },
              ]}>
              Account Info
            </Text>
            <CustomListTile
              icon={
                <Image
                  source={require('../../assets/icons/man.png')}
                  style={{height: 50, width: 50}}
                />
              }
              attribute="Your name"
              value="Rishi Sarmah"
            />
            <CustomListTile
              icon={
                <Image
                  source={require('../../assets/icons/email.png')}
                  style={{height: 50, width: 50}}
                />
              }
              attribute="Your email"
              value="user1@gmail.com"
            />
            <CustomListTile
              icon={
                <Image
                  source={require('../../assets/icons/call.png')}
                  style={{height: 50, width: 50}}
                />
              }
              attribute="Your number"
              value="+91 0000012345"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header_container: {
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile_container: {
    borderRadius: 100,
    backgroundColor: '#DDDDDD',
    elevation: 10,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profile_header: {
    margin: 10,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  profile_subtitle: {
    margin: 5,
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.6)',
  },
  floating_container: {
    flexDirection: 'row',
    width: width * 0.7,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    padding: 5,
    backgroundColor: 'rgba(224,48,30,1)',
    alignSelf: 'center',
  },
  back_arrow: {
    minHeight: 50,
    minWidth: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  attribute_container: {
    padding: 20,
    flexGrow: 1,
  },
});
