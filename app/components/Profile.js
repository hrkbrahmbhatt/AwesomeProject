import React from 'react';

import { 
    StyleSheet, 
    Text, 
    View, 
    } from 'react-native';

export default class Profile extends React.Component {
    
  
    render() {
    return(
      
            <View style={styles.container}>

                <Text style={styles.header}>- Welcome to Your Profile -</Text>


            </View>

    );
  }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000',
    },
    
    text: {
        color: '#fff'
    }

});

