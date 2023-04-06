import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

type props = {
  icon: React.ReactNode;
  onclick: Function;
};

const SocialCard: React.FC<props> = ({icon, onclick}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          onclick();
        }}>
        <View style={styles.inner_container}>{icon}</View>
      </TouchableOpacity>
    </View>
  );
};

export default SocialCard;

const styles = StyleSheet.create({
  main: {
    elevation: 3,
    minHeight: 50,
    minWidth: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  inner_container: {
    backgroundColor: 'rgba(178,216,216,0.5)',
    padding: 10,
    borderRadius: 5,
  },
});
