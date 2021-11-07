import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, NavigationContainer, FlatList} from 'react-native';

const DATA = [
  {
    id: 'id-empresa',
    title: 'Produto',
  }
];


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App() {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <ScrollView style={styles.container}>

    <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
      

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    },
  item: {
    backgroundColor: 'blue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  }
});
