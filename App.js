import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({data: json}, () => console.log(json)))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.getData()}>
          <Text>Klik Get Data</Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => (
            <View style={{marginTop: 10}}>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default App;
