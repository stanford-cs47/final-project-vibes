import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import TasksWeeklyLunches from '../../Screens/TasksWeeklyLunches.js';
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

export default class FoodScreen extends React.Component {


    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Image source={require('../../Images/TaskCategoryIcons/foodIcon.png')}
                        style={{ height: height * 0.0367, width: width * 0.076, marginRight: '8%' }}
                        resizeMode='contain'/>
                    <Text style={FoodStyles.heading}>FOOD</Text>
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
      if(!this.props.navigation) {
        return;
      }
      this.setState({mood: this.props.navigation.state.params.mood});
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
            <View style={FoodStyles.tasksContainer}>
                <TouchableOpacity
                    style={[FoodStyles.task, { justifyContent: 'center', marginTop: 20/817 * height }]}
                    onPress={() => { this.props.navigation.navigate('TasksWeeklyLunches', {mood: mood});}}
                >
                    <Text style={{ left: width * 0.064, fontFamily: 'Lato-Regular', fontSize: width * 0.06 }}>Weekly Team Lunches!</Text>
                    <Text style={{ fontSize: width * 0.043, fontFamily: 'Lato-Italic', color: accentColor(mood), left: width * 0.065 }}>Expires Dec 19th, 2019</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const FoodStyles = StyleSheet.create({
    heading: {
        fontFamily: 'Lato-Black',
        fontSize: height * 0.035,
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
