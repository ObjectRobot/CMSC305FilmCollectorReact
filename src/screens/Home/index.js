import React from 'react';
import {View, Text, Pressable, SafeAreaView} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 0.0}} />
      <View style={styles.header}>
        <Text style={styles.title}>
          Welcome to FilmCollector
          <Text style={styles.description}>
            {'\n' + '\n'}FilmCollector is a cross platform mobile application built
            using React Native.
          </Text>
          <Text style={styles.description}>
            {'\n' + '\n'}It maintains its data using an SQLite database.
          </Text>
          <Text style={styles.description}>
            {'\n' + '\n'}It allows its users to add, view, update, and delete
            actors and films.
          </Text>
        </Text>
      </View>
      <View style={styles.bottom}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Enter FilmCollector!')}>
          <Text style={styles.buttonText}>Enter FilmCollector!</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;
