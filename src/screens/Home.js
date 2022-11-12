import React, {Component} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FlatGrid} from 'react-native-super-grid';
import Product from '../img/man-1.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={({item}) => (
              <View
                style={{
                  backgroundColor: '#fff',
                  elevation: 20,
                  flexDirection: 'row',
                }}>
                <Image source={Product} style={{width: 100, height: 100}} />
                <View style={{justifyContent: 'center', marginLeft: 20}}>
                  <Text>{item}</Text>
                  <Text>{item}</Text>
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
