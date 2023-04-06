import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type props = {
  attribute: String;
  value: String;
  icon: React.ReactNode;
};

const CustomListTile: React.FC<props> = (data: props) => {
  return (
    <View style={styles.main}>
      {data.icon}
      <View style={styles.attribute_container}>
        <Text style={styles.header}>{data.attribute}</Text>
        <Text style={styles.subtitle}>{data.value}</Text>
      </View>
      <View />
    </View>
  );
};

export default CustomListTile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  attribute_container: {
    flexDirection: 'column',
    marginLeft: 30,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4d4d43',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555555',
  },
});
