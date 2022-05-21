import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import api from './src/Services/api';
import Autores from './src/Livros/Index';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      autores: []
    }
  }

  async componentDidMount() {
    const response = await api.get('/cars')
    this.setState({
      autores: response.data,
      teste: console.log(response.data)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.autores}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Autores data={item} />}
        />
      </View>
    );
  }


}//fim da classe

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
