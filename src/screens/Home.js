import React, {Component} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FlatGrid} from 'react-native-super-grid';
import Product from '../img/step1.png';

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
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({data: json}));
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
            itemDimension={300}
            data={this.state.data}
            renderItem={({item}) => (
              <View
                style={{
                  backgroundColor: '#fff',
                  elevation: 20,
                  flexDirection: 'row',
                  marginLeft: 10,
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={Product} style={{width: 100, height: 100}} />
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
                  <Text>{item.body.slice(0, 100)}</Text>
                </View>
              </View>
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
