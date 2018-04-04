import React, { Component }  from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return(
        <Card>
            <CardSection>
                <Text>{props.albumProp.title}</Text>
            </CardSection>
            <CardSection>
                <Text>{props.albumProp.title}</Text>
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;