import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FriendsContext } from './FriendsContext';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>You have { this.context.currentFriends.length } (undefined) friends.</Text>

        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
      </View>
    );
  }
}
HomeScreen.contextType = FriendsContext;

export default HomeScreen;