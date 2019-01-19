import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Platform,
    StatusBar,
    Alert,
    Modal,
} from 'react-native';
import spotifollowTheme from '../assets/spotifollowTheme';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const { colors, sizing } = spotifollowTheme;

class ArtistCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
    }
  }

  render() {
    return(
      <Card
        title='Colin Babineau'
        titleStyle={styles.cardTitle}
        containerStyle={styles.cardContainer}
        image={require('../assets/images/adolescence.jpg')}>
        <Text style={{marginBottom: 10}}>
          A musician from Moncton, NB
        </Text>
        <Button
          backgroundColor={colors.green}
          color={colors.green}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: colors.green}}
          title={this.props.favorite ? 'Unfollow' : 'Follow'} />
      </Card>

    )
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: colors.white,
        marginBottom: 8,
        padding: 8,
        width: '100%',
    },
    image: {
      minWidth: '50%',
      backgroundColor: colors.green,
    },
    artistInfo: {
      maxWidth: '50%',
      backgroundColor: colors.white,
    },
    cardTitle: {
      fontSize: 24,
      fontFamily: 'Montserrat Regular',
      textAlign: 'left',
      paddingLeft: 12,
      color: '#5e605f',
    },
    cardContainer: {
      borderRadius: 5,
    }
});

export default ArtistCard;
