import React, { Component }  from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

    componentWillMount(){
        axios.get('https://plsworkgod.herokuapp.com/albums')
        .then(response => console.log(response));    
    }

    render(){
        return (
            <View>
                <Text>AlbumList!!!asas!!</Text>
            </View>
    
        );
    }
    
}
export default AlbumList;