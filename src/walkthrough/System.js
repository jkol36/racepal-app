// @flow
import * as React from "react";
import {
  StyleSheet, 
  View, 
  Platform, 
  TextInput,
  Switch,
  Slider,
  Picker,
  PickerIOS
} from "react-native";
import autobind from "autobind-decorator"

import {AnimatedView} from "../components";

import type {BaseProps} from "../components/Types";

import { FormLabel, CheckBox, FormInput, Icon, Button, Divider } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown';

type NoProps = {};
type VisibleState = {
    visible: boolean
};



export default class SystemWalkThrough extends React.Component {

  constructor(props) {
    super(props)
    this.state ={
      filterName: '',
      showOptions:false,
      raceFilter: '',
      raceDistance: null,
      maleChecked:false
    }
  }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    @autobind
    handleNameChange(e) {
      this.setState({
        filterName: e
      })
    }

    componentWillMount() {
      console.log('text input', TextInput)
        this.setState({ visible: true });
    }

    render(): React.Node {
      console.log(this.state.raceFilter)
        const {visible} = this.state;
        const valueLookup = {
          'Race Distance': [{value:'Is Equal To'}, {value:'Is Less Than or Equal To'}, {value:'Is greater than Equal To'}],
          'Barrier Draw': [{value:'Is Equal To'}, {value:'Is Less Than or Equal To'}, {value:'Is greater than Equal To'}, {value:'Is Between'}],
          'Race Starters': [{value:'Is Equal To'}, {value:'Is Less Than or Equal To'}, {value:'Is greater than Equal To'}],
          'Track Condition': [{value: 'Is Equal To'}, {value:'Is Not Equal To'}],
          'Sex Restrictions': [{value: 'Male'}, {value: 'Female'}],
          'Distance from last race is up': [{value: 'Yes'}, {value: 'No'}],
          'Distance from last race is down': [{value: 'Yes'}, {value: 'No'}],
          'Distance from last race is equal': [{value: 'Yes'}, {value: 'No'}],
          'Distance from last race is up': [{value: 'Yes'}, {value: 'No'}],
          'Weight from last race is up': [{value: 'Yes'}, {value: 'No'}],
          'Weight from last race is down': [{value: 'Yes'}, {value: 'No'}],
          'Distance from last race is equal': [{value: 'Yes'}, {value:'No'}],
          'Won over the distance': [{value: 'Yes'}, {value:'No'}],
          'Won at the track': [{value: 'Yes'}, {value:'No'}],
          'Placed over the distance': [{value: 'Yes'}, {value:'No'}],
          'Distance from last race is equal': [{value: 'Yes'}, {value:'No'}],
          'Distance from last race is equal': [{value: 'Yes'}, {value:'No'}],
          'Won at the track': [{value: 'Yes'}, {value:'No'}],
          'Placed at the track': [{value: 'Yes'}, {value:'No'}],
          'Distance from last race is equal': [{value: 'Yes'}, {value:'No'}],
          'Start this preparation': [{value:'Is Equal To'}, {value:'Is Less Than or Equal To'}, {value:'Is greater than Equal To'}, {value: 'Is Between'}],
          'Has won this current preparation': [{value: 'Yes'}, {value:'No'}],
          'Has placed this current preparation': [{value: 'Yes'}, {value:'No'}],
          'Career Starts': [{value:'Is Equal To'}, {value:'Is Less Than or Equal To'}, {value:'Is greater than Equal To'}, {value: 'Is Between'}],
          'Career Place %': [{value:'Is Equal To'}, {value:'Is Less Than or Equal To'}, {value:'Is greater than Equal To'}, {value: 'Is Between'}],
          'Horses Age': [{value:'Is Equal To'}, {value:'Is Less Than or Equal To'}, {value:'Is greater than Equal To'}],
          'Horses Gender': [{value: 'Male'}, {value: 'Female'}],
          'Starts At Track': [{value:'Is Equal To'}, {value:'Is Less Than or Equal To'}, {value:'Is greater than Equal To'}, {value: 'Is Between'}],
          'Win % at Track': [{value:'Is Equal To'}, {value:'Is Less Than or Equal To'}, {value:'Is greater than Equal To'}, {value: 'Is Between'}],
          'Place % at Track': [{value:'Is Equal To'}, {value:'Is Less Than or Equal To'}, {value:'Is greater than Equal To'}, {value: 'Is Between'}],
          'Starts At Distance': [{value:'Is Equal To'}, {value:'Is Less Than or Equal To'}, {value:'Is greater than Equal To'}, {value: 'Is Between'}],
          'Starts at Track/Distance': [{value:'Is Equal To'}, {value:'Is Less Than or Equal To'}, {value:'Is greater than Equal To'}, {value: 'Is Between'}],
          'Win % at Distance': [{value:'Is Equal To'}, {value:'Is Less Than or Equal To'}, {value:'Is greater than Equal To'}, {value: 'Is Between'}],
          'Place % at Distance': [{value:'Is Equal To'}, {value:'Is Less Than or Equal To'}, {value:'Is greater than Equal To'}, {value: 'Is Between'}],




        }
        const trackConditions = [
        {
          value: 'Firm'
        },
        {
          value: 'Good'
        },
        {value: 'Soft'}, 
        {value: 'Heavy'}
        ]
        const startDistances = [{ value: 0 },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        { value: 10 },]
        const tracks = [{ value: 0 },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        { value: 10 },]
        const horseAges = [{
          value:2
        },{
          value:3
        },{
          value:4
        },{
          value:5
        },{
          value:6
        }]
        const barrierDraws = [
        { value: 0 },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        { value: 10 },
        { value: 11 },
        { value: 12 },
        { value: 13 },
        { value: 14 },
        { value: 15 },
        { value: 16 },
        { value: 17 },
        { value: 18 },
        { value: 19 },
        { value: 20 }]

        const raceDistances = [
        { value: 800 },
        { value: 850 },
        { value: 900 },
        { value: 950 },
        { value: 1000 },
        { value: 1050 },
        { value: 1100 },
        { value: 1150 },
        { value: 1200 },
        { value: 1250 },
        { value: 1300 },
        { value: 1350 },
        { value: 1400 },
        { value: 1450 },
        { value: 1500 },
        { value: 1550 },
        { value: 1600 },
        { value: 1650 },
        { value: 1700 },
        { value: 1750 },
        { value: 1800 },
        { value: 1850 },
        { value: 1900 },
        { value: 1950 },
        { value: 2000 },
        { value: 2050 },
        { value: 2100 },
        { value: 2150 },
        { value: 2200 },
        { value: 2250 },
        { value: 2300 },
        { value: 2350 },
        { value: 2400 },
        { value: 2450 },
        { value: 2500 }]
        const raceStarters = [
        { value: 0 },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        { value: 10 }]
        const racePreparations = [
        { value: 0 },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        { value: 10 }]
        const careerValues = [
          { value: 1 },
          { value: 5 },
          { value: 10 },
          { value: 15 },
          { value: 20 },
          { value: 25 },
          { value: 30 },
          { value: 35 },
          { value: 40 },
          { value: 45 },
          { value: 50 }
          ]
        const percentages = [
        { value: 0 },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        { value: 10 },
        { value: 11 },
        { value: 12 },
        { value: 13 },
        { value: 14 },
        { value: 15 },
        { value: 16 },
        { value: 17 },
        { value: 18 },
        { value: 19 },
        { value: 20 },
        { value: 21 },
        { value: 22 },
        { value: 23 },
        { value: 24 },
        { value: 25 },
        { value: 26 },
        { value: 27 },
        { value: 28 },
        { value: 29 },
        { value: 30 },
        { value: 31 },
        { value: 32 },
        { value: 33 },
        { value: 34 },
        { value: 35 },
        { value: 36 },
        { value: 37 },
        { value: 38 },
        { value: 39 },
        { value: 40 },
        { value: 41 },
        { value: 42 },
        { value: 43 },
        { value: 44 },
        { value: 45 },
        { value: 46 },
        { value: 47 },
        { value: 48 },
        { value: 49 },
        { value: 50 },
        { value: 51 },
        { value: 52 },
        { value: 53 },
        { value: 54 },
        { value: 55 },
        { value: 56 },
        { value: 57 },
        { value: 58 },
        { value: 59 },
        { value: 60 },
        { value: 61 },
        { value: 62 },
        { value: 63 },
        { value: 64 },
        { value: 65 },
        { value: 66 },
        { value: 67 },
        { value: 68 },
        { value: 69 },
        { value: 70 },
        { value: 71 },
        { value: 72 },
        { value: 73 },
        { value: 74 },
        { value: 75 },
        { value: 76 },
        { value: 77 },
        { value: 78 },
        { value: 79 },
        { value: 80 },
        { value: 81 },
        { value: 82 },
        { value: 83 },
        { value: 84 },
        { value: 85 },
        { value: 86 },
        { value: 87 },
        { value: 88 },
        { value: 89 },
        { value: 90 },
        { value: 91 },
        { value: 92 },
        { value: 93 },
        { value: 94 },
        { value: 95 },
        { value: 96 },
        { value: 97 },
        { value: 98 },
        { value: 99 },
        { value: 100 }
        ]
        let data = [{
            value: 'Race Distance',
          }, {
            value: 'Race Starters',
          }, {
            value: 'Track Condition',
          },
          {value: 'Sex Restrictions'},
          {value:'Barrier Draw'},
          {value: 'Distance from last race is up'},
          {value: 'Distance from last race is down'},
          {value: 'Distance from last race is up'},
          {value: 'Distance from last race is equal'},
          {value: 'Weight from last race is up'},
          {value: 'Weight from last race is down'},
          {value: 'Distance from last race is equal'},
          {value: 'Won over the distance'},
          {value: 'Won at the track'},
          {value: 'Placed at the track'},
          {value: 'Start this preparation'},
          {value: 'Has won this current preparation'},
          {value: 'Has placed this current preparation'},
          {value: 'Career Starts'},
          {value: 'Career Place %'},
          {value: 'Horses Age'},
          {value: 'Horses Gender'},
          {value: 'Horses sire'},
          {value: 'Starts At Track'},
          {value: 'Starts At Distance'},
          {value: 'Starts at Track/Distance'},
          {value: 'Place % at Distance'},
          {value: 'Place % at Track'},
          {value: 'Starts on Firm Track'},
          {value: 'Starts on Good Track'},
          {value: 'Win % at Track'},
          {value: 'Win % at Good Track'},
          {value: 'Place % at Good Track'},
          {value: 'Starts on Soft Track'},
          {value: 'Place % at Soft Track'},
          {value: 'Starts on Heavy Track'},
          {value: 'Win % at Heavy Track'}, 
          {value: 'Place % at Heavy Track'},
          {value: 'Starts on Wet Track'},
          {value: 'Win % at Wet Track'}, 
          {value: 'Place % at Wet Track'},
          {value: 'Jockey is'}, 
          {value:'Trainer is'}
        ];
        if (!visible) {
            return <View />;
        }
        if(this.state.showOptions) {
          return (
            <AnimatedView style={styles.container}>
              <FormLabel>Name of filter</FormLabel>
              <FormInput onChangeText={this.handleNameChange}/>
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select an Option'
                data={data}
                onChangeText={(text) => this.setState({raceFilter:text})}
              />
              {this.state.raceFilter !== '' ?
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={valueLookup[this.state.raceFilter]}
              />: null}
              {this.state.raceFilter === 'Race Distance' ? 
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={raceDistances}
              />: null}
              {this.state.raceFilter === 'Race Starters' ? 
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={raceStarters}
              />: null}
              {this.state.raceFilter === 'Track Condition' ? 
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={trackConditions}
              />: null}
              {this.state.raceFilter === 'Barrier Draw' ?
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={barrierDraws}
              />: null}
              {this.state.raceFilter === 'Start this preparation' ?
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={racePreparations}
              />: null} 
              {this.state.raceFilter === 'Career Starts'  ?
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={careerValues}
              />: null}
              {this.state.raceFilter === 'Career Places'  ?
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={careerValues}
              />: null}
              {this.state.raceFilter === 'Career Wins'  ?
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={careerValues}
              />: null}
              {this.state.raceFilter === 'Career Place %'  ?
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={percentages}
              />: null} 
              {this.state.raceFilter === 'Horses Age'  ?
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={horseAges}
              />: null}
              {this.state.raceFilter === 'Starts At Track'  ?
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={tracks}
              />: null}
              {this.state.raceFilter === 'Win % at Track'  ?
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={percentages}
              />: null}
              {this.state.raceFilter === 'Place % at Track'  ?
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={percentages}
              />: null} 
              {this.state.raceFilter === 'Starts At Distance'  ?
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={startDistances}
              />: null}
              {this.state.raceFilter === 'Win % At Distance'  ?
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={percentages}
              />: null} 
              {this.state.raceFilter === 'Place % at Distance'  ?
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={percentages}
              />: null}
              {this.state.raceFilter === 'Starts at Track/Distance'  ?
              <Dropdown 
                dropdownPosition={1}
                dropdownMargins={{ min: 2, max:4 }}
                containerStyle={{width:200, marginLeft:20}}
                shadeOpacity={0.12}
                label='Select Value for this variable'
                data={startDistances}
              />: null}                      
            </AnimatedView>

          )
        }
        return (
            <AnimatedView style={styles.container}>
              <FormLabel>Name of filter</FormLabel>
              <FormInput onChangeText={this.handleNameChange}/>
              <Button raised transparent={true} color='#C22522' onPress={() => this.setState({showOptions:true})} title='Add variable' icon={{name:'plus', color:'red', type:'font-awesome'}}/>

            </AnimatedView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 300,
        marginTop:10,
        backgroundColor: 'white'
    },
    filterName: {
      color: 'white'
    },
    form: {
      color: 'white',
      backgroundColor: 'white'
    },
   
    
});
