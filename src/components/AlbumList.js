import React, { Component }  from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {

    componentWillMount(){
        console.log('hehehe component will mount');
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