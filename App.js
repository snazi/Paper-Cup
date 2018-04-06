import React, { Component } from 'react';
import { Text,View } from 'react-native';
import Header from  './src/components/cusHeader';
import AlbumList from './src/components/AlbumList';

export default class PaperCup extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Paper Cup'}/>
        <AlbumList />
      </View>
      
    );
  }
}