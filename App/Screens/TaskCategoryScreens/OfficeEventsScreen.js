import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import TaskBday from '../../Screens/TaskBday.js';
var { height, width } = Dimensions.get('window');

var backgroundColor = (mood) => {
    if (mood == 'EXCITED') {
        return '#F291C7'
    } else if (mood == 'CONTENT') {
        return '#FCE781'
    } else if (mood == 'BORED') {
        return '#FEBB58'
    } else if (mood == 'STRESSED') {
        return '#8EDA80'
    } else {
        return '#95B3ED'
    }
}

var accentColor = (mood) => {
    if (mood == 'EXCITED') {
        return '#C50A7A'
    } else if (mood == 'CONTENT') {
        return '#E78B00'
    } else if (mood == 'BORED') {
        return '#DD5D00'
    } else if (mood == 'STRESSED') {
        return '#167904'
    } else {
        return '#003498'
    }
}

export default class OfficeEventsScreen extends React.Component {


    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Image source={require('../../Images/TaskCategoryIcons/eventIcon.png')}
                        style={{ height: height * 0.0367, width: width * 0.077, marginRight: '6%' }}
                        resizeMode='contain'/>
                    <Text style={OfficeEventsStyles.heading}>OFFICE EVENTS</Text>
                </View>
            ),
            headerTintColor: 'black',
            headerStyle: {
                backgroundColor: backgroundColor(mood),
                borderBottomWidth: 0,
                height: height * 0.07,
            }
        };
    };

    updateMood = () => {
        if (!this.props.navigation) {
            return;
        }
        this.setState({ mood: this.props.navigation.state.params.mood });
    }

    componentDidMount(){
      this.colorTimer = setInterval(() => (
        this.props.navigation.state.params.mood != accentColor(mood) ?
        this.updateMood() : ""
      ), 500);
    }

    componentWillUnmount() {
      clearInterval(this.colorTimer);
    }



    render() {
        return (
            <View style={OfficeEventsStyles.tasksContainer}>
                <TouchableOpacity
                    style={[OfficeEventsStyles.task, { justifyContent: 'center', marginTop: height * 0.024 }]}
                    onPress={() => { this.props.navigation.navigate('TaskBday', { mood: mood }); }}
                >
                    <Text style={{ left: width * 0.064, fontFamily: 'Lato-Regular', fontSize: height * 0.03}}>Misbah Bday Party</Text>
                    <Text style={{ fontSize: height * 0.02, fontFamily: 'Lato-Italic', color: accentColor(mood), left: width * 0.065 }}>Expires Dec 13, 2019</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const OfficeEventsStyles = StyleSheet.create({
    heading: {
        fontFamily: 'Lato-Black',
        fontSize: height * 0.03,
        textAlign: "center"
    },
    tasksContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    task: {
        width: width * 0.92,
        height: height * 0.109,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#BDBDBD',
        margin: width * 0.013
    },
})
