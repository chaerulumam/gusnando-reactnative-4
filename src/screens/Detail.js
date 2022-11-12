import React, {Component} from 'react';
import {Image, StatusBar, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Detail extends Component {
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
            <Icon
              name="chevron-left"
              size={25}
              color="#bdbd"
              onPress={() => this.props.navigation.pop()}
            />
          </TouchableOpacity>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Detail</Text>
          </View>
          <TouchableOpacity>
            <Icon name="search" size={25} color="#bdbd" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Image
              source={{uri: this.props.route.params.image}}
              style={{width: 250, height: 250, borderRadius: 10}}
            />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {this.props.route.params.title}
            </Text>
            <Text style={{marginTop: 20}}>{this.props.route.params.body}</Text>
          </View>
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

export default Detail;
