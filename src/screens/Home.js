import React, {Component} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FlatGrid} from 'react-native-super-grid';

class Home extends Component {
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
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        let data = [];
        for (let i = 0; i < 10; i++) {
          data.push(json[i]);
        }

        this.setState({data});
      });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View
          style={{
            backgroundColor: '#fff',
            paddingVertical: 20,
            elevation: 2,
            flexDirection: 'row',
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity>
            <Icon name="bars" size={25} color="#bdbd" />
          </TouchableOpacity>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Home</Text>
          </View>
          <TouchableOpacity>
            <Icon name="search" size={25} color="#bdbd" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <FlatGrid
            itemDimension={150}
            data={this.state.data}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  backgroundColor: '#fff',
                  elevation: 20,
                  height: 200,
                  marginTop: 10,
                  marginLeft: 10,
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={{uri: item.url}}
                    style={{width: 100, height: 100, borderRadius: 100}}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    marginLeft: 20,
                    flex: 1,
                    marginRight: 20,
                    marginBottom: 10,
                    marginTop: 10,
                  }}>
                  <Text style={{fontWeight: 'bold', marginBottom: 10}}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            paddingVertical: 20,
            elevation: 2,
            flexDirection: 'row',
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Icon name="home" size={25} color="#FF9800" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Album')}
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Icon name="folder-open" size={25} color="#bdbd" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Icon name="heart" size={25} color="#bdbd" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Icon name="user" size={25} color="#bdbd" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Icon name="cog" size={25} color="#bdbd" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
