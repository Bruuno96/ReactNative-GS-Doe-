import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: 300, marginBottom: 30, marginTop: 70}}>
        <Text style={{ color: 'white'}}>CADASTRO DE ONG'S </Text>
      </View>


        <TextInput
          style={styles.input}
          placeholder="Digite o Username"
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o CNPJ"
          secureTextEntry={true}
        />

        <TextInput
          style={styles.input}
          placeholder="Username"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />

        <TextInput
          style={styles.input}
          placeholder="Endereço completo (rua e nº)"
        />

        
        <TouchableOpacity 
            style={styles.bottom} 
            onPress={ () => {this.clicou()}}>
                  
          <Text style={styles.botaoText}>Cadastre-se</Text></TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  input:{
    marginBottom: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3

  },
  bottom: {
    width: 200,
    height: 45,
    backgroundColor: '#78308C',
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'

  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: ''
  }
});
