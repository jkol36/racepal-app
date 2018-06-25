// @flow
import autobind from "autobind-decorator";
import * as React from "react";
import {View, StyleSheet, Dimensions, TouchableOpacity, Image, Animated} from "react-native";
import { SystemMatchComponent } from './systemMatchComponent'
import { Icon, ListItem, List, Card } from 'react-native-elements'
import {Constants} from "expo";

import {Text, Theme} from "../../components";
import type, {NavigationProps} from "../../components/Types";
import {Header} from '../../components'
import { Dropdown } from 'react-native-material-dropdown'


const dropdownOptions = [{
    value:'System 1'
},{value:'System 2'}, 
{value: 'System 3'}]


const MatchComponent = (props) => {
    console.log('match component got props', props)
    return (
        <ListItem key={props.id} leftIcon={{name:'av-timer'}} title={'test'} />
    )
}

const RightIcon = (props) => {
    return (
        <View>
            <Icon name={'star'} color='black' />
            <Icon name={'bookmark'} color='#ddd' />
        </View>
     )
}

const list = [
    {
        country: 'IPSWICH',
        raceNumber: '2',
        time: '2:34pm',
        date: '07/03/2018',
        name:'DAMN FINE',
        jockey:'J Byrne',
        Owner: 'Mathew Dunn',
        id:1
    },
    {
        country: 'IPSWICH',
        raceNumber: '2',
        time: '2:34pm',
        date: '07/03/2018',
        name:'DAMN FINE',
        jockey:'J Byrne',
        Owner: 'Mathew Dunn',
        id:1
    },
    {
        country: 'IPSWICH',
        raceNumber: '2',
        time: '2:34pm',
        date: '07/03/2018',
        name:'DAMN FINE',
        jockey:'J Byrne',
        Owner: 'Mathew Dunn',
        id:1
    },
    {
        country: 'IPSWICH',
        raceNumber: '2',
        time: '2:34pm',
        date: '07/03/2018',
        name:'DAMN FINE',
        jockey:'J Byrne',
        Owner: 'Mathew Dunn',
        id:1
    }
]
// const list = [
//   {
//     title: 'Appointments',
//     icon: 'av-timer'
//   },
//   {
//     title: 'Trips',
//     icon: 'flight-takeoff'
//   },
// ]
export default class MySystems extends React.Component<NavigationProps<*>> {
    
    static navigationOptions = {
        headerStyle: {
          backgroundColor: 'white'
        },
        headerTintColor: '#fff',
        headerTitle: <Header title='RacePal' />,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily:'SFProText-Light'
        },
        headerLeft:null
      };

    constructor(props) {
        super(props)
        this.state = {
            systemMatched: false,
            matches:[]
        }
    }

    componentWillMount() {
        console.log('my systems mounting')
    }

    @autobind
    loadMore() {
        this.props.userFeedStore.loadFeed();
    }

    render(): React.Node {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.systemRow}>
                    <Icon 
                        name='add-circle-outline'
                        color='#fff'
                        size={35}
                        onPress={() => this.setState({addSystemOverlayVisible: !this.state.addSystemOverlayVisible})}
                        containerStyle={{backgroundColor:'blue', left:8, top:5, width:50, height:50, marginLeft:10, borderRadius:20}}
                     />
                     <Icon 
                        name='mode-edit'
                        color='#fff'
                        size={35}
                        containerStyle={{backgroundColor:'orange', left:8, top:5, width:50, height:50, marginLeft:10, borderRadius:20}}
                     />
                     <Icon 
                        name='search'
                        color='#fff'
                        size={35}
                        containerStyle={{backgroundColor:'green', left:8, top:5, width:50, height:50, marginLeft:10, borderRadius:20}}
                     />
                    <Dropdown 
                        data={dropdownOptions}
                        label='Select System' 
                        containerStyle={{width:150, left:40}}
                        onChangeText={(val) => this.setState({systemMatched:true})}
                     />
                </View>
                {this.state.systemMatched ? 
                    <SystemMatchComponent 
                        horseCount={4} 
                        meetingCount={5} 
                        raceCount={4}
                    />:null
                }
                {this.state.systemMatched ?
                   <List containerStyle={{marginTop:200, zIndex:100, right:100, width:200, height:90}}>
                  {
                    list.map((item, i) => (
                      <ListItem
                        key={i}
                        title={`${item.country} - Race ${item.raceCount}`}
                        rightTitle={`${item.jockey}, ${item.Owner}`}
                        rightTitleNumberOfLines={4}
                        rightIcon={<RightIcon />}
                        subtitle={`${item.time},${item.date}`}
                        containerStyle={{width:Dimensions.get('window').width, left:-70}}
                        textInput={true}
                      />
                    ))
                  }
                </List>:null
                }
                
                

            </View> 
        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height-100,
        flexDirection: 'row',
        flexGrow: 1,
        backgroundColor:'#fff'
    },
    systemRow: {
        flex:1,
        flexDirection: 'row',
        flexGrow:1,
        height: 35
    },

    title: {
        position: "absolute",
        left: Theme.spacing.small,
        bottom: 50 + Theme.spacing.small
    },
    outline: {
        color: "rgba(255, 255, 255, 0.8)"
    },
    name: {
        color: "white"
    },
    list: {
        marginTop:0,
         borderTopWidth: 1, 
         right:200,
         borderBottomWidth: 1, 
         borderBottomColor: 'black',
         
    }
});
