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
    Button,
    AsyncStorage,
} from 'react-native';
import spotifollowTheme from '../assets/spotifollowTheme';


const { colors, sizing } = spotifollowTheme;


class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <SafeAreaView style={styles.container}>
        <StatusBar
            barStyle="light-content"
            backgroundColor={colors.black}
        />
      <View stlye={{
          width: '100%',

        }}>
        <Text style={[styles.title, {letterSpacing: 6, backgroundColor: colors.green,}]}>
          Favorites
        </Text>
      </View>
    </SafeAreaView>
  )

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: (Platform.OS === 'ios') ? 50 : 36,
        width: '100%',
    },
    inlineContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
    },
    block: {
        marginBottom: 16,
        backgroundColor: 'transparent'
    },
    header: {
        marginBottom: 16,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        fontSize: sizing.header,
        fontWeight: '300',
        color: colors.green,
        marginBottom: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: '300',
        lineHeight: 34,
        letterSpacing: 0.364,
        color: colors.white,
        textAlign: 'center',
        width: '100%',
        fontFamily: 'Montserrat Regular',
        padding: 24,
    },
    subHeader: {
      fontSize: 16,
      fontWeight: '300',
      lineHeight: 34,
      letterSpacing: 0.364,
      color: colors.white,
      textAlign: 'left',
      width: '100%',
      fontFamily: 'Montserrat Regular',
    },
    search: {
      padding: 24,
      paddingTop: '10%',
    },
    buttonView: {
      marginLeft: 6,
      backgroundColor: colors.green,
      padding: 8,
      borderRadius: 3,
    },
    body: {
        fontSize: sizing.content,
        fontWeight: '300',
        color: colors.white,
        marginBottom: 7
    },
    textInput: {
        height: 40,
        flex: 1,
        borderRadius: 3,
        backgroundColor: colors.white,
        padding: 8,
        color: colors.black,
        fontSize: sizing.content,
        fontFamily: 'Montserrat Bold',

    },
    textInputBig: {
        height: 80,
        flex: 1,
        borderRadius: 3,
        backgroundColor: colors.green,
        padding: 8,
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'normal',
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    row: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    button: {
      marginVertical: 8,
      width: '100%'
    }
})


export default Favorites;
